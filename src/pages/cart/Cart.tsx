import { Link } from "react-router-dom"
import Banner from "../home/components/Banner"
import ProductImage from '../../images/pic.jpg';


const Cart = () => {
  return (
    <>
    {/* container */}
    <section className="h-[150vh] md:h-screen  bg-gray-100 pt-20" >
      {/* heading */}
       <header>
        <h1 className="mb-10 text-center text-primary text-2xl font-bold">Cart Items</h1>
       </header>
        {/* main cart components */}
        <main className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6   xl:px-0">
          {/* cart items container */}
          <div className=" rounded-lg md:w-2/3 ">
              {/* individual cart item  */}
                <article data-aos = "fade-right" className="justify-between mb-6 rounded-lg bg-white p-6 md:mx-0 mx-10 shadow-md sm:flex sm:justify-start">
                  {/* product image */}
                  <img src={ProductImage} alt="Product_Image" className="w-full rounded-lg sm:w-40" />
                  {/* prouct details container */}
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    {/* product information */}
                    <div className="mt-5 sm:mt-0">
                    <h2 className="text-md font-bold text-gray-900">Product Name</h2>
                    <p className="text-sm">Product Category</p>
                    <p className="text-sm font-bold text-green-500">In Stock: 5</p>
                    </div>

                    {/* quantity and pricing container */}
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      {/* quantity control */}
                        <div className="flex items-center border-gray-100">
                          <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">-</span>
                          <input  className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" />
                          <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">+</span>
                        </div>
                        {/* pricing and delete button */}
                        <div className="flex items-center space-x-4">
                          <p className="text-sm" >Rs: 5000</p>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                    </div>
                  </div>
                </article>
          </div>
                {/* summary conatiner */}
                <aside data-aos = "fade-left" className="mt-6 h-full md:mx-0 mx-10 rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                  {/* total items in cart */}
                  <div className="mb-2 flex justify-between">
                    <p className="text-gray-700">Total Items</p>
                    <p className="text-gray-700">20</p>
                  </div>
                  {/* subtotal */}
                  <div className="mb-2 flex justify-between">
                    <p className="text-gray-700">Subtotal</p>
                    <p className="text-gray-700">Rs: 5000</p>
                  </div>
                  {/* delivery charge */}
                  <div className="flex justify-between">
                    <p className="text-gray-700">Delivery Charge</p>
                    <p className="text-gray-700">Rs: 100</p>
                  </div>
                  {/* divider line */}
                  <hr className="my-4"/>
                  {/* total cost */}
                  <div className="flex justify-between">
                    <p className="text-lg font-bold">Total</p>
                    <p className="mb-1 text-lg font-bold">Rs: 5100</p>
                  </div>
                   {/* checkout button */}
                  <Link to={'/checkout'}>
                    <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Checkout</button>
                  </Link>
                </aside>
        </main>  
    </section>
    </>
  )
}

export default Cart