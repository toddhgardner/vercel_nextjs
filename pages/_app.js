import React from "react";
import App from "next/app";
// trackjsAdapter is the Isomorphic Adapter this may be run on the browser or server.
import { TrackJS } from "../utils/trackjs-isomorphic.js";

if (!TrackJS.isInstalled()) {
  TrackJS.install({
    token: "fake",
    usageURL: "http://localhost:3000/api/timeout"
  });
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  // Standard React extension point for capturing errors.
  componentDidCatch (error, errorInfo) {
    TrackJS.track(error);
    this.setState({ error });
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />
  }
}

export default MyApp;