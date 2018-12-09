class Offer extends React.Component {
  
  constructor(props) {
    super(props);
  }
  handleClose() {
    this.props.handleClose();
  }
  handleClick(offerId) {
    this.props.handleClick(offerId)
  }
  render(){
    console.log(this.props.offer)
    const { offer, handleClose } = this.props;
    console.log(handleClose)
    return(
      <div className="offer" onClick={() => this.handleClick(offer.id)}>
        {handleClose &&
          <a onClick={() => this.handleClose()}>Close</a>
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