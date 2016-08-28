class App extends React.Component {
  constructor (props) {
    // Extend react component by passing props to super
    super(props);
    // Set initial state of app
    this.state = {
      curPhoto: undefined,
      photoList: props.photos
    };
    // Bind the click event listener function to this scope
    this.photoClick = this.photoClick.bind(this);
  }
  // Declare function to change state when list item is clicked
  photoClick (photo) {
    this.setState({curPhoto: photo});
  }
  render () {
    var photoView = this.state.curPhoto ? <PhotoView photo={this.state.curPhoto} /> : null;
    return (
      <div>
        <PhotoList photos={this.state.photoList} clickList={this.photoClick} />
        {photoView}
      </div>
    );
  }
}
var PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map(photo => 
        <PhotoEntry photo={photo} clickList={props.clickList} />
      )}
    </ul>
  );
};
var PhotoEntry = (props) => {
  return (
    <li onClick={function() {
      props.clickList(props.photo);
    }}>{props.photo.title}</li>
  );
};
var PhotoView = (props) => {
  return (
    <div className="photo-view">
      <h3>{props.photo.title}</h3>
      <h4>{props.photo.rating} stars</h4>
      <img src={props.photo.url} />
    </div>
  );
};
