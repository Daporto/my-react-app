import { render, prettyDOM, fireEvent } from '@testing-library/react'
import Suma from '../components/Suma'

describe('testing suma component', () => {
    test('result', () => {
        const suma = render(<Suma/>);
        suma.container.querySelector("[placeholder='Number 1']").value = 5;
        suma.container.querySelector("[placeholder='Number 2']").value = 4;
        const button = suma.getByText("Sumar");
        fireEvent.click(button)
        expect(suma.getByPlaceholderText('9')).toBeInTheDocument()
    })
})