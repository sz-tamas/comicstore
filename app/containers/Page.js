import React from 'react'

import Header from '../components/Header'
import Drawer from '../components/Drawer'
import Footer from '../components/Footer'

export default class Page extends React.Component {
    title = '';
    drawerLinks = [];
    headerActions = [];

    constructor() {
        super();

        this.state = {copyright: '© 2016'};
        this.drawerLinks = [
            {to: '/', label: 'Comics'}
        ];
    }

    renderPage(page) {
        return (<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <Header title={this.title} actions={this.headerActions}/>
            <Drawer title={this.title} links={this.drawerLinks}/>
            <main className="mdl-layout__content comicstore-content">
                {page}
                <Footer title={this.title} copyright={this.state.copyright}/>
            </main>
        </div>)
    }

    render() {}
}