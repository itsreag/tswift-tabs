import { Component, OnInit,ViewChild} from '@angular/core';
import { IonRange } from "@ionic/angular";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album3',
  templateUrl: './album3.page.html',
  styleUrls: ['./album3.page.scss'],
})
export class Album3Page implements OnInit {
  @ViewChild("range", { static: false }) range!: IonRange;
  songs = [
    {
      title: "Back To Decemberr",
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


}
