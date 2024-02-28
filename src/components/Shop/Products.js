import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_PRODUCT = [
    {
      title: "Chunky chips",
      price: 6,
      description: "Crispy popatoes",
      id: 1,
    },
    { title: "Puki", price: 8, description: "Favourite juice", id: 2 },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((item) => (
          <ProductItem key={item.id} title={item.title} description={item.description} price={item.price} id={item.id}/>
        ))}
      </ul>
    </section>
  );
};

export default Products;
