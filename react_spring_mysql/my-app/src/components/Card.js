import '../App.css';

function Card(props) {
  let product = props.product;
  return (
    <div className="product-card">
      {product.id} : {product.name}
    </div>
  );
}

export default Card;
