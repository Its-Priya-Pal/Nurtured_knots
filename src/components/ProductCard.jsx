export default function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-3xl bg-[#FFF9F4]">
        <img
          src={product.image}
          alt={product.name}
          className="
            h-44
            w-full
            object-cover
            transition-all
            duration-500
            group-hover:scale-105

            sm:h-52

            lg:h-60
          "
        />
      </div>

      <h3
        className="
          mt-3
          text-center
          text-sm
          font-medium
          text-[#3A2E2E]

          sm:text-base
        "
        style={{ fontFamily: "Playfair Display" }}
      >
        {product.name}
      </h3>
    </div>
  );
}