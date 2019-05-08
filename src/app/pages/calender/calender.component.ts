import { Component, OnInit, ViewChild } from '@angular/core';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarComponent } from 'ng-fullcalendar';
import { MatDialog } from '@angular/material';
import { EventdialogComponent } from './eventdialog/eventdialog.component';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  constructor( public dialog: MatDialog) { }
  options: OptionsInput;
  eventsModel: any;
  @ViewChild('fullcalendar') fullcalendar: CalendarComponent;
  ngOnInit() {
    this.options = {
      editable: true,
      events: [{
        title: 'Long Event',
        start: this.yearMonth + '-07',
        end: this.yearMonth + '-10'
      }],
      // customButtons: {
      //   myCustomButton: {
      //     text: 'custom!',
      //     click: function() {
      //       alert('clicked the custom button!');
      //     }
      //   }
      // },
      header: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      plugins: [ dayGridPlugin]
    };
 
  }
  // dateClick(model) {
  //   console.log(model);
  // }
  updateEvents() {
    this.eventsModel = [{
      title: 'Updaten Event',
      start: this.yearMonth + '-08',
      end: this.yearMonth + '-10'
    }];
  }
  get yearMonth(): string {
    const dateObj = new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }
  openMeetingDialog(event) {
    console.log('Hello');
    let dialogRef = this.dialog.open(EventdialogComponent, {
      data: event,
      height: 'auto',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe();
  }
}
 
