class hero {
    constructor(name, age, type) {
        
        this.name = name
        this.age = age
        this.type = type

        console.log(`Usuário: ${name} - idade: ${age}`);
    }

    action(type){
        switch (type) {
            case "mago": return "magia"
                
            case "guerreiro": return "espada";
                
            case "monge": return "artes marciais";
                
            case "ninja": return "shuriken";
                
        }
    }
    attack(action) {
      
           console.log(`O ${this.type} atacou usando ${action}`);
    }

}
let indexHero = Math.floor(Math.random() * 4)

let typeOfHero = ["mago", "guerreiro", "monge", "ninja"]

let type = typeOfHero[indexHero]

//function 


let hero1 = new hero("Rael", 30, type)

hero1.attack()

