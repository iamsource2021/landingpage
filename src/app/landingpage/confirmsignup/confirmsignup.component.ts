import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Confirmsignup } from './confirmsignup';
import { AuthService } from './../services/auth.service';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import { FormControl, Validators } from "@angular/forms";
import { I18n } from "aws-amplify";
import './../traslations/languages';
import { environment } from './../../../environments/environment';
import { ButtonstageBehaviorsubjectService } from './buttonstage-behaviorsubject.service';
import { Subscription,Observable } from 'rxjs';
@Component({
  selector: 'app-confirmsignup',
  templateUrl: './confirmsignup.component.html',
  styleUrls: ['./confirmsignup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmsignupComponent implements OnInit {

  public i18n = I18n;

  buttonStates: Observable<string>;

  private _buttonStates:Subscription;

  public ConfirmsignupModel = new Confirmsignup('','');

  @Output() chageStatusEvent = new EventEmitter<object>();

  @Input() email: string;

  @Input() set language(lang: string) {
    this.i18n.setLanguage(lang);
  }
  get language() { return this.language}

  public code  = new FormControl(
    "", [
      Validators.required
    ]
  );

  public emailFormControl = new FormControl(
    "", [
      Validators.required
    ]
  );
  constructor(
    private AuthService: AuthService,
    private _ButtonstageBehaviorsubjectService:ButtonstageBehaviorsubjectService
    ) {
    this.i18n.setLanguage("en-US");
  }

  ngOnInit(): void {
    this._buttonStates = this._ButtonstageBehaviorsubjectService.currentdata
    .subscribe(this.getButtonStates);
    this.emailFormControl.setValue(this.email);
    const authState = new Promise((resolve,reject) => {
      onAuthUIStateChange((authState, authData) => {
        resolve(authState);
      });
    })

    authState.then(response=>{
      this.chageStatusEvent.emit(
        {
          statusChanged:response
        });
    });
  }

  ngOnDestroy() {
    this._buttonStates.unsubscribe();
  }

  getButtonStates = (data) =>{
    this.buttonStates = this._ButtonstageBehaviorsubjectService.currentdata;
  }

  setButtonStates(stage){
    this._ButtonstageBehaviorsubjectService.updatedData(stage);
  }

  onConfirmSignUp() {
    this.setButtonStates('disabled');
    this.AuthService.confirmSignUp(
      this.emailFormControl.value,
      this.code.value)
      .then((response) => {
        window.location.href = environment.urlplataform;
      })
      .catch((error) => {
        this.AuthService.openToast(error.message, 'Error', 'error');
        this.setButtonStates('init');
      });
  }

  onResendSignUp(){
    this.setButtonStates('disabled');
    this.AuthService.resendSignUp(this.emailFormControl.value)
    .then((resolve) =>{this.setButtonStates('init')})
    .catch((error) => {
      this.AuthService.openToast(error.message,'Error','error');
    });
  }
}
