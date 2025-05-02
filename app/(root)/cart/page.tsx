import Image from "next/image";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#003366] px-6 py-10 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        MY CART
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Cart Items Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 bg-sky-700 p-5 rounded-xl shadow-lg">
            <div className="relative w-full md:w-32 h-44 flex-shrink-0 rounded overflow-hidden">
              <Image
                src="/images/games/Control.png"
                alt="control"
                fill
                className="object-cover rounded"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 space-y-3">
              <div>
                <h2 className="text-xl font-semibold">Control</h2>
                <p className="text-yellow-300 font-bold text-lg">$49</p>
              </div>

              <div className="flex items-center gap-3">
                <button className="w-8 h-8 bg-amber-800 hover:bg-amber-700 rounded text-white">
                  −
                </button>
                <span className="font-bold">1</span>
                <button className="w-8 h-8 bg-amber-800 hover:bg-amber-700 rounded text-white">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-sky-800 p-6 rounded-xl shadow-lg h-fit space-y-6">
          <h2 className="text-2xl font-bold border-b border-sky-600 pb-4">
            SUMMARY
          </h2>
          <div className="flex justify-between text-lg">
            <span>SUBTOTAL</span>
            <span className="text-yellow-300 font-bold">$98</span>
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <button className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
