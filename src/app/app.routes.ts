import { Routes } from '@angular/router';
import AboutPageComponent from './pages/about-page/about-page.component';
import PricingPageComponent from './pages/pricing-page/pricing-page.component';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [
    {
        path: 'about',
        loadComponent: () => import('./pages/about-page/about-page.component')
    },
    {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing-page/pricing-page.component')
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact-page/contact-page.component')
    },
    {
        path: 'pokemons/page/:id',
        loadComponent: () => import('./pages/pokemons-page/pokemons-page.component')
    },
    {
        path: 'pokemon/:id',
        loadComponent: () => import('./pages/pokemon-page/pokemon-page.component'),      
    },
    {
        path: '**',
        redirectTo: 'pokemons/page/1'
    }
];
