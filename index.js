console.log('✌️ Practice')
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

console.log('✌️ Core');
class Sensei extends Ninja {
	constructor(name, salud, velocidad, fuerza, sabiduria) {
		super(name, (salud = 200), (velocidad = 10), (fuerza = 10));
		this.sabiduria = sabiduria;
	}
	speakWisdom() {
		console.log(
			'Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.'
		);
		super.drinkSake();
	}
}
const sensei1 = new Sensei('John');
sensei1.speakWisdom();
sensei1.showStats();
