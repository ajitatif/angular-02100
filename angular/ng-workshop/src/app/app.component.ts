import { Component, ViewChild, OnInit } from '@angular/core';
import { Trainee } from './model/trainee';
import { TraineeService } from './trainee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TraineeService ]
})
export class AppComponent implements OnInit {
  appTitle = 'Gökalp\'in Evi';

  public trainees: Trainee[] = [];

  public formModel: Trainee;
  private selectedModelIndex: number;

  @ViewChild('traineeForm')
  private traineeForm;

  constructor(private traineeService: TraineeService) {

  }

  public ngOnInit() {
  }

  public titleClicked(event: any) {
  	alert(event);
  }

  public populate() {
  	this.trainees = this.traineeService.getTrainees();
  }

  public selectedTrainee(index: number, model: Trainee) {

  	this.selectedModelIndex = index;
  	this.formModel = JSON.parse(JSON.stringify(model));
  	console.log(this.traineeForm);
  }

  public closeForm() {
  	this.formModel = null;
  }

  public saveForm() {
  	this.traineeService.saveTrainee(this.formModel);
  	this.formModel = null;
  	this.selectedModelIndex = -1;
  }

  public newTrainee() {
  	this.selectedTrainee(this.trainees.length, new Trainee());
  }
}
