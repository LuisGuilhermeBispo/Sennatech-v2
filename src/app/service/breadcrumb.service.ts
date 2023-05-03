import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

interface Breadcrumb {
  text: string;
  route: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbSubject = new BehaviorSubject<Breadcrumb[]>([]);

  getBreadcrumb() {
    return this.breadcrumbSubject.asObservable().pipe(
      map(breadcrumb => {
        return breadcrumb.map(item => {
          return { route: item.route, text: item.text };
        });
      })
    );
  }

  setBreadcrumb(breadcrumb: { text: string, route: string }[]) {
    const breadcrumbArray = breadcrumb.map(item => ({ text: item.text, route: item.route }));
    this.breadcrumbSubject.next(breadcrumbArray);
  }
}
