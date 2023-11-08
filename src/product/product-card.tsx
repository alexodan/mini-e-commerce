import { useContext } from "react";
import { addProductToCart } from "../api/cart.service";
import Button from "../common/button";
import { ShoppingCartContext } from "../App";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

export interface Rating {
  rate: number;
  count: number;
}

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const { title, image, price } = product;
  const { cart, setCart } = useContext(ShoppingCartContext)!;

  const addToCart = () => {
    addProductToCart(product).then(() => {
      console.log("ok?");
      setCart({ count: cart.count + 1 });
    });
  };

  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md items-center min-w-[20rem]">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img className="object-cover" src={image} alt="product image" />
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-center">
          <span className="text-3xl font-bold text-slate-900">${price}</span>
        </div>
        <Button className="flex mx-auto" onClick={addToCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
