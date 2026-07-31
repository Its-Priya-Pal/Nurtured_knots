import Button from "./components/Button";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1
        className="text-5xl font-bold"
        style={{ fontFamily: "Playfair Display" }}
      >
        Nurtured Knots 🧶
      </h1>

      <p className="text-lg text-center max-w-md">
        Handmade crochet creations crafted with love.
      </p>

      <Button>Shop Collection</Button>
    </div>
  );
}

export default App;