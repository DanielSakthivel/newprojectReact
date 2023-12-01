import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Profile from './components/profile/profile';
import ProductCard from './components/pricecard/productcard';
const Product = [

  {
    id: 1,
    name: "Apple Iphone 15",
    price: "Rs.58800",
  },
  {
    id: 2,
    name: "Apple Iphone 14",
    price: "Rs.68800",
  },
  {
    id: 3,
    name: "Apple Iphone 13",
    price: "Rs.48800",
  },
  {
    id: 4,
    name: "Apple Iphone 11",
    price: "Rs.38800",
  },
];

function App() {
  return (
    <div className="App">
      <h2>Product Name: {Product.name}</h2>
    <h2>Product Price: {Product.price}</h2>
      <h1 id="Myname"></h1>
      <Header Product={Product} name={"john"} city={"chennai"}/>
      <Profile/>
      <ProductCard/>
      <Footer/>
      
    </div>
  );
}

export default App;