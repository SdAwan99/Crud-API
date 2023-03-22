import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WepApiService {

private apiurl = "https://aptechapi.000webhostapp.com/User/"

  constructor(private httpsclient:HttpClient) { }

  httpsOption = {
    Headers: new HttpHeaders({ 
      'content-Type':'application/json'
    })
  }

  getAll():Observable<any>{
    return this.httpsclient.get(this.apiurl + "read.php")
  }
}
