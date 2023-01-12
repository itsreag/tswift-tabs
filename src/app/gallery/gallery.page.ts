import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  images = ['baby.jpg','bareface.jpg','folk1.jpg','folk2.jpg', 'folk5.jpg', 'folk10.jpg'
  , 'folk11.jpg', 'folk13.jpg', 'folk16.jpg']
  constructor() { }

  ngOnInit() {
  }

}
