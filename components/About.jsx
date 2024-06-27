

import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className=' py-64' id='about' style={{ }}>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
       
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-300 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
