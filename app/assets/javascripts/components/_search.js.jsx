class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value })
    }
  }
  handleSearch = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  };
  handleInputChange = e => {
    this.setState({ value: e.target.value });
  };
  render(){
    return(
      <div className="search">
        <form onSubmit={this.handleSearch}>
          <label htmlFor="searchInput">Search for offers</label>
          <input id="searchInput" onChange={this.handleInputChange} type="text" value={this.state.value} />
        </form>
      </div>
     )
   }
}
