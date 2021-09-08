import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { Register } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 

  register = new  Register();

  constructor(private registerService : RegisterService) { }

  ngOnInit(): void {
  }

  //onRegister(){

    //console.log(this.onRegister);
    onSubmit()
    {
      console.log(this.register);
    }

  

}
