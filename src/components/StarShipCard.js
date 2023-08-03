function StarShipCard(props) {

  const {starShips} = props;

  return (
    <div className='container'>
       { starShips ? (
          starShips.map((item) => <div className='ship'>{item.name}</div>)
      ) : ( <div className='ship'>No Ships found</div>
      )}
    </div>
    )
  
};

export default StarShipCard;