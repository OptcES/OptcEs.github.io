(function() {

/* * * * * Bootstrapping * * * * */

if (window.hasOwnProperty('units')) Utils.parseUnits(true);
else window.addEventListener('load',function() { Utils.parseUnits(true); },false);

/************
 * MainCtrl *
 ************/

var MainCtrl = function($scope, $rootScope, $controller, $filter, $storage) {

    /* * * * * Theme * * * * */

    var edgyMode = $storage.get('edgy', false);
    $('#edgy')[0].disabled = !edgyMode;

    $(document.body).dblclick(function(e) {
        if (e.target.id != 'main' && e.target.nodeName != 'BODY') return;
        edgyMode = !edgyMode;
        $storage.set('edgy', edgyMode);
        $('#edgy')[0].disabled = !edgyMode;
    });

    /* * * * * Alerts * * * * */

    $scope.conflictingSpecials = false;

    $scope.$watch('conflictingSpecials',function(value) {
        if (value) {
            $scope.notify({
                text: 'Dos o más habilidades especiales seleccionadas son incompatibles entre sí, ' + 
                    'tratar de calcular la combinación más fuerte.',
                type: 'error'
            });
        }
    });
	
	$scope.$watch('conflictingMultipliers',function(value) {
        if (value) {
            $scope.notify({
                text: 'Sólo puede estar activo un multiplicador de ataque a la vez,'+
                        'tratar de calcular la mejor combinación.',
                type: 'error'
            });
        }
    });

    var zombieNoty = null;
    $scope.$watch('numbers.zombie',function(zombie) {
        if (zombieNoty !== null) zombieNoty.close();
        if (zombie === undefined || zombie === null) return;
        if (zombie[0] == 'zombie' && !zombie[1]) 
            zombieNoty = $scope.notify({ timeout: 0, type: 'warning',
                text: 'El equipo Zombi seleccionado podría no funcionar (HP demasiado alta, máximo HP permitido: ' + $filter('number')(zombie[2]) + ')' });
        else if (zombie[0] === 'zombie' && zombie[1])
            zombieNoty = $scope.notify({ timeout: 0, type: 'success',
                text: 'El equipo Zombi seleccionado funcionará (máximo HP permitido: ' + $filter('number')(zombie[2]) + ')' });
        else if (zombie[0] == 'reducer')
            zombieNoty = $scope.notify({ timeout: 0, type: 'information',
                text: 'Máximo daño que puedes recibir: ' + $filter('number')(zombie[1]) + ' HP por turno',});
    });

    $scope.showGatherButton = window.units.some(function(x) { return !x.incomplete && x.growth && x.growth.atk === 0; });

    /* * * * * Notifications * * * * */

    var notifications = { };

    $rootScope.notify = function(data) {
        data = jQuery.extend({ type: 'information' },data);
        if (data.name && notifications[data[name]]) notifications[data[name]].close(); 
        var notification = noty(jQuery.extend({ timeout: 2500, layout: 'topRight', theme: 'relax' }, data));
        if (data.name) notifications[data[name]] = notification;
        return notification;

    };

    // instantiate storage controller separately
    
    $controller('StorageCtrl', { $scope: $scope });
    $controller('DismissalCtrl');

};

angular.module('optc')
    .controller('MainCtrl', MainCtrl);

})();
