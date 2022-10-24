import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: any) => {
  return (
    <div class="m-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
