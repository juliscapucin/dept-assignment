import Logos from "./Logos";

export default function Clients({ text }) {
  return (
    <section className='clients__container'>
      <div className='clients__text'>
        <h3>Clients</h3>
        <h4>{text}</h4>
      </div>
      <Logos />
    </section>
  );
}
