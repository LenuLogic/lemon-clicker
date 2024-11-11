import iconLemon from '../assets/lemon.svg';
import shortenNumber from '../utils/shortenNumber';

// Tehdään funktio, joka selvittää kuvan polun
function getImageUrl(name) {
    return new URL(`../assets/items/${name}`, import.meta.url).href;
}

function Item(props) {
    const url = getImageUrl(props.item.image);

    return (
        <div className="item"
            onClick={()=>{props.handlePurchase(props.item.id)}}>
            <div className="item_icon"><img src={url} alt="" /></div>
            <div className="item_desc">
                {props.item.name}<br/>
                {shortenNumber(props.item.price)} <img src={iconLemon} alt="lemons" />
            </div>
            <div className="item_qty">{props.item.qty}</div>
        </div>
    );
}

export default Item;