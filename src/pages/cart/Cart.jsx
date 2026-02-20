
import ProductsCard from "../products/ProductsCard";
import cartItem from '../../assets/cartItem.png'

export default function CartPage() {
  return (
    <div className="py-10">
      <div className="px-4 md:px-8">

        {/* Top Banner */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Saving to celebrate
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">

          {/* LEFT SIDE - BAG */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">

            <h3 className="text-lg font-semibold mb-1">Your Bag</h3>
            <p className="text-sm text-gray-400 mb-6">
              Items in your bag not reserved - check out now to make them yours.
            </p>

            {/* Product Item */}
            <div className="flex gap-6">

              {/* Image */}
              <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                <img
                  src={cartItem}
                  alt="shoe"
                  className="object-contain h-full"
                />
              </div>

              {/* Info */}
              <div className="flex-1">

                <div className="flex justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      DROPSET TRAINER SHOES
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      Men's Road Running Shoes
                    </p>
                    <p className="text-sm text-gray-500">
                      Enamel Blue / University White
                    </p>
                  </div>

                  <p className="font-semibold text-blue-600">
                    $130.00
                  </p>
                </div>

                {/* Size & Quantity */}
                <div className="flex gap-6 mt-4 text-sm text-gray-600">
                  <div>
                    Size <span className="ml-1 font-medium">10</span>
                  </div>
                  <div>
                    Quantity <span className="ml-1 font-medium">1</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">

            <h3 className="text-lg font-semibold mb-6">
              Order Summary
            </h3>

            <div className="space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-gray-600">1 ITEM</span>
                <span>$130.00</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Delivery</span>
                <span>$6.99</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Sales Tax</span>
                <span>-</span>
              </div>

              <div className="border-t pt-4 flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>$136.99</span>
              </div>

            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:opacity-90 transition">
              CHECKOUT
            </button>

            <p className="text-sm text-gray-500 mt-4 cursor-pointer">
              Use a promo code
            </p>

          </div>

        </div>
        <div><ProductsCard/></div>
      </div>
    </div>
  );
}
