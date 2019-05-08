import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-eventdialog',
  templateUrl: './eventdialog.component.html',
  styleUrls: ['./eventdialog.component.scss']
})
export class EventdialogComponent implements OnInit {
  public form:FormGroup;
  constructor(public dialogRef: MatDialogRef<EventdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({ 
        'title': ['', Validators.required],            
        'start': ['', Validators.required], 
        'end': '',
        'isEdit' : false
      });
    }

  ngOnInit() {
  }

}
