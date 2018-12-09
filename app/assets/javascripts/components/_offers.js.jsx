class Offers extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      offers: [],
      currentOffer: null
    };
    this.offerClick = this.offerClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount(){
    fetch('/api/v1/offers')
      .then((response) => {return response.json()})
      .then((data) => {
        this.setState({ offers: data }) 
      });
  }

  offerClick(offerId) {
    fetch(`/api/v1/offers/${offerId}`)
      .then((response) => {return response.json()})
      .then((data) => {
        this.setState({ currentOffer: data }) 
      });
  };
  handleClose() {
    this.setState( {currentOffer: null });
  }
  render(){
    const { offers, currentOffer } = this.state;
    if (currentOffer) return <Offer handleClose={this.handleClose} offer={currentOffer} />
    return(
      <div className="offers">
        {offers.map(offer => <Offer key={offer.id} offer={offer} handleClick={this.offerClick} /> )}
      </div>
     )
   }
}