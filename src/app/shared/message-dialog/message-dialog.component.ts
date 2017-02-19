import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {

  @Input() titleText: string;
  @Input() bodyText: string;

  constructor(
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  }

}