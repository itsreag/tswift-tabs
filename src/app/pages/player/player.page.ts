import { Component, OnInit, ViewChild } from '@angular/core';
import {IonRange} from "@ionic/angular";
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
  @ViewChild("range", { static: false })
  range!: IonRange;
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
  // Current song details
  currTitle:any;
  currSubtitle:any;
  currImage:any;

  // Progress bar value
  progress = 0;

  // Toggle for play/pause button
  isPlaying=false;

  //track ion-range touch
  isTouched=false;

  // ionrange texts
  currSecsText:any;
  durationText:any;

  // ionrange value;

  currRangeTime:any;
  maxRangeValue:any;

  // Up next songs
  upNextTitle:any;
  upNextSubtitle:any;
  upNextImg:any;

  currSong!: HTMLAudioElement;

  cmSong:any;

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.currSong);
    this.cmSong=this.route.snapshot.paramMap.get('song');
    this.currTitle=this.cmSong;

  }


  // locatesong(mysong:string){
  //   this.playSong(this.songs[index].title, this.songs[index].subtitle, this.songs[index].img, this.songs[index].path);
  // }

  playSong(title:string,subTitle:string,img:any,song:any){
    if(this.currSong!=null){
      this.currSong.pause();
      this.isPlaying=false;
    }

    this.currTitle = title;
    this.currSubtitle = subTitle;
    this.currImage=img;
    this.currSong=new Audio(song);

    this.currSong.play().then(()=>{
      this.durationText=this.sToTime(this.currSong.duration);
      this.maxRangeValue=Number(this.currSong.duration.toFixed(2).toString().substring(0,5));
      // var index = this.songs.findIndex(x=>x.title==this.currTitle);

      // if((index+1)==this.songs.length){
      //   this.upNextImg=this.songs[0].img;
      //   this.upNextSubtitle=this.songs[0].subtitle;
      //   this.upNextTitle=this.songs[0].title;
      // }else{
      //   this.upNextImg=this.songs[index+1].img;
      //   this.upNextSubtitle=this.songs[index+1].subtitle;
      //   this.upNextTitle=this.songs[index+1].title;
      // }
      this.isPlaying=true;
    })

    this.currSong.addEventListener("timeupdate",()=>{
      if(!this.isTouched){
        this.currRangeTime=Number(this.currSong.currentTime.toFixed(2).toString().substring(0,5));
        this.currSecsText=this.sToTime(this.currSong.currentTime);
        this.progress=(Math.floor(this.currSong.currentTime)/Math.floor(this.currSong.duration));
        if(this.currSong.currentTime==this.currSong.duration){
          this.playNext();
        }
      }
    })
  }

  sToTime(t:any){
    return this.padZero(parseInt(String((t/60)%60))) + ":" +
    this.padZero(parseInt(String((t%60))));
  }

  padZero(v:any){
    return (v<10) ? "0" + v:v;
  }

  playNext(){
    var index = this.songs.findIndex(x=>x.title==this.currTitle);

    if((index+1)==this.songs.length){
      this.cmSong=this.songs[0].title;
      this.playSong(this.songs[0].title, this.songs[0].subtitle, this.songs[0].img, this.songs[0].path);
    }else{
      var nextIndex = index+1;
      this.cmSong=this.songs[nextIndex].title;
      this.playSong(this.songs[nextIndex].title, this.songs[nextIndex].subtitle, this.songs[nextIndex].img, this.songs[nextIndex].path);

    }
    console.log("next Song: "+ this.cmSong);
  }

  playPrev(){
    var index = this.songs.findIndex(x=>x.title==this.currTitle);

    if(index==0){
      var lastIndex = this.songs.length-1;
      this.cmSong=this.songs[lastIndex].title;
      this.playSong(this.songs[lastIndex].title, this.songs[lastIndex].subtitle, this.songs[lastIndex].img, this.songs[lastIndex].path);
    }else{
      var prevIndex = index-1;
      this.cmSong=this.songs[prevIndex].title;
      this.playSong(this.songs[prevIndex].title, this.songs[prevIndex].subtitle, this.songs[prevIndex].img, this.songs[prevIndex].path);

    }
  }

  pause(){
    this.currSong.pause();
    this.isPlaying=false;
  }

  play(){
    this.currSong.play();
    this.isPlaying=true;
  }

  cancel(){
    this.currImage="";
    this.currTitle="";
    this.currSubtitle="";
    this.progress=0;
    this.currSong.pause();
    this.isPlaying=false;
  }

  touchStart(){
    this.isTouched=true;
    this.currRangeTime=Number(this.range.value);
  }
  touchMove(){
    this.currSecsText=this.sToTime(this.range.value);
  }
  touchEnd(){
    this.isTouched=false;
    this.currSong.currentTime=Number(this.range.value);
    this.currSecsText=this.sToTime(this.currSong.currentTime);
    this.currRangeTime=Number(this.currSong.currentTime.toFixed(2).toString().substring(0,5));
    if(this.isPlaying){
      this.currSong.play();
    }
  }

}
