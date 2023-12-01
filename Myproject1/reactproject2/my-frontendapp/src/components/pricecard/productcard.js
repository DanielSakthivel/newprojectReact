const ProductCard = () => {
     const myObj = {
        name: "samuel",
        price: "12333"
     };
     return(
 <div>

    <h2>Product Name: {myObj.name}</h2>
    <h2>Product Price: {myObj.price}</h2>
 </div>
     );
};
export default ProductCard;