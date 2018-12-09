class DataHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      retailers: [],
      offers: [],
      currentOffer: null,
      filterOffers: []
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
        this.setState({ retailers: data }) 
      });
  };
  handleClose = () => {
    this.setState({ currentOffer: null });
  };
  filterByRetailer = retailer_id => {
    fetch(`/api/v1/retailer_offers/${retailer_id}`)
      .then((response) => {return response.json()})
      .then((data) => {
        const offerIds = data.map(x => x.offer_id);
        let retailerOffers = this.state.offers.filter(offer => {
          return offerIds.includes(offer.id)
        })
        this.setState({ filterOffers: retailerOffers });
      });
  };
  render(){
    const { retailers, filterOffers, currentOffer } = this.state;
    return(
      <div>
        {currentOffer ?
          <Offer handleClose={this.handleClose} offer={currentOffer} />
          :
          <div>
            <Filter retailers={retailers} filterByRetailer={this.filterByRetailer} />
            <Offers offers={filterOffers} handleClick={this.getOffers}/>
          </div>
        }
      </div>
     )
   }
}

// movies = [{
//     'title': 'a',
//     'genres': ['Romance', 'Comedy']
//   },
//   {
//     'title': 'b',
//     'genres': ['Drama', 'Comedy']
//   },
//   {
//     'title': 'c',
//     'genres': ['Action', 'Adventure']
//   }
// ]

// filters = ['Romance', 'Drama']

// //[{'title': 'a', 'genres': ['Romance', 'Comedy']}, 
// // {'title': 'b', 'genres': ['Drama', 'Comedy']}]

// console.log(movies.filter(x => x.genres.some(g => filters.includes(g))))

