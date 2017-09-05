import React from 'react';
import ReactDOM from 'react-dom';
import { expect, context } from 'chai';
import { mount, render, shallow } from 'enzyme';

import { Footer } from './../Components/Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders h4', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('h4')).to.have.length(1);
  });

  it('s h4 text is {Created by Alan Pieczonka, 2017}', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('h4').text()).to.equal(
      'Created by Alan Pieczonka, 2017'
    );
  });

  it('renders Github logo', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.img--githublogo')).to.have.length(1);
  });

  it('a href element has proper link to repository', () => {
    const wrapper = mount(<Footer />);
    expect(
      wrapper.find({
        href: 'https://github.com/AlanPieczonka/ReactMarkdownPreviewer'
      })
    ).to.have.length(1);
  });
});
