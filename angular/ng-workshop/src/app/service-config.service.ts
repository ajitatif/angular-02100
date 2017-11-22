import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { ServiceConfig } from './model/service-config';

@Injectable()
export class ServiceConfigService {

  private serviceUrl: string = 'http://localhost:8080/admin/';

  constructor(private httpClient: HttpClient) {  }

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  public getAllServices(): Observable<ServiceConfig[]> {
  	return this.httpClient.get<ServiceConfig[]>(this.serviceUrl).pipe(catchError((err, observable) => { console.log(err); return observable; }));
  }

}
