import { Component, OnInit,ViewChild} from '@angular/core';
import { IonRange } from "@ionic/angular";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album8',
  templateUrl: './album8.page.html',
  styleUrls: ['./album8.page.scss'],
})
export class Album8Page implements OnInit {
  @ViewChild("range", { static: false }) range!: IonRange;
  songs = [
    {
      title: "august",
      subtitle: "folklore",
      img: "/assets/album-cover/8.jpg",
      path: "/assets/song/midnights/august.m4a"
    },
    {
      title: "betty",
      subtitle: "folklore",
      img: "/assets/album-cover/8.jpg",
      path: "/assets/song/midnights/betty.m4a"
    },
    {
      title: "cardigan",
      subtitle: "Midnights",
      img: "/assets/album-cover/8.jpg",
      path: "/assets/song/midnights/cardigan.m4a"
    },


  ];
  constructor() { }

  ngOnInit() {
  }

}
