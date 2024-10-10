import Carousel from '../../../components/Carousel';
import banner1 from '../../../images/banner1.png';
import banner2 from '../../../images/2.png';
import banner3 from '../../../images/3.png';
import banner4 from '../../../images/4.png';
import banner5 from '../../../images/5.png';

const Banner = () => {
   
    const slides:any = [banner1, banner2, banner3, banner4, banner5];

  return (
    <>
    <section className="bg-gray-100 w-full md:h-auto h-[200px] flex items-center relative">
        {/* banners */}
        <article className='w-[1000px] h-[500px] m-auto'>
            <Carousel slides= {slides} />
        </article>
    </section>
    </>
    
  )
}
export default Banner