export class Trainee {
	
	public id: number;
	public name: string;
	public surname: string;
	public gender: string;

	public static create(name: string, surname: string, gender: string, id?: number): Trainee {
		let trainee = new Trainee();
		trainee.name = name;
		trainee.surname = surname; 
		trainee.gender = gender;
		if (id != undefined && id != null) {
			trainee.id = id;
		}
		return trainee;
	}
}
