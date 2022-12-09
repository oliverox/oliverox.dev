import Header from '../Header/Header';
import Footer from "../Footer/Footer";

export default function Layout({ h1, children }: any) {
  return (
    <>
      <Header h1={h1} />
      {children}
      <Footer />
    </>
  );
}
