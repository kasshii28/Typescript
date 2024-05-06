interface Flyable {
    fly(): void;
}

class Bird implements Flyable {
    name: string;
    constructor(name: string){
        this.name = name;
    }

    fly(){
        console.log(`${this.name}「パタパタ」`);
    }
}

const bat: Bird = new Bird("コウモリ");

console.log(bat)
