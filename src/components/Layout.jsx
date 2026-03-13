import Navbar from "./Navbar";
function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-6 pt-24">{children}</main>
    </div>
  );
}

export default Layout;
