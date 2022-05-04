import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from 'src/app/models/credentials';

const URL="http://localhost:8100"
@Injectable({
  providedIn: 'root'
})
export class DriverApiService {

  constructor(private http:HttpClient) { }
  login(credentials: Credentials): Observable<any>{
    return this.http.post(URL + "/login", credentials)
  }
}
