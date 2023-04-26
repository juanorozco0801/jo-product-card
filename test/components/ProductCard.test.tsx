import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/product';

const { act } = renderer;

describe('ProducTitle', () => {

  it('should display the component correctly', () => {

    const wrapper =  renderer.create(
      <ProductCard product={ product1 }>
        {
          () => (
            <h1>Product card</h1>
          )
        }

      </ProductCard>
    )

    expect( wrapper.toJSON() ).toMatchSnapshot();

  });

  it('should increment the counter', () => {

    const wrapper =  renderer.create(
      <ProductCard product={ product1 }>
        {
          ({counter, increasedBy}) => (
            <>
              <h1>Product card</h1>
              <span>{counter}</span>
              <button onClick={() => increasedBy(2)}>Increment</button>
            </>
          )
        }

      </ProductCard>
    )

    let tree = wrapper.toJSON();

    expect( tree ).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });

    tree = wrapper.toJSON();

    expect( (tree as any).children[1].children[0] ).toBe('2');
  });
});
