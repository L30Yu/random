import React from 'react';
import { shallow } from 'enzyme';
import Panel from '../component/Panel';

it('renders without crashing', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper).toMatchSnapshot();
});