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
    const { offer, handleClose } = this.props;
    return(
      <div className="offer" onClick={this.handleClick}>
        {handleClose &&
          <a onClick={this.handleClose}>Close</a>
        }
        <div className="title">{offer.name}</div>
        <div className="img-container">
          <img src={offer.image_url} alt=""/>
        </div>
        <div>{offer.description}</div>
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
