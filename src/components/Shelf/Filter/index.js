import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateFilters } from '../../../services/filters/actions';
import Checkbox from '../../Checkbox';
import Selectbox from '../../Selectbox';

import './style.scss';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
const availableBrands = ['brand1', 'brand2', 'brand3'];
const seasons = [
  { value: '', label: 'Select' },
  { value: 'summer', label: 'Summer' },
  { value: 'winter', label: 'Winter' },
  { value: 'all', label: 'All seasons' }
];

class Filter extends Component {
  static propTypes = {
    updateFilters: PropTypes.func.isRequired,
    filters: PropTypes.array
  };

  componentDidMount() {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }

    this.props.updateFilters(Array.from(this.selectedCheckboxes));
  };

  createCheckbox = label => (
    <Checkbox
      classes="filters-available-size"
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createSizeCheckboxes = () => availableSizes.map(this.createCheckbox);
  createBrandCheckboxes = () => availableBrands.map(this.createCheckbox);

  createSeasonSelect () {
    return (
      <div className="sort">
        <Selectbox options={seasons} />
      </div>
    )
  }

  render() {
    return (
      <div className="filters">
        <h4 className="title">Sizes:</h4>
        {this.createSizeCheckboxes()}
        <h4 className="title">Brands:</h4>
        {this.createBrandCheckboxes()}
        <h4 className="title">Season:</h4>
        {this.createSeasonSelect()}
      </div>
    );
  }
}

export default connect(
  null,
  { updateFilters }
)(Filter);
