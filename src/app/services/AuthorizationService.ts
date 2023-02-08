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
  constructor(private http: HttpClient,
              ) {
    console.log('Se levanta el servicio')
   }

   getAuthorizer() {
      this.token= sessionStorage.getItem('token')!
      if(this.token===undefined || this.token===null)this.token=""

      const headers = new HttpHeaders({
         'Authorization': `${this.token.trimEnd().trimStart()}`,

       });
   
   console.log('Bearer '+this.token)

      return this.http.get('https://uagbdkrmy3.execute-api.us-east-1.amazonaws.com/test/authorizacion',{headers:headers})
      
   }
  
}
function throwError(error: any): any {
   throw new Error('Function not implemented.');
}

