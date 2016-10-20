import React, { PropTypes } from 'react'

export default class Footer extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        copyright: PropTypes.string
    };

    render() {
        return (
            <footer className="mdl-mini-footer">
                <div className="mdl-mini-footer__left-section">
                    <div className="mdl-logo">{this.props.title}</div>
                    <ul className="mdl-mini-footer__link-list">
                        <li>{this.props.copyright}</li>
                    </ul>
                </div>
            </footer>
        );
    }
}