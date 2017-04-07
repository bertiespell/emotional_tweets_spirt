import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getInsights} from './actions/actions';
import { Field, reduxForm, propTypes } from 'redux-form';


class EnterUser extends Component {
    render () {
        return (
            
                <div className='box has-text-centered' id='commentform'>
               <form onSubmit={this.handleSubmit.bind(this)}>
                   <div className='box'>
                       <div className="field">
                           <label className="label">Enter Username</label>
                           <div>
                               <Field name="insights" component="input" type="text" />
                           </div>
                       </div>
                   </div>
                   <div className="field is-grouped">
                       <p className="control">
                           <button className="button is-info">Insights</button>
                           <button className="button is-warning">Translate</button>
                       </p>
                   </div>
               </form>
           </div>

        );
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.getInsights(this.props.insights.form.user.values.insights);
        this.props.reset();

    }
}


function mapStateToProps (state) {
    return {
        insights: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getInsights: (username) => {
            dispatch(getInsights(username));
        }
    };
}

EnterUser = reduxForm({
    form: 'user'
})(EnterUser);



export default connect(mapStateToProps, mapDispatchToProps) (EnterUser);