
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Навушники",
    price: 1200,
    image: "https://placehold.co/400x250?text=Headphones",
    description: "Якісні навушники для музики та ігор.",
  },
  {
    id: 2,
    name: "Клавіатура",
    price: 1800,
    image: "https://placehold.co/400x250?text=Keyboard",
    description: "Зручна клавіатура для роботи та навчання.",
  },
  {
    id: 3,
    name: "Комп'ютерна миша",
    price: 800,
    image: "https://placehold.co/400x250?text=Mouse",
    description: "Миша з точним сенсором.",
  },
  {
    id: 4,
    name: "Монітор",
    price: 6500,
    image: "https://placehold.co/400x250?text=Monitor",
    description: "Монітор для роботи та ігор.",
  },
];

function Home() {
  return (
    <main className="container">
      <h1>Наші товари</h1>

      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default Home;
