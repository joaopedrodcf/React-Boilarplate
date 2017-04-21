import React from 'react';
import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
import Section from './Section.jsx';
import Footer from './Footer.jsx';

import './styles.css'

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Navbar/>
                <Sidebar/>
                <Section/>
                <Footer/>
            </div>
        );
    }
}
