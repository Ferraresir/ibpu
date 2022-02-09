import NavBar2 from "./NavBar2.js";
import Footer from "./Footer.js";

export default function Layout({ children }) {
  return (
    <>
      <NavBar2 />
      {children}
      <Footer />
    </>
  );
}
