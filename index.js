class hero {
    constructor(){ (name, age, type)
        this.name = name
        this.age = age
        this.type = type    
    }
        attack() {
            switch (this.type){ 
                case "mago": "magia";
                    break;
                case "guerreiro": "espada";
                    break;
                case "monge": "artes marciais";
                    break;
                case "ninja": "shuriken";
                    break;
            }

            console.log(`O ${this.type} atacou usando ${this.attack}`);
        }

}
