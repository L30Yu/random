import React from 'react';
import { shallow } from 'enzyme';
import Error from '../component/Error';

it('renders without crashing', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper).toMatchSnapshot();
});