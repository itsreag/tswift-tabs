import { Component, OnInit,ViewChild} from '@angular/core';
import { IonRange } from "@ionic/angular";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album4',
  templateUrl: './album4.page.html',
  styleUrls: ['./album4.page.scss'],
})
export class Album4Page implements OnInit {
  @ViewChild("range", { static: false }) range!: IonRange;
  songs = [
    {
      title: "22",
      subtitle: "Red",
      img: "/assets/album-cover/4.jpeg",
      path: "/assets/song/red/22.m4a"
    },
    {
      title: "All Too Well",
      subtitle: "Red",
      img: "/assets/album-cover/4.jpeg",
      path: "/assets/song/All Too Well.m4a"
    },
    {
      title: "Come Back... Be Here",
      subtitle: "Red",
      img: "/assets/album-cover/4.jpeg",
      path: "/assets/song/red/Come Back... Be Here.m4a"
    },


  ];
  constructor() { }

  ngOnInit() {
  }

}
