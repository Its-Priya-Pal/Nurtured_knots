export default function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={product.image}
        alt={product.name}
        className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
      />

      <div className="p-5">
        <h3
          className="text-xl font-semibold"
          style={{ fontFamily: "Playfair Display" }}
        >
          {product.name}
        </h3>

        <p className="mt-2 text-[#C97B84] font-medium">
          {product.price}
        </p>
      </div>
    </div>
  );
}