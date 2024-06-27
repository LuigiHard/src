import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import QuemSomos from './components/QuemSomos';
import Objetivos from './components/Objetivos'
import Servicos from './components/NossosServicos'
import Form from './components/Form';
import Footer from './components/Footer';
import Layout from './utils/Layout';

const App = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <Hero />
        <QuemSomos />
        <About />
        <Objetivos />
        <About />
        <Servicos />
        <Projects />
        <Form />
        <Footer />
      </Layout>
    </>
  );
};
export default App;
