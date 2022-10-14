import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: any) => {
  return (
    <div class="max-w-[1025px] m-auto">
      <Header />
      <div class="mt-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
