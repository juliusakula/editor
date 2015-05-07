angular.module('JuliusAkula',['ui.bootstrap', 'ui.router', 'ngClipboard', 'yaru22.md']).config(['ngClipProvider', '$stateProvider', '$urlRouterProvider', function(ngClipProvider, $stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('index', {
        url: "/",
        templateUrl: 'src/views/homepage.tpl.html',
        controller: function($scope){
            $scope.btns = "btn btn-";
            $scope.types = [
            {
                type: 'default',
                message: 'Default Dialog'
            },
            {
                type: 'danger',
                message: 'Danger Dialog'
            },
            {
                type: 'primary',
                message: 'Primary Dialog'
            },
            {
                type: 'success',
                message: 'Success Dialog'
            },
            {
                type: 'warning',
                message: 'Warning Dialog'
            },
            {
                type: 'info',
                message: 'Info Dialog'
            }];
        }
    });
    ngClipProvider.setPath("node_modules/zeroclipboard/dist/ZeroClipboard.swf");

}]).controller('textInputController', function($scope, $http){
    $http({method: "GET", url: "README.md"}).success(function(data, status, headers, config) {
        $scope.text = data;
    });

    $scope.fallback = function(copy) {
        window.prompt('Press cmd+c to copy the text below.', copy);
    };
});