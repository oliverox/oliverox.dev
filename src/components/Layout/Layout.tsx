import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ h1, children }: any) {
  return (
    <>
      <Header />
      <div className="-mt-48">
        <h1 className="text-3xl text-center pb-4 font-semibold">{h1}</h1>
        {children}
      </div>
      <Footer />
    </>
  );
}
