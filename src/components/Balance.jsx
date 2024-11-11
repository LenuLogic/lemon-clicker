import shortenNumber from '../utils/shortenNumber';

function Balance(props) {
    // Poimitaan komponentille välitetty total-arvo
    const total = props.total;

    return (
        <div className="balance">
            <div>lemons</div>
            <div className="balance_total">{shortenNumber(total)}</div>
        </div>
    );
}

export default Balance;