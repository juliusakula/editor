var app = angular.module('JuliusAkula',['ui.router', // angular routing
        'ngClipboard' // copy to clipboard
    ]).config(['ngClipProvider', function(ngClipProvider) { 
    ngClipProvider.setPath("/node_modules/zeroclipboard/dist/ZeroClipboard.swf");
}]).controller('CtrlOne', function($scope){
    $scope.hello = "Hello!!";
    $scope.asdfClass = "btn btn-primary";
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
});