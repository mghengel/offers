class DataHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      retailers: [],
      offers: [],
      currentOffer: '',
      filterOffers: [],
      currentRetailer: '',
      searchValue: ''
    }
  }
  componentDidMount(){
    this.getOffers();
    this.getRetailers();
  }
  getOffers = offerId => {
    fetch(`/api/v1/offers${offerId ? '/' + offerId : ''}`)
      .then((response) => {return response.json()})
      .then((data) => {
        if (offerId) {
          this.setState({ currentOffer: data });
        } else {
          this.setState({
            offers: data,
            filterOffers: data
          }) 
        }
      });
  };
  getRetailers = () => {
    fetch(`/api/v1/retailers`)
      .then((response) => {return response.json()})
      .then((data) => {
        const retailers = data.sort( (a, b) => {
          return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
        });
        this.setState({ retailers }) 
      });
  };
  filterByRetailer = retailer_id => {
    this.setState({ 
      currentRetailer: retailer_id,
      searchValue: ''
    });
    if (retailer_id) {
      fetch(`/api/v1/retailer_offers${retailer_id ? '?retailer_id=' + retailer_id : ''}`)
        .then((response) => {return response.json()})
        .then((data) => {
          const offerIds = data.map(x => x.offer_id);
          let retailerOffers = this.state.offers.filter(offer => {
            return offerIds.includes(offer.id)
          })
          this.setState({ filterOffers: retailerOffers });
        });
      } else {
        // Clears the filter
        this.setState({ filterOffers: this.state.offers });
      }
    
  };
  handleSearch = searchValue => {
    this.setState({ 
      searchValue,
      currentRetailer: '' 
    });
    fetch(`/api/v1/offers?q=${searchValue}`)
      .then((response) => {return response.json()})
      .then((data) => {
        this.setState({ filterOffers: data }) 
      });
  };
  handleClose = () => {
    this.setState({ currentOffer: '' });
  };
  render(){
    const { retailers, filterOffers, currentOffer, currentRetailer, searchValue } = this.state;
    if (!retailers.length && !filterOffers.length) return <div>...Loading</div>;
    return(
      <div className="offerContainer">
        {currentOffer ?
          <Offer handleClose={this.handleClose} offer={currentOffer} singleOffer={true} />
          :
          <div>
            <Filter retailers={retailers} currentRetailer={currentRetailer} filterByRetailer={this.filterByRetailer} />
            <div>Or</div>
            <Search handleSearch={this.handleSearch} value={searchValue} />
            <Offers offers={filterOffers} handleClick={this.getOffers}/>
          </div>
        }
      </div>
     )
   }
}
