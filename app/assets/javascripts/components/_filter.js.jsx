class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  handleSelect = e => {
    const value = e.target.value;
    this.setState({ value })
    this.props.filterByRetailer(value);
  };
  render(){
    const { retailers } = this.props;
    const { value } = this.state;
    return(
      <div className="filter">
        <select value={value} onChange={this.handleSelect}>
          <option id="">Retailers</option>
          {retailers.map(retailer => {
            return (
              <option key={retailer.id} value={retailer.id}>{retailer.name}</option>
            )
          })}
        </select>
      </div>
     )
   }
}
