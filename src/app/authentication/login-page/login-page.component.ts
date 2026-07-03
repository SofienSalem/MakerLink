import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICredential } from 'src/app/_interfaces/ICredential';
import { HttpClient } from '@angular/common/http';
import { AuthServices } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form : ICredential ={
    email : '',
    password :'' 
  }

  constructor(private http: HttpClient, private router: Router, private loginService :  AuthServices, 
    private tokenservice : TokenService ) {

} // Injectez Router ici
  ngOnInit(): void {
      
  }


  
  onSubmit(): void {
    console.log(this.form);
    this.login();
  }

  login (){
    this.loginService.login(this.form).subscribe(
      (data: any) => { // Utilisez 'any' ici si vous ne pouvez pas contrôler la forme de 'data'
        console.log(data.access_token);
        this.tokenservice.saveToken(data.access_token)
        this.tokenservice.saveRefreshToken(data.refresh_token);  // Assurez-vous de sauvegarder le refresh_token
        const role =  data.user.role; // Utilisez une vérification pour éviter les erreurs d'exécution
        this.tokenservice.saveRole(role); // Sauvegarde du rôle de l'utilisateur

        this.router.navigate(['/dashboard/sales']);

      },
      (err: any) => console.log(err)
    );
  }

  
  
}

