

const MyOrders = () => {
  return (
    <>
    <section className="px-4 sm:px-8 py-4 overflow-x-auto h-[100vh] w-full flex items-center justify-center ">
     
        <main data-aos="zoom-out" className=" min-w-full  rounded-lg overflow-hidden ">
        <h1 >My Orders</h1>
            <table   className="min-w-full shadow leading-normal">
                <thead>
                    <tr className="bg-primary/25 ">
                        <th className="px-5 py-3 border-b-2 border-gray-200 text-xs text-start font-semibold text-gray-800 uppercase ">Order Id</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 text-xs text-start font-semibold text-gray-800 uppercase ">Total Amount</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 text-xs text-start font-semibold text-gray-800 uppercase ">order status</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 text-xs text-start font-semibold text-gray-800 uppercase ">Payment status</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 text-xs text-start font-semibold text-gray-800 uppercase ">Ordered on</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-blue-700  whitespace-nowrap underline cursor-pointer">1234545674897465310200006</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap">Rs: 123456</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap"><span className="bg-red-200 px-2.5 py-0.5 rounded-full">pending</span></p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap"><span className="bg-red-200 px-2.5 py-0.5 rounded-full">pending</span></p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap">2024/8/10</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-blue-700  whitespace-nowrap underline cursor-pointer">1234545674897465310200006</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap">Rs: 123456</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap"><span className="bg-red-200 px-2.5 py-0.5 rounded-full">pending</span></p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap"><span className="bg-red-200 px-2.5 py-0.5 rounded-full">pending</span></p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap">2024/8/10</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-blue-700  whitespace-nowrap underline cursor-pointer">1234545674897465310200006</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap">Rs: 123456</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap"><span className="bg-red-200 px-2.5 py-0.5 rounded-full">pending</span></p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap"><span className="bg-red-200 px-2.5 py-0.5 rounded-full">pending</span></p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap">2024/8/10</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-blue-700  whitespace-nowrap underline cursor-pointer">1234545674897465310200006</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap">Rs: 123456</p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap"><span className="bg-red-200 px-2.5 py-0.5 rounded-full">pending</span></p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap"><span className="bg-red-200 px-2.5 py-0.5 rounded-full">pending</span></p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-nowrap">2024/8/10</p>
                        </td>
                    </tr>
                </tbody>
            </table>      
            <section className="bg-whiite shadow w-full px-5 py-5 border-b flex flex-col items-center xs:justify-between xs:flex-row">
                    <span className="text-xs xs:text-sm text-gray-900">Showing 4 of 50 orders</span>
                    <div className="inline-flex gap-2 mt-2 xs:mt-0">
                        <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-2 rounded-l">prev</button>
                        <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-2 rounded-l">next</button>
                    </div>
            </section>
        </main>
    </section>
    </>
  )
}

export default MyOrders