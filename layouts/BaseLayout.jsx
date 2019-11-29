export default function BaseLayout({ children }) {
  return (
    <>
      <div>Header!</div>
      <div>Nav!</div>
      {children}
      <div>Footer?</div>
    </>
  );
}
