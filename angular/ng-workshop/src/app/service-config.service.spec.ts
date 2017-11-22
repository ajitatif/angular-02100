import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServiceConfig } from './model/service-config';
import { ServiceConfigService } from './service-config.service';

describe('ServiceConfigService', () => {
	let service: ServiceConfigService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
	
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ServiceConfigService ]
    });


	httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(ServiceConfigService);

  });

  it('should return Test Config', (done) => {
  	service.getAllServices().subscribe(result =>  {
  		expect(result[0].name).toBe('Test Config');
  		done();
  	});

  	let request = httpMock.expectOne('http://localhost:8080/admin/');
  	request.flush( [{ name: 'Test Config'}] );

  	httpMock.verify();
  });
});
