import React, { PropTypes } from 'react'

export default class Header extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        actions: PropTypes.array
    };
    actionRefs = [];
    actionTimer = null;

    render() {
        return (
            <header className="comicstore-header mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">{this.props.title}</span>
                    <div className="mdl-layout-spacer"></div>
                    {typeof this.props.actions != "object" ? '' : this.props.actions.map(action => (
                        <div key={action.id} className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                                    mdl-textfield--floating-label mdl-textfield--align-right">
                            <label className="mdl-button mdl-js-button mdl-button--icon"
                                   htmlFor={action.id}>
                                <i className="material-icons">{action.icon}</i>
                            </label>
                            <div className="mdl-textfield__expandable-holder">
                                <input className="mdl-textfield__input" type="text"
                                       placeholder={action.placeholder} id={action.id}
                                       ref={(ref) => this.actionRefs[action.id] = ref}
                                       onChange={() => {
                                           clearTimeout(this.actionTimer);
                                           this.actionTimer = setTimeout(function() {
                                               action.onChange(this.actionRefs[action.id].value);
                                           }.bind(this), 500);
                                       }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </header>
        );
    }
}