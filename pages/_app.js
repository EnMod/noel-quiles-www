import "../styles/style.css";
import App from "next/app";
import BaseLayout from "../layouts/BaseLayout.jsx";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    );
  }
}
