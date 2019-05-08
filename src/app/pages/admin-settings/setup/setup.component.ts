import { AdminsettingsService } from './../adminsettings.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { TreeNode } from 'primeng/api';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  files: TreeNode[] = [];
  selectedFile: TreeNode;
  mainvalue: any;
  inputfile: any;
  somevalue: any;
  addtoggle: any;
  selectedradiobtn= 1;
  rangeValues: number[] = [];
  rangeValuesFilled: number[] = [0,40];
  isScopeApplicable: boolean = false;

  //For dropdown
 selectedOption = 'daily';
 selectedOptionKpi = 'Numeric';
 

  @ViewChild('addDimensionModal') public addDimensionModal: ModalDirective;
  @ViewChild('addKraModal') public addKraModal: ModalDirective;
  @ViewChild('addKpiModal') public addKpiModal: ModalDirective;
  @ViewChild('deleteModal') public deleteModal: ModalDirective;






  constructor(private setupservice: AdminsettingsService) { }

  addDimensionModalToggle(e) {
    if (e == 1) {
      this.addDimensionModal.show();
    } else {
      this.addDimensionModal.hide();
    }
  }
  onsubmit() {
    console.log(1)
  }
  addKraModalToggle(e) {
    if (e == 1) {
      this.addKraModal.show();
    } else {
      this.addKraModal.hide();
    }
  }

  addKpiModalToggle(e) {
    if (e == 1) {
      this.addKpiModal.show();
    } else {
      this.addKpiModal.hide();
    }
  }


  deleteModalToggle(e) {
    if (e == 1) {
      this.deleteModal.show();
    } else {
      this.deleteModal.hide();
    }
  }



  disablefileinput(e) {
    this.inputfile = e;

  }

  ngOnInit() {
    this.setupservice.getJSON()
      .subscribe(
        files => {

          this.files = files['data'];
          console.log(this.files)
        },
        error => {
        });
  }

  unselectFile() {
    this.files = null;
  }

  expandAll() {
    this.files.forEach(node => {
      this.expandRecursive(node, true);
    });
  }

  collapseAll() {
    this.files.forEach(node => {
      this.expandRecursive(node, false);
    });
  }

  adddiv(e){
  
    this.addtoggle = e;
    console.log(this.addtoggle);
  
}



  nodeSelect(event) {
    // console.log(event['node']['label']);
    this.mainvalue = event['node']['label'];
    console.log(this.mainvalue);
    if(this.mainvalue== event['node']['label']){
      this.addtoggle = null;
    }
    // if (this.mainvalue == 'Prospects' || this.mainvalue == 'Active Leads' || this.mainvalue == 'Future Leads' || this.mainvalue == 'Parallel Projects' || this.mainvalue == 'Conversion Ratio' || this.mainvalue == 'Wins' || this.mainvalue == 'Losses' || this.mainvalue == 'Glassdoor Review' || this.mainvalue == 'Google Review' || this.mainvalue == 'Voice' || this.mainvalue == 'Social' || this.mainvalue == 'Mail') {
    //   this.mainvalue = 'Reputation';
    // }
  }


  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

  testing(e){
if(e==1){
this.somevalue=1;
console.log(this.somevalue);
}
else{

}
  }

}
