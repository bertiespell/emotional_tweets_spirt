import React from 'react';
import { connect } from 'react-redux';
import PersonalityTrait from './personalities';


const Output = React.createClass({


    render() {
        if (this.props.insights.insights.fetching) {
            return (
                <div></div>
            );
        }
        else {
            const colours = ['is-info', 'is-success', 'is-Warning', 'is-danger', 'is-primary', 'is-info', 'is-success', 'is-Warning', 'is-danger'];
            return (
                <div className='box'>
                    <h1 className='level-item has-text-centered title is-1'>Personality</h1>

                        {this.props.insights.insights.data.map((mainTrait, i) => {
                            return (
                                <div className="box">
                                    <PersonalityTrait name={mainTrait.name} percent={mainTrait.percentile} key={i} color={colours[i]} size="is-medium" titleSize="is-2" />
                                    <div className="section">

                                        <div className='box'>

                                            {mainTrait.children.map((trait, x) => {
                                                return (
                                                    <PersonalityTrait name={trait.name} percent={trait.percentile} key={x} color={colours[x + 1]} size="is-small" titleSize="is-4" />
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>


                            );
                        })}


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