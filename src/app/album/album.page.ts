import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  songs = [
    {
      title: "The Archer",
      subtitle: "Lover",
      img: "/assets/album-cover/7.jpeg",
      path: "/assets/song/The Archer.m4a"
    },{
      title: "Betty",
      subtitle: "folklore",
      img: "/assets/album-cover/8.jpg",
      path: "/assets/song/14 betty.m4a"
    },{
      title: "Beautiful Ghosts",
      subtitle: "Singles",
      img: "/assets/gallery/197725.jpg",
      path: "/assets/song/01 Beautiful Ghosts (From the Motion.m4a"
    }
  ];
  songSelected:any;
  routes: any;
  constructor(
    public menuCtrl:MenuController,
    private router: Router,
    public route:Router
    ) {
   }
  slidesOptions = {
    slidesPerView: 1.5
  }
  ngOnInit() {
    this.songSelected="";
    console.log(this.songSelected);
  }
  selectedSong(title:string){
    // var index = this.songs.findIndex(x=>x.title==title);

    this.songSelected=title;
    this.route.navigate(["../player",this.songSelected]);
  }
  logout(){
    console.log("User Logout");
    this.router.navigate(["/login-page"]);
  }

}
