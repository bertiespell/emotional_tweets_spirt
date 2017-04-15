import React from 'react';

const Personalities = React.createClass({
    render() {
        return (
            <div>
                {this.props.data.map(function (trait) {
                    return (
                        <div>
                            <h3>{trait.name}</h3>
                            <progress className="is-info" value={trait.percentile} max='1' />
                        </div>
                    )
                })}

            </div>
        );
    }
});


export default Personalities;