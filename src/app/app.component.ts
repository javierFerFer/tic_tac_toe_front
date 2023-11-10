import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _angularFireAuth: AngularFireAuth,
    private _user: UserService) {

    this._angularFireAuth.user.subscribe((user) => {
      user?.getIdTokenResult().then(({ token }) => {
        this._user.check(token).subscribe();
      })
    })

  }
}
