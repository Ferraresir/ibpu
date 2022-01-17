import NavBar from "./NavBar.js";
import Footer from "./Footer.js";

export default function Layout({children}) {
  return (
    <>
      <NavBar />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
}
