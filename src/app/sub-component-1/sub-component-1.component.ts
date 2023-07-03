import { Component, Input } from '@angular/core';

@Component({
  selector: 'sub-component-1',
  templateUrl: './sub-component-1.component.html',
  styleUrls: ['./sub-component-1.component.css']
})
export class SubComponentOne {
    @Input() sommerStudent;
    
    
}
