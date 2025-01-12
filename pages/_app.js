// pages/_app.js

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="min-h-screen bg-[#1A1A1A]">
        <Component {...pageProps} />
      </div>

      <script src="assets/js/jquery-1.12.4.min.js"></script>
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      <script src="assets/owlcarousel/js/owl.carousel.min.js"></script>
      <script src="assets/js/magnific-popup.min.js"></script>
      <script src="assets/js/waypoints.min.js"></script>
      <script src="assets/js/parallax.js"></script>
      <script src="assets/js/particles.min.js"></script>
      <script src="assets/js/jquery.dd.min.js"></script>
      <script src="assets/js/jquery.counterup.min.js"></script>
      <script src="assets/js/spop.min.js"></script>
      <script src="assets/js/notification.js"></script>

      <script src="assets/js/scripts.js"></script>
    </>
  );
}

export default MyApp;
