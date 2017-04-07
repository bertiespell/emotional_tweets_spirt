import React from 'react';
import { connect } from 'react-redux';


const Output = React.createClass({

    render() {
        if (this.props.insights.insights.fetching) {
            return (

            <div className='box'>
                <div className='subtitle is-3'>

                    <div className='level-item has-text-centered'>
                        <h1>Personality</h1>
                    </div>
                </div>

            </div>
            )
        }
        else {

            return (
                <div className='box'>
                    <div className='subtitle is-3'>

                        <div className='level-item has-text-centered'>
                            {this.props.insights.insights.data.data.result}
                        </div>
                    </div>

                </div>
            );
        }
    }
});


function mapStateToProps(state) {
    return {
        insights: state
    };
}



export default connect(mapStateToProps)(Output);