import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  empForm!: FormGroup;
  constructor(private fb: FormBuilder){
    this.empForm = this.fb.group({
      name: new FormControl("",[Validators.required, Validators.maxLength(4)]),
      email: new FormControl("",[Validators.required, Validators.email]),
      age: new FormControl(0,[Validators.required, Validators.max(45)])
    });

    this.empForm.patchValue({
      'name':"sushi",
      'email':'',
      'age':64
    })
  
  }

  setValues(){

  }

  get formValid(){
    return this.empForm.controls;
  }
  submit(){  
      console.log(this.empForm.value);
      this.reset();

      }
  reset(){
    this.empForm.reset();
  }    
  
    

}
