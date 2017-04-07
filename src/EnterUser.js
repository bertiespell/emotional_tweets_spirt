const React = require('react');

const EnterUser = React.createClass({
    render () {
        return (
            <div className='box has-text-centered'>
                <div className="field">
                    <label className="label">Enter Twitter Username</label>
                    <p className="control">
                        <input className="input" type="text" placeholder="Username" />
                    </p>
                </div>
                    <a className='button is-info'>Insights</a>
                    <a className='button is-warning'>Translate</a>

            </div>
        );
    }
});


module.exports = EnterUser;