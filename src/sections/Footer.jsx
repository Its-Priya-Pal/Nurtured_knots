import Container from "../components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-6">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Nurtured Knots. All rights reserved.</p>

          <p>Handcrafted with ❤️</p>
        </div>
      </Container>
    </footer>
  );
}