import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  img = 'assets/Pokemon.png'
  img1 = 'assets/pokemon1.png'

  constructor(private authservice: AuthService) { }

  login(islogged:boolean){
    if(islogged){
      this.authservice.login();
    } else {
      this.authservice.logout();
    }
  }
}