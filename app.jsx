class App extends React.Component {
  constructor (props) {
    // Extend react component by passing props to super
    super(props);
    // Set initial state of app
    this.state = {
      curPhoto: null,
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
    return (
      <div>
        <PhotoList photos={this.state.photoList} />
      </div>
    );
  }
}
var PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map(photo => 
        <PhotoEntry photo={photo} />
      )}
    </ul>
  );
}
var PhotoEntry = (props) => {
  return (
    <li>{props.photo.title}</li>
  );
};
var PhotoView = (props) => {
  return (
    <div>
      <img src={props.url} />
      <p>{props.title}</p>
    </div>
  );
};
