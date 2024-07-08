

import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className=' py-64' id='about' style={{ }}>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
       
        <article>
          <SectionTitle text='Bem-vindos à ECLIPSE MEDIA & MARKETING, uma agência ágil e dedicada! ' />
          <p className='text-slate-300 mt-8 leading-loose'>
            
Se você está buscando inovar sua estratégia de marketing, ampliar sua presença online ou impulsionar suas vendas, estamos aqui para tornar isso realidade. Nossa equipe é composta por especialistas apaixonados e comprometidos em entregar soluções personalizadas que atendam exatamente às suas necessidades.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
