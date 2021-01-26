var Box = React.createClass({
    getInitialState: function() {
        return {
            color: 'white'
        };
    },

    changeColor: function() {
        var newColor = this.state.color == 'white' ? 'black' : 'white';
        this.setState({ color: newColor });
    },

    render: function() {
        return (
            <div>
                <div
                    className='box'
                    style={{background:this.state.color}}
                    onClick={this.changeColor}
                >
                    In here already
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Box />, document.getElementById('div1'));
ReactDOM.render(<Box />, document.getElementById('div2'));
ReactDOM.render(<Box />, document.getElementById('div3'));