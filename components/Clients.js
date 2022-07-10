import Logos from "./Logos";

export default function Clients({ text }) {
  return (
    <section className='clients__container'>
      <h4>Clients</h4>
      <div className='clients__text'>
        <h6 dangerouslySetInnerHTML={{ __html: text }}></h6>
      </div>
      <Logos />
    </section>
  );
}
