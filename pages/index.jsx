import Home, { getStaticProps as staticProps } from "./home"

Home.layout = "BareLayout"

export async function getStaticProps() {
  return staticProps()
}

export default Home
