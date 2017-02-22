import { Component, OnInit } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[];
  userName : string;

  constructor() {
    this.users = [{name : "Ole", age : 1},{name : "Simon", age : 4},{name : "Simone", age : 4}];
  }

  addUser(userString : string)
{
  var tempUser = new User();

  tempUser.name =userString;
  tempUser.age = 1;
  this.users.push(tempUser);

}
  ngOnInit() {
  }



}
