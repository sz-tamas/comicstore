import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class Drawer extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(PropTypes.shape({
            to: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired).isRequired
    };

    render() {
        return (
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">{this.props.title}</span>
                <nav className="mdl-navigation">
                    {this.props.links.map(link =>
                        <Link key={`${link.to}`} className="mdl-navigation__link" to={link.to}>{link.label}</Link>
                    )}
                </nav>
            </div>
        );
    }
}