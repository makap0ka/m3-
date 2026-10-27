import ProductCard from "./ProductCart";

const products = [
  {
    id: 1,
    name: "Навушники VGN VXE V1",
    price: 1200,
    image: "/images/vgn vxe v1.jpg",
    description: "Бездротові навушники для ігор і музики.",
  },
  {
    id: 2,
    name: "Клавіатура QK 61 V2",
    price: 1800,
    image: "/images/qk 61v2.jpg",
    description: "Компактна механічна клавіатура.",
  },
  {
    id: 3,
    name: "Мишка AJ159 Apex",
    price: 800,
    image: "/images/aj 159 apex.jpg",
    description: "Ігрова мишка для точного керування.",
  },
  {
    id: 4,
    name: "Монітор",
    price: 6500,
    image: "/images/monitor.jpg",
    description: "Монітор для роботи та ігор.",
  },
  {
    id: 5,
    name: "Телевізор Samsung",
    price: 15000,
    image: "/images/samsung tv.jpg",
    description: "Телевізор для перегляду фільмів і серіалів.",
  },
  {
    id: 6,
    name: "Apple Watch",
    price: 9000,
    image: "/images/apple watch.jpg",
    description: "Розумний годинник для повсякденного використання.",
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