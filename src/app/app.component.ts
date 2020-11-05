import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'more-practices-angular';

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  submit() {
    console.log('Form Submitted', this.form);
    const formDate = { ...this.form.value };
    console.log('Form Date: ', formDate);
  }
}
