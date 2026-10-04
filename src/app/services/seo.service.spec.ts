import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;
  let document: Document;
  let meta: Meta;
  let title: Title;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoService);
    document = TestBed.inject(DOCUMENT);
    meta = TestBed.inject(Meta);
    title = TestBed.inject(Title);
  });

  it('updates route-specific metadata and the canonical URL', () => {
    service.update({
      title: 'About Elaine Pascale',
      description: 'About page description.',
      path: '/about'
    });

    expect(title.getTitle()).toBe('About Elaine Pascale');
    expect(meta.getTag("name='description'")?.content).toBe('About page description.');
    expect(meta.getTag("property='og:url'")?.content).toBe('https://www.elainepascale.com/about');
    expect(document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href)
      .toBe('https://www.elainepascale.com/about');
  });

  it('marks missing pages as noindex', () => {
    service.update({
      title: '404 | Elaine Pascale',
      description: 'Page not found.',
      robots: 'noindex, nofollow'
    }, '/missing-page');

    expect(meta.getTag("name='robots'")?.content).toBe('noindex, nofollow');
  });
});
