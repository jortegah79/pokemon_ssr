import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // {
  // path:'pokemons/page/:id',    
  // renderMode: RenderMode.Server
  // },
  // {
  //   path: 'pokemon/:id',
  //   renderMode: RenderMode.Server  // Renderizado bajo demanda
  // },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
