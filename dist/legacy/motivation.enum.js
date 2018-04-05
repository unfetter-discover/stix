"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Motivation;
(function (Motivation) {
    Motivation["accidental"] = "accidental";
    Motivation["coercion"] = "coercion";
    Motivation["dominance"] = "dominance";
    Motivation["ideology"] = "ideology";
    Motivation["notoriety"] = "notoriety";
    Motivation["organizational-gain"] = "organizational gain";
    Motivation["personal-gain"] = "personal gain";
    Motivation["personal-satisfaction"] = "personal satisfaction";
    Motivation["revenge"] = "revenge";
    Motivation["unpredictable"] = "unpredictable";
})(Motivation = exports.Motivation || (exports.Motivation = {}));
// tslint:disable-next-line:no-namespace
(function (Motivation) {
    function values() {
        return [
            Motivation.accidental, Motivation.coercion, Motivation.dominance,
            Motivation['organizational-gain'], Motivation['personal-gain'],
            Motivation['personal-satisfaction'], Motivation.ideology, Motivation.notoriety,
            Motivation.revenge, Motivation.unpredictable,
        ];
    }
    Motivation.values = values;
})(Motivation = exports.Motivation || (exports.Motivation = {}));
