import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonBackButton, IonButton, IonContent, IonHeader, IonInput, IonRouterLink, IonTitle, IonToolbar,AlertController } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader,IonBackButton, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink,IonRouterLink,IonButton, IonInput,ReactiveFormsModule]
})
export class LoginFormPage implements OnInit{

  loginForm: FormGroup= new FormGroup({
    email: new FormControl< string | null >('', [Validators.required, Validators.email]),
    password: new FormControl< string | null >('',[Validators.required]) 
})
 
static loginFalse ={
    nombre:'Maria',
    apellido:'Lopez',
    email: 'marialopez@gmail.com',
    password: 'Mari789:',
    rePassword: 'Mari789:'
  }

  static isLogin: boolean = false;


  constructor(private router: Router, 
    private alertController: AlertController) { }
  
  
  ngOnInit(): void {
      if (LoginFormPage.isLogin){
        this.router.navigate(['/tabs-home'])
      } else {
        console.log('No inició sesion')
      }
  }
   
  onSubmit() {
    if (this.isValid()) {
      LoginFormPage.isLogin = true
      this.router.navigate(['/tabs-home'], { replaceUrl: true });
    } else {
      this.presentAlert()
      console.log('El usuario no existe o los datos ingresados estan incorrectos');
    }
  }
  

  isValid(): boolean {
    const formValues = this.loginForm.value;
    return formValues.email === LoginFormPage.loginFalse.email  && formValues.password === LoginFormPage.loginFalse.password;
    
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'El usuario no existe o los datos ingresados están incorrectos.',
      buttons: ['Cerrar'],
    });

    await alert.present();
  }
}
