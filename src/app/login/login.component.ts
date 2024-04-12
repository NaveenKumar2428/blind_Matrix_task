import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup | any;

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router
  ) {}

  ngOnInit() {

    this.loginForm()
  }



  loginForm() {
    const savedFormDataString = localStorage.getItem('formData');
  
    const savedFormData = savedFormDataString ? JSON.parse(savedFormDataString) : {};
  
    this.loginform = this.formBuilder.group({
      name: new FormControl(savedFormData.name || "", [Validators.required]),
      email: new FormControl(savedFormData.email || "", [Validators.required, Validators.email]),
      password: new FormControl(savedFormData.password || "", [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    });
  }
  

  get f(){
    return this.loginform.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginform.invalid){
       return
    }
    localStorage.setItem('formData', JSON.stringify(this.loginform.value));
    this.router.navigate(['home'])
 }


}
