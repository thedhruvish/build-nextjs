import Link from "next/link";

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

interface AboutProps {
  products: Product[];
}

export default async function About() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();
  return (
    <>
      <h1>About</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((item) => (
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
        <p>No products available.</p>
      )}
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </>
  );
}
