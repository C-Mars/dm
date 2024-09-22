import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonBackButton,IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel, IonIcon, IonAvatar, IonImg, IonButton, IonButtons, IonModal,IonMenu,IonMenuButton,IonRouterLink } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { LoginFormPage } from 'src/app/login-form/login-form.page';

@Component({
  selector: 'app-tab-cuatro',
  templateUrl: './tab-cuatro.page.html',
  styleUrls: ['./tab-cuatro.page.scss'],
  standalone: true,
  imports: [IonModal, 
    IonButtons, 
    IonButton, 
    IonImg, 
    IonAvatar, IonIcon, IonLabel, IonItem, IonList, IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ReactiveFormsModule,IonMenu,IonMenuButton,RouterLink,IonRouterLink,LoginFormPage,IonBackButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TabCuatroPage implements OnInit {
  

  ajustesForm: FormGroup = new FormGroup({
    nombre: new FormControl<string | null>('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl<string | null>('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl<string | null>('', [Validators.required, Validators.email]),
    password: new FormControl<string | null>('', [Validators.required, Validators.minLength(6)]),
    rePassword: new FormControl<string | null>('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private router: Router) { }

  ngOnInit() {
  
      this.llenarForm()
      this.ajustesForm
    
  }

  llenarForm() {
    const loginFalseData = LoginFormPage.loginFalse;
    this.ajustesForm.patchValue({
      nombre: loginFalseData.nombre,
      apellido: loginFalseData.apellido,
      email: loginFalseData.email,
      password: loginFalseData.password,
    });
  }

  isValid(): boolean {
    const formValues = this.ajustesForm.value;
    return formValues.password.length > 0 && formValues.email.length > 0 && formValues.rePassword.length > 0 && formValues.password === formValues.rePassword;
  };

  onSubmit() {
    console.log(this.ajustesForm.value);
  };

}
