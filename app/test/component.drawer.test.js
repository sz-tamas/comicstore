import React from 'react'
import { mount } from 'enzyme'
import { expect, assert } from 'chai'

import Drawer from '../components/Drawer'

describe('<Drawer/>', function() {
    it('should show title', function() {
        const title = 'Marvel Comics';
        const links = [{to: '/', label: 'Comics'}];
        const wrapper = mount(<Drawer title={title} links={links}/>);

        assert(wrapper.find('.mdl-layout-title').text(), title);
    });

    it('should show links', function() {
        const title = 'Marvel Comics';
        const links = [
            {to: '/', label: 'Comics'},
            {to: '/heroes', label: 'Heroes'}
        ];
        const wrapper = mount(<Drawer title={title} links={links}/>);

        expect(wrapper.find('.mdl-navigation__link')).to.have.length(2);
    });
});