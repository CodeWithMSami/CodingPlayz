export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 bottom-0 text-white p-4 w-full text-center mt-10">
      <p>© {year} My Next.js App</p>
    </footer>
  );
}
