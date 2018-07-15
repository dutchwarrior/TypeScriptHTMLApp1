var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    var BoxSize;
    (function (BoxSize) {
        BoxSize[BoxSize["Small"] = 0] = "Small";
        BoxSize[BoxSize["Medium"] = 1] = "Medium";
    })(BoxSize = Listing1_8.BoxSize || (Listing1_8.BoxSize = {}));
    (function (BoxSize) {
        BoxSize[BoxSize["Large"] = 2] = "Large";
        BoxSize[BoxSize["ExtraLarge"] = 3] = "ExtraLarge";
    })(BoxSize = Listing1_8.BoxSize || (Listing1_8.BoxSize = {}));
})(Listing1_8 || (Listing1_8 = {}));
var Listing1_10;
(function (Listing1_10) {
    var DiscFlags;
    (function (DiscFlags) {
        DiscFlags[DiscFlags["None"] = 0] = "None";
        DiscFlags[DiscFlags["Drive"] = 1] = "Drive";
        DiscFlags[DiscFlags["Influence"] = 2] = "Influence";
        DiscFlags[DiscFlags["Steadiness"] = 4] = "Steadiness";
        DiscFlags[DiscFlags["Conscientiousness"] = 8] = "Conscientiousness";
    })(DiscFlags || (DiscFlags = {}));
    // Using flags
    var personality = DiscFlags.Drive | DiscFlags.Conscientiousness;
    // Testing flags
    // true
    Listing1_10.hasD = (personality & DiscFlags.Drive) == DiscFlags.Drive;
    // false
    Listing1_10.hasI = (personality & DiscFlags.Influence) == DiscFlags.Influence;
    // false
    Listing1_10.hasS = (personality & DiscFlags.Steadiness) == DiscFlags.Steadiness;
    // true
    Listing1_10.hasC = (personality & DiscFlags.Conscientiousness) == DiscFlags.Conscientiousness;
})(Listing1_10 || (Listing1_10 = {}));
var Listing1_11;
(function (Listing1_11) {
    var avenueRoad = {
        bedrooms: 11,
        bathrooms: 10
    };
    Listing1_11.mansion = avenueRoad;
})(Listing1_11 || (Listing1_11 = {}));
var Listing1_17;
(function (Listing1_17) {
    Listing1_17.truthyString = "Truthy string";
    Listing1_17.invertedTest = !Listing1_17.truthyString;
    Listing1_17.truthyTest = !!Listing1_17.truthyString;
    Listing1_17.falseyTest = !!Listing1_17.falseyString;
    Listing1_17.prova = function () {
        if (Listing1_17.truthyString) {
            console.log("truthyString is not undefinited");
        }
        if (!Listing1_17.falseyString) {
            console.log("falseyString is undefinited");
        }
    };
})(Listing1_17 || (Listing1_17 = {}));
var Listing1_24;
(function (Listing1_24) {
    function getAverage(a, b, c) {
        var total = a + b + c;
        var avarage = total / 3;
        return "This is the average: " + avarage;
    }
    var result = getAverage(4, 3, 8);
})(Listing1_24 || (Listing1_24 = {}));
var Listing1_25;
(function (Listing1_25) {
    function getAverage(a, b, c) {
        var total = a;
        var count = 1;
        total += b;
        count++;
        if (c) {
            total += c;
            count++;
        }
        var avarage = total / count;
        return "the average is " + avarage + " parametri passati in input: " + count;
    }
    Listing1_25.result = getAverage(10, 6);
    Listing1_25.result2 = getAverage(10, 6, 10);
})(Listing1_25 || (Listing1_25 = {}));
var Listing1_26;
(function (Listing1_26) {
    function concatene(items, separator, beginAt, endAt) {
        if (separator === void 0) { separator = ","; }
        if (beginAt === void 0) { beginAt = 0; }
        if (endAt === void 0) { endAt = items.length; }
        var result = "";
        for (var i = beginAt; i < endAt; i++) {
            result += items[i];
            if (i < (endAt - 1)) {
                result += separator;
            }
        }
        return result;
    }
    var items = ["A", "B", "C"];
    var result = concatene(items);
    var partialResult = concatene(items, "-", 1);
})(Listing1_26 || (Listing1_26 = {}));
var Listing1_27;
(function (Listing1_27) {
    function getAverage() {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        var total = 0;
        var count = 0;
        for (var i = 0; i < a.length; i++) {
            total += a[i];
            count++;
        }
        var average = total / count;
        return "this is the average: " + average;
    }
    Listing1_27.result = getAverage(2, 4, 6, 8, 10);
})(Listing1_27 || (Listing1_27 = {}));
var Listing1_28;
(function (Listing1_28) {
    function getAverage(a, b, c) {
        var total = parseInt(a, 10) + parseInt(b, 10) + parseInt(c, 10);
        var average = total / 3;
        return 'The average is ' + average;
    }
    var result = getAverage(4, 3, 8); // 5
})(Listing1_28 || (Listing1_28 = {}));
var Listing1_29;
(function (Listing1_29) {
    var HandlerFactory = /** @class */ (function () {
        function HandlerFactory() {
        }
        HandlerFactory.prototype.getHandler = function (type) {
            if (type === "Ramdom") {
                return new RamdomHandler();
            }
            else if (type === "Reversed") {
                return new ReversedHandler();
            }
            else {
                return new Handler();
            }
        };
        return HandlerFactory;
    }());
    Listing1_29.HandlerFactory = HandlerFactory;
    var Handler = /** @class */ (function () {
        function Handler() {
        }
        Handler.prototype.handle = function () {
            console.log("Handled!");
        };
        return Handler;
    }());
    Listing1_29.Handler = Handler;
    var ReversedHandler = /** @class */ (function (_super) {
        __extends(ReversedHandler, _super);
        function ReversedHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ReversedHandler.prototype.handle = function () {
            console.log("!deldnaH");
        };
        return ReversedHandler;
    }(Handler));
    Listing1_29.ReversedHandler = ReversedHandler;
    var RamdomHandler = /** @class */ (function (_super) {
        __extends(RamdomHandler, _super);
        function RamdomHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RamdomHandler.prototype.handle = function () {
            console.log("daH!denl");
        };
        return RamdomHandler;
    }(Handler));
    Listing1_29.RamdomHandler = RamdomHandler;
    var RamdomHandler2 = /** @class */ (function (_super) {
        __extends(RamdomHandler2, _super);
        function RamdomHandler2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RamdomHandler2.prototype.handle = function () {
            console.log("daH!denl2");
        };
        return RamdomHandler2;
    }(Handler));
    Listing1_29.RamdomHandler2 = RamdomHandler2;
})(Listing1_29 || (Listing1_29 = {}));
var Listing1_31;
(function (Listing1_31) {
    var addNumber = function (a, b) {
        return a + b;
    };
    var addNumber = function (a, b) {
        return a + b;
    };
    var addNumber = function (a, b) { return a + b; };
})(Listing1_31 || (Listing1_31 = {}));
var Listing1_32;
(function (Listing1_32) {
    Listing1_32.makeNum = function (f, l) { return ({ name: f, surname: l }); };
})(Listing1_32 || (Listing1_32 = {}));
window.onload = function () {
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
    var factory = new Listing1_29.HandlerFactory();
    console.log(factory.getHandler("Ramdom").handle);
    console.log(factory.getHandler("Ramdom2").handle);
    var person = Listing1_32.makeNum("Federico", "Salute");
    console.log("Nome:" + person.name + ", cognome " + person.surname);
};
//# sourceMappingURL=app.js.map