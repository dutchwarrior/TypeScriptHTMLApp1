class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}


module Listing1_5 {
    var name: string = "steve";
    var heightInCentimeters: number = 182.88;
    var isActive: boolean = true;

    //array
    var names: string[] = ['James', 'Nick', 'Rebecca', 'Lily'];

    export var sayHello: (name: string) => string;

    sayHello = function (name: string) {
        return 'Hello ' + name;
    };

    export var person: { name: string; heightInCentimeters: number; };

     person = {
        name: 'Federico',
        heightInCentimeters: 180.78
    };

}

module Listing1_6 {
    interface Person {
        name: string;
        heightInCentimeters: number;
    }

    export var person: Person = {
        name: 'Federico',
        heightInCentimeters : 190
    }

}

module Listing1_7 {

    interface Monument {
        name: string;
        heightInMeters: number;
    }

    var monument: Monument[] = [];

    monument.push({
        name: 'Statue of Liberty',
        heightInMeters : 46
    });

    monument.push({
        name: 'Peter the Great',
        heightInMeters : 96
    });

    monument.push({
        name: 'Angel of the North',
        heightInMeters : 20
    });

    function compareMonumentHeights(a: Monument, b: Monument) {

        if (a.heightInMeters > b.heightInMeters) {
            return -1;
        }

        if (a.heightInMeters < b.heightInMeters) {
            return 1;
        }

        return 0;
    }

    var monumentsOrderdByHeight = monument.sort(compareMonumentHeights);
    export var tallestMonument = monumentsOrderdByHeight[0];

}

module Listing1_8 {

    enum VehicleType {
        PedalCycle,
        Car,
        Van,
        Bus
    }

    export var type: VehicleType = VehicleType.Car;
    export var typeName = VehicleType[type];
}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();

    console.log(Listing1_5.sayHello("pippo"));
    console.log(Listing1_5.person.name + ", " + Listing1_5.person.heightInCentimeters);
    console.log("nome: " + Listing1_6.person.name + " altezza: " + Listing1_6.person.heightInCentimeters);
    console.log("Edificio più alto: " + Listing1_7.tallestMonument.name);
    console.log("Edificio più alto: " + Listing1_7.tallestMonument.name);
    console.log("Tipo di veicolo: " + Listing1_8.type);
    console.log("Tipo di veicolo2: " + Listing1_8.typeName);
};


