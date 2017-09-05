import React from 'react';
import ReactDOM from 'react-dom';
import { expect, context } from 'chai';
import { mount, render, shallow } from 'enzyme';

import Main from './../Components/Main';

//Simple and basic tests, still don't have time to figure out how to test diffrent parts of logic

describe('Main Component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Main />);
    });

    it('renders h3', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.find('h3')).to.have.length(1);
    });

    it('s h3 text is {Just type your text}', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.find('h3').text()).to.equal('Just type your text');
    });

    it('has the copytoclipboard button', () => {
            const wrapper = shallow(<Main />);
            expect(wrapper.children().find('.main__button--copytoclip')).to.have.length(1); //it is found 
    });

    it('has the clearArea button', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.children().find('.main__button--clearArea')).to.have.length(1); 
    });

    it('has markdown state that is initially empty string', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.state().markdown).to.equal('');
    });
});