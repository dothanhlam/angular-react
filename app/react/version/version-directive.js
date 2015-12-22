'use strict';

angular.module('myApp.version.version-directive', []).directive('appVersion', ['version', function (version) {
    /* return function(scope, elm, attrs) {
       elm.text(version);
     };*/
    return {
        link: function (scope, el, attrs) {
            ReactDOM.render(React.createElement(Version, { version: version }), el[0]);
        }
    };
}]);