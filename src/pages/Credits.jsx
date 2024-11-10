import Header from '../components/Header';

function Credits(props) {
    return (
        <div className="container">
            <Header balance={props.stats.balance}>credits</Header>
            <div className="scrollbox">
                <div className="credits">
                    <h2>lemon clicker</h2>
                    <h3>made by LenuLogic</h3>
                </div>
            </div>
        </div>
    );
}

export default Credits;