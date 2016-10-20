import React, { PropTypes } from 'react'

export default class PageNav extends React.Component {
    static propTypes = {
        navigate: PropTypes.func.isRequired,
        nextLabel: PropTypes.string.isRequired,
        backLabel: PropTypes.string,
        hideNext: PropTypes.func,
        hideBack: PropTypes.func,
        hidden: PropTypes.bool
    };

    render() {
        return (this.props.hidden ? <nav/> :
            <nav className="comicstore-nav mdl-cell mdl-cell--12-col">
                {this.props.hideBack && this.props.hideBack() ? '' :
                    <a id="NavBack" className="comicstore-nav__button" title="show more"
                       onClick={() => this.props.navigate('BACK')}>
                        <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                            <i className="material-icons" role="presentation">arrow_back</i>
                            <span className="mdl-button__ripple-container"/>
                        </button>
                        <span className="comicstore-nav__label">{this.props.backLabel}</span>
                    </a>
                }
                <div className="section-spacer"></div>
                {this.props.hideNext && this.props.hideNext() ? '' :
                    <a id="NavNext" className="comicstore-nav__button" title="show more"
                       onClick={() => this.props.navigate('NEXT')}>
                        <span className="comicstore-nav__label">{this.props.nextLabel}</span>
                        <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                            <i className="material-icons" role="presentation">arrow_forward</i>
                            <span className="mdl-button__ripple-container"/>
                        </button>
                    </a>
                }
            </nav>
        );
    }
}