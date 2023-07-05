import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

interface AddressFormGroup {
  address: FormControl <string | null>
}

interface UserModel {
  username: FormControl <string | null>;
  email: FormControl <string | null>;
  password: FormControl <string | null>;
  address: FormArray <FormGroup <AddressFormGroup>>
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private fb: FormBuilder) {
    console.log(this.addressesFormArray);
  };

  usernameControl = new FormControl('');

  emailControl = new FormControl('');

  passwordControl = new FormControl('');

  addressesFormArray = new FormArray <FormGroup <AddressFormGroup>> (
    [
      new FormGroup(
        {
          address: new FormControl(''),
        }
      ),
    ]
  );

  userModel: FormGroup <UserModel> = new FormGroup(
    {
      username: this.usernameControl,
      email: this.emailControl,
      password: this.passwordControl,
      address: this.addressesFormArray
    }
  );

  addNewAddress(): void {
    console.log("FUNCIONA\n");
    this.addressesFormArray.push(this.fb.group(
      {
        address: ''
      }
    ));
  };

  resetControl(): void {
    this.userModel.value.username = '';
    this.userModel.value.email = '';
    this.userModel.value.password = '';
    this.userModel.value.address = [{address: ''}];
  }
}