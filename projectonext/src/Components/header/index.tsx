
export function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">My Application Header</h1>
        <nav className="mt-2">
            <ul className="flex space-x-4">
            <li><a href="/Dashboard" className="hover:underline">Dashboard</a></li>
            <li><a href="/Contatos" className="hover:underline">Contatos</a></li>

            <li><a href="/Produtos" className="hover:underline">Produtos</a></li>
            <li><a href="/" className="hover:underline">Home</a></li>
            </ul>
        </nav>
    </header>
  );
}