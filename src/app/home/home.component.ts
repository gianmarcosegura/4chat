import { Component, OnInit } from '@angular/core';
import { User } from '../intefaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    friends: User[];

    constructor(private userService: UserService) {
        this.friends = this.userService.getFriends();
    }

    ngOnInit() {}

}