class Offer extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClose = () => {
    this.props.handleClose();
  };
  handleClick = () => {
    this.props.handleClick(this.props.offer.id);
  };
  render(){
    const { offer, handleClose, singleOffer } = this.props;
    const expirationDate = new Date(offer.expiration).toLocaleString();
    return(
      <div className={`offer ${singleOffer ? 'single' : ''}`} onClick={this.handleClick}>
        {singleOffer &&
          <a className="back" onClick={this.handleClose}>Back</a>
        }
        <div className="title">{offer.name}</div>
        <div className="imgContainer">
          <img src={offer.image_url} alt=""/>
        </div>
        <div>{offer.description}</div>
        { singleOffer &&
          <div>
            <div>{offer.terms}</div>
            <div>Expires: {expirationDate}</div>
          </div>
        }
      </div>
     )
   }
}

Offer.proptypes = {
  handleClick: PropTypes.func
};

Offer.defaultProps = {
  handleClick: () => {},
};
