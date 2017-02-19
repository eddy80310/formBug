import { MessageDialogComponent } from './../shared/message-dialog/message-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;

    constructor(
        private router: Router,
        private modalService: NgbModal,
    ) { }


    alertPopup(title: string, content: string) {
        // open modal to check if worked over night
        const modalRef = this.modalService.open(MessageDialogComponent);

        modalRef.componentInstance.titleText = title
        modalRef.componentInstance.bodyText = content

        modalRef.result
            .then(response => {
            })
            .catch(() => {
                return
            })
    }

}