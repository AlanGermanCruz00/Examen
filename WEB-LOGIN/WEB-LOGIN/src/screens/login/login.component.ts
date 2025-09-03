import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { SinginService } from 'src/services/singin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email])
  passwordFormControl = new FormControl('', [Validators.required])

  loginForm = new FormGroup({
    email: this.emailFormControl,
    password: this.passwordFormControl
  })

  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'danger' = 'success';
  passwordVisible = false;

  constructor(
    private router: Router,
    private ainginService: SinginService
  ) { }

  onSubmitl(): void {
    this.ainginService.singIn(this.emailFormControl.value!, this.passwordFormControl.value!).then((res: any) => {
      console.log("DATOS ----", res);
      const emailValue = this.emailFormControl.value!;
      const passwordValue = this.passwordFormControl.value!;

      if (res && res.response && res.response.length > 0) {
        const user = res.response[0];
        if (user.email === emailValue) {
          this.router.navigate(['/animals/table']);
        }
        else if (user.email === emailValue && user.password !== passwordValue) {
          this.showBootstrapToast('Contraseña Incorrecta', 'danger')
        }
      } else {
        this.showBootstrapToast('Usuario no encontrado', 'danger');
      }
    }).catch((err) => {
      this.showBootstrapToast('Error de Servidor', 'danger');
    });

  }

  showBootstrapToast(message: string, type: 'success' | 'danger') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
  }
  
  PasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

}