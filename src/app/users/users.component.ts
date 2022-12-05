import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public usuarios :Array<any>=[]

  constructor(
   private  UserService: UsersService
  ){
  this.UserService.getUsers().subscribe((resp:any)=>{
    console.log(resp)
    this.usuarios =resp
  })
  
  }
  
  }