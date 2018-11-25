import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider} from '../../providers/server';

@Component({
  selector: 'app-solved',
  templateUrl: './solved.html',
  styleUrls: ['./solved.css']
})

export class SolvedComponent implements OnInit{
  
  @ViewChild('closeModalDangerButton') closeModalDangerButton: ElementRef;
  @ViewChild('closeModalChangeButton') closeModalChangeButton: ElementRef;

  public posts: any =[];
  public user: any =[];
  public id;
  public comment;
  email: any;
  password: any;
  pswconfirm: any;

  constructor(private _router: Router, public server: ServerProvider) {}

ngOnInit(){
  this.server.getSolvedDemands().then(response => {
    console.log(response);
    console.log(response.json());

    response = response.json();
    this.posts.push(response['dados']);
  }).catch(error => {
    console.log(error);
  });
}

like(post){  
  post.total_likes = Number(post.total_likes);
//Remove like
if (post.gave_like == "true"){
  this.server.unlikeDemand(this.server.token, post.demand_id).then(response => {
  console.log(response);
  post.total_likes -= 1;
  post.gave_like = "false";
  console.log(post.gave_like);
  }).catch(error => {
    console.log(error);
  });
}
//Add like
else{
  this.server.likeDemand(this.server.token,post.demand_id).then(response => {
    console.log(response);
    post.total_likes += 1;
    post.gave_like = "true";
    console.log(post.gave_like);
    console.log(post.total_likes);
  }).catch(error => {
    console.log(error);
  });
}
}

newComment(post, comment){
  //Add comment
    this.server.commentDemand(this.server.token,post.demand_id,comment).then(response => {
      console.log(response);
     // post.comments.length += 1;
     post.comments.push({name: this.server.user.name, image_profile: this.server.user.image_profile, comment: comment});
    }).catch(error => {
      console.log(error);
    });

    this.comment = "";
}
 
delComment(post){
  //Delete comment
    this.server.deleteComment(this.server.token,post.comment_id).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
}
 
report(post){
  this.server.reportDemand(this.server.token,this.id).then(response => {
    console.log(response);
    this.closeModalDangerButton.nativeElement.click();
  }).catch(error => {
    console.log(error);
  });
}

reportId(post){
  this.id = post.demand_id;
  console.log(this.id);
}

changeListener($event) : void {
  this.readThis($event.target);
}

readThis(inputValue: any): void {
  var file:File = inputValue.files[0];
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {
    this.user.image = myReader.result;
    console.log(this.user.image);
  }
  myReader.readAsDataURL(file);
}

updateInfo(user){
  this.user.email = user.email;
  this.user.password = user.password;
  this.server.updateInfo(this.server.token, this.user).then(response => {
    console.log(this.user);
  }).catch(error => {
    console.log(error);
  });
  if (user.password.length > 0){
  this.server.updatePsw(this.server.token, this.user).then(response => {
    console.log(response);
    this.closeModalChangeButton.nativeElement.click();
  }).catch(error => {
    console.log(error);
  })
}
}

delete(){
  this.server.deleteAccount(this.server.token).then(response => {
    console.log(response);
    this.closeModalChangeButton.nativeElement.click();
    this.logout();
  }).catch(error => {
    console.log(error);
  });
}

clearInputs() {
  this.email ="";
  this.password ="";
  this.pswconfirm = "";
 }

logout(){
  this.server.token = "";
  this._router.navigate(['/home']);
  console.log(this.server.token)
}
}