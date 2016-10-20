import React from 'react'
import { mount } from 'enzyme'
import { expect, assert } from 'chai'

import Card from '../components/Card'

describe('<Card/>', function() {
    it('should have a cover', function() {
        const cover = 'sample.jpg';
        const wrapper = mount(<Card/>);

        expect(wrapper.find('.mdl-card__title-cover img')).to.have.length(1);
    });

    it('should have a description', function() {
        const desc = 'Sample description';
        const wrapper = mount(<Card description={desc}/>);

        assert(wrapper.find('div.mdl-card__supporting-text .block-with-text').text(), desc);
    });

    it('should have a description', function() {
        const title = 'Title';
        const wrapper = mount(<Card title={title}/>);

        assert(wrapper.find('.mdl-card__title-text').text(), title);
    });
});