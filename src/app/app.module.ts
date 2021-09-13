import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModalComponent } from './modal/modal.component';
// MDB Angular Free
    import { ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md';
import { ModalService } from './modal/modal.service'
@NgModule({
  imports:      [ BrowserModule, FormsModule ,ModalModule.forRoot(), TooltipModule, PopoverModule, ButtonsModule ],
  declarations: [ AppComponent, HelloComponent, ModalComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ModalService]
})
export class AppModule { }
