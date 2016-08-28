var photos = [
  {userId: 1, url: './images/mockups/MockUp0.png', title: 'Mock Up 0 index', rating: '3 stars'},
  {userId: 1, url: './images/mockups/MockUp1.png', title: 'Mock Up 1', rating: '4 stars'},
  {userId: 1, url: './images/mockups/MockUp2.png', title: 'Another Mock Up', rating: '2 stars'},
  {userId: 1, url: './images/mockups/MockUp3.png', title: 'Still More Mock Ups!', rating: '5 stars'},
  {userId: 1, url: './images/mockups/MockUp4.png', title: 'They keep getting better!', rating: '1 stars'},
];

var getPhotos = $.get('/photos', function(result) {
  console.log('Result of ajax call in index.js: ', result);
});

ReactDOM.render(<App photos={photos} />, document.getElementById('app'));
