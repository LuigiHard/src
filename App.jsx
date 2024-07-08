import About from './components/About';
import About2 from './components/About2';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import QuemSomos from './components/QuemSomos';
import Objetivos from './components/Objetivos'
import Servicos from './components/NossosServicos'
import Form from './components/Form';
import Footer from './components/Footer';
import Layout from './utils/Layout';
import PorqueEclipse from './components/PorqueEclipse';

const App = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <Hero />
        <QuemSomos />
        <About />
        <Objetivos />
        <PorqueEclipse />
        <About2 />
        <Servicos />
        <Projects />
        <Form />
        <Footer />
      </Layout>
      <></>
    </>
  );
};
export default App;
