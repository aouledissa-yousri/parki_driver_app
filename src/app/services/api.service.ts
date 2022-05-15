import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../Entities/credentials';
import { Driver } from '../Entities/driver';



const URL=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  nomUser:string = 'default';
  constructor(private http:HttpClient) { }

  public getAllDrivers():Observable <Driver[]> {
    return this.http.get<Driver[]>(URL+'/drivers')
}
setNom(nom:string){
  this.nomUser = nom;
}
public getDriverById(id: number):Observable <Driver> {
  return this.http.get<Driver>(URL+'/drivers'+id)
}

addDriver(driver:Driver):Observable<Driver[]>{
  return this.http.post<Driver[]>(URL+"/drivers", driver);
}

public updateDriver(id:number,driver: Driver) :Observable<Driver> {
  return this.http.put<Driver>(URL+'/drivers/'+id,driver)
}

login(credentials: Credentials): Observable<any>{
  return this.http.post(URL + "/login/driverLogin/", credentials)
}

public deleteDriverById(id: number) {
return this.http.delete(URL+'/drivers/'+id)
}

  

}
