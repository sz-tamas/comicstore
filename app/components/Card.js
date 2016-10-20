import React, { PropTypes } from 'react'

export default class Card extends React.Component {
    static propTypes = {
        cover: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
    };

    render() {
        return (
            <div className="comicstore-card mdl-card mdl-shadow--6dp">
                <div className="mdl-card__title">
                    <div className="mdl-card__title-cover">
                        <img src={this.props.cover} width="330"/>
                    </div>
                    <h2 className="mdl-card__title-text">{this.props.title}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <div className="block-with-text">{this.props.description}</div>
                </div>
                <div className="mdl-card__menu">
                    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                        <i className="material-icons">share</i>
                    </button>
                </div>
            </div>
        );
    }
}