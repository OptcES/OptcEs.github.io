window.matchers = [

    /* * * * * Captain abilities * * * * */

    {
        name: 'Capitanes potenciadores de tipo',
        target: 'captain',
        matcher: /Aumenta.(el ATK|la HP|el RCV|el ATK y la HP|el ATK y el RCV|la HP y el RCV|el ATK, la HP y el RCV).(de los personajes|de todos los personajes).\[(STR|DEX|QCK|PSY|INT)\][^>]+/i
    },

    {
        name: 'Capitanes potenciadores de clase',
        target: 'captain',
        matcher: /Aumenta.+ (ATK|HP|RCV|ATK y la HP|ATK y el RCV|HP y el RCV|ATK, la HP y el RCV) de[^,]+(Slasher|Striker|Fighter|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/i,
		exclude: [ 1267, 1268 ]
    },

    {
        name: 'Capitanes potenciadores de ATK',
        target: 'captain',
        matcher: /Aumenta.+ ATK/i
    },

    {
        name: 'Capitanes potenciadores de HP',
        target: 'captain',
        matcher: /Aumenta.* (HP|ATK y la HP|HP y el RCV|el ATK, la HP).(de los personajes|de todos los personajes)|Aumenta.+y su HP/i
    },

    {
        name: 'Capitanes potenciadores de RCV',
        target: 'captain',
        matcher: /Aumenta (el RCV|el ATK y el RCV|la HP y el RCV|el ATK, la HP y el RCV).+(de los personajes|de todos los personajes)|Aumenta.+y su RCV/i
    },

    {
        name: 'Capitanes potenciadores de especiales',
        target: 'captain',
        matcher: /Aumenta.+daño.+especiales/i
    },

    {
        name: 'Capitanes 2x ATK y HP',
        target: 'captain',
        matcher: /Aumenta.+ (ATK y la HP|ATK, HP).+ 2x/i
    },

    {
        name: 'Capitanes 2x ATK y RCV',
        target: 'captain',
        matcher: /Aumenta.+ (ATK y el RCV|ATK, RCV).+ 2x/i,
		exclude: [ 808 ]
    },

    {
        name: 'Capitanes 2.5x ATK',
        target: 'captain',
        matcher: /Aumenta.+ (su )?ATK.+ 2.5x/i
    },

    {
        name: 'Capitanes 2.75 ATK',
        target: 'captain',
        matcher: /Aumenta.+ (su )?ATK.+ 2.75x/i,
        include: [ 529, 530, 668, 669 ]
    },

    {
        name: 'Capitanes 3x ATK',
        target: 'captain',
        matcher: /Aumenta.+ (su )?ATK.+ 3x/i,
		exclude: [ 758, 1008, 1141, 1235 ]
    },

    {
        name: 'Capitanes de ATK basado en HP',
        target: 'captain',
        matcher: /Aumenta.+ATK.+proporcionalmente/i
    },

    {
        name: 'Capitanes con patrón de ataque',
        target: 'captain',
        matcher: /(tras hacer|siguiendo un orden|hasta que se de un golpe que no sea|por cada (Good|Great|Perfect) que hagas)/i
    },
    
    {
        name: 'Capitanes de falsos orbes favorables',
        target: 'captain',
        matcher: /hace que los orbes .+ cuenten como favorables/i
    },
	
    {
        name: 'Capitanes de orbes favorables',
        target: 'captain',
        matcher: /si tienen orbe favorable/i
    },

    {
        name: 'Multiplicadores de cadena',
        target: 'captain',
        matcher: /Aumenta.+multiplicador de cadena/i
    },
	
    {
        name: 'Capitanes Combo',
        target: 'captain',
        matcher: /a partir del .+de la cadena/i
    },

    {
        name: 'Reductores de cooldown',
        target: 'captain',
        matcher: /Reduce.+especiales/i
    },

    {
        name: 'Reductores de daño',
        target: 'captain',
        matcher: /Reduce.+daño.+recibido/i,
		exclude: [ 1375, 1376 ]
    },

    {
        name: 'Recuperadores HP',
        target: 'captain',
        matcher: /Recupera/i
    },

    {
        name: 'Tanques',
        target: 'captain',
        matcher: /Reduce (cualquier )?.+daño.+si.+HP.+99/i
    },

    {
        name: 'Zombies',
        target: 'captain',
        matcher: /Sobrevives/i
    },
    
    {
        name: 'Daño al final del turno',
        target: 'captain',
        matcher: /hace.+al final de cada turno/i
    },
    
   {
        name: 'Duplicadores de drop',
        target: 'captain',
        matcher: /(duplicar un drop|duplica el drop)/i
    },

    /* * * * * especiales * * * * */

    {
        name: 'Potenciadores de tipo',
        target: 'special',
        matcher: /Aumenta.(el ATK).(de los personajes|de todos los personajes).\[(STR|DEX|QCK|PSY|INT)\][^>]+/i,
		include: [ 680, 681 ]
    },

    {
        name: 'Potenciadores de clase',
        target: 'special',
        matcher: /Aumenta el ATK de los personajes.+(Slasher|Striker|Fighter|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/i,
		include: [ 715, 716, 915, 916, 945, 946 ]
    },

    {
        name: 'Especiales 1.5x ATK',
        target: 'special',
        matcher: /Aumenta.+ ATK.+ 1.5x/i,
		include: [ 964, 965 ]
    },

    {
        name: 'Especiales 1.75x ATK',
        target: 'special',
        matcher: /Aumenta.+ ATK.+ 1.75x/i
    },

    {
        name: 'Especiales 2x ATK',
        target: 'special',
        matcher: /Aumenta.+ ATK.+ 2x/i,
		exclude: [ 847, 848 ]
    },

    {
        name: 'Potenciadores de ATK condicionales',
        target: 'special',
        matcher: /Aumenta.+ ATK.+contra.+enemigos/i
    },

    {
        name: 'Potenciadores de ATK condicionales (2)',
        target: 'special',
        matcher: /(si en ese turno.+Aumenta.+ATK|Una vez lanzado el especial.+Aumenta.+ATK)/i
    },
	
    {
        name: 'Potenciadores Afinidad de Tipo',
        target: 'special',
        matcher: /Aumenta la Afinidad de Tipo/i
    },
    
    {
        name: 'Potenciadores de ATK Combo',
        target: 'special',
        matcher: /Aumenta el ATK de todos los personajes.+ a partir del.+ golpe de la cadena/i
    },

    {
        name: 'Potenciadores de cadena',
        target: 'special',
        matcher: /Aumenta.+el multiplicador de cadena/i
    },

    {
        name: 'Fijadores de cadena',
        target: 'special',
        matcher: /Fija el multiplicador de cadena/i
    },
	
    {
        name: 'Especiales de daño adicional',
        target: 'special',
        matcher: /cada personaje que ataca ve aumentado el daño que causa/i
    },
	
    {
        name: 'Fijadores de orbes',
        target: 'special',
        matcher: /fija.+orbes/i
    },

    {
        name: 'Potenciadores de orbes',
        target: 'special',
        matcher: /incrementa.+efectividad/i
    },

    {
        name: 'Potenciadores de aparición de orbes',
        target: 'special',
        matcher: /Aumenta.+la probabilidad de obtener orbes/i
    },

    {
        name: 'Manipuladores de orbes',
        target: 'special',
        matcher: /^(?!.*Intercambia).*Cambia.+orbes|y el del capitán|(?!.*intercambia).*cambia.+todos los demás/i,
		include: [ 515, 516, 725, 726, 774, 792, 793, 1139 ],
		exclude: [ 873, 874, 875, 876, 559, 560, 1211, 1212 ]
    },

    {
        name: 'Manipuladores de todos los orbes',
        target: 'special',
        matcher: /(cambia[^,]+todos los orbes|aleaoriza todos los orbes|cambia.+todos los demás)/i,
        include: [ 515, 516, 517, 830, 831, 989 ],
		exclude: [ 894 ]
    },

    {
        name: 'Manipuladores de orbe propio',
        target: 'special',
        matcher: /cambia.+su propio orbe.+a/i
    },

    {
        name: 'Aleatorizadores de orbes',
        target: 'special',
        matcher: /aleatoriza.+(orbes|todos los demás)/i
    },

    {
        name: 'Intercambiadores de orbes',
        target: 'special',
        matcher: /intercambia.+orbes/i
    },
	
	{
        name: 'Sincronizadores de orbes',
        target: 'special',
        matcher: /Cambia.+(el orbe del capitán|los orbes|su propio orbe).+a.+(favorable|favorables)/i,
        include: [ 1036, 1037 ],
		exclude: [ 1330 ]
    },
	
    {
        name: 'Falsificadores de orbes',
        target: 'special',
        matcher: /hace que los orbes.+cuenten como/i
    },

    {
        name: 'Vaciadores de orbes',
        target: 'special',
        matcher: /(Vacía|cambia.+a \[VACIO\])/i
    },

    {
        name: 'Rellenadores de orbes',
        target: 'special',
        matcher: /cambia los orbes \[VACIO\].+a/i,
		include: [ 397, 398, 705, 774, 1337, 1338, 1383, 1384 ]
    },

    {
        name: 'Delayers',
        target: 'special',
        matcher: /retrasa/i
    },

    {
        name: 'Daño a todos los enemigos',
        target: 'special',
        matcher: /Hace.+a todos los enemigos/i,
		include: [ 446, 447 ],
		exclude: [ 904, 917, 918, 1235, 1236 ]
    },

    {
        name: 'Daño con varios golpes',
        target: 'special',
        matcher: /Inflige \d+ golpes/i
    },

    {
        name: 'Daño fijo',
        target: 'special',
        matcher: /daño fijo/i
    },

    {
        name: 'Reductores de HP en %',
        target: 'special',
        matcher: /Reduce la HP actual de los enemigos/i,
		include: [ 1226 ]
    },

    {
        name: 'Daño basado en HP',
        target: 'specialNotes',
        matcher: /specialProportional/i
    },

    {
        name: 'Reductores de defensa',
        target: 'special',
        matcher: /Reduce la defensa/i
    },

    {
        name: 'Generadores RCV',
        target: 'special',
        matcher: /a[\s,\[\]A-Zo]+\[RCV\]/,
	    exclude: [ 362, 363 ]
    },

    {
        name: 'Convertidores RCV',
        target: 'special',
        matcher: /los orbes \[RCV\].+a/i,
	    include: [ 705, 835, 836, 1291, 1292 ]
    },

    {
        name: 'Reductores de daño',
        target: 'special',
        matcher: /Reduce.+daño.+recibido/i
    },

    {
        name: 'Nulificadores de daño',
        target: 'special',
        matcher: /Reduce.+daño.+recibido.+100%/i
    },

    {
        name: 'Reductores de Encadenamientos',
        target: 'special',
        matcher: /Reduce.+duración.+encadenamientos/i,
    },

    {
        name: 'Reductores de Despair',
        target: 'special',
        matcher: /Reduce.+duración.+despair/i,
    },
	
	{
        name: 'Reductores de Silencio',
        target: 'special',
        matcher: /Reduce.+duración.+silencio/i,
    },

    {
        name: 'Eliminadores de orbes Negativo',
        target: 'special',
        matcher: /(vacía.+\[NEGATIVO\]|cambia.+\[NEGATIVO\].+a|incluidos.+\[NEGATIVO\])/i,
		include: [ 1383, 1384 ],
		exclude: [ 1330 ]
    },

    {
        name: 'Eliminadores de Ceguera',
        target: 'special',
        matcher: /elimina.+ ceguera/i
    },

    {
        name: 'Recuperadores HP',
        target: 'special',
        matcher: /Recupera una cantidad de HP/i
    },

    {
        name: 'Reductores HP del equipo',
        target: 'special',
        matcher: /Reduce la HP(actual )? del equipo/i
    },

    {
        name: 'Envenenadores',
        target: 'special',
        matcher: /envenena (?!envenenamiento)/i,
		include: [ 391, 392, 437, 438 ]
    },

    {
        name: 'Eliminadores de veneno',
        target: 'special',
        matcher: /Elimina.+ envenenamiento/i,
        include: [ 1078, 1079 ]
    },

    {
        name: 'Zombies',
        target: 'special',
        matcher: /Sobrevives/i
    },
    
    {
       name: 'Reductores carga especial',
       target: 'special',
       matcher: /reduce la carga (de los especiales|del especial)/i
    },
    
    {
       name: 'Reductores de Parálisis',
       target: 'special',
       matcher: /(reduce.+duración.+parálisis|elimina la parálisis)/i
    },
	
	/* * * * * Sailor * * * * */
    
    {
        name: 'Tiene Habilidad Sailor',
        target: 'sailor',
        matcher: /\S/i
    },
    
    {
        name: 'Sailors potenciadoras de tipo',
        target: 'sailor',
        matcher: /Aumenta (el ATK|la HP|el RCV|el ATK y la HP|el ATK y el RCV|la HP y el RCV|el ATK, la HP y el RCV) de[^,]+(STR|DEX|QCK|PSY|INT)\b/i
    },
    
    {
        name: 'Sailors potenciadoras de clase',
        target: 'sailor',
        matcher: /Aumenta (el ATK|la HP|el RCV|el ATK y la HP|el ATK y el RCV|la HP y el RCV|el ATK, la HP y el RCV) de[^,]+(Slasher|Striker|Fighter|Shooter|Free Spirit|Cerebral|Powerhouse|Driven)/i
    },
    
    {
        name: 'Sailors de orbes favorables',
        target: 'sailor',
        matcher: /Hace que los orbes (\[STR\]|\[DEX\]|\[QCK\]|\[PSY\]|\[INT\]|\[RCV\]|\[TND\]) cuenten como favorables/i
    },

];


