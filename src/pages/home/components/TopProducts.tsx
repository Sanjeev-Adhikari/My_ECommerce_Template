
import ProductImage from '../../../images/pic.jpg'
const TopProducts = () => {
  return (
    <>
    {/* product section */}
    <section className=" mx-20 mt-2 flex mb-10 flex-wrap gap-4 justify-between  items-center ">
        {/* product card */}
        <figure data-aos="fade-up" data-aos-delay = "300" className="w-[250px] h-[270px] mx-auto mt-10 rounded-lg border border-gray-300 shadow-md hover:translate-x-2 duration-500 bg-gray-200">
            {/* image */}
            <img src={ProductImage} alt="Product_Image" className='' />
            {/* information */}
            <figcaption className='p-6'>
                {/* name */}
                <h3 className='text-xl font-semibold text-gray-800'>Watch</h3>
                {/* price */}
                <p className="mt-1 text-primary">Rs: 1500</p>

            </figcaption>
        </figure>
        <figure data-aos="fade-up"  data-aos-delay = "300" className="w-[250px] h-[270px] mx-auto mt-10 rounded-lg border border-gray-300 shadow-md hover:translate-x-2 animation-all duration-500 bg-gray-200">
            {/* image */}
            <img src={ProductImage} alt="Product_Image" className='' />
            {/* information */}
            <figcaption className='p-6'>
                {/* name */}
                <h3 className='text-xl font-semibold text-gray-800'>Watch</h3>
                <p className="mt-1 text-primary">Rs: 1500</p>

            </figcaption>
        </figure>
        <figure data-aos="fade-up"  data-aos-delay = "300" className="w-[250px] h-[270px] mx-auto mt-10 rounded-lg border border-gray-300 shadow-md hover:translate-x-2 animation-all duration-500 bg-gray-200">
            {/* image */}
            <img src={ProductImage} alt="Product_Image" className='' />
            {/* information */}
            <figcaption className='p-6'>
                {/* name */}
                <h3 className='text-xl font-semibold text-gray-800'>Watch</h3>
                <p className="mt-1 text-primary">Rs: 1500</p>

            </figcaption>
        </figure>
        <figure data-aos="fade-up"  data-aos-delay = "300" className="w-[250px] h-[270px] mx-auto mt-10 rounded-lg border border-gray-300 shadow-md hover:translate-x-2 animation-all duration-500 bg-gray-200">
            {/* image */}
            <img src={ProductImage} alt="Product_Image" className='' />
            {/* information */}
            <figcaption className='p-6'>
                {/* name */}
                <h3 className='text-xl font-semibold text-gray-800'>Watch</h3>
                <p className="mt-1 text-primary">Rs: 1500</p>

            </figcaption>
        </figure>
    </section>
    </>
  )
}

export default TopProducts