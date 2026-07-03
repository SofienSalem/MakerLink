import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServices } from 'src/app/_services/auth.service';
import { UserForm } from 'src/app/_interfaces/userform';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  disabled = ""
  email="";
  firstName = "";
  lastName = "";
  password="";
  message = '';
  errorMessage = ''; // validation error handle
  _error: { name: string, message: string } = { name: '', message: '' }; // for firbase error handle

  userForm: UserForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'ADMIN'
  };

  

  constructor(public authService: AuthService, private services : AuthServices , private router:Router,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username : ['haykel.mhadhbi@fst.utm.tn',[Validators.required, Validators.email]],
      firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
    });

    
  }

  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '' , message:''};
  }


  validateForm(email:string, password:string)
  {
    if(email.length === 0)
    {
      this.errorMessage = "please enter email id";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "please enter password";
      return false;
    }

    if (password.length < 6)
    {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

    this.errorMessage = '';
    return true;

  }
  public registrationForm! : FormGroup;
  public error:any = '';

  get form(){
    return this.registrationForm.controls;
  }
  Submit(){
    this.disabled = "btn-loading"
    if (this.registrationForm.controls['username'].value === "hiichem.mhadhbi@gmail.com" && this.registrationForm.controls['password'].value === "haykel123" )
    {
      this.router.navigate(['/dashboard/sales']);
    }
    else{
      this.error = "Please check email and passowrd"
    }
  }


onSubmit() {
  if (this.registrationForm.valid) {
    // Créer un nouvel objet contenant toutes les valeurs de formulaire plus le rôle 'ADMIN'
    const formValueWithRole = {
      ...this.registrationForm.value,
      role: 'ADMIN'  // Vous définissez le rôle statiquement ici
    };

    this.services.register(formValueWithRole).subscribe({
      next: (response: any) => {
        console.log(response);
        // Navigate to the login page or dashboard after successful registration
      },
      error: (error: any) => {
        console.error('Registration failed', error);
        this.errorMessage = 'Registration failed: ' + (error.error.message || error.message);
      }
    });
    this.router.navigate(['/auth/login']);

  }
}

 

}

