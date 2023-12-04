import { Component } from '@angular/core';
import { UtilityServiceService } from '../services/utility-service.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component {

  userName : string = "UxTrends";

  constructor(private utility_service: UtilityServiceService){
    this.utility_service.userName.subscribe(name =>{
      this.userName = name
    })
  }

  updateUserName(uname : any){
    // this.userName = name.value
    this.utility_service.userName.next(uname.value)
  }

}
