/*by K'Zeed
version: easy to read*/

class Cat {
	constructor(name, breed, sex, birthYear){
		this.name = name;
		this.breed = breed;
		this.sex = sex;
		this.birthYear = birthYear;
	}

	calcAge(){
		let age = new Date().getFullYear() - this.birthYear;
		return age
	}
}

const milo = new Cat('Milo', 'German Shepherd', 'male', 2018);
const fluff = new Cat('Fluff', 'Labrador', 'female', 2020);

console.log(milo.calcAge());
console.log(fluff.calcAge());

milo.calcAge(); 
fluff.calcAge(); 




class Owl {
	constructor(name, sex, birthYear, lettersDelivered){
		this.name = name;
		this.sex = sex;
		this.birthYear = birthYear;
		this.lettersDelivered = lettersDelivered;
	}

	calcAge(){
		let age = new Date().getFullYear() - this.birthYear;
		return age
	}

	newLetters(number){
		this.lettersDelivered = this.lettersDelivered + number;
	}
}


class Pet {
	constructor(name, sex, birthYear){
		this.name = name;
		this.sex = sex;
		this.birthYear = birthYear;
	}
	
	calcAge(){
		let age = new Date().getFullYear() - this.birthYear;
		return age
	}
}

class Dog extends Pet {
	constructor(name, breed, sex, birthYear){
		super(name, sex, birthYear);
		this.breed = breed;
	}
}

class Owl extends Pet {
	constructor(name, sex, birthYear, lettersDelivered){
		super(name, sex, birthYear);
		this.lettersDelivered = 0;
	}

	newLetters(number){
		this.lettersDelivered = this.lettersDelivered + number;
	}
}

const milo = new Dog('Milo', 'German Shepherd', 'male', 2018);

console.log(milo);