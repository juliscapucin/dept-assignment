import Logos from "./Logos";

export default function Clients({ text }) {
  return (
    <section className='clients__container'>
      <div className='clients__text'>
        <h3>Clients</h3>
        <h6 dangerouslySetInnerHTML={{ __html: text }}></h6>
      </div>
      <Logos />
    </section>
  );
}
