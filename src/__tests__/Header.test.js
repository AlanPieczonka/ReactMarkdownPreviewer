import React from 'react';
import ReactDOM from 'react-dom';
import { expect, context } from 'chai';
import {mount, render, shallow} from 'enzyme';

import { Header } from './../Components/Header';

describe('Header Component', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
    });
});