import { Injectable } from '@angular/core';
import { Trainee } from './model/trainee';

@Injectable()
export class TraineeService {

  constructor() { }

  private trainees = [ 
  		Trainee.create('Gökalp', 'Gürbüzer', 'M', 1),
  		Trainee.create('Arda', 'Gürbüzer', 'M', 2),
  		Trainee.create('Figen', 'Gürbüzer', 'F', 3)
	];

  public getTrainees(): Trainee[] {

  	return this.trainees;
  }

  public saveTrainee(trainee: Trainee): void {

  	if (trainee.id == undefined || trainee.id == null) {
  		this.trainees.push(trainee);
  	} else {
  		for (let i = 0; i < this.trainees.length; i++) {
  			if (this.trainees[i].id === trainee.id) {
  				this.trainees[i] = trainee;
  				break;
  			}
  		}
  	}
  }
}
