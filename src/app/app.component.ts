import { Component , OnInit} from '@angular/core';
import { from } from 'rxjs';
import {FoodServiceService} from './food-service.service'
import {FoodModel} from './foodModel'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'FoodOrderApp';
  foodData: FoodModel[]
  checked: boolean = true;
  selectedValue:any;
  showDone= false;
  showMenu= true;
  items:any=  [];

  constructor(private foodService : FoodServiceService) { }
    ngOnInit() {
      this.getempdata()
  
    }

    getempdata(){
      return this.foodService.getEmployeData()
        .subscribe((res:FoodModel[]) => {
          console.log("below db");
          this.foodData= res;
          console.log(this.foodData);
        });

}
callFunction(event, val){
  console.log(val+ event);
  this.checked= false;

}

callFunctionInput(event, one, t, th, f){
  var store= {
    "name": one,
    "price": t,
    "qty": th
  };
  this.items.push(store)
  this.checked= false;
  this.showDone= true;
  }
  
  show_today_menu(){
    this.showMenu= false;
    this.showDone= false;
  }

}
