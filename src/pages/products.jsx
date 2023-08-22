import Navbar from '../components/navbar'
import Items from '../components/items';
import Pagination from '../components/pagination';
import Footer from '../components/footer';
const Products = ()=>{
    return(
        <div>
            <Navbar/>
            <Items/>
            <Pagination/>
            <Footer/>
        </div>
    )

}
export default Products;