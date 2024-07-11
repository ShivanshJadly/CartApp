import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  
  const [loading,setLoading] = useState(false);
  const [posts,setPosts] = useState([]);
  async function fetchProductData(){
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
    
      setPosts(data);
    } catch (error) {
      console.log("Data nhi aaya");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[])
  return (
  <div className="mb-10">
    {
      loading ? (<Spinner/>):
      (posts.length >0? 
      (
        <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map((post)=>{
              return <Product key={post.id} post={post}/>
            })
          }
        </div>
      ) :
      (
        <div className="flex justify-center items-center">
          <p>No data found</p>
        </div>
      )
    )
    }
  </div>
  )
};

export default Home;
