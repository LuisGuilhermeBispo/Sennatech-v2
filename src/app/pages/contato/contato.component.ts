import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  submitted: boolean = false;

  constructor(private breadcrumbService: BreadcrumbService, private formFormBuilder: FormBuilder) { }

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

    if(this.form.invalid) {
      return
    }

    const payload = JSON.stringify(this.form.value, null, 2);

    console.log(payload);

    this.onReset();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
