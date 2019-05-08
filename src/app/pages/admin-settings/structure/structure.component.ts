import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { AdminsettingsService } from '../adminsettings.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {
  files: TreeNode[] = [];
  selectedFile: TreeNode;
  mainvalue: any;
  //For add div
  addtoggle:any;
 //for location option
 selectedlocationvalue ='Hyderabad';
 selectedOption='India'

  constructor(private structureservice: AdminsettingsService) { }

  ngOnInit() {

    this.structureservice.getstructureJSON()
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
}

private expandRecursive(node:TreeNode, isExpand:boolean){
  node.expanded = isExpand;
  if(node.children){
      node.children.forEach( childNode => {
          this.expandRecursive(childNode, isExpand);
      } );
  }
}

expandAll(){
  this.files.forEach( node => {
      this.expandRecursive(node, true);
  } );
}

collapseAll(){
  this.files.forEach( node => {
      this.expandRecursive(node, false);
  } );
}

}
