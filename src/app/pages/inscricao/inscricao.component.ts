import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ResumeEmailService } from 'src/app/service/email-services/resume-email.service';
import { catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.scss'],
  providers: [HttpClient]
})
export class InscricaoComponent implements OnInit {
  form: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    telphone: new FormControl(''),
    linkedinUrl: new FormControl(''),
    notes: new FormControl(''),
  });

  submitted: boolean = false

  constructor(
      private breadcrumbService: BreadcrumbService, 
      private formBuilder: FormBuilder,
      private resumeEmailService: ResumeEmailService,
      ) { }

  curriculo: File | null = null;

  onCurriculoSelected(event: any) {
    if (event.target.files && event.target.files.length) {
      this.curriculo = event.target.files[0];
    }
  }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(['Home', 'Carreira', 'Vaga', 'Inscrição']);

    this.form = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telphone: ['', [Validators.required, Validators.maxLength(11)]],
        linkedinUrl: ['', Validators.required],
        notes: [''],
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const file = this.curriculo;
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.result && typeof reader.result === 'string') {
        const base64 = reader.result.split(',')[1];
        const fileType = file?.type.split('/')[1];

        const fileObj = {
          name: `${file?.name}_${file?.size}.${fileType}`,
          content: base64
        };
        const payload = { ...this.form.value, attachment: fileObj };

        this.resumeEmailService.sendResumeEmail(payload).pipe(
          tap(response => console.log('Email enviado com sucesso!', response)),
            catchError(error => {
                console.log('Erro ao enviar o e-mail:', error);
                return throwError(error);
              })
            ).subscribe();

        this.onReset();
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }


  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
