import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {MistakeCounter} from './mistake-counter';

Enzyme.configure({adapter: new Adapter()});

describe(`MistakeCounter component rendered correctly`, () => {
  it(`With 2 mistakes`, () => {
    const tree = shallow(
        <MistakeCounter mistakes={new Array(2).fill(false)} />
    );
    const mistakes = tree.find(`.wrong`);
    expect(mistakes).toHaveLength(2);
  });

  it(`With 0 mistakes`, () => {
    const tree = shallow(
        <MistakeCounter mistakes={new Array(0).fill(false)} />
    );
    const mistakes = tree.find(`.wrong`);
    expect(mistakes).toMatchObject({});
  });

  it(`With 1 mistake`, () => {
    const tree = shallow(
        <MistakeCounter mistakes={new Array(1).fill(false)} />
    );
    const mistakes = tree.find(`.wrong`);
    expect(mistakes).toHaveLength(1);
  });

  it(`With 3 mistakes`, () => {
    const tree = shallow(
        <MistakeCounter mistakes={new Array(3).fill(false)} />
    );
    const mistakes = tree.find(`.wrong`);
    expect(mistakes).toHaveLength(3);
  });
});
