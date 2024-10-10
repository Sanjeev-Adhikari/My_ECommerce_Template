

const TopProductsHeader = () => {
  return (
   <>
       {/* section heading */}
    <header>
        <h1 data-aos="fade-up" className=" text-center pt-[100px] text-primary text-3xl  font-bold">Top Products</h1>
        <a href="products"><button data-aos="fade-up" className='absolute right-6 bg-primary px-2 py-1 rounded-md text-black hover:text-white hover:bg-red-500 duration-500'>More..</button></a>
    </header>
   </>
  )
}

export default TopProductsHeader