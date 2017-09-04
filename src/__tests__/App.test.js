import React from 'react';
import ReactDOM from 'react-dom';
import { expect, context } from 'chai';
import {mount, render, shallow} from 'enzyme';


import App from './../Components/App';
import { Header } from './../Components/Header';
import  Main  from './../Components/Main';
import { Footer } from './../Components/Footer';

describe('App Component', () => {

    it('renders 3 children component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.children()).to.have.length(3);
    });

    it('renders Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header)).to.have.length(1);
    });

    it('renders Main component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Main)).to.have.length(1);     
    });

    it('renders Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer)).to.have.length(1);     
    });

});