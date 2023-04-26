import React, { createContext, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct'
import { IInitialValues, IOnChangeArgs, IProduct, IProductCardHandlers, IProductContextProps } from '../interfaces/interfaces';


import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface IProps {
  product: IProduct;
  // children?: ReactElement | ReactElement[];
  children: (args:IProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: ( args: IOnChangeArgs) => void;
  value?: number;
  initialValues?: IInitialValues;
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: IProps) => {

  const { counter, increasedBy, maxCount, isMaxCountReached, reset } = useProduct( {
    onChange, product, value, initialValues
  });


  return (
    <Provider value={{
      counter,
      increasedBy,
      maxCount,
      product,
    }}>

      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >

        { children({
          counter,
          increasedBy,
          product,
          maxCount,
          isMaxCountReached,
          reset,
        }) }

      </div>
    </Provider>
  )
};
