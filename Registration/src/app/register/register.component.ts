import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Register } from './register.model';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
 

	 
	
	
export class RegisterComponent implements OnInit {
  register = new Register();

  list: any = [];
  list1: any = [];
  list2: any = [];
  list3: any = [];
  list4:any = [];
  list5:any = [];
  productService: any;

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    this.List();
  }

  onSubmit() {
  
      console.log("Form Submitted!");
       
    }
  
   
  
  List() {
    this.registerService.getCountry().subscribe((data) => {
      this.list = data;
    });
    this.registerService.getState().subscribe((data) => {
      this.list1 = data;
    });
    this.registerService.getCity().subscribe((data) => {
      this.list2 = data;
    });
    this.registerService.getAreaCode().subscribe((data) => {
      this.list3 = data;
    });
    this.registerService.getPosition().subscribe((data) => {
      this.list4 = data;
    });
    this.registerService.getAreaOfStudy().subscribe((data) => {
      this.list5 = data;
    });
  }

allowNumericDigitsOnlyOnKeyUp(event: { which: any; keyCode: any; }):any
   {		
		const charCode = event.which ? event.which : event.keyCode;
		
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		 console.log('charCode restricted is'+ charCode);
     return false;
		}
	}
}
 