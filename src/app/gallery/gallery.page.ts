import { Component, OnInit } from '@angular/core';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  images:any=[]
  constructor() { }

  ngOnInit() {
    const storage = getStorage();
    const listref = ref(storage,'gallery');

    listAll(listref)
    .then((res)=>{
      res.items.forEach((itemref)=>{
        getDownloadURL(itemref)
        .then((url)=>{
          this.images.push(url);
        });
      });
    });
  }

}
