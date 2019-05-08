import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from './calender.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventdialogComponent } from './eventdialog/eventdialog.component';
import { ModalModule } from 'ngx-bootstrap';
import { CalendarModule } from 'angular-calendar';
export const routes = [
  { path: '', component: CalenderComponent, pathMatch: 'full' }
];
@NgModule({
  imports: [
    CommonModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    CalendarModule
  ],
  declarations: [CalenderComponent, EventdialogComponent],
  entryComponents:[EventdialogComponent]
})
export class CalenderModule { }
