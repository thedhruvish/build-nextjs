"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Define a type for the product data
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function About() {
  const [data, setData] = useState<Product[]>([]); // State typed with Product[]

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setData(json);

      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <h1>About</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>
                <strong>Price:</strong> ${item.price}
              </p>
              <p>
                <strong>Rating:</strong> {item.rating.rate} ({item.rating.count}{" "}
                reviews)
              </p>
              <img
                src={item.image}
                alt={item.title}
                style={{ maxWidth: "100px" }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </>
  );
}
