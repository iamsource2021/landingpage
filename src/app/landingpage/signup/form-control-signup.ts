import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidation } from "./custom-validation";

export const FormControlSignup:FormGroup = new FormGroup({
  email: new FormControl(
    "", [
      Validators.email,
      Validators.required
    ]
  ),
  password: new FormControl(
    "", [
      Validators.minLength(8),
      Validators.required
    ]
  ),
  repassword: new FormControl(
    "", [
      Validators.required
    ]
  ),
  tos: new FormControl(
    "", [
      Validators.requiredTrue
    ]
  )
}, {
  validators: [
    CustomValidation.MatchPassword
  ] // your validation method
});
