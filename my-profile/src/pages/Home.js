import React, { Component } from 'react';
import Header from '../components/Header/Header'
import WorkExperience from '../components/WorkExperince/WorkExperience';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (<>
        <Header/>
        <WorkExperience/>
        </>);
    }
}

export default Home;