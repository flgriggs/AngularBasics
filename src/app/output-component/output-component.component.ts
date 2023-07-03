import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.css']
})
export class OutputComponentComponent {
  nameStudent = "";
  emailStudent = "";
  phoneStudent = "";


  @Output() sommerStudent = new EventEmitter<{}>();

  addNewStudent() {
    this.sommerStudent.emit(
      {
        name:this.nameStudent,
        email:this.emailStudent,
        phone:this.phoneStudent
      }
    );
  }

  onKeyName(value: string) {
    
    this.nameStudent = value;
  }

  onKeyEmail(value: string) {
    this.emailStudent = value;
  }

  onKeyPhone(value: string) {
    this.phoneStudent = value;
  }


}
