class hero {
    constructor(name, age, type, attack) {

        this.name = name
        this.age = age
        this.type = type
        this.executeAttack = attack

        console.log(`Usuário: ${name} - idade: ${age}`);
    }

    attack() {

        console.log(`O ${this.type} atacou usando ${this.executeAttack}`);
    }

}

function createType() {
    let indexHero = Math.floor(Math.random() * 4)

    let typeOfHero = ["mago", "guerreiro", "monge", "ninja"]

    let createdHero = typeOfHero[indexHero]

    return createdHero
}

let createdHero = createType()

function action(createdHero) {
    switch (createdHero) {
        case "mago": return "magia";

        case "guerreiro": return "espada";

        case "monge": return "artes marciais";

        case "ninja": return "shuriken";
    }

}

let actionOfAttack = action(createdHero)

let hero1 = new hero("Rael", 30, createdHero, actionOfAttack)

hero1.attack()