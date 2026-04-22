import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-app-bg">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};