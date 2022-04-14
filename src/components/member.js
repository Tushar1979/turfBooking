import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: true,
        }
    }
    
    componentWillMount() {
        console.log(this.state.start);
        this.setState({
            start: false,
        })
        console.log(this.state.start);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <>

            </>
        );
    }
}

Member.propTypes = {

};

export default Member;