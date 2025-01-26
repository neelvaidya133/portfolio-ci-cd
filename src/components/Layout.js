export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center dark:bg-gray-900">
      <div className="w-full max-w-screen-lg px-4">{children}</div>
    </div>
  );
}
