import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: any) => {
  return (
    <div class="max-w-[1025px] m-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
