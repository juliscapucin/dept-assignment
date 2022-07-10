import Link from "next/link";

const countries = [
  "Global",
  "Nederland",
  "United States",
  "Ireland",
  "United Kingdom",
  "Deutschland",
  "Schweiz",
];

export default function CountrySelect() {
  return (
    <nav className='countryselect__container'>
      <div className='countryselect__dropdown__container'>
        <div className='countryselect__title'>Landen</div>
        <ul className='countryselect__dropdown__options'>
          {countries.map((country, index) => {
            return (
              <li className='countryselect__dropdown__item' key={index}>
                <div className='countryselect__arrow'>
                  <svg
                    width='10'
                    height='11'
                    viewBox='0 0 10 11'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.47222 5.42466L0 11V0L9.47222 5.42466Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <Link href='#'>
                  <a>
                    <p>{country}</p>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
