class Offers extends React.Component {
  constructor(props) {
    super(props);
  }
  offerClick = offerId => {
    this.props.handleClick(offerId)
  };
  render(){
    const { offers } = this.props;
    return(
      <div className="offers">
        {offers.length ? 
          offers.map(offer => <Offer key={offer.id} offer={offer} handleClick={this.offerClick} /> )
        :
          <span>Sorry there are no offers for this retailer.</span>
        }        
      </div>
     )
   }
}