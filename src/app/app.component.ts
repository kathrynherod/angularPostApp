import { UserService } from './__services/user.service';
import { AuthService } from './__services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router
  ) {
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
        if (!returnUrl) return;
        localStorage.removeItem('returnUrl');
      }
    });
  }
}
