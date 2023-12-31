import { Link } from 'react-router-dom';
const NewArrivals = ()=>{
return(

  <section className="bg-white dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <header className="text-center">
        <h2 className="text-xl font-bold text-white sm:text-5xl mb-4">New Arrivals</h2>
      </header>
  
      <div className="flex flex-wrap space-x-6">
        <div className="w-1/3"> {/* Change w-1/2 to w-1/3 */}
          <Link to="/products" className="relative block group">
            <img
              src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="object-cover w-full h-80 transition duration-500 aspect-square group-hover:opacity-90"
            />
  
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="text-xl font-medium text-white">Casual Trainers</h3>
  
              <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
  
        <div className="w-1/3"> {/* Change w-1/2 to w-1/3 */}
          <Link to="/products" className="relative block group">
            <img
              src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="object-cover w-full h-80 transition duration-500 aspect-square group-hover:opacity-90"
            />
  
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>
  
              <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
  
        <div className="w-1/7"> {/* Change w-1/2 to w-1/3 */}
          <Link to="/products" className="relative block group">
            <img
              src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
              alt=""
              className="object-cover w-full h-80 transition duration-500 aspect-square group-hover:opacity-90"
            />
  
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>
  
              <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>
 
)
}
export default NewArrivals;