import "./style.css"

export default function HomePage({ disciplines }) {
  return (
    <div id="p-home">
      'Tis but{" "}
      <span className="testing-nesting">a test{process.env.testEnv}</span>
    </div>
  )
}
