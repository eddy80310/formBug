import { Router } from '@angular/router';
import { AlertService } from './../services/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private changePasswordForm: FormGroup;


  constructor(
    private router: Router,
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
