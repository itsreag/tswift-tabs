import { Component, OnInit,ViewChild} from '@angular/core';
import { IonRange } from "@ionic/angular";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-album10',
  templateUrl: './album10.page.html',
  styleUrls: ['./album10.page.scss'],
})
export class Album10Page implements OnInit {
  @ViewChild("range", { static: false }) range!: IonRange;
  songs = [
    {
      title: "Lavender Haze",
      subtitle: "Midnights",
      img: "/assets/album-cover/11.jpg",
      path: "/assets/song/midnights/01. Lavender Haze.flac"
    },
    {
      title: "Maroon",
      subtitle: "Midnights",
      img: "/assets/album-cover/11.jpg",
      path: "/assets/song/midnights/02. Maroon.flac"
    },
    {
      title: "Anti-Hero",
      subtitle: "Midnights",
      img: "/assets/album-cover/11.jpg",
      path: "/assets/song/midnights/03. Anti-Hero.flac"
    },


  ];
  constructor() { }

  ngOnInit() {
  }

}
