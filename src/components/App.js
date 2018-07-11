import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'redux-little-router';
import { Container, Header, Dimmer, Loader, Icon } from 'semantic-ui-react';
import './App.css';
import TopHeader from './TopHeader';
import Books from './Books';
import OrderBook from './OrderBook';
import { booksGet, booksSelect } from '../redux/actions/books';

class App extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  renderContent = () => {
    const { books, uiOrderInProgress, onSelect } = this.props;

    return uiOrderInProgress ? (
      <OrderBook onPlaceOrder={() => console.log('place order')} />
    ) : (
      <Books onSelect={onSelect}>{books}</Books>
    );
  };

  render() {
    const { pending, error } = this.props;
    if (error) {
      return (
        <Dimmer active>
          <Header as="h2" icon inverted>
            <Icon name="error" />
            Error loading!
          </Header>
        </Dimmer>
      );
    }
    if (pending) {
      return (
        <Dimmer active>
          <Loader indeterminate>Loading...</Loader>
        </Dimmer>
      );
    }
    return (
      <Container>
        <TopHeader />
        <Fragment forRoute="/">
          <div>
            <Fragment forRoute="/books">{this.renderContent()}</Fragment>
            <Fragment forRoute="/aboutUs">
              <Header>About Us</Header>
            </Fragment>
            <Fragment forRoute="/">
              <Header>Home</Header>
            </Fragment>
          </div>
        </Fragment>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  pending: state.app.ui.pending,
  error: state.app.ui.error,
  uiOrderInProgress: state.app.ui.uiOrderInProgress,
  books: state.app.books,
  order: state.app.order,
});

const mapDispatchToProps = dispatch => ({
  onSelect: id => dispatch(booksSelect(id)),
  getBooks: () => dispatch(booksGet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
