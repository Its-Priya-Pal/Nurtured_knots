import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products() {
  return (
    <section
      id="products"
      className="bg-white py-16 md:py-20 lg:py-24"
    >
      <Container className="max-w-7xl">
        {/* Keep your current title */}
        <SectionTitle
          title="Explore Our Collection"
          subtitle="Handcrafted crochet bouquets, gifts, and accessories made with love."
        />

        {/* Product Grid */}
        <div
          className="
            mt-12
            grid
            grid-cols-2
            gap-x-4
            gap-y-8

            sm:gap-x-5
            sm:gap-y-10

            md:grid-cols-3

            lg:grid-cols-4

            xl:grid-cols-5
          "
        >
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