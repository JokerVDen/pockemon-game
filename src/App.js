import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import bg1 from './img/bg1.jpg';
import bg2 from'./img/bg3.jpg';

const App = () => (
    <>
      <Header
        title="Title"
        descr="Description"
      />
      <Layout
          title="Title Layout 1"
          descr="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur at blanditiis eos
                error, nulla quas qui rerum sint! Aperiam cum eligendi eum, non pariatur quisquam recusandae rerum
                voluptate."
          urlBg={bg1}
      />
      <Layout
          title="Title Layout 2"
          descr="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur at blanditiis eos
                error, nulla quas qui rerum sint! Aperiam cum eligendi eum, non pariatur quisquam recusandae rerum
                voluptate."
          colorBg="#e2e2e2"
      />
      <Layout
          title="Title Layout 3"
          descr="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aspernatur at blanditiis eos
                error, nulla quas qui rerum sint! Aperiam cum eligendi eum, non pariatur quisquam recusandae rerum
                voluptate."
          urlBg={bg2}
      />
      <Footer />
    </>
);

export default App;
