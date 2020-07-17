import App from "next/app";
import { TrackJS } from "../utils/trackjs-isomorphic.js";

if (!TrackJS.isInstalled()) {
  TrackJS.install({
    token: "fake",
    usageURL: "https://nextjs-tau-azure.vercel.app/api/timeout"
  });
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Standard React extension point for capturing errors.
MyApp.componentDidCatch = (error, errorInfo) => {
  TrackJS.track(error);
  this.setState({ error });
  // Anything else you want to do with the error.
}

export default MyApp;