import React from 'react'
import { mount } from 'enzyme'
import { expect, assert } from 'chai'

import PageNav from '../components/PageNav'

describe('<PageNav/>', function() {
    it('should show next action', function() {
        const wrapper = mount(<PageNav navigate={() => {}} nextLabel="More"/>);

        assert(wrapper.find('#NavNext .comicstore-nav__label').text(), 'More');
    });

    it('should hide next action', function() {
        const wrapper = mount(<PageNav navigate={() => {}} nextLabel="More" hideNext={() => true}/>);

        expect(wrapper.find('#NavNext')).to.have.length(0);
    });

    it('should show back action', function() {
        const wrapper = mount(<PageNav navigate={() => {}} backLabel="Less"/>);

        assert(wrapper.find('#NavBack .comicstore-nav__label').text(), 'Less');
    });

    it('should hide next action', function() {
        const wrapper = mount(<PageNav navigate={() => {}} backLabel="Less" hideBack={() => true}/>);

        expect(wrapper.find('#NavBacl')).to.have.length(0);
    });
});