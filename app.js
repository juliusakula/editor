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
    
    ngClipProvider.setPath("/node_modules/zeroclipboard/dist/ZeroClipboard.swf");
}]).controller('CtrlOne', function($scope){
    $scope.hello = "Hello!!";
    $scope.asdfClass = "btn btn-primary";
}).controller('textInputController', function($scope, dataPassing){
    $scope.text = dataPassing.text;
    $scope.$watch('text', function(newVal, oldVal){
        dataPassing.text = newVal;
    });
}).controller('readmeOutputController', function($scope, dataPassing){
    $scope.text = dataPassing;
    $scope.$watch('text', function(newVal, oldVal){
        dataPassing.text = newVal;
    });
}).service('dataPassing', function(){ return { text: ''}; } );