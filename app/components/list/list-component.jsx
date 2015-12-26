var MyList = React.createClass({
    render: function() {

        var data = this.props.data;

        var rows = data.map(function(datum) {
            var clickHandler = function(ev){
                console.log("Still in reactJs");
                console.log(ev);
            }

            return (<tr onClick={clickHandler}>
                        <td>{datum['0']}</td>
                        <td>{datum['1']}</td>
                        <td>{datum['2']}</td>
                        <td>{datum['3']}</td>
                        <td>{datum['4']}</td>
                    </tr>);

        });
        return (<table><tbody>{rows}</tbody></table>)
    }
});