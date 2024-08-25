import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'parent',
        loadChildren: () => import('./parent/parent-routing.module').then(m => m.ParentRoutingModule)
    }

];
