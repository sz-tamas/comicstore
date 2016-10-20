import React from 'react'
import { mount } from 'enzyme'
import { assert } from 'chai'

import Footer from '../components/Footer'

describe('<Footer/>', function() {
    it('should show title', function() {
        const title = 'Marvel Comics';
        const wrapper = mount(<Footer title={title}/>);

        assert(wrapper.find('.mdl-logo').text(), title);
    });

    it('should show copyright', function() {
        const copyright = '© 2016';
        const title = 'Marvel Comics';
        const wrapper = mount(<Footer title={title} copyright={copyright}/>);

        assert(wrapper.find('.mdl-mini-footer__link-list li').text(), copyright);
    });
});