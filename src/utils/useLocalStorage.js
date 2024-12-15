import { useEffect, useState } from "react";

// localStorage tallentaa arvot aina merkkijonona. 
// Decode-funktio muuttaa muuttujan "value" JSON-merkkijonoksi.
const decode = (value) => {
    return JSON.stringify(value);
}

// Purkaa JSON-merkkijonon muuttujaksi:
const encode = (value) => {
    return JSON.parse(value);
}

// Määritellään tilamuuttuja.
// Tilamuuttujan arvoksi haetaan joko localStorage-muuttujan arvo tai alkuarvo.
const useLocalStorage = (key, defaultState) => {
    const [value, setValue] = useState(
        encode(localStorage.getItem(key) || null) || defaultState
    );

    // Tallennetaan tilamuuttuja localStorageen aina, kun arvo muuttuu.
    useEffect(() => {
        localStorage.setItem(key, decode(value));
    }, [value]);

    // Määritellään funktio, joka palauttaa alkuarvot:
    const resetValue = () => {
        setValue(defaultState);
    }

    return [value, setValue, resetValue];
}

export default useLocalStorage;