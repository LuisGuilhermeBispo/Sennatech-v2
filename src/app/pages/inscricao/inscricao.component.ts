import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inscricao',
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.scss']
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

  constructor(private breadcrumbService: BreadcrumbService, private formBuilder: FormBuilder, private route: ActivatedRoute) {}

  curriculo: File | null = null;

  onCurriculoSelected(event: any) {
    if (event.target.files && event.target.files.length) {
      this.curriculo = event.target.files[0];
    }
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.breadcrumbService.setBreadcrumb([
      { text: 'Home', route: '' },
      { text: 'Carreira', route: '/carreira' },
      { text: `Vaga ${id}`, route: `/carreira/vaga/${id}` },
      { text: 'Inscrição', route: `/carreira/vaga/${id}/inscricao` },
    ]);

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
  
    const file = this.curriculo; // assuming only one file is selected
    const reader = new FileReader();
  
    reader.onload = () => {
      if (reader.result && typeof reader.result === 'string') {
        const base64 = reader.result.split(',')[1];
        const fileObj = {
          nome: file?.name,
          tamanho: file?.size,
          base64: base64
        };
        const payload = JSON.stringify({...this.form.value, curriculo: fileObj}, null, 2);
  
        console.log(payload);
  
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
