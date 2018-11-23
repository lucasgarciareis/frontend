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

  public posts: Array<any>;
  public id;

  email: any;
  password: any;
  pswconfirm: any;

  clearInputs() {
    this.email ="";
    this.password ="";
    this.pswconfirm = "";
   }
  
  constructor(private _router: Router, private server: ServerProvider) {
    
    this.posts = [];
}

ngOnInit(){
  this.server.getSolvedDemands().then(response => {
    console.log(response);
    console.log(response.json());

    response = response.json();
    this.posts = response['dados'];
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
      post.comments.length += 1;
    }).catch(error => {
      console.log(error);
    });
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

changeInfo(accessToken, image, email, password, pswconfirm){
   this.server.updateInfo(this.server.token,image, email, password, pswconfirm).then(response => {
     console.log(response);
   }).catch(error => {
     console.log(error);
   });
}
logout(){
  this.server.token = "";
  this._router.navigate(['/home']);
  console.log(this.server.token)
}
}