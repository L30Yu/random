import React from 'react';
import { shallow } from 'enzyme';
import RandomNumber from '../component/RandomNumber';

it('renders without crashing', () => {
    const wrapper = shallow(<RandomNumber />);
    expect(wrapper).toMatchSnapshot();
});