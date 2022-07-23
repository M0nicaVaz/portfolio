export function Main({ children }) {
  return (
    <main className="grid place-content-center px-12 w-screen h-[calc(100vh-72px)]">
      {children}
    </main>
  );
}
