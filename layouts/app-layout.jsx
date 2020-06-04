import BaseLayout from "./base"
import BlogLayout from "./blog"
import BareLayout from "./bare"

export default function AppLayout({ chosenLayout, children }) {
  const CustomLayouts = {
    BlogLayout,
    BareLayout
  }

  const Layout = CustomLayouts[chosenLayout] || BaseLayout

  return <Layout>{children}</Layout>
}
