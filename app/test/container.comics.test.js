import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { expect, assert } from 'chai'
import configureStore from 'redux-mock-store'

import Connected_Comics, { Comics } from '../containers/comics/'

describe('<Comics/>', function() {
    it('should have empty state', function() {
        const store = configureStore()({comics: {
            attributionText: '',
            data: {results: []},
            loading: false
        }});
        const wrapper = mount(
            <Provider store={store}>
                <Connected_Comics/>
            </Provider>
        );

        assert(wrapper.find('.comicstore-grid-empty').text(), 'There are no comics here.');
    });

    it('should have a progress bar', function() {
        const wrapper = mount(<Comics data={{results: []}} loading={true}/>);

        expect(wrapper.find('.comicstore-progress')).to.have.length(1);
    });

    it('should have a grid', function() {
        const wrapper = mount(<Comics data={{results: []}} loading={true}/>);

        expect(wrapper.find('.comicstore-grid')).to.have.length(1);
    });
});
