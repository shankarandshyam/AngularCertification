import { Component, OnInit, ViewChild, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MatDialog} from '@angular/material';
import { UpsertcandidateComponent } from './upsertcandidate/upsertcandidate.component';
import { FormControl,FormBuilder,FormGroup,Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
 modalRef: BsModalRef;
 addCandidateForm:FormGroup;


 public  users = [{name:"shyam", email: 'shankarandshyam@gmail.com', phone: '7896541230', city: 'Hyderabad', status: 'Active' },
                  {name:"Ram", email: 'ramu833@gmail.com', phone: '1236547890', city: 'Vijayawada', status: 'Active' }];

 addCandidateModalToggle(template: TemplateRef<any>, type)
 {
    if(type==1)
    {
      this.modalRef = this.modalService.show(template);
    }
    else if(type==2)
    {   
      this.modalRef.hide();
    }
   }


   constructor(private modalService: BsModalService, private fb:FormBuilder) {
    this.createUserForm();
    }
    createUserForm() {
      this.addCandidateForm = this.fb.group({
        candname:new FormControl('',[Validators.maxLength(50),Validators.required]),
        candemail:new FormControl('',[Validators.maxLength(50),Validators.required])

      });

    }
    emailValidator(control: FormControl): {[key: string]: any} {
      var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;    
      if (control.value && !emailRegexp.test(control.value)) {
          return {invalidEmail: true};
      }
  }

    get candname(){ return this.addCandidateForm.get('candname');}
    get candemail(){ return this.addCandidateForm.get('candemail');}

  //constructor(public dialog: MatDialog) { }
  // openMeetingDialog() {
  //   let dialogRef = this.dialog.open(UpsertcandidateComponent, {
  //     data: event,
  //     height: 'auto',
  //     width: '600px',
  //   });

  //   dialogRef.afterClosed().subscribe();
  // }

  ngOnInit() {
  }

}
