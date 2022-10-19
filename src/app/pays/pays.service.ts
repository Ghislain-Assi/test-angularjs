import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pays } from './pays';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor( private Http:HttpClient) { }

  get(){
    return this.Http.get<Pays[]>("http://localhost:3000/pays");
  }
}
