var MyList = React.createClass({
    displayName: 'MyList',

    render: function () {

        var data = this.props.data;

        var rows = data.map(function (datum) {
            var clickHandler = function (ev) {
                console.log("Still in reactJs");
                console.log(ev);
            };

            return React.createElement(
                'tr',
                { onClick: clickHandler },
                React.createElement(
                    'td',
                    null,
                    datum['0']
                ),
                React.createElement(
                    'td',
                    null,
                    datum['1']
                ),
                React.createElement(
                    'td',
                    null,
                    datum['2']
                ),
                React.createElement(
                    'td',
                    null,
                    datum['3']
                ),
                React.createElement(
                    'td',
                    null,
                    datum['4']
                )
            );
        });
        return React.createElement(
            'table',
            null,
            rows
        );
    }
});