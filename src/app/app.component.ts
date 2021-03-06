import { AlertService } from './services/alert.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppModule } from './app.module';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private changePasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: [''],
    })
  }

  onUpdatePassword() {
    this.alertService.alertPopup('test2', 'asfafa')

  }


}
