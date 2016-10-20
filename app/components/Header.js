import React, { PropTypes } from 'react'

export default class Header extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };

    render() {
        return (
            <header className="comicstore-header mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">{this.props.title}</span>
                </div>
            </header>
        );
    }
}