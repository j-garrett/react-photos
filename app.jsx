var photos = [
  {url: './mockups/MockUp0.png', title: 'Mock Up 0 index', rating: '3.5 stars'},
  {url: './mockups/MockUp1.png', title: 'Mock Up 1', rating: '3.5 stars'},
  {url: './mockups/MockUp2.png', title: 'Another Mock Up', rating: '3.5 stars'},
  {url: './mockups/MockUp3.png', title: 'Still More Mock Ups!', rating: '3.5 stars'},
  {url: './mockups/MockUp4.png', title: 'They keep getting better!', rating: '3.5 stars'},
];
class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <PhotoList photos={photos} />
      </div>
    ) 
  }

}

class PhotoList extends React.Component {
  constructor (props) {
    super(props);
    this.state = props;
  }

  render () {
    return (
      <ul className="photo-list">
        {this.state.photos.map(photo => 
          <PhotoEntry photo={photo} />
        )}
      </ul>
    )
  }

}

var PhotoEntry = (props) => {
  return (
    <li>{props.photo.title}</li>
  )
}