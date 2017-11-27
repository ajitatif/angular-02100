import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';

import { ServiceConfig } from './model/service-config';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  
@Injectable()
export class ServiceConfigService {

  private serviceUrl: string = environment.configServiceUrlBase;

  constructor(private httpClient: HttpClient) {  }
  
  public getAllServices(): Observable<ServiceConfig[]> {
  	return this.httpClient.get<ServiceConfig[]>(this.serviceUrl).pipe(catchError((err, observable) => { console.log(err); return observable; }));
  }

}
