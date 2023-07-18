import { CanActivateFn, Router } from '@angular/router';

export const authentiactionGuard: CanActivateFn = (route, state) => {



  if (localStorage.getItem('clear')) {
    return true;
  }
  else {
    alert("you need to login to access this page");
    var router: Router = new Router();
    router.navigateByUrl('/login');
    return false;}

}
