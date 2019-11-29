import "./style.css";

const Home = () => (
  <div id="p-home">
    'Tis but{" "}
    <span className="testing-nesting">a test{process.env.testEnv}</span>
  </div>
);

export default Home;
