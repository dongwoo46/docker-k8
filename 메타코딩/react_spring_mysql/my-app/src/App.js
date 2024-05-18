import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  async function onLoad() {
    let response = await fetch('/api/products');
    let responseBody = await response.json();

    console.log('onLoad', responseBody);
    setProducts(responseBody);
  }

  // 해당 페이지가 열릴때 한번 실행(초기화 메서드)
  // 어떤 값이 변경될 때 다시 useEffect 실행 할 것인가?
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div>
      <h1>상품 목록 페이지</h1>
      <hr />
      <div>
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
