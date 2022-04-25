class Ninja {
	constructor(name, salud, velocidad, fuerza) {
		this.name = name;
		this.salud = salud || 100;
		this.velocidad = velocidad || 3;
		this.fuerza = fuerza;
	}
	sayName() {
		console.log(this.name);
	}
	showStats() {
		console.log(
			`Nombre: ${this.name}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`
		);
	}
	drinkSake() {
		this.salud += 10;
	}
}

const ninja1 = new Ninja('Hyabusa');
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
