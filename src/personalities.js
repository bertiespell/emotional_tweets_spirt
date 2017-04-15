import React from 'react';

const Personalities = React.createClass({
    render() {
            const formatTitle= `title ${this.props.titleSize}`;
            const formatBar = `progress ${this.props.color} ${this.props.size}`;
        return (
                <div>
                    <h3 className={formatTitle}>{this.props.name}</h3>
                    <progress className={formatBar} value={this.props.percent} max='1' />
                </div>
        );
    }
});


export default Personalities;