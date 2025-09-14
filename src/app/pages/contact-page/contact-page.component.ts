import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
 
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export default class ContactPageComponent {

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
      this.title.setTitle('Contact - Pokemon SSR');
    this.meta.updateTag({ name: 'description', content: 'Contact page of Pokemon SSR' });
    this.meta.updateTag({ name: 'og:title', content: 'Contact page of Pokemon SSR' });
    this.meta.updateTag({ name: 'og:description', content: 'Contact page of Pokemon SSR' });
    this.meta.updateTag({ name: 'og:image', content: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' });
    this.meta.updateTag({ name: 'og:url', content: 'https://www.google.com' });
    this.meta.updateTag({ name: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'og:locale', content: 'es_ES' });
    this.meta.updateTag({ name: 'og:site_name', content: 'Pokemon SSR' });
  }
  
}
 