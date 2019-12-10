import BaseLayout from "./BaseLayout"
import BlogLayout from "./BlogLayout"
import BareLayout from "./BareLayout"

export default function AppLayout({ chosenLayout, children }) {
  const CustomLayouts = {
    BlogLayout,
    BareLayout
  }

  const Layout = CustomLayouts[chosenLayout] || BaseLayout

  return <Layout>{children}</Layout>
}
