
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Breadcrumb } from '../model/breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcruiResolverService implements Resolve<Breadcrumb> {

  constructor(private readonly http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Breadcrumb> {
    const id = route.params['id'];
    return this.http.get<Breadcrumb>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

}
