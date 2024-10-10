
import CheckoutImg from '../../images/pic.jpg';
const Checkout = () => {
  return (
    <>
    
<main className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  {/* Order Summary Section */}
  <section data-aos ="fade-right" className="px-4 pt-8">
    <h2 className="text-xl font-medium">Order Summary</h2> {/* Changed p tag to h2 for better SEO */}
    <p className="text-gray-400">Check your items and select a suitable shipping method.</p>
    
    {/* Product Items */}
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      {/* Individual Product Card */}
      <article className="flex flex-col rounded-lg bg-white sm:flex-row"> {/* Replaced div with article */}
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={CheckoutImg} alt="Product Image" />
        <div className="flex w-full flex-col px-4 py-4">
          <h3 className="font-semibold">Product Name</h3> {/* Changed span to h3 for product title */}
          <span className="float-right text-gray-400">Qty in stock: 5</span>
          <p className="text-lg font-bold">Rs. 5000</p>
        </div>
      </article>
    </div>

    {/* Payment Methods */}
    <h2 className="mt-8 text-lg font-medium">Payment Methods</h2> {/* Changed p to h2 */}
    <form className="mt-5 grid gap-6">
      {/* Cash on Delivery Option */}
      <div className="relative">
        <input className="peer hidden" id="radio_1" type="radio" name="paymentMethod" value="cod" />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">     
          <div className="ml-5">
            <span className="mt-2 font-semibold">Cash On Delivery</span>
          </div>
        </label>
      </div>

      {/* Khalti Payment Option */}
      <div className="relative">
        <input className="peer hidden" id="radio_2" type="radio" name="paymentMethod" value="khalti" />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
          <div className="ml-5">
            <span className="mt-2 font-semibold">Khalti Pay</span>
          </div>
        </label>
      </div>
    </form>
  </section>

  {/* Payment Summary Section */}
  <form>
    <section data-aos ="fade-left">
      <h2 className="text-xl px-4 pt-8 font-medium">Payment Summary</h2> {/* Changed p to h2 */}
      <p className="px-4 text-gray-400">Complete your order by providing your payment details.</p>
      
      {/* Payment Details Section */}
      <div className="mt-25 rounded-lg bg-gray-100 px-4 pt-8 lg:mt-8">
        <h3 className="text-xl font-large">Payment Details</h3> {/* Changed p to h3 */}
        
        {/* Phone Number Input */}
        <label htmlFor="phone-number" className="block mt-8 text-sm font-medium mb-2">Phone Number</label>
        <input
          type="tel"
          id="phone-number"
          name="phoneNumber"
          className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-4"
          placeholder="Enter your phone number"
          pattern="[0-9]{10}" 
        />

        {/* Delivery Address Input */}
        <label htmlFor="shippingAddress" className="mt-4 mb-2 block text-sm font-medium">Delivery Address</label>
        <div className="relative">
          <input
            type="text"
            id="shippingAddress"
            name="shippingAddress"
            className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Street Address"
          />
        </div>

        {/* Payment Summary */}
        <div className="mt-6 border-t border-b py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Subtotal</p>
            <p className="font-semibold text-gray-900">Rs: 5000</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Shipping</p>
            <p className="font-semibold text-gray-900">Rs: 100</p>
          </div>
        </div>
        
        {/* Total */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-medium text-gray-900">Total</p>
          <p className="text-2xl font-semibold text-gray-900">Rs: 5100</p>
        </div>

        {/* Payment Buttons */}
        <button type="submit" className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Cash On Delivery</button>
        <button type="submit" className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" style={{ backgroundColor: "purple" }}>Pay With Khalti</button>
      </div>
    </section>
  </form>
</main>


    </>
  )
}

export default Checkout