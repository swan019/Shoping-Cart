import React, { useEffect, useState } from 'react';
import Shrimmer from '../Components/Shrimmer';
import Products from '../Components/Products';

function Home() {
    const Api = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);

        try {
            const res = await fetch(Api);
            const data = await res.json();

            setPosts(data);
        } catch (error) {
            console.log("Error occurred", error);
            setPosts([]);
        }

        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div>
            {loading ? (
                <Shrimmer />
            ) : (
                <div>
                    {
                        posts.length > 0 ? (
                            <div>
                                {
                                    posts.map((post) => (
                                        <>
                                             <Products
                                                key={post.id}
                                                title={post.title}
                                                description={post.description}
                                                image={post.image}
                                                price={post.price}
                                            />
                                        </>
                                        
                                    ))
                                }
                            </div>
                        ) :
                            (
                                <p>No data available</p>
                            )
                    }
                </div>
            )}
        </div>
    );
}

export default Home;
