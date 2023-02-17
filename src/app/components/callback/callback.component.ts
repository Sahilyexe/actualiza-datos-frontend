import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  autentication:string=""
  constructor(private router:Router) { 
  this.autentication= location.href.split('=')[1].split('&')[0]

   sessionStorage.setItem('token',this.autentication)
   this.router.navigate(['inicio']);
  }
  ngOnInit(): void {
  }
}
