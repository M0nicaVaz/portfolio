export function Main({ children }) {
  return (
    <main className="grid px-12 w-screen mt-20 lg:mt-0 lg:h-[calc(100vh-72px)] lg:place-content-center">
      {children}
    </main>
  );
}
