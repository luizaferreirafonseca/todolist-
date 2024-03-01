import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    
  }

  
  onSubmit(): void {
    const email = this.loginForm.get('email')?.value;
    const senha = this.loginForm.get('senha')?.value;

    
    if (email === 'admin@gmail.com' && senha === '123456') {
      
        this.router.navigate(['/gerenciador']);
    } else {
       
        alert("Credenciais inválidas")
    }
}


  
  mostrarFormularioLogin:boolean = true;
  mostrarFormularioCadastro:boolean = false; 

  exibirFormularioCadastro(){
    this.mostrarFormularioCadastro = true;
    this.mostrarFormularioLogin = false;
  }

exibirFormularioLogin(){
  this.mostrarFormularioCadastro = false;
    this.mostrarFormularioLogin = true;
}

// formulario = new FormGroup({
//   nome: new FormControl('', [Validators.required]), 
//   matricula: new FormControl(0, [Validators.minLength(5), Validators.pattern(/^[0-9]+$/)]),
//   idade: new FormControl(''),
//   endereco: new FormControl('', [Validators.required]), 
//   telefone: new FormControl(0, [Validators.required]),
//   media1: new FormControl(0, [Validators.required, Validators.maxLength(2)]),
//   media2: new FormControl(0, [Validators.required, Validators.maxLength(2)]),

//  })





}
