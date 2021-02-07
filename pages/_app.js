import '../styles/global.css'
import App from 'next/app'
import BaseLayout from '../layouts/base'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const Layout = Component.layout || BaseLayout

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}
