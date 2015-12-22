/**
 * Created by LamDo on 12/13/15.
 */
angular.module('myApp.list.list-directive', []).directive('myList', [function () {

    return {
        scope: {
            data: '='
        },
        link: function (scope, el, attrs) {
            scope.$watch('data', function (newValue, oldValue) {
                console.log('newValue', newValue);
                console.log('oldValue', oldValue);
                ReactDOM.render(React.createElement(MyList, { data: newValue }), el[0]);
            });
        }
    };
}]);