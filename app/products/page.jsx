async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

const ProductsPage = async () => {
  const url = "https://dummyjson.com/products";
  const data = await getData(url);
  return (
    <div>
      {data.products.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <img src={item.images[0]} alt="" />
        </div>
      ))}
    </div>
  );
};
export default ProductsPage;
