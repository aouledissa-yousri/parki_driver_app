import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/User';
import { Credentials } from "../../models/Credentials"

const URL = "http://localhost:8000"
const DEPLOY_TEST_URL = "https://parki-backend-test.herokuapp.com/"

@Injectable({
  providedIn: 'root'
})
export class DriverApiService {

  constructor(private http: HttpClient) { }

  signUp(user: User): Observable<any>{
    return this.http.post(URL + "/signUp/driverSignUp/", user)
  }

  login(credentials: Credentials): Observable<any>{
    return this.http.post(URL + "/login/driverLogin/", credentials)
  }


}
