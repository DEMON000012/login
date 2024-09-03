import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: { '(click)': 'onConfirmLeavingPage($event)' },
})
export class SafeLinkDirective {
  queryPrams = input('myapp', { alias: 'appSafeLink' });
  constructor() {}
  onConfirmLeavingPage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want leave the page?');
    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + this.queryPrams;
      return;
    } else {
      event.preventDefault();
    }
  }
}
