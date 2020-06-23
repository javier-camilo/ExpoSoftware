import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluadorGuard implements CanActivate {z
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user = this.authService.getCurrentUser();
      
      try {
            
          if (user.rol == 'Docente evaluador') {
            return true;
          }
          else if(user==null){
            this.router.navigateByUrl('/login');
          }

        
      } catch (error) {
        this.router.navigateByUrl('/login');
      }
    return true;
  }
  
  constructor(private authService : AuthService, private router: Router) {
  }

  

}
