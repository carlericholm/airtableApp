import React from 'react';
import BooksCard from './components/BooksCard';
import Grid from '@material-ui/core/Grid';

class App extends React.Component {
  state = {
    booksData: [],
  };

  componentDidMount() {
    fetch(
      'https://api.airtable.com/v0/app0RZKJYO4t6ezyo/Table%201?api_key=keyE8gD6vYvtlhzsu',
      
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.records);
        this.setState({ booksData: res.records });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { booksData } = this.state;
    return (
      <Grid container direction='row' spacing={2}>
        {booksData.map((book) => (
          <BooksCard {...book.fields} key={book.fields.id} />
        ))}
      </Grid>
    );
  }
}

export default App;
