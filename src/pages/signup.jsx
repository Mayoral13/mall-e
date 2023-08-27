import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const SignUp = ()=>{
    const {LogIN} = useContext(Context)
    const navigate = useNavigate(); // Variable for routing after signup/login...etc
    const [formData, setFormData] = useState({email:'',password:''});
    const [error, setError] = useState(null); // State variable for error message

    console.log(formData);
    const handleInput = ((e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value });
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        performSignup();
    }
const performSignup = async ()=>{
    try {
        const response = await fetch('http://127.0.0.1:5000/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
            LogIN();
          navigate("/")
        } else {
            const errorData = await response.json();
            setError(errorData.error);
            setError(errorData.error);
            setTimeout(() => {
                setError(null);
              }, 3000);
        }
      } catch (error) {
        console.error('Signup error:', error);
      }
}
    
    

return(
    <>
    <section className="bg-gray-50 dark:bg-gray-800">
        <Navbar/>
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  <Link to= "/" className="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white">
        Mall-E  
      </Link>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      {error && error.length > 0 && (
        <div className="flex justify-center items-center h-10 text-red-600 bg-red-200 border border-red-400 rounded-lg mt-2">
          {error}
        </div>
      )}

          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="post">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" value={formData.email} onChange={handleInput} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" value={formData.password} onChange={handleInput} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                 
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
<Footer/>
</>
)
};

export default SignUp