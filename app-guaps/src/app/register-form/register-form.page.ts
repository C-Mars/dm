import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonBackButton, IonButton, IonContent, IonHeader, IonInput, IonRouterLink, IonTitle, IonToolbar, IonMenuButton, AlertController } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { LoginFormPage } from '../login-form/login-form.page';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.page.html',
  styleUrls: ['./register-form.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink,IonRouterLink,IonBackButton,IonButton, IonInput,IonMenuButton,ReactiveFormsModule]
})
export class RegisterFormPage  {

  constructor(private router: Router,
    private alertController: AlertController
  ) {
    
   }

  registerForm: FormGroup= new FormGroup( {
    nombre:new FormControl< string | null >('',[Validators.required, Validators.minLength(3)]),
    apellido: new FormControl< string | null >('',[Validators.required, Validators.minLength(4)]),
    email: new FormControl< string | null >('',[Validators.required, Validators.email]),
    password: new FormControl< string | null >('',[Validators.required, Validators.minLength(6)]),
    rePassword: new FormControl< string | null >('',[Validators.required, Validators.minLength(6)]),
  });
  onSubmit() {
    if (this.isValid()){
      console.log(this.registerForm.value);
      this.router.navigate(['/login-form'])
    } else{
      this.presentAlert()
    }
    
    
  };

  isValid(): boolean {
    const formValues = this.registerForm.value;
    return formValues.password.length > 0 && formValues.email.length > 0 && formValues.rePassword.length > 0 && formValues.password === formValues.rePassword && formValues.email !== LoginFormPage.loginFalse.email; 
    };

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El usuario  existe o las contraseñas no coinciden.',
        buttons: ['Cerrar'],
      });
  
      await alert.present();
    }
}
