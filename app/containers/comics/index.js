import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment';
import $ from 'jquery';

import config from '../../../config'

import Page from '../Page'
import Request from '../../plugin/Request'

export class Comics extends Page {
    static requestParams = {
        format: 'comic',
        formatType: 'comic',
        noVariants: false,
        apikey: config.apikey
    };
    weekStart = '';
    weekEnd = '';

    constructor() {
        super();

        this.title = 'Marvel Comics';
        this.weekStart = moment().startOf('isoWeek').format('YYYY-MM-DD');
        this.weekEnd = moment().endOf('isoWeek').format('YYYY-MM-DD');
    }

    componentWillMount() {
        if (typeof this.props.dispatch == 'function') {
            this.load();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.attributionText) {
            this.setState({copyright: nextProps.attributionText});
        }
    }

    load(params = Comics.requestParams) {
        let dateRange = `${this.weekStart}, ${this.weekEnd}`;

        this.props.dispatch({type: 'FETCH_COMICS_START'});

        $('.mdl-layout__content').animate({ scrollTop: 0 }, 300);

        Request.Get('https://gateway.marvel.com:443/v1/public/comics',
            {...params, dateRange},
            function(result) {
                this.props.dispatch({type: 'FETCH_COMICS_FULFILLED', data: result});
            }.bind(this)
        );
    }

    render() {
        return this.renderPage(<div>
            <div className="comicstore-progress mdl-progress mdl-js-progress mdl-progress__indeterminate"
                 hidden={!this.props.loading} />
            <div className="comicstore-grid-empty"
                 hidden={this.props.loading || (!this.props.loading && this.props.data.results.length)}>
                There are no comics here.
            </div>
        </div>);
    }
}

export default connect((store) => {
    return {
        attributionText: store.comics.attributionText,
        data: store.comics.data,
        loading: store.comics.fetching
    }
})(Comics);