import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from "../../src/components/ProductCard";
import { ProductImage } from "../../src/components/ProductImage";
import { product2 } from "../data/product";

describe('ProductImage', () => {

  it('Should display the component correctly with the image sent', () => {

    const wrapper = renderer.create(
      <ProductImage img="custom-image.jpg" className='custom-class'/>
    )

    expect( wrapper.toJSON() ).toMatchSnapshot();

  });

  it ('should display the component correctly with the image in the product', () => {

      const wrapper =  renderer.create(
        <ProductCard product={ product2 }>
          {
            () => (
              <ProductImage />
            )
          }
  
        </ProductCard>
      )
  
      expect( wrapper.toJSON() ).toMatchSnapshot();

  });

});