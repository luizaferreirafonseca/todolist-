import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from  '@angular/router';

export const guardsGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return true;
};
