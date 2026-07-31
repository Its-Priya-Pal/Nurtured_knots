export default function SectionTitle({
  title,
  subtitle
}) {
  return (
    <div className="text-center mb-12">
      <h2
        className="text-4xl md:text-5xl font-bold"
        style={{ fontFamily: "Playfair Display" }}
      >
        {title}
      </h2>

      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}