import React from 'react';
import { connect } from 'react-redux';


const Output = React.createClass({
    render () {
        return (
            <div className='box'>
                <div className='subtitle is-3'>

                    <div className='level-item has-text-centered'>
                        <h1>Results</h1>
                </div>
                </div>

            </div>
        );
    }
});


function mapStateToProps (state) {
    return {
        insights: state
    };
}



export default connect(mapStateToProps) (Output);