import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products() {
  return (
    <section id="products" className="py-24">
      <Container>
        <SectionTitle
          title="Our Creations"
          subtitle="Each piece is handcrafted with love, making every creation unique and special."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}