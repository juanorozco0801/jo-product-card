import React, { CSSProperties, useCallback, useContext } from 'react';

import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css'

export interface IProps {
  className?: string
  style?: CSSProperties
}

export const ProductButtons = ({ className, style }: IProps ) => {

  const { increasedBy, counter, maxCount } = useContext( ProductContext )

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount],
  )
  

  return(
    <div
      className={`${styles.buttonsContainer} ${className}`}
      style={style}  
    >
    <button
      className={styles.buttonMinus}
      onClick={() => increasedBy(-1)}
    >
      -
    </button>
    <div className={styles.countLabel}>{counter}</div>
    <button
      className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
      onClick={() => increasedBy(1)}
    >
      +
    </button>
  </div>
  )
}