import { Component, OnInit } from '@angular/core';
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

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    this.List();
  }

  onSubmit(Data: any) {
    console.log(Data);
    this.registerService.InsertData(Data).subscribe((result) => {
      alert(result);
    });
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
}
