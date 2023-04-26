import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../../src/components/ProductTitle';
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/product';

describe('ProducTitle', () => {

  it('Should display the component correctly with the title sent', () => {
    
    const wrapper = renderer.create(
      <ProductTitle name="custom product" className='custom-class'/>
    )

    expect( wrapper.toJSON() ).toMatchSnapshot();

  });

  it('should display the component with the name of the product', () => {

    const wrapper =  renderer.create(
      <ProductCard product={ product1 }>
        {
          () => (
            <ProductTitle />
          )
        }

      </ProductCard>
    )

    expect( wrapper.toJSON() ).toMatchSnapshot();

  });

  

});

