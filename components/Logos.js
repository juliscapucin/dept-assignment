const logosArray = [
  { id: 1, alt: "Google logo", path: "google.svg" },
  { id: 2, alt: "Levi's logo", path: "levis.svg" },
  { id: 3, alt: "Netflix logo", path: "netflix.svg" },
  { id: 4, alt: "Spotify logo", path: "spotify.svg" },
  { id: 5, alt: "Patagonia logo", path: "patagonia.svg" },
  { id: 6, alt: "Fujitsu logo", path: "fujitsu.svg" },
  { id: 7, alt: "Adyen logo", path: "adyen.svg" },
  { id: 8, alt: "Audi logo", path: "audi.svg" },
  { id: 9, alt: "Triumph logo", path: "triumph.svg" },
  { id: 10, alt: "Tesla logo", path: "tesla.svg" },
  { id: 11, alt: "Asos logo", path: "asos.svg" },
  { id: 12, alt: "Takeaway.com logo", path: "takeaway.svg" },
];

export default function Logos() {
  return (
    <section className='logos__container'>
      {logosArray.map((logo, index) => {
        return (
          <div className='logo' key={index}>
            <img src={`./client-logos/${logo.path}`} alt={logo.alt} />
          </div>
        );
      })}
    </section>
  );
}
