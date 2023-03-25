import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const itemArray = [
  {
    id: "m1",
    title: "Shirt",
    price: 25,
    quantity:1,
    description: "this shirt will suit on you",
  },
  { id: "m2",
  title: "Lungi",
  price: 15,
  quantity:1,
  description: "this lungi will suit on you",
 },
  { id: "m3" ,
  title: "Shoes",
  price: 25,
  quantity:1,
  description: "this shoes will suit on you",},
  { id: "m4" ,
  title: "Cap",
  quantity:1,
  price: 10,
  description: "this Cap will suit on you",},
];

const Products = (props) => {
  
const showItems=itemArray.map((item)=>(<ProductItem
  id={item.id}
  key={item.id}
  title={item.title}
  price={item.price}
  description={item.description}
  quantity={item.quantity}
/>))
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {showItems}
      </ul>
    </section>
  );
};

export default Products;
