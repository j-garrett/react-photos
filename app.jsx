var photos = [
  {url: './mockups/MockUp0.png', title: 'title', rating: '3.5 stars'},
  {url: './mockups/MockUp1.png', title: 'title', rating: '3.5 stars'},
  {url: './mockups/MockUp2.png', title: 'title', rating: '3.5 stars'},
  {url: './mockups/MockUp3.png', title: 'title', rating: '3.5 stars'},
  {url: './mockups/MockUp4.png', title: 'title', rating: '3.5 stars'},
];

var App = () => (
  <div>
  <h2>Photo Viewing App</h2>
  <GroceryList items={['First Call', 'Bike Dynamo', 'Bananas', 'Gorillas']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.items.map(item => 
      <GroceryListItem item={item} />
    )}
  </ul>
);

var ListItem1 = () => (
  <li>Bananas</li>
);

var ListItem2 = () => (
  <li>Gorillas</li>
);

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li onClick={this.onListItemClick}>
     
      </li>
    );
  }

  onListItemClick(event) {
    //console.log(`I got clicked! My value is ${this.input[0]}`);
    console.log(event);
  }

}

// var GroceryListItem = (props) => {

//   var onListItemClick = (event) => {
//     console.log(`I got clicked! My value is ${props.input[0]}`);
//     console.log(event);
//   };

//   return (
//     <li onClick={onListItemClick}>{props.input[0]}</li>
//   );
// };

ReactDOM.render(<App />, document.getElementById('app'));