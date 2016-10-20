import React from 'react'
import { connect } from 'react-redux'

import Page from '../Page'

export class Comics extends Page {
    render() {
        return this.renderPage(<div>page</div>);
    }
}

export default connect((store) => {
    return {
        attributionText: store.comics.attributionText,
        data: store.comics.data,
        loading: store.comics.fetching
    }
})(Comics);