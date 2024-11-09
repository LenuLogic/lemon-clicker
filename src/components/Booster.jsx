function Booster(props) {
    // kokeile toteuttaa Booster-niminen komponentti, 
    // joka saa kutsun yhteydessä value-määritteellä arvon.
    const value = props.value;

    return (
        <div className="booster">
            {value} lemon / click
        </div>
    );
}

export default Booster;