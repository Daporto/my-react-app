import { render, prettyDOM } from '@testing-library/react'
import CountryCard  from '../components/CountryCard'

describe('testing CountryCard component', () => {
    test('rendering component', () => {
        const country = {
            name: "Colombia",
            capital: "Bogotá",
            population: 50000000,
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1200px-Flag_of_Colombia.svg.png",
            googleMaps:
              "https://www.google.com/maps/place/Colombia/@4.5877987,-83.3863967,5z/data=!3m1!4b1!4m5!3m4!1s0x8e15a43aae1594a3:0x9a0d9a04eff2a340!8m2!3d4.570868!4d-74.297333?hl=es-419",
          };
        const countryComponent = render(<CountryCard
            name={country.name}
            capital={country.capital}
            population={country.population}
            flag={country.flag}
            googleMaps={country.googleMaps}
        />);
        console.log(prettyDOM(countryComponent.container));
        expect(countryComponent.container).toHaveTextContent('Bogotá');
        const button = countryComponent.getByText('Show in Google maps');
        expect(button.href).toEqual("https://www.google.com/maps/place/Colombia/@4.5877987,-83.3863967,5z/data=!3m1!4b1!4m5!3m4!1s0x8e15a43aae1594a3:0x9a0d9a04eff2a340!8m2!3d4.570868!4d-74.297333?hl=es-419");
        expect(countryComponent.getByText('Show in Google maps')).toBeInTheDocument()
    })
})