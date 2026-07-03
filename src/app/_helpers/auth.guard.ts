import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../_services/token.service';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);  
  const tokenService: TokenService = inject(TokenService);

  if (tokenService.isLogged()) {
    // Utilisateur authentifié, autorise la navigation
    return true;
  } else {
    // Utilisateur non authentifié, redirige vers la page de connexion
    return router.createUrlTree(['/login']);
  }

}
