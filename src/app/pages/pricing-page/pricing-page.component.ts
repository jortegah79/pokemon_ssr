import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { log } from 'console';

@Component({
 
  imports: [],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css'
})
export default class PricingPageComponent {

  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);
  ngOnInit(): void {
    console.log(this.platform);
    if(isPlatformServer(this.platform)){
      this.title.setTitle('Pricing-SERVER - Pokemon SSR');
    }

    //document.title = 'Pricing - Pokemon SSR';
    // this.title.setTitle('Pricing - Pokemon SSR');
   /*  this.meta.updateTag({ name: 'description', content: 'Pricing page of Pokemon SSR' });
    this.meta.updateTag({ name: 'og:title', content: 'Pricing page of Pokemon SSR' });
    this.meta.updateTag({ name: 'og:description', content: 'Pricing page of Pokemon SSR' });
    this.meta.updateTag({ name: 'og:image', content: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' });
    this.meta.updateTag({ name: 'og:url', content: 'https://www.google.com' });
    this.meta.updateTag({ name: 'og:type', content: 'website' });
    this.meta.updateTag({ name: 'og:locale', content: 'es_ES' });
    this.meta.updateTag({ name: 'og:site_name', content: 'Pokemon SSR' }); */
  }
}
