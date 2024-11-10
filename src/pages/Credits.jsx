import Header from '../components/Header';

function Credits(props) {
    return (
        <div className="container">
            <Header balance={props.stats.balance}>credits</Header>
            <div className="scrollbox">
                <div className="credits">
                    <h2>credits</h2>
                    <p>LenuLogic</p>
                </div>
            </div>
        </div>
    );
}

export default Credits;