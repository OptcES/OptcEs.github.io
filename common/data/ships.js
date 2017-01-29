window.ships = [

    // Do NOT change the order of the ships
    
    { // 0
        name: 'Dinghy',
        thumb: 'ship_0001_c.png',
        description: 'Aumenta la HP 1.3x y aumenta el RCV del capitán 120 puntos',
        hp: function(p) {
            return p.boatLevel < 6  ? 1.0  :
                   p.boatLevel < 10 ? 1.1 :
                                      1.3 ;
        },
        rcvStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 30, 40, 50, 60, 70, 80, 90, 100, 110, 120 ][p.boatLevel - 1];
        }
    },

    { // 1
        name: 'Merry Go',
        thumb: 'ship_0002_c.png',
        description: 'Aumenta el ATK 1.5x y aumenta la HP del capitán 300 puntos',
        hpStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 100, 130, 150, 170, 190, 210, 230, 250, 270, 300 ][p.boatLevel - 1];
        },
        atk: function(p) {
            return p.boatLevel < 6  ? 1.0 :
                   p.boatLevel < 10 ? 1.2 :
                                      1.5 ;
        }
    },

    { // 2
        name: 'Navy Ship',
        thumb: 'ship_0003_c.png',
        description: 'Aumenta la HP 1.5x y aumenta el ATK de los personajes Shooter 100 puntos',
        atkStatic: function(p) {
            return !p.unit.class.has('Shooter') ? 0 :
                [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ][p.boatLevel -1];
        },
        hp: function(p) {
            return p.boatLevel < 5  ? 1.0 :
                   p.boatLevel < 10 ? 1.2 :
                                      1.5 ;
        }
    },

    { // 3
        name: 'Baratie',
        thumb: 'ship_0004_c.png',
        description: 'Aumenta la HP del capitán 2.000 puntos',
        hpStatic: function(p) {
            return p.slot != 1 ? 0 :
                [ 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 2000 ][p.boatLevel - 1];
        }
    },

    { // 4
        name: 'Coffin Boat',
        thumb: 'ship_0005_c.png',
        description: 'Aumenta el ATK y la HP de los personajes Slasher 1.5x y reduce el RCV del capitán 700 puntos',
        atk: function(p) {
            return !p.unit.class.has('Slasher') ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Slasher') ? 1 :
                [ 1.1, 1.1, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        rcvStatic: function(p) {
            return p.slot != 1 ? 0 : -700;
        }
    },

    { // 5
        name: 'Miss Love Duck',
        thumb: 'ship_0006_c.png',
        description: 'Reduce el daño recibido un 10% y aumenta el ATK de los personajes Striker 100 puntos',
        atkStatic: function(p) {
            return !p.unit.class.has('Striker') ? 0 : [ 0, 0, 0, 0, 0, 0, 50, 50, 50, 100 ][p.boatLevel -1];
        }
    },

    { // 6
        name: 'Merry Go Flying',
        thumb: 'ship_0007_c.png',
        description: 'Aumenta el ATK 1.2x y recupera 350 puntos de HP al final de cada turno',
        atk: function(p) {
            return p.boatLevel < 7 ? 1 : [ 1.1, 1.1, 1.1, 1.2 ][p.boatLevel - 7];
        },
        heal: function(p) {
            return [ 50, 100, 125, 150, 175, 200, 250, 275, 300, 350 ][p.boatLevel - 1];
        }
    },

    { // 7
        name: 'Moby Dick',
        thumb: 'ship_0008_c1.png',
        description: 'Aumenta el ATK 1.5x, la HP 1.4x y reduce la HP un 50% al inicio de la batalla',
        atk: function(p) {
            return [ 1.2, 1.2, 1.25, 1.3, 1.3, 1.35, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return [ 1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.25, 1.3, 1.4 ][p.boatLevel - 1];
        }
    },

    { // 8
        name: 'Big Top',
        thumb: 'ship_0009_c1.png',
        description: 'Aumenta el ATK de los personajes de cost igual o inferior a 20 1.5x y aumenta la HP de los personajes con 4 estrellas o menos 1.4x',
        atk: function(p) {
            var matching = p.unit.cost <= 15 || (p.unit.cost <= 20 && p.boatLevel >= 6);
            return matching ? [ 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.stars <= 4 ? [ 1.1, 1.2, 1.3, 1.3 ,1.3, 1.3, 1.3, 1.4, 1.4, 1.4 ][p.boatLevel - 1] : 1;
        }
    },

    { // 9
        name: 'Bezan Black',
        thumb: 'ship_0010_c1.png',
        description: 'Reduce la carga de los especiales 1 turno al inicio de la batalla y aumenta el ATK de los personajes QCK 1.4x y su HP 1.3x',
        atk: function(p) {
            return p.unit.type != 'QCK' ? 1 : [ 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.25, 1.3, 1.3, 1.4 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return p.unit.type != 'QCK' ? 1 : [ 1, 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.3, 1.3 ][p.boatLevel - 1];
        }
    },

    { // 10
        name: 'Aokiji\'s Bike',
        thumb: 'ship_0011_c1.png',
        description: 'Aumenta el ATK y la HP de los personajes Striker 1.5x y reduce la probabilidad de aparición de los orbes RCV',
        atk: function(p) {
            return !p.unit.class.has('Striker') ? 1 :
                [ 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Striker') ? 1 :
                [ 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        }
    },

    { // 11
        name: 'Ace\'s Striker',
        thumb: 'ship_0012_c1.png',
        description: 'Aumenta el ATK de los personajes Shooter 1.5x y su HP 1.3x y reduce la carga de los especiales 1 turno al inicio de la batalla',
        atk: function(p) {
            return !p.unit.class.has('Shooter') ? 1 :
                [ 1.2, 1.2, 1.2, 1.25, 1.25, 1.3, 1.3, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Shooter') ? 1 :
                [ 1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.25, 1.25, 1.3, 1.3 ][p.boatLevel - 1];
        }
    },

    { // 12
        name: 'Dreadnaught Sabre',
        thumb: 'ship_0014_c1.png',
        description: 'Aumenta la HP 1.5x y hace 5.000 puntos de daño sin tipo al final de cada turno',
        hp: function(p) {
            return [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.5][p.boatLevel - 1];
        }
    },

    { // 13
        name: 'Thousand Sunny',
        thumb: 'ship_0013_c.png',
        description: 'Aumenta el ATK 1.5x. Especial: hace 50.000 puntos de daño sin tipo a todos los enemigos (carga: 15 turnos).',
        atk: function(p) {
            return [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.5 ][p.boatLevel - 1];
        }
    },
    
    { //14
        name: 'Kuja Pirate Ship',
        thumb: 'ship_0015_c1.png',
        description: 'Aumenta el ATK de los personajes Free Spirit 1.5x y su HP 1.35x y reduce la HP de todos los demás un 99%. Especial: recupera 6.500 puntos de HP (carga: 15 turnos).',
        atk: function(p) {
            return !p.unit.class.has('Free Spirit') ? 1 :
            [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Free Spirit') ? 0.01 :
                [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.35 ][p.boatLevel - 1];
        }
    },
    
    { //15
        name: 'Ark Maxim',
        thumb: 'ship_0016_c1.png',
        description: 'Aumenta el ATK de los personajes QCK y PSY 1.5x y su HP 1.2x. Especial: Hace 56.500 puntos de daño fijo (carga: 17 turnos)',
        atk: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "QCK" ? [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "QCK" ? [ 1, 1, 1, 1, 1, 1.1, 1.1, 1.1, 1.1, 1.2 ][p.boatLevel - 1] : 1;
        }
    },
    
    { // 16
        name: 'Red Force',
        thumb: 'ship_0017_c1.png',
        description: 'Aumenta el ATK de los personajes Cerebral 1.5x y su HP 1.35x y aumenta la probabilidad de obtener orbes favorables para los personajes Cerebral',
        atk: function(p) {
            return  !p.unit.class.has('Cerebral') ? 1 : [ 1.0, 1.2, 1.2, 1.2, 1.25, 1.3, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Cerebral') ? 1 : [ 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.3, 1.3, 1.35 ][p.boatLevel - 1];
        }
    },
    
    { // 17
        name: '2nd Anniversary Thousand Sunny',
        thumb: 'ship_0018_c1.png',
        description: 'Aumenta el ATK 1.2x',
        atk: function(p) { return 1.2; },
    }, 
    
    { // 18
        name: 'Sun Pirates Ship',
        thumb: 'ship_0019_c.png',
        description: 'Aumenta el ATK y la HP de los personajes Fighter dependiendo del número de personajes Fighter que haya en el equipo. Reduce gravemente el ATK y la HP de los personajes que no sean Fighter',
        atk: function(p) {
            return !p.unit.class.has('Fighter') ? .05 :
                [ p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.01 : p.classCount.Fighter == 3 ? 1.02 : p.classCount.Fighter == 4 ? 1.03 : p.classCount.Fighter == 5 ? 1.04 : p.classCount.Fighter == 6 ? 1.05 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.04 : p.classCount.Fighter == 5 ? 1.05 : p.classCount.Fighter == 6 ? 1.1 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.05 : p.classCount.Fighter == 5 ? 1.1 : p.classCount.Fighter == 6 ? 1.15 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.05 : p.classCount.Fighter == 4 ? 1.1 : p.classCount.Fighter == 5 ? 1.15 : p.classCount.Fighter == 6 ? 1.2 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.25 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.3 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.25 : p.classCount.Fighter == 6 ? 1.35 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.4 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.45 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.2 : p.classCount.Fighter == 4 ? 1.3 : p.classCount.Fighter == 5 ? 1.4 : p.classCount.Fighter == 6 ? 1.5 : 0][p.boatLevel - 1];
        },
        hp: function(p) {
            return !p.unit.class.has('Fighter') ? .05 :
                [ p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.01 : p.classCount.Fighter == 3 ? 1.02 : p.classCount.Fighter == 4 ? 1.03 : p.classCount.Fighter == 5 ? 1.04 : p.classCount.Fighter == 6 ? 1.05 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.04 : p.classCount.Fighter == 5 ? 1.05 : p.classCount.Fighter == 6 ? 1.1 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.03 : p.classCount.Fighter == 4 ? 1.05 : p.classCount.Fighter == 5 ? 1.1 : p.classCount.Fighter == 6 ? 1.15 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.02 : p.classCount.Fighter == 3 ? 1.05 : p.classCount.Fighter == 4 ? 1.1 : p.classCount.Fighter == 5 ? 1.15 : p.classCount.Fighter == 6 ? 1.2 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.25 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.05 : p.classCount.Fighter == 3 ? 1.1 : p.classCount.Fighter == 4 ? 1.15 : p.classCount.Fighter == 5 ? 1.2 : p.classCount.Fighter == 6 ? 1.3 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.25 : p.classCount.Fighter == 6 ? 1.35 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.4 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.15 : p.classCount.Fighter == 4 ? 1.2 : p.classCount.Fighter == 5 ? 1.3 : p.classCount.Fighter == 6 ? 1.45 : 0, p.classCount.Fighter == 1 ? 1 : p.classCount.Fighter == 2 ? 1.1 : p.classCount.Fighter == 3 ? 1.2 : p.classCount.Fighter == 4 ? 1.3 : p.classCount.Fighter == 5 ? 1.4 : p.classCount.Fighter == 6 ? 1.5 : 0][p.boatLevel - 1];
        }
    },
    
    { // 19
        name: "Doflamingo Ship",
        thumb: 'ship_0020_c.png',
        description: 'Aumenta el ATK de los personajes Driven 1.5x y su HP 1.35x. Hace más fáciles de acertar los Perfects para los personajes Driven. Especial: añade 0.2x al multiplicador de la cadena (carga: 15 turnos)',
        atk: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5][p.boatLevel - 1]},
        hp: function(p) { return !p.unit.class.has('Driven') ? 1 : [ 1.1, 1.1, 1.1, 1.15, 1.2, 1.2, 1.2, 1.2, 1.2, 1.35][p.boatLevel - 1]}
    },
    
    { // 20
        name: 'The Rocket Man',
        thumb: 'ship_0021_c.png',
        description: 'Aumenta el ATK de los personajes Powerhouse 1.55x y recupera una cantidad de HP variable al final de cada turno en función del número de personajes Powerhouse que haya en el equipo. (Al MAX, cura 900 puntos por turno con 6 personajes Powerhouse). Reduce gravemente las stats de los personajes que no sean Powerhouse. Especial: Hace 99.999 puntos de daño sin tipo a un solo enemigo (carga: 17 turnos)',
        atk: function(p) {
            return !p.unit.class.has('Powerhouse') ? 1 : [ 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.4, 1.55 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return p.unit.class.has('Powerhouse') ? 1 : 0.01;
        },
        heal: function(p) {
            return p.classCount.Powerhouse == 1 ? 1 : p.classCount.Powerhouse == 2 ? 10 : p.classCount.Powerhouse == 3 ? 20 : p.classCount.Powerhouse == 4 ? 30 : p.classCount.Powerhouse == 5 ? 100 : p.classCount.Powerhouse == 6 ? 900 : 0;  
        },
        
    },
    
    { // 21
        name: 'Burning Whitebeard Ship',
        thumb: 'ship_0022_c.png',
        description: 'Aumenta la HP 1.3x',
        hp: function(p) {
            return 1.3;
        },
    },
    
    { // 22
        name: 'Garp Ship',
        thumb: 'ship_0023_c.png',
        description: 'Aumenta el ATK de los personajes STR y PSY 1.5x y su HP 1.25x',
        atk: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "STR" ? [ 1.2, 1.25, 1.25, 1.3, 1.35, 1.35, 1.4, 1.4, 1.45, 1.5 ][p.boatLevel - 1] : 1;
        },
        hp: function(p) {
            return p.unit.type == "PSY" || p.unit.type == "STR" ? [ 1.1, 1.1, 1.15, 1.15, 1.15, 1.2, 1.2, 1.25, 1.25, 1.25 ][p.boatLevel - 1] : 1;
        },
    },
    
    { //23
        name: 'Polar Tang',
        thumb: 'ship_0024_c.png',
        description: 'Aumenta el ATK de los personajes Slasher y Free Spirit 1.5x y su HP 1.25x. Especial: recupera 10.000 puntos de HP si se encuentra baja (carga: 18 turnos)',
        atk: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? 1 : [ 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.5 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return !(p.unit.class.has('Slasher') || p.unit.class.has('Free Spirit')) ? 1 : [ 1.1, 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.25, 1.25 ][p.boatLevel - 1];
        },        
    },
	
	{ // 24
        name: 'New Year\'s Big Top',
        thumb: 'ship_0025_c.png',
        description: 'Aumenta el ATK de los personajes 1.2x',
        atk: function(p) {
            return 1.2;
		},
	},
	
	{ // 25
        name: 'Thousand Sunny: Coated',
        thumb: 'ship_0026_c.png',
        description: 'Aumenta el ATK de todos los personajes 1.5x. Especial: reduce el daño recibido un 50% durante 1 turno (carga: 16 turnos).',
        atk: function(p) {
            return [ 1.3, 1.3, 1.3, 1.3, 1.35, 1.35, 1.35, 1.4, 1.45, 1.5 ][p.boatLevel - 1];
        }
    },
	
    { // 26
        name: 'Kizaru\'s Cannonball',
        thumb: null,
        description: 'Aumenta el ATK de los personajes Shooter 1.55x y su HP 1.2x y reduce la carga de todos los especiales 1 turno al principio de la batalla. Especial: Reduce la HP actual de los enemigos un 7% (carga: 15 turnos).',

        atk: function(p) {
            return [ 1.2, 1.2, 1.3, 1.3, 1.3, 1.4, 1.4, 1.4, 1.4, 1.55 ][p.boatLevel - 1];
        },
        hp: function(p) {
            return [ 1.1, 1.1, 1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2 ][p.boatLevel - 1];
        }
    },
];
