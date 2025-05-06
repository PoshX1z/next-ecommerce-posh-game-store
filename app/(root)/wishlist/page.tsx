import WishListItemPage from "./WishListItemPage";

export default function WishlistPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold mb-5 text-center pt-10">
        ❤️ Your Wishlist
      </h1>
      <WishListItemPage />
    </div>
  );
}
