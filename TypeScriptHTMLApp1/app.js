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
var Prova = /** @class */ (function () {
    function Prova() {
    }
    Prova.prototype.setProva = function (prova1) {
        this.prova1 = prova1;
    };
    Prova.prototype.creaAlert = function () {
        alert(this.prova1);
    };
    return Prova;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
    var prova = new Prova();
    prova.setProva("sono la prima prova");
    prova.creaAlert();
};
//# sourceMappingURL=app.js.map