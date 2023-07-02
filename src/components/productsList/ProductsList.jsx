const ProductsList = ({ products }) => {
  return (
    <div>
      <h1>ProductsList</h1>
      {products.map((product) => {
        return <h1 key={product.id}>{product.name}</h1>;
      })}
    </div>
  );
};

export default ProductsList;
