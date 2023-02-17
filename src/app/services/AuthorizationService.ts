import { HttpClient,HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   item:any={}
   token:string=""
  constructor(private http: HttpClient) {
   }

   getAuthorizer() {
      this.token= sessionStorage.getItem('token')!
      if(this.token===undefined || this.token===null)this.token=""

      const headers = new HttpHeaders({
         'Authorization': `${this.token.trimEnd().trimStart()}`,

       });
         return this.http.get(environment.urlAPiAutorizer,{headers:headers})
      
   }
  
}
