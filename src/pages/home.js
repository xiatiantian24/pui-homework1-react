import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import data from "../components/data";

export default function Home() {
    const cards = data.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      });
  return (
    <div>
      <Navbar />
      <div class="product-gallery">
        <div class="cinnamon-rolls">
          <h2>Our hand-made cinnamon rolls</h2>
          {cards}
        </div>
      </div>
    </div>
  );
}
