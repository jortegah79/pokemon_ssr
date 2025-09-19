import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'pokemon/:id',
    renderMode: RenderMode.Server  // Renderizado bajo demanda
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
