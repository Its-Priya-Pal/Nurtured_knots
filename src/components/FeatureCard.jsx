export default function FeatureCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="rounded-3xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF2F4]">
        <Icon size={30} className="text-[#C97B84]" />
      </div>

      <h3
        className="mt-6 text-xl font-semibold"
        style={{ fontFamily: "Playfair Display" }}
      >
        {title}
      </h3>

      <p className="mt-3 text-gray-600 leading-7">
        {description}
      </p>
    </div>
  );
}