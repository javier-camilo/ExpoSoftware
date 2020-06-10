import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CuadroDialogoComponent } from 'src/app/cuadro-dialogo/cuadro-dialogo.component';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import { User } from '../models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user : User;
  userGroup : FormGroup;


  constructor(private authService : AuthService, private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.user = new User();
    this.buildForm();
    
  }

 private buildForm (){
   this.user.userName="";
   this.user.email="";
   this.user.password="";

   this.userGroup = this.formBuilder.group({
     userName: [this.user.userName, [Validators.required]],
     email: [this.user.email, [Validators.required, Validators.email]],
     user: [this.user.password, [Validators.required]]

   });

 }

 get control(){
  return this.userGroup.controls;
}

 onSubmit(){
   if(this.userGroup.invalid){
     return;
   }
   //Servicio registrar
 }

}
