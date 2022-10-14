import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: any) => {
  return (
    <div class="m-auto">
      <Header />
      <div class="">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
