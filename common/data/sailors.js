window.sailors = {    
    311: {       
        atkStatic: function(p) { return p.unit.class.has("Cerebral") && p.percHP <= 30.0 ? 50 :0 ; }
    },
    312: {       
        atkStatic: function(p) { return p.unit.class.has("Cerebral") && p.percHP <= 30.0 ? 50 :0 ; }
    },
    360: {       
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 100 : 0; }
    },
    361: {       
        hpStatic: function(p) { return p.unit.class.has("Powerhouse") ? 100 : 0; }
    },   
    525: {       
        rcvStatic: function(p) { return p.unit.type == "PSY" ? 15 : 0; }
    },
    526: {       
        rcvStatic: function(p) { return p.unit.type == "PSY" ? 15 : 0; }
    },
    540: {       
        atkStatic: function(p) { return p.unit.class.has("Fighter") ? 20 :0 ; }
    },
    541: {       
        atkStatic: function(p) { return p.unit.class.has("Fighter") ? 20 :0 ; }
    },
    553: {       
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 20 :0 ; }
    },
    554: {       
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 20 :0 ; }
    },
    555: {       
        rcvStatic: function(p) { return p.unit.class.has("Shooter") ? 10 :0 ; }
    },
    556: {       
        rcvStatic: function(p) { return p.unit.class.has("Shooter") ? 10 :0 ; }
    },
    559: {       
        atkStatic: function(p) { return p.unit.class.has("Shooter") ? 20 :0 ; }
    },
    560: {       
        atkStatic: function(p) { return p.unit.class.has("Shooter") ? 20 :0 ; }
    },
    640: {       
        atkStatic: function(p) { return p.unit.class.has("Fighter") && p.percHP <= 30.0 ? 100 :0 ; }
    },
    641: {       
        atkStatic: function(p) { return p.unit.class.has("Fighter") && p.percHP <= 30.0 ? 100 :0 ; }
    },
    644: {
        atkStatic: function(p) { return p.unit.type == "INT" ? 20 : 0; },
        rcvStatic: function(p) { return p.unit.type == "INT" ? 20 : 0; }
    },
    645: {       
        atkStatic: function(p) { return p.unit.type == "INT" ? 20 : 0; },
        rcvStatic: function(p) { return p.unit.type == "INT" ? 20 : 0; }
    },
    646: {       
        atkStatic: function(p) { return p.unit.type == "STR" ? 30 : 0; }
    },
    647: {       
        atkStatic: function(p) { return p.unit.type == "STR" ? 30 : 0; }
    },
    1172: {       
        rcvStatic: function(p) { return p.unit.type == "PSY" ? 15 : 0; }
    },
    1173: {       
        rcvStatic: function(p) { return p.unit.type == "PSY" ? 15 : 0; }
    },
    1174: {       
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 20 :0 ; }
    },
    1175: {       
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 20 :0 ; }
    },
    1183: {       
        atkStatic: function(p) { return p.unit.type == "PSY" && p.percHP <= 99 ? 30 : 0; },
    },
    1184: {       
        atkStatic: function(p) { return p.unit.type == "PSY" && p.percHP <=99 ? 30 : 0; },
    },
    1189: {       
        atkStatic: function(p) { return p.unit.type == "QCK" ? 40 : 0; },
    },
    1190: {       
        atkStatic: function(p) { return p.unit.type == "QCK" ? 40 : 0; },
    },
    1209: {       
        rcvStatic: function(p) { return p.unit.class.has("Shooter") ? 10 :0 ; }
    },
    1210: {       
        rcvStatic: function(p) { return p.unit.class.has("Shooter") ? 10 :0 ; }
    },
    1211: {       
        atkStatic: function(p) { return p.unit.class.has("Shooter") ? 20 :0 ; }
    },
    1212: {       
        atkStatic: function(p) { return p.unit.class.has("Shooter") ? 20 :0 ; }
    },
    1231: {       
        atkStatic: function(p) { return p.unit.class.has("Striker") ? 50 :0 ; }
    },
    1232: {       
        atkStatic: function(p) { return p.unit.class.has("Striker") ? 50 :0 ; }
    },
    1233: {       
        rcvStatic: function(p) { return p.unit.class.has("Slasher") ? 30 :0 ; }
    },
    1234: {       
        rcvStatic: function(p) { return p.unit.class.has("Slasher") ? 30 :0 ; }
    },
    1256: {       
        atkStatic: function(p) { return p.unit.class.has("Driven") ? 10 :0 ; },
        rcvStatic: function(p) { return p.unit.class.has("Driven") ? 10 :0 ; }
    },
    1269: {       
        atkStatic: function(p) { return p.scope.data.team[1].unit.class.has("Driven") ? 100 :0 ; }
    },
    1270: {       
        atkStatic: function(p) { return p.scope.data.team[1].unit.class.has("Driven") ? 100 :0 ; }
    },
    1321: {       
        atkStatic: function(p) { return p.scope.data.team[1].unit.class.has("Cerebral") && (p.unit.class.has("Slasher") || p.unit.class.has("Cerebral")) ? 75 :0 ;  }
    },
    1322: {       
        atkStatic: function(p) { return p.scope.data.team[1].unit.class.has("Cerebral") && (p.unit.class.has("Slasher") || p.unit.class.has("Cerebral")) ? 75 :0 ; }
    },
    
    1363: {       
        hpStatic: function(p) { return p.unit.type == "PSY" ? 100 : 0; }
    },
    1364: {       
        hpStatic: function(p) { return p.unit.type == "PSY" ? 100 : 0; }
    },    
    1367: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; }
    },
    1368: {
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; }
    },
    1405: {       
        atkStatic: function(p) { return p.unit.class.has("Shooter") && p.percHP <= 30.0 ? 100 :0 ; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") && p.percHP <= 30.0 ? 100 :0 ; }
    },
    1406: {       
        atkStatic: function(p) { return p.unit.class.has("Shooter") && p.percHP <= 30.0 ? 100 :0 ; },
        rcvStatic: function(p) { return p.unit.class.has("Shooter") && p.percHP <= 30.0 ? 100 :0 ; }
    },
    1435: {       
        atkStatic: function(p) { return p.classCount.Powerhouse==6 ? 150 :0 ; }
    },
    1436: {       
        atkStatic: function(p) { return p.classCount.Powerhouse==6 ? 150 :0 ; }
    },
    1443: {       
        atkStatic: function(p) { return p.slot == p.sourceSlot && p.classCount.Powerhouse==6 ? 150 :0 ; },
        hpStatic: function(p) { return p.slot == p.sourceSlot && p.classCount.Powerhouse==6 ? 50 :0 ; }
    },
    1444: {       
        atkStatic: function(p) { return p.slot == p.sourceSlot && p.classCount.Powerhouse==6 ? 150 :0 ; },
        hpStatic: function(p) { return p.slot == p.sourceSlot && p.classCount.Powerhouse==6 ? 50 :0 ; }
    },
    1476: {       
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; }
    },
    1477: {       
        atkStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; }
    },
    1510: {       
        atkStatic: function(p) { return p.unit.class.has("Striker") && p.percHP >= 70.0 ? 20 :0 ; }
    },
    1511: {       
        atkStatic: function(p) { return p.unit.class.has("Powerhouse") && p.scope.data.team[1].unit.class.has("Powehouse") ? 20 :0 ; }
    },
    1529: {       
        atk: function(p) { return p.scope.data.team[1].unit.type == "STR" || p.scope.data.team[1].unit.type == "QCK" ? 0.5 :1 ; }
    },
    1530: {       
        atk: function(p) { return p.scope.data.team[1].unit.type == "STR" || p.scope.data.team[1].unit.type == "QCK" ? 0.5 :1 ; }
    },
    1537: {       
        hpStatic: function(p) { return p.unit.type == "STR" ? 150 : 0; }
    },   
    1538: {       
        hpStatic: function(p) { return p.unit.type == "STR" ? 150 : 0; }
    }, 
    1539: {       
        atkStatic: function(p) { return  p.unit.type == "INT" ? 50: 0; },
        hpStatic: function(p) {return p.unit.type == "INT" ? 50: 0; },
        rcvStatic: function(p) { return p.unit.type == "INT" ? 50: 0; }
    }, 
    1540: {       
        atkStatic: function(p) { return  p.unit.type == "INT" ? 50: 0; },
        hpStatic: function(p) {return p.unit.type == "INT" ? 50: 0; },
        rcvStatic: function(p) { return p.unit.type == "INT" ? 50: 0; }
    },
    /* Elizabello grr
    1565: {       
        atkStatic: function(p) { }
    },
    1566: {       
        atkStatic: function(p) { }
    },
    */
    1574: {       
        atkStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 200 :0 ; }
    },
    1575: {       
        atkStatic: function(p) { return p.percHP <= 30.0 && p.slot == p.sourceSlot ? 200 :0 ; }
    },
    1654: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" ? 75 : 0; },
    },
    1655: {
        atkStatic: function(p) { return p.unit.type == "QCK" ? 75 : 0; },
        rcvStatic: function(p) { return p.unit.type == "QCK" ? 75 : 0; },
    },
    1656: {
            atkStatic: function(p) { return p.unit.type == "QCK" ? 75 : 0; },
            rcvStatic: function(p) { return p.unit.type == "QCK" ? 75 : 0; },
    },
    1681: {
        atkStatic: function(p) { return 56; },
        hpStatic: function(p) { return 56; },
    },
    1682: {
        atkStatic: function(p) { return 56; },
        hpStatic: function(p) { return 56; },
    },
    1699: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") ? 75 : 0; },
    },
    1700: {
        atkStatic: function(p) { return p.unit.class.has("Fighter") ? 75 : 0; },
    },
    1728: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
    },
    1729: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        rcvStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 30 : 0; },
    },
    1705: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1706: {
        atkStatic: function(p) { return 50; },
        rcvStatic: function(p) { return 50; },
        hpStatic: function(p) { return 50; },
    },
    1752: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 20 : 0; },
    },
    1753: {
        atkStatic: function(p) { return p.unit.class.has("Slasher") ? 20 : 0; },
    },
    1754: {
        atkStatic: function(p) { return 40; },
        rcvStatic: function(p) { return 40; },
        hpStatic: function(p) { return 40; },
    },
    1755: {
        atkStatic: function(p) { return 40; },
        rcvStatic: function(p) { return 40; },
        hpStatic: function(p) { return 40; },
    },
    1773: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 25 : 0; },
    },
    1774: {
        atkStatic: function(p) { return p.unit.class.has("Free Spirit") ? 25 : 0; },
    },
    1797: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 75 : 0; },
    },
    1798: {
        atkStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 75 : 0; },
        hpStatic: function(p) { return p.unit.type == "STR" || p.unit.type == "DEX" || p.unit.type == "QCK" ? 75 : 0; },
},
    }