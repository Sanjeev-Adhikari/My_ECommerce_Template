
import { useState } from 'react'
import Logo from '../images/logo.png'
const Nav = () => {
    const navLinks = [
        {id: 1, name: 'Home', link: '/'},
        {id: 2, name: 'Products', link: '/products'},
        {id: 3, name: 'My Orders', link: '/orders'},
        {id: 4, name: 'Cart', link: '/cart'},
        

        
    ]
    const [open, setOpen] = useState(false);
  return (
    <>
    <header className='sticky top-0 left-0 z-[20] mx-auto shadow-md '>
        {/* parent */}
        <div className='md:flex justify-between items-center bg-white md:px-10 px-7 py-4'>
            {/* logo */}
            <div >
                <a href="/" className='flex items-end'>
                <img src={Logo} alt="Logo" className=' w-12'/>
                <span className='md:text-[35px] text-2xl font-bold text-primary'><span className='text-red-500'>E</span>-SHOP</span>
                </a>
                
            </div>
            {/* navigation */}
            <nav className='md:flex justify-between items-center'>
                 {/* hamburger icon */}
        	    <button onClick={()=>setOpen(!open)} className='md:hidden text-3xl absolute right-8 top-6'><ion-icon name={open ? 'close' : 'menu'}></ion-icon></button>
                <ul className={`md:flex md:justify-center justify-between items-center bg-white md:pb-0 pb-4 
                    absolute md:static transition-all duration-500 ease-in 
                    md:z-auto z-[-1] left-0 w-full md:mt-0 mt-6  md-pl-0 pl-8 ${open ? 'translate-y-0 opacity-100' : '-translate-y-full md:translate-y-0 md:opacity-100 opacity-0'}`}>
                   {
                    navLinks.map((link)=>(
                        <li key={link.id} className='md:ml-8 uppercase md:my-0 my-7 px-2'>
                            <a href={link.link} className='text-gray-800 hover:text-primary duration-300'>{link.name}</a>
                        </li>
                    ))
                   }
                 {/* login */}
                <a href="/login"><button className=' bg-primary py-2 px-5 text-[18px]  rounded-xl md:ml-20  md:mr-5 hover:bg-red-500 hover:text-white duration-300'>Login</button></a>
                </ul>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Nav;