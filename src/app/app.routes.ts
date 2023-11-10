import { Route } from '@angular/router';

export const routes: Route[] = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        children: [
            {
                path: '',
                loadChildren: () => import('./components/Home/home.module').then(m => m.HomeModule)
            }
        ]
    }
];
