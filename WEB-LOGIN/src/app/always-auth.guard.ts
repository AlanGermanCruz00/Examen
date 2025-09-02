import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AlwaysAuthGuard {

  constructor(
    private router: Router,

  ) { }

  canActivate() {




  }

}
