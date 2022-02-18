import React from 'react';
import Album from './components/Album'

class App extends React.Component {
  render() {
    const albums = [
      {
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
        title: 'Mylo Xyloto',
        releaseDate: {
          year: '2011',
          month: '10',
          day: '24',
        },
        others: {
          recordCompany: 'Capitol, Parlophone',
          formats: 'CD, digital'
        }
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
        title: 'Ghost Stories',
        releaseDate: {
          year: '2014',
          month: '05',
          day: '16',
        },
        others: {
          recordCompany: 'Parlophone',
          formats: 'CD, digital'
        }
      },
    ];

    return (
      albums.map(album => (
        <div>
          <Album album={ album } />
        </div>
      ))
    )
  }
};

export default App;
