import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { Header } from './../Components/Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders h1 ', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1')).to.have.length(1);;
  });

  it(' h1s text is Markdown Previewer', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1').text()).to.equal('Markdown Previewer');
  });

  it('renders React logo', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.img--technologylogo--reactlogo')).to.have.length(1);
  });

  it('renders Bootstrap logo', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.img--technologylogo--bootstraplogo')).to.have.length(1);
  });

});
