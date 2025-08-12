export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">404 - Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
        <a href="/" className="mt-4 text-blue-600 hover:underline">
            Go back to Home
        </a>
      <p className="mt-2 text-gray-500">If you think this is
    an error, please contact support.</p>
        <p className="mt-2 text-gray-500">Thank you for your understanding!</p>
        <p className="mt-2 text-gray-500">© 2023 My Application</p>
    </div>
  );
}