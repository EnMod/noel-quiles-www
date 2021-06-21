import Nav from '../../components/nav'

export default function BaseLayout({ children }) {
  return (
    <>
      <div>Header?</div>
      <Nav />
      <input type="text" placeholder="test input to test layout persistence!" />
      {children}
      <div>Footer?</div>
    </>
  )
}
