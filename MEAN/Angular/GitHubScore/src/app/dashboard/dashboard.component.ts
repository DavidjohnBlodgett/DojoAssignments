import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
      user = {
          username: ''
      };
      result;
      score = 0;

      constructor(private _githubService: GithubService) { }

      ngOnInit() {
      }

      onSubmit() {
          this._githubService.retrieveUser(this.user.username, (userObj) => {
              this.result = userObj;
              this.setScore();
          });
      }
      setScore() {
          this.score = this.result.public_repos + this.result.followers;
      }

}
