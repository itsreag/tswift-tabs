import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  songs = [
    {
      title: "Beautiful Ghosts",
      subtitle: "01",
      img: "/assets/album-cover/1.jpeg",
      path: "/assets/song/01 Beautiful Ghosts (From the Motion.m4a"
    },{
      title: "Both Of Us (feat. Taylor Swift) (Music Explosion)",
      subtitle: "02",
      img: "/assets/album-cover/2.jpeg",
      path: "/assets/song/01 Both Of Us (feat. Taylor Swift) (Music Explosion).m4a"
    },{
      title: "Highway Don't Care (feat. Taylor Swift & Keith Urban)",
      subtitle: "03",
      img: "/assets/album-cover/3.jpeg",
      path: "/assets/song/01 Highway Don't Care (feat. Taylor Swift & Keith Urban) (Music Explosion).m4a"
    }
  ];
  songSelected:any;
  routes: any;
  constructor() { }
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
    this.routes.navigate(["pages/player",this.songSelected]);
  }
  logout(){
    this.routes.navigate(["/src/app/login-page"]);
  }

}
