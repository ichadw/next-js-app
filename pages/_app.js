import App from "next/app";
import { elementType, object } from "prop-types";
import LayoutWrapper from "../layouts/wrapper";
import { ToasterProvider } from "@/context/toaster";
import Toaster from "@/components/Toaster";
export function reportWebVitals(metric) {
  console.log(metric);
}

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <LayoutWrapper {...pageProps}>
        <ToasterProvider>
          <Component {...pageProps} />
          <Toaster />
        </ToasterProvider>
      </LayoutWrapper>
    );
  }
}

MyApp.propTypes = {
  Component: elementType.isRequired,
  pageProps: object.isRequired,
};
