export default function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      className={`
        px-6 py-3
        rounded-full
        bg-[#C97B84]
        text-white
        font-medium
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </button>
  );
}