import { Product } from "../product/product-card";

type ProductInCart = Product & { quantity: number };

let cart: ProductInCart[] = [];

export async function addProductToCart(
  product: Product,
  quantityToAdd: number = 1
) {
  const found = cart.find((prod) => prod.id === product.id);

  if (found) {
    cart = cart.map((prod) =>
      prod.id === found.id
        ? { ...prod, quantity: prod.quantity + quantityToAdd }
        : prod
    );
  } else {
    cart.push({ ...product, quantity: quantityToAdd });
  }

  return new Promise((res) => {
    setTimeout(res, 1000 + Math.random() * 3000);
  });
}

export async function removeProductFromCart(product: Product) {
  const foundIndex = cart.findIndex((prod) => prod.id === product.id);

  if (foundIndex !== -1) {
    cart.splice(foundIndex, 1);
  }

  return new Promise((res) => {
    setTimeout(res, 1000 + Math.random() * 3000);
  });
}
