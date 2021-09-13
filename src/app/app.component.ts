import { Component } from '@angular/core';

import {ModalService} from './modal/modal.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   private bodyText: string;
 
    constructor(private modalService: ModalService) {
    }
 
    ngOnInit() {
        this.bodyText = 'This text can be updated in modal 1';
    }
 
    openModal(id: string) {
        this.modalService.open(id);
    }
 
    closeModal(id: string) {
        this.modalService.close(id);
    }


}
