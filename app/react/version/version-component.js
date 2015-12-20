var Version = React.createClass({
    displayName: "Version",

    render: function () {
        return React.createElement(
            "span",
            null,
            " build ",
            this.props.version,
            " "
        );
    }
});