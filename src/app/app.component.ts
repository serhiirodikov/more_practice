import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required),
      }),
      skills: new FormArray([]),
    });
  }
  submit() {
    console.log('Form Submitted', this.form);
    const formDate = { ...this.form.value };
    console.log('Form Date: ', formDate);
  }
  setCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Київ',
      by: 'Мінськ',
    };
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];
    this.form.get('address').patchValue({
      city,
    });
  }

  addSkills() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }
}
