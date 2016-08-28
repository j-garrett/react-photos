var photos = [
  {url: './images/mockups/MockUp0.png', title: 'Mock Up 0 index', rating: '3.5 stars'},
  {url: './images/mockups/MockUp1.png', title: 'Mock Up 1', rating: '3.5 stars'},
  {url: './images/mockups/MockUp2.png', title: 'Another Mock Up', rating: '3.5 stars'},
  {url: './images/mockups/MockUp3.png', title: 'Still More Mock Ups!', rating: '3.5 stars'},
  {url: './images/mockups/MockUp4.png', title: 'They keep getting better!', rating: '3.5 stars'},
];

ReactDOM.render(<App photos={photos} />, document.getElementById('app'));
