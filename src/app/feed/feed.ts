import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Added
import { ServerProvider} from '../../providers/server';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.html',
  styleUrls: ['./feed.css']
})

export class FeedComponent{

  onScroll () {
      console.log('scrolled!!')
      this.getPosts();
  }
  public searchText : string;
  public posts: Array<any>;
  public likedPosts: Array<any>;
  page: number = 1;

  getPosts(){
      this.posts.push(
        {
         id:0,
         title:'Poste perigoso',
         image:'./assets/img/poste.jpeg',
         location:'./assets/img/poste.jpeg',
         description:'./assets/img/poste.jpeg',
         likes:11,
         commentnum:2,
         ranking:1,
         liked:true,
         date:'11/11/2018',
         hour:'16:11',
         showcomments:false,
         user:{
           name:'Funaaa',
           profilePicture:'./assets/img/avatar.png',
         },
         comment:{
          user:{name:'Gabriela',
          profilePicture:'./assets/img/avatar.png',
        },
          com:'hahahaha vish que coisa!',
        }},
      );
  }

    constructor(private _router: Router, public server: ServerProvider) {

      this.posts = [];
      this.likedPosts = [];

      this.posts.push(
        {
         id:0,
         title:'Toste perigoso',
         image:'./assets/img/poste.jpeg',
         location:'./assets/img/poste.jpeg',
         description:'./assets/img/poste.jpeg',
         likes:11,
         commentnum:2,
         ranking:1,
         liked:true,
         date:'11/11/2018',
         hour:'16:11',
         showcomments:false,
         user:{
           name:'Funaaa',
           profilePicture:'./assets/img/avatar.png',
         },
         comment:{
          user:{name:'Gabriela',
          profilePicture:'./assets/img/avatar.png',
        },
          com:'hahahaha vish que coisa!',
        }},
        {
          id:1,
          title:'Poste perigoso',
          image:'./assets/img/poste.jpeg',
          location:'ICC Norte',
          description:'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          showcomments:false,
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          },
           com:'hahahaha vish que coisa!',
         }},
         {
          id:2,
          title:'Poste perigoso',
          image:'./assets/img/poste.jpeg',
          location:'ICC Norte',
          description:'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          showcomments:false,
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          },
           com:'hahahaha vish que coisa!',
         }},
         {
          id:3,
          title:'Poste perigoso',
          image:'./assets/img/poste.jpeg',
          location:'ICC Norte',
          description:'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          showcomments:false,
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          },
           com:'hahahaha vish que coisa!',
         }},
         {
          id:4,
          title:'Poste perigoso',
          image:'./assets/img/poste.jpeg',
          location:'ICC Norte',
          description:'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          showcomments:false,
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          },
           com:'hahahaha vish que coisa!',
         }},
         {
          id:5,
          title:'Poste perigoso',
          image:'./assets/img/poste.jpeg',
          location:'ICC Norte',
          description:'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          showcomments:false,
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          },
           com:'hahahaha vish que coisa!',
         }},
         {
          id:6,
          title:'Poste perigoso',
          image:'./assets/img/poste.jpeg',
          location:'ICC Norte',
          description:'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          showcomments:false,
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          },
           com:'hahahaha vish que coisa!',
         }},
         {
          id:7,
          title:'Poste perigoso',
          image:'./assets/img/poste.jpeg',
          location:'ICC Norte',
          description:'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          showcomments:false,
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          },
           com:'hahahaha vish que coisa!',
         }},
         {
          id:8,
          title:'Poste perigoso',
          image:'./assets/img/poste.jpeg',
          location:'ICC Norte',
          description:'dsnj si dk dshbh sh h js dsbshubsuhbsdhisijsn ihsbhbsh sih ihs iha sihabihs ish s su sa hdsha sia d si',
          likes:11,
          commentnum:2,
          ranking:1,
          liked:true,
          date:'11/11/2018',
          hour:'16:11',
          showcomments:false,
          user:{
            name:'Funaaa',
            profilePicture:'./assets/img/avatar.png',
          },
          comment:{
           user:{name:'Gabriela',
           profilePicture:'./assets/img/avatar.png',
          },
           com:'hahahaha vish que coisa!',
         }},
        )
  }

  like(post){
   //Remove like
   if (this.likedPosts.indexOf(post.id)>-1){
     this.likedPosts.splice(this.likedPosts.indexOf(post.id),1);
     post.likes -= 1;
   }
   //Add like
   else{
     this.likedPosts.push(post.id);
     post.liked += 1;

     this.server.likeDemand(1,this.server.token).then(response => {
       console.log(response);
     }).catch(error => {
       console.log(error);
     });
   }
  }

}
