(function() {

var notes = {
    captainProportional: "El multiplicador exacto usado para calcular el daño es proporcional a " +
        "la HP restante del equipo y es mayor cuanto #1 sea la HP. La fórmula sería #2. " +
        "Con la HP completa el aumento de ATK sería #3x, con 1 de HP sería #4x.", 
    fixed: "Daño fijo significa que sobrepasa totalmente la defensa del enemigo.",
    gOrbs: "Los personajes con orbes [G] harán 1.5x de su ATK normal. Estos orbes no se pueden fijar, pero sí les afectan la potenciación de orbes.",
	noFixedPerc: "Los especiales que hacen daño fijo o reducen en un porcentaje la HP del enemigo no se ven  " +
        "afectados por esta habilidad de capitán",
    orb: "La efectividad de los orbes solo cuenta con orbes favorables y desfavorables: " +
        "se aumentan los orbes favorables #1 y se disminuyen los orbes desfavorables #1.",
    poison: "El veneno equivale al ATK del personaje 0.5x como daño fijo al final de cada turno.",
    strongpoison: "El veneno equivale al ATK del personaje 5x como daño fijo al final de cada turno.",
    random: "Rango estimado del daño aleatorio: entre #1 HP y #2 HP.",
    randomHits: "El objetivo de cada uno de los #1 golpes es elegido aleatoriamente.",
    specialProportional: "El multiplicador exacto usado para calcular el daño es proporcional a " +
        "la HP restante del equipo y es mayor cuanto #1 sea la HP. La fórmula sería #2.",
    stages: "El especial puede ser usado tan pronto como se alcance la primera carga.",
    zombie: "La protección solo funciona si se es atacado por un solo enemigo y dejará al equipo con al menos 1 de HP; " +
        "el efecto no se aplicará cuando se sea atacado por varios enemigos a la vez.",
    dmgvacio: "El multiplicador exacto utilizado depende del número de orbes #1 utilizados: " +
        "0 orbes - #2x ATK, 1 orbe - #3x ATK, 2 orbes - #4x ATK, 3 orbes - #5x ATK, 4 orbes - #6x ATK, 5 orbes - #7x ATK, 6 orbes - #8x ATK.",
    perfectDificil: "Reduce el tiempo para hacer un Perfect (La animación del personaje se mantiene igual). ", 
    perfectFacil: "Aumenta el tiempo para hacer un Perfect (La animación del personaje se mantiene igual). ",
    silencio: "Silencio se refiere al efecto que impide activar un especial cargado. ",
    paralisis: "La Parálisis provoca que un personaje tenga la probabilidad de no atacar y romper la cadena. ",
    reducirCargas: "Reducir la carga de los especiales funciona como si se tuviera un turno más para cargar el especial. ",
    boostProportional: "Por debajo del #1% -> #2x, entre el #1% y el #3% -> #4x y por encima del #3% -> #5x. ",
    boostAcumulado: "Los aumentos son acumulativos. Los personajes #1 y #2 recibirán ambos aumentos. ",
    boostNoAcumulado: "Estos aumentos no se acumulan para personajes que tengan ambas clases. ",
	afinidad:"La Afinidad de Tipo aumenta o disminuye el daño entre tipos. Por ejemplo, una unidad [STR] normalmente hace 2x a una unidad [DEX] y a una unidad [QCK] 0.5x. En este caso, con Afinidad de Tipo harán #1x a [DEX] y #2x a [QCK]. ",
	nocuracion: "Este debuff impide completamente utilizar las capacidades de curación (orbes [RCV], especiales, etc.). Este debuff está presente en Akainu Raid Boss."
};

/***********
 * Angular *
 ***********/

var app = angular.module('optc');
var directives = { }, filters = { };

/************************
 * Attribute directives *
 ************************/

directives.toInt = function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(value) { return '' + value; });
            ngModel.$formatters.push(function(value) { return parseInt(value, 10); });
        }
    };
};

/**********************
 * Element directives *
 **********************/

directives.linkButton = function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '../common/views/links.html',
        scope: { exclude: '@' },
        link: function(scope, element, attrs) {
            element.find(".trigger").click(function() {
                element.toggleClass("active"); 
            });
        }
    };
};

/***********
 * Filters * 
 ***********/

filters.decorate = function() {
    return function(input) {
        if (!input) return 'None';
        if (input.constructor == Array) input = input[0];
        if (input.constructor != String) return 'N/A';
        return input
            .replace(/\[?(STR|DEX|QCK|PSY|INT)\]?/g,'<span class="badge $1">$1</span>')
            .replace(/\[RCV\]/g,'<span class="badge RCV">RCV</span>')
            .replace(/\[TND\]/g,'<span class="badge TND"><i class="tnd-icon"></i> TND</span>')
            .replace(/\[VACIO\]/g,'<span class="badge EMPTY"><i class="fa fa-circle-o"></i> VACIO</span>')
            .replace(/\[NEGATIVO\]/g,'<span class="badge BLOCK"><i class="block-icon"></i> NEGATIVO</span>')
            .replace(/\[BOMBA\]/g,'<span class="badge BOMB"><i class="fa fa-bomb"></i> BOMBA</span>')
            .replace(/\[G\]/g,'<span class="badge G">G</span>');
    };
};

filters.range = function() {
    return function(input, total) {
        total = parseInt(total,10);
        for (var i=0;i<total;++i) input.push(i);
        return input;
    };
};

filters.notes = function() {
    return function(input) {
        if (!input) return input;
        return input.trim().replace(/#\{(.+?)\}/g,function(x,y) {
            var tokens = y.trim().split(/:/);
            if (!tokens.length || !notes.hasOwnProperty(tokens[0].trim())) return x;
            return notes[tokens[0].trim()].replace(/#(\d+)/g,function(a,b) {
                return (tokens[parseInt(b,10)] || '').trim();
            });
        });
    };
};

/******************
 * Initialization *
 ******************/

for (var directive in directives)
    app.directive(directive, directives[directive]);

for (var filter in filters)
    app.filter(filter, filters[filter]);

})();
