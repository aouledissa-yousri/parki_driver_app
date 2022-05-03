import { environment } from './../../environments/environment';
import { Agent } from './../Eentities/agent';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const URL=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public getAllAgents():Observable <Agent[]> {
    return this.http.get<Agent[]>(URL+'/agents')
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


public deleteAgentById(id: number) {
return this.http.delete(URL+'/agents/'+id)
}

  

}
