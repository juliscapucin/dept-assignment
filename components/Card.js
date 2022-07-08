import Image from "next/image";

export default function Card(card) {
  const client = card.card.client;
  const title = card.card.title;
  const image = card.card.image.sourceUrl;

  return (
    <article className='card__container'>
      <div className='card__text__container'>
        <h3>{client}</h3>
        <h3>{title}</h3>
      </div>
      <div className='card__img__container'>
        <div className='card__img'>
          <Image
            src={image}
            alt='Image'
            layout='fill'
            objectFit='cover'
            objectPosition='center center'
            priority
          />
        </div>
      </div>
    </article>
  );
}
