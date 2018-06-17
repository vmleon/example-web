import React from 'react';
import { connect } from 'react-redux';
import { Link, push } from 'redux-little-router';
import { Header, Menu } from 'semantic-ui-react';

function TopHeader({ pathname, navigate }) {
  return (
    <React.Fragment>
      <Link href="/">
        <Header as="h1">Example</Header>
      </Link>
      <Menu>
        <Menu.Item name="books" active={pathname === '/books'} onClick={() => navigate('/books')}>
          Books
        </Menu.Item>
        <Menu.Item
          name="aboutUs"
          active={pathname === '/aboutUs'}
          onClick={() => navigate('/aboutUs')}
        >
          About Us
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  pathname: state.router.pathname,
});

const mapDispatchToProps = dispatch => ({
  navigate: (pathname, query = {}) => dispatch(push({ pathname, query })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopHeader);
