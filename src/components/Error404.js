import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Error404 extends Component {
    render() {
        return (
            <div>
                <pre>Error 404.</pre>
                <h1>You must be lost!</h1>
                <p>You can go back to homepage <Link to="/">here</Link>.</p>
            </div>
        );
    }
}

export default Error404;
