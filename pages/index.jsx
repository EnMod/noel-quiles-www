import Home, { unstable_getStaticProps as staticProps } from "./home"

Home.layout = "BareLayout"

export async function unstable_getStaticProps() {
  return staticProps()
}

export default Home
