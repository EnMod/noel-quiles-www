import BaseLayout from "./BaseLayout";
import BlogLayout from "./BlogLayout";

export default function AppLayout({ chosenLayout, children }) {
  const CustomLayouts = {
    BlogLayout
  };

  const Layout = CustomLayouts[chosenLayout] || BaseLayout;

  return <Layout>{children}</Layout>;
}
