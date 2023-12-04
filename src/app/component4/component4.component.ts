import { Component } from '@angular/core';
import { UtilityServiceService } from '../services/utility-service.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component {

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
