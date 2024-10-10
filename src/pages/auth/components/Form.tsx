import { Props } from "../Register";

import GoogleIcon from '../../../images/google.svg';


const Form:React.FC<Props> = ({type}) => {
  return (
   <>
    <section className="w-full h-[105vh] bg-primary/30 flex justify-center items-center ">
      <form className="bg-white p-6 w-[400px] shadow-xl rounded-lg h-auto">
        <h1 className="text-2xl text-primary font-bold mb-6 text-center">{type === 'login' ? 'Login' : 'Registration' } Form</h1>
        <label htmlFor="username" className="text-gray-800">Username</label>   
        <input type="text" className="w-full mb-4 p-3 border-2 rounded-md dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800" placeholder="Enter Your username" />
        {
          type === 'register' && (
            <>
           <label htmlFor="email" className="text-gray-800">Email</label>   
           <input type="email" className="w-full mb-4 p-3 border-2 rounded-md dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800" placeholder="Enter Your email" />
           
           <label htmlFor="gender" className="text-gray-800">Gender</label>
           <select name="" id="" className="w-full mb-4 p-3 border-2 rounded-md dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800">
           <option disabled value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
           </select>

           <label htmlFor="dob" className="text-gray-800">Date Of Birth</label>
           <input type="date"  className="w-full mb-4 p-3 border-2 rounded-md dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800" />
            
            </>
          )
       }
        <label htmlFor="password" className="text-gray-800">Password</label>
        <input type="password" className="w-full mb-4 p-3 border-2 rounded-md dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"placeholder="*********"/>
        <button className="bg-primary px-3 py-1.5 w-full text-[18px]  left-auto rounded-lg hover:text-white hover:bg-red-500 duration-500" >{type === 'login' ? 'Login' : 'Register'}</button>
        {
          type === 'login' ?  (
           <>
            <p className="text-blue-500 text-sm text-center mt-4">Don't have an account? <a href="/register" className="hover:underline">Register now!</a></p>
            <p className="text-center m-2">OR</p>
            <button className="flex justify-center mx-auto items-center border border-gray-300 rounded-lg shadow-sm px-6 py-1 text-sm font-medium outline-none">
            <img src={GoogleIcon} alt="GoogleIcon" className="w-6" />
              <span>Continue with Google</span>
            </button>
           </>
          ) : (
            <p className="text-blue-500 text-sm text-center mt-4">Already have an account? <a href="/login" className="hover:underline">Login now!</a></p>
          )
        }
      </form>
    </section>
   </>
  )
}

export default Form