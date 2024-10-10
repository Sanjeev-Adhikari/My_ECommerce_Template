import Banner from "../home/components/Banner"
import TopProducts from "../home/components/TopProducts"

const Products = () => {
  return (
  <>
  <Banner />
  <h1 data-aos="fade-up" className=" text-center pt-[100px] text-primary text-3xl  font-bold"> Shop All Products</h1>
  <TopProducts />
  <TopProducts />
  <TopProducts />
  </>
  )
}

export default Products