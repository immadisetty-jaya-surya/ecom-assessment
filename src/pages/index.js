import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch('/api/products')
    fetch('https://fakestoreapi.com/products')
    .then((res) => {
      console.log('Resp:',res);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      // console.log(res.json());
      return res.json();
      // return res.text();
    })
    .then((data) => {
      // try{
      //   const jsonData = JSON.parse(text);
      //   setProducts(jsonData);
      // }catch(error){
      //   console.error('Error parsing JSON:', error, 'Response Text:', text);
      // }
      console.log('fetched data',data);
      setProducts(data)
    })
    .catch(error => console.error('Fetch error', error))
  },[]);
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 p-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
