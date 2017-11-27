import { Component, OnInit } from '@angular/core';
import { ServiceConfigService } from '../service-config.service';
import { ServiceConfig } from '../model/service-config';

@Component({
  selector: 'app-service-config',
  templateUrl: './service-config.component.html',
  styleUrls: ['./service-config.component.css'],
  providers: [ ServiceConfigService ]
})
export class ServiceConfigComponent implements OnInit {

  public serviceConfigurations: ServiceConfig[] = [];

  constructor(private configurationService: ServiceConfigService) { }

  ngOnInit() {
  	this.configurationService.getAllServices().subscribe(configs => this.serviceConfigurations = configs);
  	// this.route.snapshot.paramMap.get('id');
  }

}
