window.specials = {
    18: {
        def: function(p) { return 0.5; }
    },
    24: {
        def: function(p) { return 0.5; }
    },
    34: {
        def: function(p) { return 0; }
    },
    127: {
        def: function(p) { return 0.5; }
    },
    137: {
        def: function(p) { return 0.5; }
    },
    148: {
        def: function(p) { return 0.5; }
    },
    158: {
        def: function(p) { return 0.5; }
    },
    206: {
        def: function(p) { return 0.5; }
    },
    209: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: "type"
    },
    210: {
        atk: function(p) { return p.unit.type == "INT" ? 2 : 1; },
        type: "type"
    },
    222: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        type: "type"
    },
    223: {
        atk: function(p) { return p.unit.type == "PSY" ? 2 : 1; },
        type: "type"
    },
    263: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    267: {
        def: function(p) { return 0.5; }
    },
    275: {
        def: function(p) { return 0.5; }
    },
    285: {
        def: function(p) { return 0.5; }
    },
    295: {
        def: function(p) { return 0.5; }
    },
    309: {
        def: function(p) { return 0.5; }
    },
    310: {
        def: function(p) { return 0.5; }
    },
    313: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class"
    },
    314: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class"
    },
    323: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    324: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    352: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        type: "class"
    },
    353: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        type: "class"
    },
    382: {
        def: function(p) { return 0.5; }
    },
    385: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
        type: "class"
    },
    386: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
        type: "class"
    },
    391: {
        def: function(p) { return 0.2; }
    },
    392: {
        def: function(p) { return 0.2; }
    },
    395: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25); }
    },
    396: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25); }
    },
    399: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        type: "type"
    },
    400: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.5 : 1; },
        type: "type"
    },
    401: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; },
        type: "class"
    },
    402: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; },
        type: "class"
    },
    404: {
        rcv: function(p) { return 2; }
    },
    405: {
        rcv: function(p) { return 2; }
    },
    406: {
        atk: function(p) { return 1.2; },
        type: "type"
    },
    417: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2); }
    },
    418: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2); }
    },
    419: {
        def: function(p) { return 0.5; }
    },
    423: {
        def: function(p) { return 0.5; }
    },
    424: {
        def: function(p) { return 0.5; }
    },
    426: {
        atk: function(p) { return p.unit.type == "STR" ? 1.05 : 1; },
        type: "type"
    },
    429: {
        def: function(p) { return 0.5; }
    },
    430: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    431: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    434: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25); }
    },
    450: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        type: "class"
    },
    451: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        type: "class"
    },
    454: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        type: "type"
    },
    455: {
        atk: function(p) { return p.unit.type == "STR" ? 1.5 : 1; },
        type: "type"
    },
    458: {
        atk: function(p) { return 1.5; },
        type: "type"
    },
    459: {
        atk: function(p) { return 1.5; },
        type: "type"
    },
    461: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
        type: "class"
    },
    462: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.25 : 1; },
        type: "class"
    },
    465: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25); }
    },
    468: {
        rcv: function(p) { return 1.5; }
    },
    470: {
        rcv: function(p) { return 1.5; }
    },
    487: {
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        type: "type"
    },
    488: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        type: "type"
    },
    489: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        type: "type"
    },
    490: {
        atk: function(p) { return p.unit.type == "STR" ? 1.2 : 1; },
        type: "type"
    },
    491: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.2 : 1; },
        type: "type"
    },
    492: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.2 : 1; },
        type: "type"
    },
    505: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.25 : 1; },
        type: "type"
    },
    506: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.25 : 1; },
        type: "type"
    },
    509: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class"
    },
    510: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class"
    },
    511: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.25 : 1; },
        type: "class"
    },
    514: {
        def: function(p) { return 0.5; },
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: "type"
    },
    517: {
        atk: function(p) { return 1.05; },
        type: "type"
    },
    518: {
        atk: function(p) { return 1.05; },
        type: "type"
    },
    519: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: "type"
    },
    520: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: "type"
    },
    529: {
        def: function(p) { return 0; }
    },
    530: {
        def: function(p) { return 0; }
    },
    533: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    534: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    542: {
        rcv: function(p) { return 2; }
    },
    545: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        type: "type"
    },
    546: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        type: "type"
    },
    549: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    550: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    552: {
        def: function(p) { return 0; }
    },
    559: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    560: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    568: {
        def: function(p) { return 0.5; }
    },
    569: {
        def: function(p) { return 0.5; }
    },
    572: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 2 : 1; },
        type: "class",
        onActivation: function(p) { p.tdata.lock = Math.max(1, p.tdata.lock); },
        onDeactivation: function(p) { if (p.tdata.lock == 1) p.tdata.lock = 0; }
    },
    574: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
        type: "class"
    },
    575: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
        type: "class"
    },
    576: {
        rcv: function(p) { return 1.5; }
    },
    582: {
        atk: function(p) { return p.unit.type == "QCK" ? 1.5 : 1; },
        type: "type"
    },
    589: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        type: "class"
    },
    590: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        type: "class"
    },
    596: {
        def: function(p) { return 0.5; }
    },
    597: {
        def: function(p) { return 0.5; }
    },
    600: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
        type: "type"
    },
    601: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.3 : 1; },
        type: "type"
    },
    602: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        type: "type"
    },
    603: {
        atk: function(p) { return p.unit.type == "QCK" ? 2 : 1; },
        type: "type"
    },
    612: {
        atkStatic: function(p) { return 45; },
        rcvStatic: function(p) { return 45; },
        type: "type"
    },
    613: {
        atkStatic: function(p) { return 45; },
        rcvStatic: function(p) { return 45; },
        type: "type"
    },
    614: {
        def: function(p) { return 0.5; }
    },
    617: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.2 : 1; },
        type: "class"
    },
    622: {
        rcvStatic: function(p) { return 100; },
        type: "type"
    },
    632: {
        def: function(p) { return 0.5; }
    },
    633: {
        def: function(p) { return 0.5; }
    },
    634: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.2 : 1; },
        type: "type"
    },
    635: {
        atk: function(p) { return p.unit.type == "QCK" || p.unit.type == "PSY" ? 1.2 : 1; },
        type: "type"
    },
    637: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo tiene un bufo de defensa activo."
    },
    642: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75); }
    },
    643: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75); }
    },
    644: {
        atk: function(p) { return 1.2; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo sufre delay."
    },
    645: {
        atk: function(p) { return 1.2; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo sufre delay."
    },
    648: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    649: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    650: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    651: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    655: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25); }
    },
    656: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25); }
    },
    660: {
        def: function(p) { return 0.5; }
    },
    661: {
        def: function(p) { return 0.5; }
    },
    665: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    666: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    668: {
        atk: function(p) { return !p.unit.class.has('Free Spirit') ? 1 : window.specials[668].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[668].multiplier == 1.5 ? 1 : 0);
            window.specials[668].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Usando ' + [1.5, 2][n] + 'x como multiplicador de ATK. Para cambiar al ' + [2, 1.5][n] + 'x, desactiva y vuelve a activar el especial',
                name: '668warning'
            });
        }
    },
    669: {
        atk: function(p) { return !p.unit.class.has('Free Spirit') ? 1 : window.specials[669].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[669].multiplier == 1.5 ? 1 : 0);
            window.specials[669].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Usando ' + [1.5, 2][n] + 'x como multiplicador de ATK. Para cambiar al ' + [2, 1.5][n] + 'x, desactiva y vuelve a activar el especial',
                name: '669warning'
            });
        }
    },
    670: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class"
    },
    671: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class"
    },
    680: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
        type: "type"
    },
    681: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
        rcv: function(p) { return p.unit.type == "DEX" ? 1.25 : 1; },
        type: "type"
    },
    687: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.3 : 1; },
        type: "class"
    },
    688: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.3 : 1; },
        type: "class"
    },
    689: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    690: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    710: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.25 : 1; },
        type: "class"
    },
    711: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.25 : 1; },
        type: "class"
    },
    712: {
        atk: function(p) { return p.slot < 2 ? 1.5 : 1; },
        type: "class"
    },
    713: {
        atk: function(p) { return p.slot < 2 ? 1.5 : 1; },
        type: "class"
    },
    715: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        type: "class"
    },
    716: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        type: "class"
    },
    719: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? window.specials[719].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 2 : 1.5);
            window.specials[719].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'por debajo' : 'por encima') + ' del 30%, usando ' + n + 'x como multiplicador.',
                name: '719warning'
            });
        }
    },
    720: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? window.specials[720].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 2 : 1.5);
            window.specials[720].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 2 ? 'por debajo' : 'por encima') + ' del 30%, usando ' + n + 'x como multiplicador.',
                name: '720warning'
            });
        }
    },
    727: {
        def: function(p) { return 0.5; }
    },
    730: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: "type"
    },
    731: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: "type"
    },
    732: {
        def: function(p) { return 0.5; }
    },
    733: {
        def: function(p) { return 0.5; }
    },
    740: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo tiene un bufo de defensa activo."
    },
    741: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo tiene un bufo de defensa activo."
    },
    742: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25); }
    },
    743: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25); }
    },
    753: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75); }
    },
    754: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75); }
    },
    755: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        type: "class"
    },
    756: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        type: "class"
    },
    761: {
        atk: function(p) { return 1.2; },
        type: "type"
    },
    762: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
        type: "type"
    },
    770: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo sufre delay."
    },
    771: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
        type: "type"
    },
    780: {
        atk: function(p) { return p.slot == p.sourceSlot ? window.specials[780].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (p.percHP <= 20 ? 2 : (p.percHP <= 50 ? 1.75 : 1.5));
            window.specials[780].multiplier = n;
            p.scope.notify({
                text: 'Usando ' + n + 'x como multiplicador.',
                name: '780warning'
            });
        }
    },
    781: {
        atk: function(p) { return p.slot == p.sourceSlot ? window.specials[781].multiplier : 1; },
        type: "type",
        onActivation: function(p) {
            var n = (p.percHP <= 20 ? 2 : (p.percHP <= 50 ? 1.75 : 1.5));
            window.specials[781].multiplier = n;
            p.scope.notify({
                text: 'Usando ' + n + 'x como multiplicador.',
                name: '781warning'
            });
        }
    },
    788: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
        type: "class"
    },
    789: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.75 : 1; },
        type: "class"
    },
    790: {
        atk: function(p) { return /STR|DEX|QCK/.test(p.unit.type) ? 1.2 : 1; },
        type: "type"
    },
    791: {
        atk: function(p) { return /STR|DEX|QCK/.test(p.unit.type) ? 1.2 : 1; },
        type: "type"
    },
    796: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    797: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    798: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class"
    },
    803: {
        atk: function(p) { return 1.1; },
        type: "type"
    },
    804: {
        atk: function(p) { return 1.1; },
        type: "type"
    },
    805: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75); }
    },
    806: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75); }
    },
    807: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    808: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    809: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); },
        def: function(p) { return 0.2; }
    },
    810: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); },
        def: function(p) { return 0.2; }
    },
    813: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25); }
    },
    822: {
        rcvStatic: function(p) { return 100; },
        type: "type"
    },
    825: {
        atkStatic: function(p) { return 200; },
        type: "type"
    },
    826: {
        atk: function(p) { return 0.2; },
        type: "type"
    },
    827: {
        atk: function(p) { return 1.05; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo ha sido envenenado."
    },
    828: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? window.specials[828].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP < 20 ? 1.75 : 1);
            window.specials[828].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'por debajo' : 'por encima') + ' del 20%, usando ' + n + 'x como multiplicador.',
                name: '828warning'
            });
        }  
    },
    829: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? window.specials[829].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP < 20 ? 1.75 : 1);
            window.specials[829].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'por debajo' : 'por encima') + ' del 20%, usando ' + n + 'x como multiplicador.',
                name: '829warning'
            });
        }
    },
    832: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        type: "class"
    },
    833: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        type: "class"
    },
    835: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75); }
    },
    836: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75); }
    },
    837: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        type: "class"
    },
    838: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        type: "class"
    },
    839: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    840: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    841: {
        atk: function(p) { return 1.25; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo sufre delay."
    },
    842: {
        atk: function(p) { return 1.25; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo sufre delay."
    },
    843: {
        atk: function(p) {
            if (window.specials[843].first) return p.unit.class.has("Shooter") ? 1.5 : 1;
            else return p.unit.class.has("Shooter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") ? 1.5 : 1;
        },
        type: "class",
        onActivation: function(p) {
            window.specials[843].first = !window.specials[843].first;
            p.scope.notify({
                text: (window.specials[843].first ?
                    'Potenciando Shooter. Para cambiar al segundo multiplicador, desactiva y vuelve a activar este especial' :
                    'Potenciando Shooter, Slasher y Striker. Para cambiar al primer multiplicador, desactiva y vuelve a activar este especial'),
                name: '843warning'
            });
        }
    },
    844: {
        atk: function(p) {
            if (window.specials[844].first) return p.unit.class.has("Shooter") ? 1.5 : 1;
            else return p.unit.class.has("Shooter") || p.unit.class.has("Slasher") || p.unit.class.has("Striker") ? 1.5 : 1;
        },
        type: "class",
        onActivation: function(p) {
            window.specials[844].first = !window.specials[844].first;
            p.scope.notify({
                text: (window.specials[844].first ?
                    'Potenciando Shooter. Para cambiar al segundo multiplicador, desactiva y vuelve a activar este especial' :
                    'Potenciando Shooter, Slasher y Striker. Para cambiar al primer multiplicador, desactiva y vuelve a activar este especial'),
                name: '844warning'
            });
        }
    },
    847: {
        atk: function(p) { return 1.05; },
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.15); },
        type: "class"
    },
    848: {
        atk: function(p) { return 1.05; },
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.15); },
        type: "class"
    },
    849: {
        def: function() { return 0.5; }
    },
    853: {
        atk: function(p) { return p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") ? 1.2 : 1; },
        type: "class"
    },
    857: {
        rcv: function(p) { return p.unit.type == 'PSY' ? 1.5 : 1; },
        type: "type"
    },
    858: {
        rcv: function(p) { return p.unit.type == 'PSY' ? 1.5 : 1; },
        type: "type"
    },
    861: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    862: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    863: {
        def: function(p) { return 0.5; }
    },
    864: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) { return p.chainPosition > 0 ? 2.5 : 1.0; }
    },
    865: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) { return p.chainPosition > 0 ? 2.5 : 1.0; }
    },
    866: {
        atk: function(p) {
            return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.3 : 1;
        },
        type: "class"
    },
    869: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.0); }
    },
    870: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.0); }
    },
    873: {
        orb: function(p) {
            if (window.specials[873].first) return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5);
            else return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75);
        },
        type: "class",
        onActivation: function(p) {
            window.specials[873].first = !window.specials[873].first;
            p.scope.notify({
                text: (window.specials[873].first ?
                    'Primera carga activada. Para cambiar a la segunda carga, desactiva y vuelve a activar este especial' :
                    'Segunda carga activada. Para cambiar a la primera carga, desactiva y vuelve a activar este especial'),
                name: '873warning'
            });
        }
    },
    874: {
        orb: function(p) {
            if (window.specials[874].first) return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5);
            else return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75);
        },
        type: "class",
        onActivation: function(p) {
            window.specials[874].first = !window.specials[874].first;
            p.scope.notify({
                text: (window.specials[874].first ?
                    'Primera carga activada. Para cambiar a la segunda carga, desactiva y vuelve a activar este especial' :
                    'Segunda carga activada. Para cambiar a la primera carga, desactiva y vuelve a activar este especial'),
                name: '874warning'
            });
        }
    },
    881: {
        atk: function(p) {
            return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 1.75 : 1;
        },
        rcv: function(p) { return 0.1; },
        type: "class"
    },
    882: {
        atk: function(p) {
            return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 1.75 : 1;
        },
        rcv: function(p) { return 0.1; },
        type: "class"
    },
    883: {
        atk: function(p) { return !p.unit.class.has('Powerhouse') ? 1 : window.specials[883].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[883].multiplier == 1.5 ? 1 : 0);
            window.specials[883].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Usando ' + [1.5, 2][n] + 'x como multiplicador de ATK. Para cambiar al ' + [2, 1.5][n] + 'x, desactiva y vuelve a activar el especial',
                name: '883warning'
            });
        }
    },
    884: {
        atk: function(p) { return !p.unit.class.has('Powerhouse') ? 1 : window.specials[884].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[884].multiplier == 1.5 ? 1 : 0);
            window.specials[884].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Usando ' + [1.5, 2][n] + 'x como multiplicador de ATK. Para cambiar al ' + [2, 1.5][n] + 'x, desactiva y vuelve a activar el especial',
                name: '884warning'
            });
        }
    },
    885: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        type: "class"
    },
    886: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1; },
        type: "class"
    },
    887: {
        def: function(p) { return 0.2; }
    },
    891: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1; },
        type: "class"
    },
    902: {
        atk: function(p) { return !p.unit.class.has('Powerhouse') ? 1 : window.specials[902].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[902].multiplier == 1.5 ? 1 : 0);
            window.specials[902].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Usando ' + [1.5, 2][n] + 'x como multiplicador de ATK. Para cambiar al ' + [2, 1.5][n] + 'x, desactiva y vuelve a activar el especial',
                name: '902warning'
            });
        }
    },
    903: {
        atk: function(p) { return !p.unit.class.has('Powerhouse') ? 1 : window.specials[903].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[903].multiplier == 1.5 ? 1 : 0);
            window.specials[903].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Usando ' + [1.5, 2][n] + 'x como multiplicador de ATK. Para cambiar al ' + [2, 1.5][n] + 'x, desactiva y vuelve a activar el especial',
                name: '902warning'
            });
        }
    },
    905: {
        atk: function(p) {
            if (!window.specials[905].stage) return p.slot == p.sourceSlot ? 1.5 : 1;
            if (window.specials[905].stage == 1) return p.unit.class.has("Slasher") ? 1.5 : 1;
            if (window.specials[905].stage == 2) return p.unit.class.has("Slasher") ? 1.75 : 1;
        },
        type: "class",
        stage: -1,
        onActivation: function(p) {
            window.specials[905].stage = (window.specials[905].stage + 1) % 3;
            p.scope.notify({
                text: 'Carga #' + (window.specials[905].stage + 1) + ' activada. Para cambiar a la siguiente carga, desactiva y vuelve a activar este especial.',
                name: '905warning'
            });
        }
    },
    906: {
        atk: function(p) {
            if (!window.specials[906].stage) return p.slot == p.sourceSlot ? 1.5 : 1;
            if (window.specials[906].stage == 1) return p.unit.class.has("Slasher") ? 1.5 : 1;
            if (window.specials[906].stage == 2) return p.unit.class.has("Slasher") ? 1.75 : 1;
        },
        type: "class",
        stage: -1,
        onActivation: function(p) {
            window.specials[906].stage = (window.specials[906].stage + 1) % 3;
            p.scope.notify({
                text: 'Carga #' + (window.specials[906].stage + 1) + ' activada. Para cambiar a la siguiente carga, desactiva y vuelve a activar este especial.',
                name: '906warning'
            });
        }
    },
    909: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        type: "type"
    },
    910: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.5 : 1; },
        type: "type"
    },
    911: {
        atk: function(p) {
            if (!window.specials[911].stage) return p.unit.class.has("Powerhouse") ? 1.2 : 1;
            if (window.specials[911].stage == 1) return p.unit.class.has("Powerhouse") ? 2 : 1;
        },
        type: "class",
        stage: -1,
        onActivation: function(p) {
            window.specials[911].stage = (window.specials[911].stage + 1) % 2;
            p.scope.notify({
                text: 'Carga #' + (window.specials[911].stage + 1) + ' activada. Para cambiar a la siguiente carga, desactiva y vuelve a activar este especial.',
                name: '911warning'
            });
        }
    },
    912: {
        atk: function(p) {
            if (!window.specials[912].stage) return p.unit.class.has("Powerhouse") ? 1.2 : 1;
            if (window.specials[912].stage == 1) return p.unit.class.has("Powerhouse") ? 2 : 1;
        },
        type: "class",
        stage: -1,
        onActivation: function(p) {
            window.specials[912].stage = (window.specials[912].stage + 1) % 2;
            p.scope.notify({
                text: 'Carga #' + (window.specials[912].stage + 1) + ' activada. Para cambiar a la siguiente carga, desactiva y vuelve a activar este especial.',
                name: '912warning'
            });
        }
    },
    915: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        type: "class"
    },
    916: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        type: "class"
    },
    921: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    922: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    925: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    926: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    927: {
        atk: function(p) {
            return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 1.2 : 1;
        },
        type: "class"
    },
    928: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo ha sido envenenado."
    },
    929: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo ha sido envenenado."
    },
    940: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.75 : 1; },
        type: "type"
    },
    941: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.75 : 1; },
        type: "type"
    },
    944: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        type: "class"
    },
    945: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        type: "class"
    },
    947: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 1.3 : 1; },
        type: "type"
    },
    954: {
        def: function(p) { return 0.2; }		
    },
    955: {
        atk: function(p) { return p.defenseDown ? 1.2 : 1; },
        type: "condition"
    },
    956: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.2 : 1; },
        type: "class"
    },
    961: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25); }
    },
    963: {
        def: function(p) { return 0; }
    },
    964: {
        atk: function(p) { return window.specials[964].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[964].multiplier == 1.1 ? 1 : 0);
            window.specials[964].multiplier = [1.1, 1.5][n];
            p.scope.notify({
                text: 'Usando ' + [1.1, 1.5][n] + 'x como multiplicador de ATK. Para cambiar al ' + [1.5, 1.1][n] + 'x, desactiva y vuelve a activar el especial',
                name: '965warning'
            });
        }
    },
    965: {
        atk: function(p) { return window.specials[965].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[965].multiplier == 1.1 ? 1 : 0);
            window.specials[965].multiplier = [1.1, 1.5][n];
            p.scope.notify({
                text: 'Usando ' + [1.1, 1.5][n] + 'x como multiplicador de ATK. Para cambiar al ' + [1.5, 1.1][n] + 'x, desactiva y vuelve a activar el especial',
                name: '965warning'
            });
        }
    },
    975: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.3 : 1; },
        atk: function(p) { return p.unit.class.has("Striker") ? 1.3 : 1; },
        type: "class"
    },
    976: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.3 : 1; },
        atk: function(p) { return p.unit.class.has("Striker") ? 1.3 : 1; },
        type: "class"
    },
    977: {
        chainAddition: function(p) {
            if (!window.specials[977].stage) return 0.0;
            if (window.specials[977].stage == 1) return 0.5;
        },
        stage: -1,
        onActivation: function(p) {
            window.specials[977].stage = (window.specials[977].stage + 1) % 2;
            p.scope.notify({
                text: 'Carga #' + (window.specials[977].stage + 1) + ' activada. Para cambiar a la siguiente carga, desactiva y vuelve a activar este especial.',
                name: '1339warning'
            });
        }
    },
    978: {
        chainAddition: function(p) {
            if (!window.specials[978].stage) return 0.0;
            if (window.specials[978].stage == 1) return 0.5;
        },
        stage: -1,
        onActivation: function(p) {
            window.specials[978].stage = (window.specials[978].stage + 1) % 2;
            p.scope.notify({
                text: 'Carga #' + (window.specials[978].stage + 1) + ' activada. Para cambiar a la siguiente carga, desactiva y vuelve a activar este especial.',
                name: '1339warning'
            });
        }
    },
    981: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    1005: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    1006: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    1010: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.3 : 1; },
        type: "type"
    },
    1011: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.3 : 1; },
        type: "type"
    },
    1013: {
        atk: function(p) { return 1.2; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo sufre delay."
    },
    1015: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: "type"
    },
    1016: {
        atk: function(p) { return p.unit.type == "INT" ? 1.5 : 1; },
        type: "type"
    },
    1017: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1},
        type: "class"
    },
    1018: {
        atk: function(p) { return p.unit.class.has("Slasher") ? 1.5 : 1},
        type: "class"
    },
    1023: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1},
        type: "class"
    },
    1024: {
        orb: function(p) {
            if(p.percHP >= 70.0){
                return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25);
            }else if(p.percHP >= 30.0){
                return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5);
            }else{
                return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75);
            }
        }
    },
    1025: {
        orb: function(p) {
            if(p.percHP >= 70.0){
                return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25);
            }else if(p.percHP >= 30.0){
                return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5);
            }else{
                return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75);
            }
        }
    },
    1028: {
        //TODO
        hit: function(n) { return n > 30 ? 1.75 : 1; },
        type: "condition"
    },
    1029: {
        //TODO
        hit: function(n) { return n > 30 ? 1.75 : 1; },
        type: "condition"
    },
    1030: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type"
    },
    1031: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type"
    },
    1040: {
        atk: function(p) { return p.percHP < 30.0 ? 1.5 : 1; },
        type: "type"
    },
    1041: {
        atk: function(p) { return p.percHP < 30.0 ? 1.5 : 1; },
        type: "type"
    },
    1046: {
        staticMult: function(p) { return 55; }
    },
    1047: {
        staticMult: function(p) { return 55; }
    },
    1055: {
        atk: function(p) { return 1.4; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo ha sido GRAVEMENTE envenenado."
    },
    1056: {
        atk: function(p) { return 1.4; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo ha sido GRAVEMENTE envenenado."
    },
    1059: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    1060: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    1061: {
        chain: function(p) { return 2; },
        chainLimiter: function(p) { return p.chainPosition > 0 ? 2 : 1.0; }
    },
    1063: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.3 : 1},
        type: "class"
    },
    1065: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25); }
    },
    1066: {
        chainAddition: function(p){ return 0.1;}
    },
    1067: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type"
    },
    1071: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1},
        type: "class"
    },
    1072: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1},
        type: "class"
    },
    1080: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    1081: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    1082: {
        atk: function(p) {
            if(p.percHP >= 70.0){
                return p.unit.class.has("Striker") || p.unit.class.has("Fighter") ? 1.2 : 1;
            }else if(p.percHP >= 30.0){
                return p.unit.class.has("Striker") || p.unit.class.has("Fighter") ? 1.5 : 1;
            }else{
                return p.unit.class.has("Striker") || p.unit.class.has("Fighter") ? 1.75 : 1;
            }
        },
        type: "class"
    },
    1083: {
        atk: function(p) {
            if(p.percHP >= 70.0){
                return p.unit.class.has("Striker") || p.unit.class.has("Fighter") ? 1.2 : 1;
            }else if(p.percHP >= 30.0){
                return p.unit.class.has("Striker") || p.unit.class.has("Fighter") ? 1.5 : 1;
            }else{
                return p.unit.class.has("Striker") || p.unit.class.has("Fighter") ? 1.75 : 1;
            }
        },
        type: "class"
    },
    1086: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    1087: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    1088: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 1.5 : 1},
        type: "class"
    },
    1089: {
        atk: function(p) { return p.unit.class.has("Slasher") || p.unit.class.has("Driven") ? 1.5 : 1},
        type: "class"
    },
    1096: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    1097: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    1099: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    1100: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    1101: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 1.75 : 1; },
        type: "type"
    },
    1102: {
        atk: function(p) { return p.unit.type == "STR" || p.unit.type == "INT" ? 1.75 : 1; },
        type: "type"
    },
    1105: {
        chainAddition: function(p){ return 0.2;}
    },
    1106: {
        chainAddition: function(p){ return 0.2;}
    },
    1107: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        type: "class"
    },
    1108: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.75 : 1; },
        type: "class"
    },
    1111: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25); }
    },
    1112: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.25); }
    },
    1113: {
        atk: function(p) { return 1.2; },
        type: "type"
    },
    1114: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: "type" 
    },
    1115: {
        atk: function(p) { return p.unit.type == "STR" ? 2 : 1; },
        type: "type" 
    },
    1122: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1)}
    },
    1123: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1)}
    },
    1132: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Shooter")  ? window.specials[1132].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1132].multiplier == 1.5 ? 1 : 0);
            window.specials[1132].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Usando ' + [1.5, 1.75][n] + 'x como multiplicador de ATK. Para cambiar al ' + [1.75, 1.5][n] + 'x, desactiva y vuelve a activar el especial',
                name: '1132warning'
            });
        }
    },
    1133: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Shooter") ? window.specials[1133].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1133].multiplier == 1.5 ? 1 : 0);
            window.specials[1133].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Usando ' + [1.5, 1.75][n] + 'x como multiplicador de ATK. Para cambiar al ' + [1.75, 1.5][n] + 'x, desactiva y vuelve a activar el especial',
                name: '1133warning'
            });
        }
    },
    1137: {
        orb: function(p) { return p.unit.class.has("Free Spirit") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); }	
    },
    1138: {
        atk: function(p) { return p.unit.class.has("Powerhouse") || p.unit.class.has("Fighter") ? 1.3 : 1},
        type: "class"
    },
    1153: {
        def: function(p) { return 0; },
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.25 : 1},
        type: "class" 
    },
    1154: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1},
        type: "class"
    },
    1164: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); },
        rcv: function(p) { return 1.5; }
    },
    1165: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); },
        rcv: function(p) { return 1.5; }
    },
    1168: {
        atk: function(p) { return p.unit.type == "STR" ? window.specials[1168].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 1.75 : 1.1);
            window.specials[1168].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'por debajo' : 'por encima') + ' del 30%, usando ' + n + 'x como multiplicador.',
                name: '1168warning'
            });
        }
    },
    1169: {
        atk: function(p) { return p.unit.type == "STR" ? window.specials[1169].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (p.percHP <= 30 ? 1.75 : 1.1);
            window.specials[1169].multiplier = n;
            p.scope.notify({
                text: 'HP ' + (n == 1.75 ? 'por debajo' : 'por encima') + ' del 30%, usando ' + n + 'x como multiplicador.',
                name: '1169warning'
            });
        }
    },
    1193: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) { return p.chainPosition > 0 ? 2.5 : 1.0; }
    },
    1194: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) { return p.chainPosition > 0 ? 2.5 : 1.0; }
    },
    1195: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
        type: "class"
    },
    1196: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.75 : 1; },
        type: "class"
    },
    1211: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    1212: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    1219: {
        atk: function(p) {
            if (!window.specials[1219].stage) return p.unit.class.has("Shooter") ? 1.2 : 1;
            if (window.specials[1219].stage == 1) return p.unit.class.has("Shooter") ? 1.5 : 1;
            if (window.specials[1219].stage == 2) return p.unit.class.has("Shooter") ? 2 : 1;
        },
        type: "class",
        stage: -1,
        onActivation: function(p) {
            window.specials[1219].stage = (window.specials[1219].stage + 1) % 3;
            p.scope.notify({
                text: 'Carga #' + (window.specials[1219].stage + 1) + ' activada. Para cambiar a la siguiente carga, desactiva y vuelve a activar este especial.',
                name: '1219warning'
            });
        }
    },
    1220: {
        atk: function(p) {
            if (!window.specials[1220].stage) return p.unit.class.has("Shooter") ? 1.2 : 1;
            if (window.specials[1220].stage == 1) return p.unit.class.has("Shooter") ? 1.5 : 1;
            if (window.specials[1220].stage == 2) return p.unit.class.has("Shooter") ? 2 : 1;
        },
        type: "class",
        stage: -1,
        onActivation: function(p) {
            window.specials[1220].stage = (window.specials[1220].stage + 1) % 3;
            p.scope.notify({
                text: 'Carga #' + (window.specials[1220].stage + 1) + ' activada. Para cambiar a la siguiente carga, desactiva y vuelve a activar este especial.',
                name: '1219warning'
            });
        }
    },
    1221: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1221].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1221].turnedOn = false;
        }
    },
    1222: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1222].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1222].turnedOn = false;
        }
    },
    1227: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type"
    },
    1231: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1231].turnedOn = true;
            p.scope.notify({
                text: 'Solo afecta al daño si Smoker es capitán',
                name: '1231warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1231].turnedOn = false;
        }
    },
    1232: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1232].turnedOn = true;
            p.scope.notify({
                text: 'Solo afecta al daño si Smoker es capitán',
                name: '1232warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1232].turnedOn = false;
        }
    },
    1233: {//Tashigi
        affinity: function(p){ return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    1234: {//Tashigi
        affinity: function(p){ return p.unit.class.has("Slasher") || p.unit.class.has("Cerebral") ? 1.5 : 1; }
    },
    1239: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1239].turnedOn = true;
            p.scope.notify({
                text: 'Solo afecta al daño si Borsalino es capitán',
                name: '1239warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1239].turnedOn = false;
        }
    },
    1240: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1240].turnedOn = true;
            p.scope.notify({
                text: 'Solo afecta al daño si Borsalino es capitán',
                name: '1240warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1240].turnedOn = false;
        }
    },
    1241: {
        staticMult: function(p) { return 15; }
    },
    1242: {
        staticMult: function(p) { return 15; }
    },
    1245: {
        atk: function(p) { return !p.unit.class.has('Fighter') ? 1 : window.specials[1245].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1245].multiplier == 1.3 ? 1 : 0);
            window.specials[1245].multiplier = [1.3, 2][n];
            p.scope.notify({
                text: 'Usando ' + [1.3, 2][n] + 'x como multiplicador de ATK. Para cambiar al ' + [2, 1.3][n] + 'x, desactiva y vuelve a activar el especial',
                name: '1245warning'
            });
        }
    },
    1246: {
        atk: function(p) { return !p.unit.class.has('Fighter') ? 1 : window.specials[1246].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1246].multiplier == 1.3 ? 1 : 0);
            window.specials[1246].multiplier = [1.3, 2][n];
            p.scope.notify({
                text: 'Usando ' + [1.3, 2][n] + 'x como multiplicador de ATK. Para cambiar al ' + [2, 1.3][n] + 'x, desactiva y vuelve a activar el especial',
                name: '1246warning'
            });
        }
    },
    1247: {
        atk: function(p) { return !p.unit.class.has('Fighter') ? 1 : window.specials[1247].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1247].multiplier == 1.3 ? 1 : 0);
            window.specials[1247].multiplier = [1.3, 2][n];
            p.scope.notify({
                text: 'Usando ' + [1.3, 2][n] + 'x como multiplicador de ATK. Para cambiar al ' + [2, 1.3][n] + 'x, desactiva y vuelve a activar el especial',
                name: '1247warning'
            });
        }
    },
    1250: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        type: "class"
    },
    1251: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        type: "class"
    },
    1253: {
        atk: function(p) { return p.unit.type == "STR" ? 1.75 : 1; },
        type: "class"
    },
    1254: {
        def: function(p) { return 0.5; } //TODO: get correct value
    },
    1255: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    1256: {
        atk: function(p) { return 1.3 },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo tiene un bufo de defensa activo."
    },
    1259: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1259].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1259].turnedOn = false;
        }
    },
    1260: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1260].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1260].turnedOn = false;
        }
    },
    1261: {//Young Senor Pink
        affinity: function(p){ return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    1262: {//Young Senor Pink
        affinity: function(p){ return p.unit.class.has("Shooter") || p.unit.class.has("Free Spirit") ? 1.5 : 1; }
    },
    1263: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    1264: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type"
    },
    1265: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; },
        type: "class"
    },
    1266: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.75 : 1; },
        type: "class"
    },
    1271: {
        orb: function(p) { return p.unit.class.has("Shooter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); }	
    },
    1272: {
        orb: function(p) { return p.unit.class.has("Shooter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); }	
    },
    1273: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        type: "class"
    },
    1274: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.5 : 1; },
        type: "class"
    },
    1282: {
        atk: function(p) { return 1.2; },
        type: "class",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.2); },
    },
    1283: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.5 : 1; },
        type: "class"
    },
    1286: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        type: "class"
    },
    1287: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.5 : 1; },
        type: "class"
    },
    1297: {
        affinity: function(p){ return p.unit.type == "STR" ? 1.75 : 1; }
    },
    1298: {
        affinity: function(p){ return p.unit.type == "STR" ? 1.75 : 1; }
    },
    1299: {
        atk: function(p) { return p.unit.type == "INT" ? 1.75 : 1; },
        type: "class"
    },
    1300: {
        atk: function(p) { return p.unit.type == "INT" ? 1.75 : 1; },
        type: "class"
    },
    1313: {
        atk: function(p) { return p.unit.cost >= 50 ? 1.75 : 1; },
        type: "class"
    },
    1314: {
        atk: function(p) { return p.unit.cost >= 50 ? 1.75 : 1; },
        type: "class"
    },
    1319: {
        atk: function(p) { return 1.5; },
        type: "class"
    },
    1320: {
        atk: function(p) { return 1.5; },
        type: "class"
    },
    1321: {
        atk: function(p) { return 1.5; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo sufre delay."
    },
    1322: {
        atk: function(p) { return 1.5; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo sufre delay."
    },
    1323: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1323].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1323].turnedOn = false;
        }
    },
    1324: {
        turnedOn: false,
        onActivation: function(p) {
            window.specials[1324].turnedOn = true;
        },
        onDeactivation: function(p) {
            window.specials[1324].turnedOn = false;
        }
    },
    1329: {
        affinity: function(p){ return p.unit.class.has("Fighter") || p.unit.class.has("Free Spirit") ? 1.25 : 1; }
    },
    1335: {
        chainAddition: function(p){ return 0.5; }
    },
    1336: {
        chainAddition: function(p){ return 0.5; }
    },
    1339: {
        chainAddition: function(p) {
            if (!window.specials[1339].stage) return 0.2;
            if (window.specials[1339].stage == 1) return 0.3;
            if (window.specials[1339].stage == 2) return 0.5;
        },
        stage: -1,
        onActivation: function(p) {
            window.specials[1339].stage = (window.specials[1339].stage + 1) % 3;
            p.scope.notify({
                text: 'Carga #' + (window.specials[1339].stage + 1) + ' activada. Para cambiar a la siguiente carga, desactiva y vuelve a activar este especial.',
                name: '1339warning'
            });
        }
    },
    1343: {
        atk: function(p) { return p.defenseDown ? 1.3 : 1; },
        type: "condition"
    },
    1344: {
        atk: function(p) { return p.unit.class.has("Driven") ? 1.3 : 1; },
        type: "class"
    },
    1348: {
        atk: function(p) { return 1.2; },
        type: "class",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.2); },
    },
    1349: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.2 : 1; },
        type: "class"
    },
    1351: {
        def: function(p) { return 0.5; }
    },
    1353: {
        chainAddition: function(p){ return 0.5; }
    },
    1354: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); },
    },
    1355: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); },
    },
    1358: {
        rcv: function(p){ return 1.75; }
    },
    1359: {
        rcv: function(p){ return 1.75; }
    },
    1361: {
        atk: function(p) { return !p.unit.class.has('Slasher') ? 1 : p.sourceSlot < 2 ? 2 : 1.75 ; },
        type: "class",
    },
    1362: {
        atk: function(p) { return !p.unit.class.has('Slasher') ? 1 : p.sourceSlot < 2 ? 2 : 1.75 ; },
        type: "class",
    },
    1363: {
        orb: function(p) { return p.unit.type == "PSY" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); },	
    },
    1364: {
        orb: function(p) { return p.unit.type == "PSY" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); },	
    },
    1367:{
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1367].multiplier); },
        onActivation: function(p) {
            var n = (window.specials[1367].multiplier == 1.5 ? 1 : 0);
            window.specials[1367].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Usando ' + [1.5, 1.75][n] + 'x como potenciación de orbes. Para cambiar al ' + [1.75, 1.5][n] + 'x, desactiva y vuelve a activar el especial',
                name: '1367warning'
            });
        },
    },
    1368:{
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1368].multiplier); },
        onActivation: function(p) {
            var n = (window.specials[1368].multiplier == 1.5 ? 1 : 0);
            window.specials[1368].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Usando ' + [1.5, 1.75][n] + 'x como potenciación de orbes. Para cambiar al ' + [1.75, 1.5][n] + 'x, desactiva y vuelve a activar el especial',
                name: '1368warning'
            });
        },
    },
    1375: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1)}
    },
    1376: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.5 : 1; },
        type: "type",
        orb: function(p) { return p.slot == p.sourceSlot ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1)}
    },
    1379: {
        orb: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); }	
    },
    1380: {
        orb: function(p) { return (p.unit.class.has("Free Spirit") || p.unit.class.has("Cerebral")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); }	
    },
    1389: {
        orb: function(p) { return p.unit.type == "INT" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); },	
    },
    1390: {
        atk: function(p) { return p.unit.cost <= 40 ? 1.75 : 1; },
        type: "class"
    },
    1391: {
        atk: function(p) { return p.unit.cost <= 40 ? 1.75 : 1; },
        type: "class"
    },
    1392: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
        type: "class"
    },
    1393: {
        atk: function(p) { return 1.1; },
        type: "class",
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.1); },
    },
	1394: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class"
    },
    1395: {
        atk: function(p) { return p.unit.class.has("Fighter") || p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class"
    },
    1396: {
        def: function(p) { return 0.2; }
    },
    1397: {
        def: function(p) { return 0.2; }
    },
    1400: {
        affinity: function(p) { return p.unit.class.has("Shooter") ? window.specials[1400].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[1400].multiplier == 1.5 ? 1 : 0);
            window.specials[1400].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Usando ' + [1.5, 1.75][n] + 'x como Afinidad de Tipo. Para cambiar al ' + [1.75, 1.5][n] + 'x, desactiva y vuelve a activar el especial',
                name: '1400warning'
            });
        },
    },
    1401: {
        affinity: function(p) { return p.unit.class.has("Shooter") ? window.specials[1401].multiplier : 1; },
        onActivation: function(p) {
            var n = (window.specials[1401].multiplier == 1.5 ? 1 : 0);
            window.specials[1401].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Usando ' + [1.5, 1.75][n] + 'x como Afinidad de Tipo. Para cambiar al ' + [1.75, 1.5][n] + 'x, desactiva y vuelve a activar el especial',
                name: '1401warning'
            });
        },
    },
    1402: {
        atk: function(p) { return p.unit.type == "PSY" ? window.specials[1402].multiplier : 1; },
		type: "type",
        onActivation: function(p) {
            var n = (window.specials[1402].multiplier == 1.3 ? 1 : 0);
            window.specials[1402].multiplier = [1.3, 1.5][n];
            p.scope.notify({
                text: 'Using the ' + [1.3, 1.5][n] + 'x Affinity boost. To switch to the ' + [1.5, 1.3][n] + 'x Affinity boost, disable and re-enable this special',
                name: '1402warning'
            });
        },
    },
    1403: {
        onActivation: function(p) {
            var n = (window.specials[1403].multiplier == 3.16 ? 1 : 0);
            window.specials[1403].turnedOn = true;
            window.specials[1403].multiplier = [3.16, 4][n];
            p.scope.notify({
                text: 'Solo afecta al daño si Luffy es capitán y solo afecta al multiplicador de uno de los Luffys. Usando ' + [10, 16][n] + 'x como aumento de ATK del capitán. Para cambiar al ' + [10, 16][n] + 'x, desactiva y vuelve a activar este especial',
                name: '1403warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1403].turnedOn = false;
        }
        
    },
    1404: {
        onActivation: function(p) {
            var n = (window.specials[1404].multiplier == 3.16 ? 1 : 0);
            window.specials[1404].turnedOn = true;
            window.specials[1404].multiplier = [3.16, 4][n];
            p.scope.notify({
                text: 'Solo afecta al daño si Luffy es capitán y solo afecta al multiplicador de uno de los Luffys. Usando ' + [10, 16][n] + 'x como aumento de ATK del capitán. Para cambiar al ' + [10, 16][n] + 'x, desactiva y vuelve a activar este especial',
                name: '1404warning'
            });
        },
        onDeactivation: function(p) {
            window.specials[1404].turnedOn = false;
        }
        
    },
    1405: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Shooter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); },
        warning: "El especial seleccionado (%name%) asume que el enemigo tiene escudo anti-delay."
    },
    1406: {
        atk: function(p) { return p.unit.class.has("Shooter") ? 1.75 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Shooter") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); },
        warning: "El especial seleccionado (%name%) asume que el enemigo tiene escudo anti-delay."
    },
    1407: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 2 : 1; },
        type: "type"
    },
    1408: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "DEX" ? 2 : 1; },
        type: "type"
    },
    1409: {
        atk: function(p) {
            return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? 1.75 : 1;
        },
        type: "class"
    },
    1410: {
        atk: function(p) {
            return p.unit.class.has("Slasher") || p.unit.class.has("Free Spirit") ? 1.75 : 1;
        },
        type: "class"
    },
    1415: {
        atk: function(p) { return p.unit.cost <= 30 ? 1.5 : 1; },
        type: "class"
    },
    1416: {
        atk: function(p) { return p.unit.cost <= 30 ? 1.5 : 1; },
        type: "class"
    },
    1419: {
        atk: function(p) { return p.defenseDown ? 1.5 : 1; },
        type: "condition"
    },
    1420: {
        atk: function(p) { return p.defenseDown ? 1.5 : 1; },
        type: "condition"
    },
    1421: {
        atk: function(p) {
            if(p.percHP == 100.0){
                return p.unit.class.has("Driven") ? 1.75 : 1;
            }else{
                return p.unit.class.has("Driven") ? 1.75 : 1;
            }
        },
        type: "class"
    },
    1422: {
        atk: function(p) {
            if(p.percHP == 100.0){
                return p.unit.class.has("Driven") ? 2 : 1;
            }else{
                return p.unit.class.has("Driven") ? 1.5 : 1;
            }
        },
        type: "class"
    },
	1425: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); },
        warning: "El especial seleccionado (%name%) asume que un miembro del equipo ha sido encadenado."
    },
    1426: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); },
        warning: "El especial seleccionado (%name%) asume que un miembro del equipo ha sido encadenado."
    },
    1428: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "class",
        warning: "El especial seleccionado (%name%) asume que el enemigo sufre delay."
    },
    1431: {
        atk: function(p) { return 1.5; },
        type: "type"
    },
    1432: {
        atk: function(p) { return 1.5; },
        type: "type"
    },
    1437: {
        atk: function(p) { return window.specials[1438].multiplier; },
        type: "condition",
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); },
        //warning: "El especial seleccionado (%name%) asume que el enemigo sufre delay.",
        onActivation: function(p) {
            var n = (window.specials[1438].multiplier == 1 ? 1 : 0);
            window.specials[1438].multiplier = [1, 1.5][n];
            if( window.specials[1438].multiplier == 1){
            p.scope.notify({
                text: 'Usando solo el pontenciador de orbes. Para activar tambien el multiplicador de ATK asumiendo que el enemigo tiene delay, desactiva y vuelve a activar este especial',
                name: '1480warning'
            });
        }else{
           p.scope.notify({
                text: 'Usando el multiplicador de ATK y de orbes, asumiendo que el enemigo tiene delay. Para usar solo el potenciador de orbes, desactiva y vuelve a activar este especial',
                name: '1480warning'
            }); 
        }
        },
    },
    1438: {
        atk: function(p) { return window.specials[1438].multiplier; },
        type: "condition",
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); },
        //warning: "El especial seleccionado (%name%) asume que el enemigo sufre delay.",
        onActivation: function(p) {
            var n = (window.specials[1438].multiplier == 1 ? 1 : 0);
            window.specials[1438].multiplier = [1, 1.5][n];
            if( window.specials[1438].multiplier == 1){
            p.scope.notify({
                text: 'Usando solo el pontenciador de orbes. Para activar tambien el multiplicador de ATK asumiendo que el enemigo tiene delay, desactiva y vuelve a activar este especial',
                name: '1480warning'
            });
        }else{
           p.scope.notify({
                text: 'Usando el multiplicador de ATK y de orbes, asumiendo que el enemigo tiene delay. Para usar solo el potenciador de orbes, desactiva y vuelve a activar este especial',
                name: '1480warning'
            }); 
        }
        },
    },
    1439: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        type: "class"
    },
    1440: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        type: "class"
    },
    1441: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) { return p.chainPosition > 0 ? 2.5 : 1.0; }
    },
    1442: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) { return p.chainPosition > 0 ? 2.5 : 1.0; }
    },
    1443: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); },
    },
    1444: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.5 : 1; },
        type: "class",
        orb: function(p) { return p.unit.class.has("Powerhouse") ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); },
    },
    1445: {
        atk: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 1.75 : 1; },
        rcv: function(p) { return p.unit.type == "PSY" || p.unit.type == "QCK" ? 1.75 : 1; },
        type: "type"
    },
    1447: {
        atk: function(p) { return p.slot == p.sourceSlot ? window.specials[1447].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1447].multiplier == 1.5 ? 1 : 0);
            window.specials[1447].multiplier = [1.2, 1.5][n];
            p.scope.notify({
                text: 'Usando ' + [1.2, 1.5][n] + 'x como multiplicador de ATK. Para cambiar al ' + [1.5, 1.2][n] + 'x, desactiva y vuelve a activar el especial',
                name: '1447warning'
            });
        }
    },
    1459: {
        atk: function(p) { return p.defenseDown ? 1.5 : 1; },
        type: "condition"
    },
    1460: {
        atk: function(p) { return p.defenseDown ? 1.5 : 1; },
        type: "condition"
    },
    1476: {
        atk: function(p) {
            return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 1.75 : 1;
        },
        type: "class"
    },
    1477: {
        atk: function(p) {
            return p.unit.class.has("Striker") || p.unit.class.has("Powerhouse") ? 1.75 : 1;
        },
        type: "class"
    },
    1478: {
        atk: function(p) { return p.unit.type == "INT" || p.unit.type == "QCK" ? 2 : 1; },
        type: "type"
    },
    1479: {
        atk: function(p) { return p.unit.type == "INT" || p.unit.type == "QCK" ? 2 : 1; },
        type: "type"
    },
     1482: {
        atk: function(p) { return window.specials[1482].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1482].multiplier == 1.5 ? 1 : 0);
            window.specials[1480].multiplier = [1.25, 1.75][n];
            p.scope.notify({
                text: 'Usando ' + [1.25, 1.75][n] + 'x como multiplicador de ATK. Para cambiar al ' + [1.75, 1.25][n] + 'x, desactiva y vuelve a activar este especial',
                name: '1480warning'
            });
        },
    },
    1483: {
        atk: function(p) { return window.specials[1483].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1483].multiplier == 1.5 ? 1 : 0);
            window.specials[1481].multiplier = [1.25, 1.75][n];
            p.scope.notify({
                text: 'Usando ' + [1.25, 1.75][n] + 'x como multiplicador de ATK. Para cambiar al ' + [1.75, 1.25][n] + 'x, desactiva y vuelve a activar este especial',
                name: '1481warning'
            });
        },
    },
    1484: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) { return p.chainPosition > 0 ? 2.5 : 1.0; }
    },
    1485: {
        chain: function(p) { return 2.5; },
        chainLimiter: function(p) { return p.chainPosition > 0 ? 2.5 : 1.0; }
    },
    1486: {
        orb: function(p) { return (p.unit.class.has("Fighter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); }		
    },
    1487: {
        orb: function(p) { return (p.unit.class.has("Fighter")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); }		
    },
    1490: {
        def: function(p) { return 0.5; }
    },
    1491: {
        def: function(p) { return 0.5; }
    },
    1492: {//CHANGE THIS IF THIS ISN'T SABO
        atk: function(p) { return !p.unit.class.has('Free Spirit') ? 1 : window.specials[1492].multiplier; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1492].multiplier == 1.5 ? 1 : window.specials[1492].multiplier == 1.75 ? 2 : 0);
            window.specials[1492].multiplier = [1.5, 1.75, 2][n];
            p.scope.notify({
                text: 'Usando ' + [1.5, 1.75, 2][n] + 'x como multiplicador de ATK. Para cambiar al ' + [1.75, 2, 1.5][n] + 'x, desactiva y vuelve a activar este especial',
                name: '1492warning'
            });
        }
    },
    1501: {
        atk: function(p) { return 1.3; },
        type: "type"
    },
    1505: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type"
    },
    1506: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2.25 : 1; },
        type: "type"
    },
    1507: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class"
    },
    1508: {
        atk: function(p) { return p.unit.class.has("Fighter") ? 1.75 : 1; },
        type: "class"
    },
    1517: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75); },
        type: "type"
    },
    1518: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.75); },
        type: "type"
    },
    1522: {
        atk: function(p) { return p.slot == p.sourceSlot ? 1.75 : 1; },
        type: "type",
    },
    1525: {
        atk: function(p) { return 1.3; },
        type: "condition",
        warning: "El especial seleccionado (%name%) asume que el enemigo sufre delay."
    },
     1526: {
        atk: function(p) { return p.slot < 2 ? window.specials[1526].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1526].multiplier == 1.5 ? 1 : 0);
            window.specials[1526].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                text: 'Usando ' + [1.5, 1.75][n] + 'x como multiplicador de ATK. Para cambiar al ' + [1.75, 1.5][n] + 'x, desactiva y vuelve a activar este especial',
                name: '1526warning'
            });
        },
    },
    1527: {
        atk: function(p) { return p.slot < 2 ? window.specials[1527].multiplier : 1; },
        type: "class",
        onActivation: function(p) {
            var n = (window.specials[1527].multiplier == 1.5 ? 1 : 0);
            window.specials[1527].multiplier = [1.5, 1.75][n];
            p.scope.notify({
                 text: 'Usando ' + [1.5, 1.75][n] + 'x como multiplicador de ATK. Para cambiar al ' + [1.75, 1.5][n] + 'x, desactiva y vuelve a activar este especial',
                name: '1527warning'
            });
        },
},
    1529: {
        orb: function(p) {
             if(p.percHP >= 50.0){
                return (p.unit.class.has("Slasher")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1);
            }else{
                return (p.unit.class.has("Slasher")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1);
            }
          },
        type: "type"
    },
    1530: {
        orb: function(p) {
             if(p.percHP >= 50.0){
                return (p.unit.class.has("Slasher")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2.25) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1);
            }else{
                return (p.unit.class.has("Slasher")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 2) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1);
            }
          },
        type: "type"
    },
    1531: {
        chainAddition: function(p) {return window.specials[1531].multiplier;},
        onActivation: function(p) {
            var n = (window.specials[1531].multiplier == 0.2 ? 1 : 0);
            window.specials[1531].multiplier = [0.2, 0.3][n];
            p.scope.notify({
                text: 'Usando el multiplicador de cadena ' + [0.2, 0.3][n] + 'x. Para cambiar al multiplicador de cadena ' + [0.3, 0.2][n] + 'x, desactiva y activa este especial',
                name: '1531warning'
            });
        }
    },
    1532: {
        chainAddition: function(p) {return window.specials[1532].multiplier;},
        onActivation: function(p) {
            var n = (window.specials[1532].multiplier == 0.2 ? 1 : 0);
            window.specials[1532].multiplier = [0.2, 0.3][n];
            p.scope.notify({
                text: 'Usando el multiplicador de cadena ' + [0.2, 0.3][n] + 'x. Para cambiar al multiplicador de cadena ' + [0.3, 0.2][n] + 'x, desactiva y activa este especial',
                name: '1532warning'
            });
        }
    },
    1535: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
        type: "type"
    },
    1536: {
        atk: function(p) { return p.unit.type == "PSY" ? 1.75 : 1; },
        type: "type"
    },
    1539: {
        def: function(p) { return 0.1; }
    },
    1540: {
        def: function(p) { return 0.1; }
    },
    1541: {
        chainAddition: function(p) {return 0.5;}
    },
    1542: {
        chainAddition: function(p){ return 0.5;}
    },
    1546: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        type: "class"
    },
    1547: {
        atk: function(p) { return p.unit.class.has("Free Spirit") ? 1.5 : 1; },
        type: "class"
    },
    1548: {
        chainAddition: function(p){ return 0.2;}
    },
    1552: {
        atk: function(p) { return p.unit.cost == 40  ? 1.75 : 1; },
        type: "class"
    },
    1553: {
        atk: function(p) { return p.unit.cost == 40  ? 1.75 : 1; },
        type: "class"
    },
    1554: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.35 : 1; },
        orb: function(p) { return p.unit.type == "DEX" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1.35) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1); },
        type: "type"
    },
    1555: {
        atk: function(p) { return p.unit.type == "DEX" ? 1.35 : 1; },
        orb: function(p) { return p.unit.type == "DEX" ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1.35) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1); },
        type: "type"
    },
    1556: {
        atk: function(p) { return p.slot == p.sourceSlot ? 2 : 1; },
        type: "type",
        warning: "El especial seleccionado (%name%) asume que el enemigo tiene más de 3.000.000 de HP."
    },
    1561: {
        atk: function(p) { return p.unit.class.has("Striker") ? 1.5 : 1; },
        type: "class"
    },
    1562: {
        atk: function(p) { return p.unit.class.has("Powerhouse") ? 1.75 : 1; },
        type: "class"
    },
    1563: {
        chainAddition: function(p) {return 0.3;},
        warning: "El especial seleccionado (%name%) asume que estás utilizando su segunda carga."
    },
    1564: {
        chainAddition: function(p) {return 0.3;},
        warning: "El especial seleccionado (%name%) asume que estás utilizando su segunda carga."
    },
    1567: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    1568: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1.5); }
    },
    1570: {
        staticMult: function(p) { return 80; },
    },
    1571: {
        staticMult: function(p) { return 80; },
    },
    1572: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
        type: "class"
    },
    1573: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.75 : 1; },
        type: "class"
    },
    1578: {
        chainAddition: function(p) {return window.specials[1578].multiplier;},
        onActivation: function(p) {
            var n = (window.specials[1578].multiplier == 0.2 ? 1 : window.specials[1578].multiplier == 0.3 ? 2 : 0);
            window.specials[1578].multiplier = [0.2, 0.3, 0.5][n];
            p.scope.notify({
                text: 'Usando el añadido de multiplicador de cadena' + [0.2, 0.3, 0.5][n] + 'x . Para cambiar al ' + [0.3, 0.5, 0.2][n] + 'x, Desactiva y reactiva el especial',
                name: '1578warning'
            });
        }
    },
    1579: {
        chainAddition: function(p) {return window.specials[1579].multiplier;},
        onActivation: function(p) {
            var n = (window.specials[1579].multiplier == 0.2 ? 1 : window.specials[1579].multiplier == 0.3 ? 2 : 0);
            window.specials[1579].multiplier = [0.2, 0.3, 0.5][n];
            p.scope.notify({
                text: 'Usando el añadido de multiplicador de cadena' + [0.2, 0.3, 0.5][n] + 'x . Para cambiar al ' + [0.3, 0.5, 0.2][n] + 'x, Desactiva y reactiva el especial',
                name: '1579warning'
            });
        }
    },
    1580: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); }
    },
    1581: {
        orb: function(p) { return CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, 1); }
    },
    1582: {
        atk: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        rcv: function(p) { return p.unit.class.has("Cerebral") ? 1.5 : 1; },
        type: "class"
    },
    1583:{
        orb: function(p) { return (p.unit.class.has("Striker")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1583].multiplier) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1583].multiplier); },
        onActivation: function(p) {
            var n = (window.specials[1583].multiplier == 1.5 ? 1 : 0);
            window.specials[1583].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Usando el boost de orbes de' + [1.5, 2][n] + 'x. Para cambiar al ' + [2, 1.5][n] + 'x, desactiva y reactiva el especial',
                name: '1583warning'
            });
        },
    },
    1584:{
        orb: function(p) { return (p.unit.class.has("Striker")) ? CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1584].multiplier) : CrunchUtils.getOrbMultiplier(p.orb, p.unit.type, p.unit.class, 1, window.specials[1584].multiplier); },
        onActivation: function(p) {
            var n = (window.specials[1584].multiplier == 1.5 ? 1 : 0);
            window.specials[1584].multiplier = [1.5, 2][n];
            p.scope.notify({
                text: 'Usando el boost de orbes de' + [1.5, 2][n] + 'x. Para cambiar al ' + [2, 1.5][n] + 'x, desactiva y reactiva el especial',
                name: '1584warning'
            });
        },
    },
    1585: {
        atk: function(p) { return (p.percHP*p.maxHP/100 > 5000 && (p.unit.class.has("Slasher") || p.unit.class.has("Driven"))) ? 1.75 : 1; },
        rcv: function(p) { return (p.percHP*p.maxHP/100 > 5000 && (p.unit.class.has("Slasher") || p.unit.class.has("Driven"))) ? 1.5 : 1; },
        type: "class"
    },
    1586: {
        atk: function(p) { return (p.percHP*p.maxHP/100 > 5000 && (p.unit.class.has("Slasher") || p.unit.class.has("Driven"))) ? 1.75 : 1; },
        rcv: function(p) { return (p.percHP*p.maxHP/100 > 5000 && (p.unit.class.has("Slasher") || p.unit.class.has("Driven"))) ? 1.5 : 1; },
        type: "class"
},
    
    
};
