var Greeter = /** @class */ (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
var Listing1_5;
(function (Listing1_5) {
    var name = "steve";
    var heightInCentimeters = 182.88;
    var isActive = true;
    //array
    var names = ['James', 'Nick', 'Rebecca', 'Lily'];
    Listing1_5.sayHello = function (name) {
        return 'Hello ' + name;
    };
    Listing1_5.person = {
        name: 'Federico',
        heightInCentimeters: 180.78
    };
})(Listing1_5 || (Listing1_5 = {}));
var Listing1_6;
(function (Listing1_6) {
    Listing1_6.person = {
        name: 'Federico',
        heightInCentimeters: 190
    };
})(Listing1_6 || (Listing1_6 = {}));
var Listing1_7;
(function (Listing1_7) {
    var monument = [];
    monument.push({
        name: 'Statue of Liberty',
        heightInMeters: 46
    });
    monument.push({
        name: 'Peter the Great',
        heightInMeters: 96
    });
    monument.push({
        name: 'Angel of the North',
        heightInMeters: 20
    });
    function compareMonumentHeights(a, b) {
        if (a.heightInMeters > b.heightInMeters) {
            return -1;
        }
        if (a.heightInMeters < b.heightInMeters) {
            return 1;
        }
        return 0;
    }
    var monumentsOrderdByHeight = monument.sort(compareMonumentHeights);
    Listing1_7.tallestMonument = monumentsOrderdByHeight[0];
})(Listing1_7 || (Listing1_7 = {}));
var Listing1_8;
(function (Listing1_8) {
    var VehicleType;
    (function (VehicleType) {
        VehicleType[VehicleType["PedalCycle"] = 0] = "PedalCycle";
        VehicleType[VehicleType["Car"] = 1] = "Car";
        VehicleType[VehicleType["Van"] = 2] = "Van";
        VehicleType[VehicleType["Bus"] = 3] = "Bus";
    })(VehicleType || (VehicleType = {}));
    Listing1_8.type = VehicleType.Car;
    Listing1_8.typeName = VehicleType[Listing1_8.type];
})(Listing1_8 || (Listing1_8 = {}));
window.onload = function () {
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
//# sourceMappingURL=app.js.map