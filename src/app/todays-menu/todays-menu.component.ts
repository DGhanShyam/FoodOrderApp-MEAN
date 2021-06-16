import { Component, OnInit  ,Input} from '@angular/core';

@Component({
  selector: 'app-todays-menu',
  templateUrl: './todays-menu.component.html',
  styleUrls: ['./todays-menu.component.css']
})
export class TodaysMenuComponent implements OnInit {
  @Input () currentItem: any; // step 2
  constructor() { }

  ngOnInit(): void {
    console.log(this.currentItem);
    
  }

}
