import { Component } from '@angular/core';
import { UtilityServiceService } from './services/utility-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularSubject';

  userName:string = "UxTrends";

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
