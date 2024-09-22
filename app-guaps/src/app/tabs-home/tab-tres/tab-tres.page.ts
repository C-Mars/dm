import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton } from '@ionic/angular/standalone';
import { LoginFormPage } from 'src/app/login-form/login-form.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-tres',
  templateUrl: './tab-tres.page.html',
  styleUrls: ['./tab-tres.page.scss'],
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TabTresPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
