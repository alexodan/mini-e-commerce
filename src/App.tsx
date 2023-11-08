import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { Product, ProductCard } from "./product/product-card";
import "./App.css";
import { ShoppingCart } from "./shopping-cart";

export type ShoppingCartContextType = {
  cart: {
    count: number;
  };
  setCart: ({ count }: { count: number }) => void;
};
export const ShoppingCartContext =
  createContext<ShoppingCartContextType | null>({
    cart: { count: 0 },
    setCart: () => {},
  });

export const ShoppingCartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState({ count: 0 });
  console.log("cart in context:", cart);
  return (
    <ShoppingCartContext.Provider value={{ cart, setCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <ShoppingCartProvider>
      <main>
        <ShoppingCart />
        <div className="flex flex-wrap">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
    </ShoppingCartProvider>
  );
}

export default App;
