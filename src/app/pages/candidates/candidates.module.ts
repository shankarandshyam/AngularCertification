import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesComponent } from './candidates.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ModalDirective, ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpsertcandidateComponent } from './upsertcandidate/upsertcandidate.component';

export const routes = [
  { path: '', component: CandidatesComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[UpsertcandidateComponent],
  declarations: [CandidatesComponent, UpsertcandidateComponent]
})
export class CandidatesModule { }
