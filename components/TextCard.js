import Image from "next/image";

export default function TextCard(textCard) {
  console.log(textCard.textCard.textCards.mainImage);

  const {
    mainImage,
    mainClientName,
    mainTitle,
    client1,
    title1,
    client2,
    title2,
    client3,
    title3,
  } = textCard.textCard.textCards;

  return (
    <article className='textcard__container'>
      <div className='textcard__main'>
        <div className='textcard__text__container'>
          <h3>{mainClientName}</h3>
          <h3>{mainTitle}</h3>
        </div>
        <div className='textcard__img__container'>
          <div className='textcard__img'>
            <Image
              src={mainImage.sourceUrl}
              alt='Image'
              layout='fill'
              objectFit='cover'
              objectPosition='center center'
              priority
            />
          </div>
        </div>
      </div>
      <div className='textcard__text'>
        <div>
          <h3>{client1}</h3>
          <h3>{title1}</h3>
        </div>
        <div>
          <h3>{client2}</h3>
          <h3>{title2}</h3>
        </div>
        <div>
          <h3>{client3}</h3>
          <h3>{title3}</h3>
        </div>
      </div>
    </article>
  );
}
