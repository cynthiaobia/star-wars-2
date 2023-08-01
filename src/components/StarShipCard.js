
function StarShipCard(props) {

  const {starShips} = props;

  return (
    <div>
       { starShips ? (
          starShips.map((item) => <h3>{item.name}</h3>)
      ) : ( <h3>No Ships found</h3>
      )}
    </div>
    )
  
};

export default StarShipCard;