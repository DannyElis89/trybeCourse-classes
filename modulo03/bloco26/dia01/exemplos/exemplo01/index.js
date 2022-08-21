// let idade = 33;

var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Sunday"] = 1] = "Sunday";
    DaysOfWeek[DaysOfWeek["Monday"] = 2] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 3] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 4] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 5] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 6] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 7] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));

var arcoIris;
(function (arcoIris) {
    arcoIris["Red"] = "Vermelho";
    arcoIris["Orange"] = "Laranja";
    arcoIris["Yellow"] = "Amarelo";
    arcoIris["Green"] = "Verde";
    arcoIris["Blue"] = "Azul";
    arcoIris["Indigo"] = "Anil";
    arcoIris["Violet"] = "Violeta";
})(arcoIris || (arcoIris = {}));

var acoes;
(function (acoes) {
    acoes[acoes["Save"] = 0] = "Save";
    acoes[acoes["Print"] = 1] = "Print";
    acoes[acoes["Open"] = 2] = "Open";
    acoes[acoes["View"] = 3] = "View";
    acoes[acoes["Close"] = 4] = "Close";
})(acoes || (acoes = {}));

var pontosCardeais;
(function (pontosCardeais) {
    pontosCardeais["Norte"] = "N";
    pontosCardeais["Sul"] = "S";
    pontosCardeais["Leste"] = "L";
    pontosCardeais["Oeste"] = "O";
})(pontosCardeais || (pontosCardeais = {}));
