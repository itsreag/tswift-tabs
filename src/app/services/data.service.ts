import { Injectable } from '@angular/core';
import {Firestore,collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {getStorage, ref, getDownloadURL,listAll} from 'firebase/storage';
import { title } from 'process';

export interface toprated {
  id?: string;
  subtitle: string;
  imgpath: string;
  path: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  storedSongs:any=[];


  constructor(private firestore:Firestore) {}

  getSong(albumref:string):Observable<toprated[]>{
    const album= albumref;
    const topratedRef = collection(this.firestore,'Album/'+album+'/playlist');
    return collectionData(topratedRef, {idField:'id'}) as Observable<toprated[]>
  }

  // searchStorage(myref:string){
  //   const storage = getStorage();
  //   const albumref= ref(storage,'tracks/'+myref);

  //   listAll(albumref)
  //   .then((res)=>{
  //     res.items.forEach((itemref)=>{
  //       // console.log();
  //       const trimmedTitle=(itemref.name).split('.')[0];
  //       const url =getDownloadURL(itemref);
  //       this.storedSongs.push({trimmedTitle,url});
  //   });
  // });
  // return this.storedSongs
  // }

}
