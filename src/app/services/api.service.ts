import { environment } from './../../environments/environment';
import { Agent } from './../Eentities/agent';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../Entities/credentials';



const URL=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  nomUser:string = 'default';
  constructor(private http:HttpClient) { }

  public getAllAgents():Observable <Agent[]> {
    return this.http.get<Agent[]>(URL+'/agents')
}
setNom(nom:string){
  this.nomUser = nom;
}
public getAgentById(id: number):Observable <Agent> {
  return this.http.get<Agent>(URL+'/agents'+id)
}

addAgent(agent:Agent):Observable<Agent[]>{
  return this.http.post<Agent[]>(URL+"/agents", agent);
}

public updateAgent(id:number,agent: Agent) :Observable<Agent> {
  return this.http.put<Agent>(URL+'/agents/'+id,agent)
}

login(credentials: Credentials): Observable<any>{
  return this.http.post(URL + "/login/driverLogin/", credentials)
}

public deleteAgentById(id: number) {
return this.http.delete(URL+'/agents/'+id)
}

  

}
