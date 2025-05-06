import CartItemPage from "./CartItemPage";

export default function CartPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-5 text-center mt-10">
        🛒 MY CART
      </h1>

      <CartItemPage />
    </div>
  );
}
