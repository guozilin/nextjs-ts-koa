  
import React from 'react'
import App from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
// import ScrollReveal from 'scrollreveal'


Router.events.on('routeChangeStart', (url) => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
		const {Component, pageProps} = this.props
    return <Component {...pageProps} />
  }
}