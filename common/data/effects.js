window.effects = {

    // always use unique IDs, and don't ever change an ID once you've set it
    // IDs must always be greater than 0
    // last ID used: 41
    // Use p.type instead of p.unit.type here

    'Baroque Works (pre-v4.0)': {
        description: 'Las stats de los personajes no Fighter se reducen un 90%',
        thumb: 462,
        id: 1, // don't change this
        atk: function(p) { return !p.class.has('Fighter') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Fighter') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Fighter') ? 0.1 : 1; }
    },

    'Baroque Works': {
        description: 'Las stats de los personajes no Fighter, no Booster y no Evolver se reducen un 90%',
        thumb: 462,
        id: 2, // don't change this
        atk: function(p) { return p.class.has('Fighter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('Fighter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('Fighter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; }
    },

    'Prisionero Crocodile (pre-v4.0)': {
        description: 'Las stats de los personajes no Striker se reducen un 90%',
        thumb: 510,
        id: 3, // don't change this
        atk: function(p) { return !p.class.has('Striker') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Striker') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Striker') ? 0.1 : 1; }
    },

    'Prisionero Crocodile': {
        description: 'Las stats de los personajes no Striker, no Booster y no Evolver se reducen un 90%',
        thumb: 510,
        id: 4, // don't change this
        atk: function(p) { return p.class.has('Striker') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('Striker') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('Striker') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; }
    },

    'Carcelera Domino (pre-v4.0)': {
        description: 'Las stats de los personajes no Shooter se reducen un 90%',
        thumb: 538,
        id: 5, // don't change this
        atk: function(p) { return !p.class.has('Shooter') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Shooter') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Shooter') ? 0.1 : 1; }
    },

    'Carcelera Domino': {
        description: 'Las stats de los personajes no Shooter, no Booster y no Evolver se reducen un 90%',
        thumb: 538,
        id: 6, // don't change this
        atk: function(p) { return p.class.has('Shooter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('Shooter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('Shooter') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; }
    },

    'Jefa Guardiana Sadi-chan (pre-v4.0)': {
        description: 'Las stats de los personajes no Slasher se reducen un 90%',
        thumb: 550,
        id: 7, // don't change this
        atk: function(p) { return !p.class.has('Slasher') ? 0.1 : 1; },
        hp: function(p)  { return !p.class.has('Slasher') ? 0.1 : 1; },
        rcv: function(p) { return !p.class.has('Slasher') ? 0.1 : 1; }
    },

    'Jefa Guardiana Sadi-chan': {
        description: 'Las stats de los personajes no Slasher, no Booster y no Evolver se reducen un 90%',
        thumb: 550,
        id: 8, // don't change this
        atk: function(p) { return p.class.has('Slasher') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('Slasher') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('Slasher') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; }
    },

    'Guerreros de Shandia': {
        // Note: El debuf se aplica a los ataques normales, pero no a los especiales
        description: 'Las stats de los personajes que no pertenezcan a Skypea se reducen un 20%',
        thumb: 583,
        id: 9, // don't change this
        atk: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584, 780, 781 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        },
        hp: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        },
        rcv: function(p) {
            var id = p.number + 1,
                matching = ((id > 463 && id < 497) || (id > 539 && id < 547 ) ||
                    [ 313, 314, 503, 504, 581, 582, 583, 584 ].indexOf(id) != -1);
            return !matching ? 0.8 : 1;
        }
    },

    'Guerreros de Shandia, Última Ronda': {
        // Note: El debuf se aplica a los ataques normales, pero no a los especiales
        // Note 2: The 50% reduction is applied to enemy's defense as well, for whatever reason
        description: 'Las stats de los personajes que no pertenezcan a Skypea se reducen un 20% y el ATK de los personajes PSY se reduce un 50%',
        thumb: 583,
        id: 10, // don't change this
        atk: function(p) {
            var result = window.effects['Warriors of Shandia'].atk(p);
            return (p.type == 'PSY' ? 0.5 : 1) * result;
        },
        hp: function(p) { return window.effects['Warriors of Shandia'].hp(p); },
        rcv: function(p) { return window.effects['Warriors of Shandia'].rcv(p); },
    },

    'Gan Fall': {
        description: 'Las stats de los personajes no Free Spirit, no Booster y no Evolver se reducen un 90%',
        thumb: 713,
        id: 11, // don't change this
        atk: function(p) { return p.class.has('Free Spirit') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        hp: function(p)  { return p.class.has('Free Spirit') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; },
        rcv: function(p) { return p.class.has('Free Spirit') || p.class.has('Booster') || p.class.has('Evolver') ? 1 : 0.1; }
    },

    'Potenciación de orbes (1.05x)': {
        description: 'Potenciación de orbes 1.05x',
        thumb: 768,
        id: 12, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.05 : (p.orb == 0.5 ? 20/21 : 1); }
    },

    'Potenciación de orbes (1.10x)': {
        description: 'Potenciación de orbes 1.10x',
        thumb: 415,
        id: 13, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.1 : (p.orb == 0.5 ? 10/11 : 1); }
    },

    'Limitador multiplicador de cadena (2.0x)': {
        description: 'Multiplicador de cadena limitado a 2.0x',
        thumb: 772,
        id: 14, // don't change this
        chainLimiter: function() { return 2.0; }
    },

    'Escudo de golpes (11 golpes)': {
        description: 'Anula los 11 primeros golpes de la cadena',
        thumb: 794,
        id: 15, // don't change this
        comboShield: 11
    },

    'Nightmare Luffy, 2ª pantalla': {
        description: 'Multiplicador de cadena limitado a 2.0x y anula los 11 primeros golpes de la cadena',
        thumb: 795,
        id: 16, // don't change this
        comboShield: 11,
        chainLimiter: function() { return 2.0; }
    },

    'Reducción de ATK (50%)': {
        description: 'El ATK de todos los personajes se reduce un 50%',
        thumb: 546,
        id: 17, // don't change this
        atk: function(p) { return 0.5; }
    },

    'Reducción de ATK (70%)': {
        description: 'El ATK de todos los personajes se reduce un 70%',
        thumb: 765,
        id: 18, // don't change this
        atk: function(p) { return 0.3; }
    },

    'Kuma Raid Boss': {
        description: 'El daño de los personajes STR y DEX se anula',
        thumb: 836,
        id: 19,  // don't change this
        atk: function(p) { return p.type == 'STR' || p.type == 'DEX' ? 0 : 1; }
    },

    'Shu (Expert)': {
        description: 'El ATK de los personajes Slasher se reduce un 50%',
        thumb: 773,
        id: 20, // don't change this
        atk: function(p) { return p.class.has("Slasher") ? 0.5 : 1; }
    },

    'Shu (Master)': {
        description: 'El ATK de los personajes Slasher se reduce un 70%',
        thumb: 773,
        id: 21, // don't change this
        atk: function(p) { return p.class.has("Slasher") ? 0.3 : 1; }
    },

    'Reducción de ATK (20%)': {
        description: 'El ATK de todos los personajes se reduce un 20%',
        thumb: 567,
        id: 22, // don't change this
        atk: function(p) { return 0.8; }
    },

    'Escudo de golpes (26 golpes)': {
        description: 'Anula los 26 primeros golpes de la cadena',
        thumb: 375,
        id: 23, // don't change this
        comboShield: 26
    },

    '¡Aquí está la G!': {
        description: 'Activa los orbes [G] cuando Lao-G no se encuentra en el equipo',
        thumb: 880,
        id: 24, // don't change this
        gOrbsEnabled: true
    },
    
    'Franky Coliseo': {
        description: 'Activa los orbes [G] y potenciación de orbes 1.5x',
        thumb: 560,
        id: 25, // don't change this
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 10/15 : 1); },
        gOrbsEnabled: true
    },

    'Killer Coliseo': {
        description: 'El ATK de todos los personajes se reduce un 95%',
        thumb: 1043,
        id: 26, // don't change this
        atk: function(p) { return 0.05; }
    },
    
    'Kid Coliseo': {
        description: 'Escudo de Perfects (2 golpes)',
        thumb: 966,
        id: 27,
        comboShield: 2,
        comboType: 'Perfect'
    },
    
    'Fukuro Coliseo': {
        description: 'Escudo de Perfects (3 golpes)',
        thumb: 758,
        id: 28,
        comboShield: 3,
        comboType: 'Perfect'
    },
    
    'Cricket Coliseo': {
        description: 'Escudo de daño limitado (200,000)',
        thumb: 428,
        id: 29,
        barrierThreshold: 200000,
        barrierReduction: 0.99
    },
    
    'Sabo Raid Boss': {
        description: 'Reduce el multiplicador de cadena a la mitad',
        thumb: 1047,
        id: 30,
        chainModifier: function(p) { return 0.5; }
    },
    
    'Pirate Ship Competition! \"Dead End\" Opens!': {
        description: 'STR/DEX/QCK ATK 1.6x y HP 0.1x. INT/PSY ATK 0.2x y HP 2x',
        thumb: 1072,
        id: 31,
        atk: function(p) { return (p.type == "STR" || p.type == "DEX" || p.type == "QCK") ? 1.6 : 0.2; },
        hp: function(p) { return (p.type == "STR" || p.type == "DEX" || p.type == "QCK") ? 0.1 : 2.0; }
        
    },
    
    'Escudo de 3 golpes Good': {
        description: 'Hay que hacer 3 Goods antes de poder hacer daño',
        thumb: null,
        id: 32,
        comboShield: 3,
        comboType: 'Good'
    },
    
    'Escudo de 3 golpes Great': {
        description: 'Hay que hacer 3 Greats antes de poder hacer daño',
        thumb: null,
        id: 33,
        comboShield: 3,
        comboType: 'Great'
    },
    
    'Escudo de 10 golpes': {
        description: 'Anula los 10 primeros golpes de la cadena',
        thumb: null,
        id: 34,
        comboShield: 10
    },
    
    'Potenciación de orbes 1.25x': {
        description: 'Usado por Law Navidad en el Coliseo de Saga',
        thumb: 856,
        id: 35,
        orb: function(p) { return p.orb == 2.0 ? 1.5 : (p.orb == 0.5 ? 10/15 : 1); }
    },
    
    'Limitador de daño de 700k': {
        description: 'Usado por Saga. No se puede hacer más de 700,000 puntos de daño con un golpe',
        thumb: 1089,
        id: 36,
        barrierThreshold: 700000,
        barrierReduction: 0.99
    },
    
    'Dr. Indigo & Scarlet! Quincenal': {
        //OLD description: 'Boosts ATK of Driven and Powerhouse characters by 2x, other classes get .5x ATK. Boosts HP of Slasher and Fighter characters by 2x, other classes get .5x HP.',
        description: 'Aumenta el ATK de los personajes Driven 2x y aumenta la HP de los personajes Powerhouse 2x.',
        thumb: 1095,
        id: 37,
        atk: function(p) { 
/*                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('Driven')) { boost1 = 2.0}
                            if(p.class.has('Powerhouse')) { boost2 = 2.0}
                            if(!(p.class.has('Driven')&&p.class.has('Powerhouse')) && p.class.constructor === Array){
                            if(!p.class.has('Driven')){ boost3 = 0.5}
                            if(!p.class.has('Powerhouse')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('Driven') || p.class.has('Powerhouse'))){ boost5 = 0.5}
                            }
                            return 1*boost1*boost2*boost3*boost4*boost5;*/ 
                            return p.class.has('Driven') ? 2 : 1;
                        },
        hp: function(p) {
/*                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('Fighter')) { boost1 = 2.0}
                            if(p.class.has('Slasher')) { boost2 = 2.0}
                            if(!(p.class.has('Fighter')&&p.class.has('Slasher')) && p.class.constructor === Array){
                            if(!p.class.has('Fighter')){ boost3 = 0.5}
                            if(!p.class.has('Slasher')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('Fighter') || p.class.has('Slasher'))){ boost5 = 0.5}
                            }
                            return 1*boost1*boost2*boost3*boost4*boost5;*/
                            return p.class.has('Powerhouse') ? 2 : 1;
                        }
    },
    
    'Tashigi Coliseo': {
        description: 'Escudo de 25 golpes y limitador de multiplicador de cadena a 2.0x',
        thumb: 783,
        id: 38,
        comboShield: 25,
        chainLimiter: function() { return 2.0; }
    },
    
    'Robin and Nami\'s Secret Undercover Investigation': {
        description: 'Aumenta el ATK de los personajes Cerebral y Free Spirit 2x, las otras clases adquieren .5x ATK. Aumenta la HP de los personajes Striker y Shooter characters 2x, las otras clases adquieren .5x HP.',
        thumb: 1112,
        id: 39,
        atk: function(p) { 
                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('Cerebral')) { boost1 = 2.0}
                            if(p.class.has('Free Spirit')) { boost2 = 2.0}
                            if(!(p.class.has('Cerebral')&&p.class.has('Free Spirit')) && p.class.constructor === Array){
                            if(!p.class.has('Cerebral')){ boost3 = 0.5}
                            if(!p.class.has('Free Spirit')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('Cerebral') || p.class.has('Free Spirit'))){ boost5 = 0.5}
                            }
                            //console.log(boost1+" "+boost2+" "+boost3+" "+boost4+" "+boost5)
                            return 1*boost1*boost2*boost3*boost4*boost5; 
                        },
        hp: function(p) {
                            var boost1 = 1.0, boost2 = 1.0, boost3 = 1.0, boost4 = 1.0, boost5 = 1.0;
                            if(p.class.has('Striker')) { boost1 = 2.0}
                            if(p.class.has('Shooter')) { boost2 = 2.0}
                            if(!(p.class.has('Striker')&&p.class.has('Shooter')) && p.class.constructor === Array){
                            if(!p.class.has('Striker')){ boost3 = 0.5}
                            if(!p.class.has('Shooter')){ boost4 = 0.5}}
                            if(p.class.constructor === String){
                                if(!(p.class.has('Striker') || p.class.has('Shooter'))){ boost5 = 0.5}
                            }
                            return 1*boost1*boost2*boost3*boost4*boost5;
                        }
    },
    
    'Gild Tesoro - 40 Stamina': {
        description: 'Potencia orbes y ATK de todos los personajes 1.2x',
        thumb: 1162,
        id: 40,
        orb: function(p) { return p.orb == 2.0 ? 1.2 : (p.orb == 0.5 ? 5/6 : 1); },
        atk: function(p) { return 1.2; }
    },
    
    'Gild Tesoro - 60 Stamina': {
        description: 'Potencia orbes y ATK de todos los personajes 1.4x',
        thumb: 1163,
        id: 41,
        orb: function(p) { return p.orb == 2.0 ? 1.4 : (p.orb == 0.5 ? 5/7 : 1); },
        atk: function(p) { return 1.4; }
    },

};
