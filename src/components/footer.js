import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="footer">
                    <p>All Right Reserved</p>
                </div>
            </div>
        );
    }
}

export default Footer;
