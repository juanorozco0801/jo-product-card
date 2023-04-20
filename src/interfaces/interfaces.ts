import { IProps as IProductCardProps } from "../components/ProductCard";
import { IProps as IProductImageProps} from "../components/ProductImage";
import { IProps as IProductTitleProps} from "../components/ProductTitle";
import { IProps as IProductButtonsProps} from "../components/ProductButtons";

export interface IProduct {
  id: string;
  name: string;
  img?: string;
}


export interface IProductContextProps {
  counter:number,
  increasedBy: (value:number) => void,
  product: IProduct
  maxCount?: number,
}

export interface IProductCardHOCProps {
  ({ product, children }: IProductCardProps): JSX.Element,
  Buttons: (Props: IProductButtonsProps) => JSX.Element,
  Image: (Props: IProductImageProps) => JSX.Element,
  Title: (Props: IProductTitleProps) => JSX.Element,
}

export interface IOnChangeArgs {
  product: IProduct,
  counter: number
}

export interface IProducInCart extends IProduct {
  count: number
}

export interface IInitialValues {
  count?: number;
  maxCount?: number;
}

export interface IProductCardHandlers {
  counter: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: IProduct;

  increasedBy: (value: number) => void;
  reset : () => void;

}
