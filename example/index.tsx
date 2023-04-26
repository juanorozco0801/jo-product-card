import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  name: 'Coffee Mug!!',
  // img: './coffee-mug.png'
}

const App = () => {
  return (
    <>
      <ProductCard
        product={ product }
        initialValues={{
          count:4,
          maxCount: 10,
        }}
      >
        { ({ reset, counter, increasedBy, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
