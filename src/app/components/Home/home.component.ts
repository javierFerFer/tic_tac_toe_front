import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@firebase/auth';
import { take } from 'rxjs';
import { UserService } from '../../services/user.service';


@Component({
    selector: 'monorepo-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent {

    test: number = 2;

    constructor(public angularFireAuth: AngularFireAuth,
        private _userService: UserService) {

    }

    login() {
        // encapsular esto en servicio
        this.angularFireAuth.signInWithPopup(new GoogleAuthProvider());
    }
    logout() {
        // encapsular esto en servicio
        this.angularFireAuth.signOut();
        this._userService.logOut()
            .pipe(
                take(1)
            )
            .subscribe();
    }
}
