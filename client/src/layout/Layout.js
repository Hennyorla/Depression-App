import Navbar from "./Navbar";
import Footer from "./Footer";
import AppRoutes from "./AppRoutes";

const Layout = () => {
  return (
    <>
      <header className="fixed-top header">
        <Navbar />
      </header>
      <main style={{ marginTop: "50px" }}>
        <AppRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
