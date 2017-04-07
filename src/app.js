const React = require('react');
const EnterUser= require('./EnterUser');
const Output= require('./Output');

const App = React.createClass({
    render: function () {
        return (
            <div className='box'>
                <div className='title is-1'>

                    <div className='level-item has-text-centered'>
                        Emotional Tweets
                </div>
                </div>
                <EnterUser />
                <Output />

            </div>
        );
    }
});

module.exports = App;