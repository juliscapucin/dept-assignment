import Image from "next/image";

export default function TextCard(textCard) {
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

  const textsArray = [
    { subtitle: client1, title: title1 },
    { subtitle: client2, title: title2 },
    { subtitle: client3, title: title3 },
  ];

  return (
    <article className='textcard__container'>
      <div className='textcard__main'>
        <div className='textcard__title__container'>
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
      <div className='textcard__text__container'>
        {textsArray.map((item, index) => {
          return (
            <div className='textcard__text__item' key={index}>
              <div className='textcard__item__subtitle'>
                <p>{item.subtitle}</p>
              </div>
              <div className='textcard__item__title'>
                <h4>{item.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
