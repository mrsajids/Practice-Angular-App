import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
    {
        path: '',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
    },
    {
        path: '',
        loadChildren: () => import('./holiday/holiday-routing.module').then(m => m.HolidayRoutingModule)
    },
    {
        path: 'parent',
        loadChildren: () => import('./parent/parent-routing.module').then(m => m.ParentRoutingModule)
    }

];
