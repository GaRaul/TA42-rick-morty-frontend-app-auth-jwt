import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: any;
  private user$: Subject<any>;

  constructor() {
    this.user$ = new Subject();
  }

  addUser(role: any) {
    this.user = role;
    this.user$.next(this.user);
  }

  getUser$(): Observable<any> {
    return this.user$.asObservable();
  }
}
