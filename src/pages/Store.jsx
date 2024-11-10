import Header from '../components/Header';

function Store(props) {
    return (
        <div className="container">
            <Header balance={props.stats.balance}>store</Header>
            <div className="scrollbox items">
                TO DO Items
            </div>
        </div>
    );
}

export default Store;