export function Main({ children }) {
  return (
    <main className="m-auto grid w-11/12 pb-9 lg:mt-0 lg:h-[calc(100vh-72px)] lg:place-content-center  selection:bg-purple-200 selection:text-yellow-200  lg:pb-0">
      {children}
    </main>
  );
}
