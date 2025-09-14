import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export default class AboutPageComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About - Pokemon SSR');
    this.meta.updateTag({ name: 'description', content: 'About page of Pokemon SSR' });
    this.meta.updateTag({ name: 'og:title', content: 'About page of Pokemon SSR' });
    this.meta.updateTag({ name: 'og:description', content: 'About page of Pokemon SSR' });
    this.meta.updateTag({ name: 'og:image', content: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' });
    this.meta.updateTag({ name: 'og:url', content: 'https://www.google.com' });
    this.meta.updateTag({ name: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'og:locale', content: 'es_ES' });
    this.meta.updateTag({ name: 'og:site_name', content: 'Pokemon SSR' });
  }
}

