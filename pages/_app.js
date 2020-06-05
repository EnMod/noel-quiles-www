import '../styles/style.css'
import App from 'next/app'
import AppLayout from '../layouts/app-layout.jsx'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <AppLayout chosenLayout={Component.layout}>
        <Component {...pageProps} />
      </AppLayout>
    )
  }
}
