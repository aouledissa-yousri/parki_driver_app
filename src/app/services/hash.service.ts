import { Injectable } from '@angular/core';
import * as hash from "js-sha512"; 

@Injectable({
  providedIn: 'root'
})
export class HashService {

  constructor() { }
  saltPassword(password: string){
    return hash.sha512(hash.sha512(password))
  }
}
