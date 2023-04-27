import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactEmailService } from 'src/app/service/email-services/contact-email.service';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
  providers: [HttpClient]
})
export class ContatoComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  submitted: boolean = false;

  constructor(private breadcrumbService: BreadcrumbService,
    private formFormBuilder: FormBuilder,
    private contactEmailService: ContactEmailService) { }

  ngOnInit(): void {
    this.breadcrumbService.setBreadcrumb(['Home', 'Contato']);

    this.form = this.formFormBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['']
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return
    }

    const payload = this.form.value;

    this.contactEmailService.sendEmail(payload)
      .pipe(
        tap(response => console.log('Email enviado com sucesso:', response)),
        catchError(error => {
          console.log('Erro ao enviar o e-mail:', error);
          return throwError(error);
        })
      )
      .subscribe();

    this.onReset();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
