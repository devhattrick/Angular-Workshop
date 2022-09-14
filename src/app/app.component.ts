import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators  } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'demo-project';
  contactForm:any
  constructor(private fb:FormBuilder){
    this.contactForm = this.fb.group({
      InputA: ['', [Validators.required, Validators.minLength(10)]],
      InputB: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      InputC: ['', [Validators.required, Validators.email]],

    });
  
  }


  get email() {
    return this.contactForm.get('InputC');
  }

  onShow(){
    alert('H')
    console.log('Show');
    
  }
  onSubmit(){
    console.log(this.contactForm.value);
    
  }


}
