import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchProducts } from '../../services/shelf/actions';

import Spinner from '../Spinner';
import ShelfHeader from './ShelfHeader';
import ProductList from './ProductList';

import './style.scss';

class Shelf extends Component {
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    filters: PropTypes.array,
    sort: PropTypes.string
  };

  state = {
    isLoading: false
  };

  componentDidMount() {
    this.handleFetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    const { filters: nextFilters, sort: nextSort } = nextProps;

    if (nextFilters !== this.props.filters) {
      this.handleFetchProducts(nextFilters, undefined);
    }

    if (nextSort !== this.props.sort) {
      this.handleFetchProducts(undefined, nextSort);
    }
  }

  handleFetchProducts = (
    filters = this.props.filters,
    sort = this.props.sort
  ) => {
    this.setState({ isLoading: true });
    this.props.fetchProducts(filters, sort, () => {
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { products } = this.props;
    const { isLoading } = this.state;

    return (
      <React.Fragment>
        {isLoading && <Spinner />}
        <div className="shelf-container">
          <ShelfHeader productsLength={products.length} />
          <ProductList products={products} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.shelf.products,
  filters: state.filters.items,
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Shelf);
//----------------------
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase'
// import { compose } from 'redux'

// import { fetchProducts } from '../../services/shelf/actions';

// import Spinner from '../Spinner';
// import ShelfHeader from './ShelfHeader';
// import ProductList from './ProductList';

// import './style.scss';

// class Shelf extends Component {
//   static propTypes = {
//     fetchProducts: PropTypes.func.isRequired,
//     products: PropTypes.array.isRequired,
//     filters: PropTypes.array,
//     sort: PropTypes.string
//   };

//   state = {
//     isLoading: false,
//     search: ''
//   };

//   componentDidMount() {
//     this.handleFetchProducts();
//   }

//   componentWillReceiveProps(nextProps) {
//     const { filters: nextFilters, sort: nextSort } = nextProps;
//     const { filters } = this.props;
//     if (nextFilters.length !== filters.length) {
//       this.handleFetchProducts(nextFilters, undefined);
//     }

//     if (nextSort !== this.props.sort) {
//       this.handleFetchProducts(undefined, nextSort);
//     }
//   }

//   updateSearch (event) {
//     this.setState({ search: event.target.value });
//     this.setState({ isLoading: true });
//     this.props.fetchProducts(undefined, event.target.value, undefined, () => {
//       this.setState({ isLoading: false });
//     });
//   };

//   handleFetchProducts = (
//     filters = this.props.filters,
//     sort = this.props.sort
//   ) => {
//     this.setState({ isLoading: true });
//     this.props.fetchProducts(filters, undefined, sort, () => {
//       this.setState({ isLoading: false });
//     });
//   };

//   render() {
//     const { products } = this.props;
//     const { isLoading } = this.state;

//     return (
//       <React.Fragment>
//         {isLoading && <Spinner />}
//         <div className="shelf-container">
//           <input type="text" placeholder="Search Abayas" defaultValue={this.state.search} onChange={this.updateSearch.bind(this)}/>
//           <ShelfHeader productsLength={products.length} />
//           <ProductList products={products} />
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     fetchProducts: () => { dispatch(fetchProducts())}
// //   }
// //  }
// const mapStateToProps = (state )=> {
//   //const product5= state.firestore.ordered.products
//    console.log(state);
//   return{
//   products: state.shelf.products,
//   filters: state.filters.items,
//   sort: state.sort.type
// }}

// export default  
// // compose(
//   connect(mapStateToProps, { fetchProducts })

//     // , mapDispatchToProps)
//   // ,
//   // firestoreConnect()
// //  )
//  (Shelf);
