import iconLemon from '../assets/lemon.svg';

// Tehdään funktio, joka selvittää kuvan polun
function getImageUrl(name) {
    return new URL(`../assets/items/${name}`, import.meta.url).href;
}

function Item(props) {
    const url = getImageUrl(props.item.image);

    return (
        <div className="item">
            <div className="item_icon"><img src={url} alt="" /></div>
            <div className="item_desc">
                {props.item.name}<br/>
                {props.item.price} <img src={iconLemon} alt="lemons" />
            </div>
            <div className="item_qty">{props.item.qty}</div>
        </div>
    );
}

export default Item;