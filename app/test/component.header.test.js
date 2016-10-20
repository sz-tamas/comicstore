import React from 'react'
import { mount } from 'enzyme'
import { assert } from 'chai'

import Header from '../components/Header'

describe('<Header/>', function() {
    it('should show title', function() {
        const title = 'Marvel Comics';
        const wrapper = mount(<Header title={title}/>);

        assert(wrapper.find('.mdl-layout-title').text(), title);
    })
});