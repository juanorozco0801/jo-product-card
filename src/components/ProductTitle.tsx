import React, { CSSProperties, useContext } from 'react';

import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface IProps {
  className?: string
  name?: string,
  style?: CSSProperties
}

export const ProductTitle = ({ name, className, style }: IProps) => {

  const { product } = useContext(ProductContext)

  return (
    <span
      className={`${styles.productDescription} ${className}`}
      style={style}
    >
      { name ? name : product.name }
    </span>
  )
}