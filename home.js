import React, { useEffect,  useState }  from 'react';
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const unsub = () => {
      fetch("https://fakestoreapi.com/products")
        .then(
          (req) => req.json()
        ).then(
          (res) => {
            setProducts(res)
            console.log(res)
          }
        ).catch(err => console.log(err))
    } 
    return  unsub();
  } ,[])

  return (
    <div className="bg-gray-100">
      <header>
        <title>Amazon 2.0</title>
      </header>
      {/**Header */}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/**Banner */}
        <Banner />
        {/**Product Feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

