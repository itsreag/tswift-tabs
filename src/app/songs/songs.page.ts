import { Component, OnInit,ViewChild} from '@angular/core';
import { IonRange } from "@ionic/angular";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector:'app-songs',
  templateUrl:'./songs.page.html',
  styleUrls:['./songs.page.scss']
})
export class SongsPage implements OnInit {
  @ViewChild("range", { static: false }) range!: IonRange;
  slide = [
    {
      title: "Speak Now",
      subtitle: "Third Studio Album",
      img: "/assets/album-cover/3.jpeg",
    },
    {
      title: "Midnights",
      subtitle: "Tenth Studio Album",
      img: "/assets/album-cover/11.jpg",
    },
  ];
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
    },{
    title: "Back To December",
      subtitle: "Speak Now",
      img: "/assets/album-cover/3.jpeg",
      path: "/assets/song/Speak Now/Back To December.mp3"
    },
    {
      title: "Better Than Revenge",
      subtitle: "Speak Now",
      img: "/assets/album-cover/3.jpeg",
      path: "/assets/song/Speak Now/Better Than Revenge.mp3"
    },
    {
      title: "Dear John",
      subtitle: "Speak Now",
      img: "/assets/album-cover/3.jpeg",
      path: "/assets/song/Speak Now/Dear John.mp3"
    },
    {
      title: "Enchanted",
      subtitle: "Speak Now",
      img: "/assets/album-cover/3.jpeg",
      path: "/assets/song/Speak Now/Enchanted.mp3"
    },
    {
      title: "Haunted",
      subtitle: "Speak Now",
      img: "/assets/album-cover/3.jpeg",
      path: "/assets/song/Speak Now/Haunted.mp3"
    },
    {
      title: "If This Was A Movie",
      subtitle: "Speak Now",
      img: "/assets/album-cover/3.jpeg",
      path: "/assets/song/Speak Now/If This Was A Movie.mp3"
    },
    {
      title: "Last Kiss",
      subtitle: "Speak Now",
      img: "/assets/album-cover/3.jpeg",
      path: "/assets/song/Speak Now/Last Kiss.mp3"
    }
  ];
  songSelected:any;
  routes: any;
  //Current song details
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

  currSong: any;
  constructor(public router:Router) { }
  slidesOptions = {
    slidesPerView: 1.5
  }
  ngOnInit() {
  }

  sToTime(t:any) {
    return this.padZero(parseInt(String((t / (60)) % 60))) + ":" +
      this.padZero(parseInt(String((t) % 60)));
  }

  padZero(v:any) {
    return (v < 10) ? "0" + v : v;
  }

  playSong(title:any, subTitle:any, img:any, song:any) {
    if (this.currSong != null) {
      this.currSong.pause();     //If a song plays,stop that
    }
    //open full player view
    const full=document.getElementById('fullPlayer');
    if (full != null){
      full.style.bottom="0px";
    }
    //set current song details
    this.currTitle = title;
    this.currSubtitle = subTitle;
    this.currImage = img;

    //Current song audio
    this.currSong = new Audio(song);

    this.currSong.play().then(() => {
      //Total song duration
      this.durationText = this.sToTime(this.currSong.duration);
      //set max range value (important to show proress in ion-range)
      this.maxRangeValue = Number(this.currSong.duration.toFixed(2).toString().substring(0, 5));

      //set upnext song
      //get current song index
      var index = this.songs.findIndex(x => x.title == this.currTitle);
      //if current song is the last one then set first song info for upnext song
      if ((index + 1) == this.songs.length) {
        this.upNextImg = this.songs[0].img;
        this.upNextTitle = this.songs[0].title;
        this.upNextSubtitle = this.songs[0].subtitle;
      }

      //else set next song info for upnext song
      else {
        this.upNextImg = this.songs[index + 1].img;
        this.upNextTitle = this.songs[index + 1].title;
        this.upNextSubtitle = this.songs[index + 1].subtitle;
      }
      this.isPlaying = true;
    })

    this.currSong.addEventListener("timeupdate", () => {

      //update some infos as song plays on
      //if ion-range not touched the do update
      if (!this.isTouched) {

        //update ion-range value
        this.currRangeTime = Number(this.currSong.currentTime.toFixed(2).toString().substring(0, 5));
        //update current seconds text
        this.currSecsText = this.sToTime(this.currSong.currentTime);
        //update progress bar (in miniize view)
        this.progress = (Math.floor(this.currSong.currentTime) / Math.floor(this.currSong.duration));


        //if song ends,play next song
        if (this.currSong.currentTime == this.currSong.duration) {
          this.playNext();
        }
      }
    });
  }

  playNext() {
    var index = this.songs.findIndex(x => x.title == this.currTitle);

    if ((index + 1) == this.songs.length) {
      this.playSong(this.songs[0].title, this.songs[0].subtitle, this.songs[0].img, this.songs[0].path);
    }
    else {
      var nextIndex = index + 1;
      this.playSong(this.songs[nextIndex].title, this.songs[nextIndex].subtitle, this.songs[nextIndex].img, this.songs[nextIndex].path);
    }
  }

  playPrev() {
    var index = this.songs.findIndex(x => x.title == this.currTitle);

    if (index == 0) {
      var lastIndex = this.songs.length - 1;
      this.playSong(this.songs[lastIndex].title, this.songs[lastIndex].subtitle, this.songs[lastIndex].img, this.songs[lastIndex].path);
    }
    else {
      var prevIndex = index - 1;
      this.playSong(this.songs[prevIndex].title, this.songs[prevIndex].subtitle, this.songs[prevIndex].img, this.songs[prevIndex].path);
    }
  }

  touchStart() {
    this.isTouched = true;
    this.currRangeTime = Number(this.range.value);
  }

  touchMove() {
    this.currSecsText = this.sToTime(this.range.value);
  }

  touchEnd() {
    this.isTouched = false;
    this.currSong.currentTime = Number(this.range.value);
    this.currSecsText = this.sToTime(this.currSong.currentTime)
    this.currRangeTime = Number(this.currSong.currentTime.toFixed(2).toString().substring(0, 5));

    if (this.isPlaying) {
      this.currSong.play();
    }
  }
  //maximize player
  maximize() {
    const maxf = document.getElementById("fullPlayer");
    if (maxf !=null){
      maxf.style.bottom="0px";
    }
    const maxm=document.getElementById("miniPlayer");
    if (maxm !=null){
      maxm.style.bottom="-1000px";
    }
  }
//minimize player
  minimize() {
    const minf = document.getElementById("fullPlayer");
    if (minf !=null){
      minf.style.bottom="-1000px";
    }
    const minm=document.getElementById("miniPlayer");
    if (minm !=null){
      minm.style.bottom="0px";
    }
  }

  pause() {
    this.currSong.pause();
    this.isPlaying = false;
  }

  play() {
    this.currSong.play();
    this.isPlaying = true;
  }

  cancel() {
    const cancel = document.getElementById("miniPlayer");
    if (cancel !=null){
      cancel.style.bottom="-100px";
    }
    this.currImage = "";
    this.currTitle = "";
    this.currSubtitle = "";
    this.progress = 0;
    this.currSong.pause();
    this.isPlaying = false;
  }
  navAlbum(){
    this.router.navigateByUrl('/album3');
  }

  logout(){
    console.log("User Logout");
    this.router.navigate(["/login-page"]);
   }
}

