import React from 'react';
import ReactDOM from 'react-dom';
import { expect, context } from 'chai';
import { mount, render, shallow } from 'enzyme';

import { Footer } from './../Components/Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

});
