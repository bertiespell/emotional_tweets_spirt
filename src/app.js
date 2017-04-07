// const React = require('react');
// const EnterUser= require('./EnterUser');
// const Output= require('./Output');

import React from 'react';
import EnterUser from './EnterUser';
import Output from './Output';

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

export default App;