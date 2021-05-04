import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input
 } from '@angular/core';
import {
  trigger,
  transition,
  state,
  animate,
  style
} from '@angular/animations';
import { FormControlSignup } from './form-control-signup';
import { I18n } from "aws-amplify";
import './../traslations/languages';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class SignupComponent implements OnInit {

  @Output() chageStatusEvent = new EventEmitter<object>();

  @Input() set language(lang: string) {
    this.i18n.setLanguage(lang);
  }
  get language() { return this.language}

  public signupform = FormControlSignup;

  inputotros = 'disabled';

  iswait= false;

  public buttonStates = 'disabled';

  public i18n = I18n;

  constructor(private AuthService: AuthService) {
    this.i18n.setLanguage("en-US");
  }

  ngOnInit(): void {
  }

  changeState(state:string){
    this.buttonStates = state;
  }


  onValidate(value:string){
    let controls = this.signupform.controls;
    let onjectControl = null;
    Object.keys(controls).forEach(key => {
      if (key === value) {
        onjectControl =  controls[key];
      }
    });

    if(controls.email.status==='VALID'
    &&controls.password.status==='VALID'
    &&controls.repassword.status==='VALID'
    &&controls.tos.status==='VALID')
    this.changeState('valid');

    if(onjectControl.errors !==null){
      return 'form-control is-invalid';
    }else{
      return 'form-control';
    }
  }

  onSignUp(){
    if(this.signupform.valid){
      this.buttonStates = 'disabled';
      let params = {
        username: this.signupform.controls.email.value,
        password: this.signupform.controls.password.value,
        attributes: {
          email:this.signupform.controls.email.value
        }
      }

      this.AuthService.signUp(params).then((user) =>{
        this.chageStatusEvent.emit(
          {
            statusChanged:'confirmsignup',
            data:{email:this.signupform.controls.email.value}
          });
      }).catch(err =>{
        this.AuthService.openToast(err.message,'Error','error');
      });
    }
  }
}
