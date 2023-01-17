import { Injectable } from '@angular/core';
import {Firestore,collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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

  constructor(private firestore:Firestore) {}

  getSong():Observable<toprated[]>{
    const topratedRef = collection(this.firestore,'Album/toprated/playlist')
    return collectionData(topratedRef, {idField:'id'}) as Observable<toprated[]>
  }

}
