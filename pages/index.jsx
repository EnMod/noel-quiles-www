import Home, { unstable_getStaticProps as staticProps } from "./home"

function HomePage(props) {
  return <Home {...props} />
}

export async function unstable_getStaticProps() {
  return staticProps()
}

HomePage.layout = "BareLayout"

export default HomePage
