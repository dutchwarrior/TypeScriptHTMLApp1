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

    export enum BoxSize {
        Small,
        Medium
    }

    export enum BoxSize {
        Large = 2,
        ExtraLarge
    }
}

module Listing1_10 {

    enum DiscFlags {
        None = 0,
        Drive = 1,
        Influence = 2,
        Steadiness = 4,
        Conscientiousness = 8
    }

    // Using flags
    var personality = DiscFlags.Drive | DiscFlags.Conscientiousness;

    // Testing flags

    // true
    export var hasD = (personality & DiscFlags.Drive) == DiscFlags.Drive;

    // false
    export var hasI = (personality & DiscFlags.Influence) == DiscFlags.Influence;

    // false
    export var hasS = (personality & DiscFlags.Steadiness) == DiscFlags.Steadiness;

    // true
    export var hasC = (personality & DiscFlags.Conscientiousness) == DiscFlags.Conscientiousness;

}

module Listing1_11 {

    interface House {
        bedrooms: number;
        bathrooms: number;
    }

    interface Mansion {
        bedrooms: number;
        bathrooms: number;
        butlers: number;
    }

    var avenueRoad: House = {
        bedrooms: 11,
        bathrooms: 10
    }

    export var mansion: Mansion = <Mansion>avenueRoad;

}

module Listing1_17 {
    export var truthyString = "Truthy string";
    export var falseyString: string;

    export var invertedTest = !truthyString;
    export var truthyTest = !!truthyString;
    export var falseyTest = !!falseyString;

    export var prova = () => {

        if (truthyString) {
            console.log("truthyString is not undefinited");
        }

        if (!falseyString) {
            console.log("falseyString is undefinited");
        }

    }
}

module Listing1_24 {

    function getAverage(a: number, b: number, c: number): string {
        var total = a + b + c;
        var avarage: number = total / 3;
        return "This is the average: " + avarage;
    }

    var result: string = getAverage(4, 3, 8);
}


module Listing1_25 {

    function getAverage(a: number, b: number, c?: number) :string {
        var total = a;
        var count = 1;
        total += b;
        count++;

        if (c) {
            total += c;
            count++;
        }

        var avarage: number = total / count;
        return "the average is " + avarage + " parametri passati in input: "+ count;
    }

    export var result: string = getAverage(10, 6);
    export var result2: string = getAverage(10, 6, 10);
}

module Listing1_26 {
    function concatene(items: String[], separator = ",", beginAt = 0, endAt = items.length): string {
        var result: string = "";

        for (var i = beginAt; i < endAt; i++) {
            result += items[i];
            if (i < (endAt - 1)) {
                result += separator;
            }
        }

        return result;
    }

    var items : string[]= ["A", "B", "C"];
    var result: string = concatene(items);
    var partialResult = concatene(items, "-", 1 );
}

module Listing1_27 {

    function getAverage(...a: number[]) :string {
        var total: number = 0;
        var count: number = 0;

        for (var i = 0; i <a.length; i++) {
            total += a[i];
            count++;
        }

        var average = total / count;
        return "this is the average: " + average;
    }

    export var result = getAverage(2, 4, 6, 8, 10);
}

module Listing1_28 {

    function getAverage(a: string, b: string, c: string): string;
    function getAverage(a: number, b: number, c: number): string;

    function getAverage(a: any, b: any, c: any): string {
        var total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
        var average = total / 3;
        return 'The average is ' + average;
    }

    var result = getAverage(4, 3, 8); // 5
}

module Listing1_29 {
    export class HandlerFactory {
        getHandler(type: "Ramdom"): RamdomHandler;
        getHandler(type: "Reversed"): ReversedHandler;
        getHandler(type: string): Handler;
        getHandler(type: string): Handler {
            if (type === "Ramdom") {
                return new RamdomHandler();
            } else if (type === "Reversed") {
                return new ReversedHandler();
            } else {
                return new Handler();
            }
        }
    }

    export class Handler {
        handle() {
            console.log("Handled!");
        }
    }

    export class ReversedHandler extends Handler {
        handle() {
            console.log("!deldnaH");
        }
    }

    export class RamdomHandler extends Handler {
        handle() {
            console.log("daH!denl");
        }
    }

    export class RamdomHandler2 extends Handler {
        handle() {
            console.log("daH!denl2");
        }
    }
}

module Listing1_31 {

    var addNumber = function (a: number, b: number) {
        return a + b;
    }

    var addNumber = (a: number, b: number) => {
        return a + b;
    } 

    var addNumber = (a: number, b: number) => a + b;
}

module Listing1_32 {
    export var makeNum = (f: string, l: string) => ({ name: f, surname: l })
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
    console.log("Index veicolo: " + Listing1_8.type);
    console.log("Descrizione veicolo: " + Listing1_8.typeName);
    console.log("Descrizione Box: " + Listing1_8.BoxSize[Listing1_8.BoxSize.ExtraLarge]);
    console.log("flal1 :" + Listing1_10.hasD);
    console.log("flal2 :" + Listing1_10.hasI);
    console.log("flal3 :" + Listing1_10.hasS);
    console.log("flal4 :" + Listing1_10.hasC);
    console.log("mansion : " + Listing1_11.mansion);
    console.log("invertedTest:" + Listing1_17.invertedTest);
    console.log("truthyTest:" + Listing1_17.truthyTest);
    console.log("falseyTest:" + Listing1_17.falseyTest);
    Listing1_17.prova();
    console.log(Listing1_25.result);
    console.log(Listing1_25.result2);
    console.log(Listing1_27.result);
    var factory: Listing1_29.HandlerFactory = new Listing1_29.HandlerFactory();
    console.log(factory.getHandler("Ramdom").handle);
    console.log(factory.getHandler("Ramdom2").handle);

    var person = Listing1_32.makeNum("Federico", "Salute");
    console.log("Nome:" + person.name + ", cognome " + person.surname);
};


