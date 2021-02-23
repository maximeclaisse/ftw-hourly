import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { ensureOwnListing } from '../../util/data';
import { findOptionsForSelectFilter } from '../../util/search';
import { ListingLink } from '../../components';
import { EditListingInstrumentsForm } from '../../forms';
import config from '../../config.js';

// Create this file using EditListingDescriptionPanel.module.css
// as a template.
import css from './EditListingInstrumentsPanel.module.css';

const EditListingInstrumentsPanel = props => {
  const {
    className,
    rootClassName,
    listing,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureOwnListing(listing);
  const { publicData } = currentListing.attributes;

  const panelTitle = currentListing.id ? (
    <FormattedMessage
      id="EditListingInstrumentsPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingInstrumentsPanel.createListingTitle" />
  );
  const instrumentsOptions = findOptionsForSelectFilter(
    'amenities',
    config.custom.filters
  );

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <EditListingInstrumentsForm
        className={css.form}
        initialValues={{ instruments: publicData.instruments }}
        onSubmit={values => {
          const { instruments } = values;
          const updateValues = {
            publicData: {
              instruments,
            },
          };
          onSubmit(updateValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        updated={panelUpdated}
        updateError={errors.updateListingError}
        updateInProgress={updateInProgress}
        instrumentsOptions={instrumentsOptions}
      />
    </div>
  );
};

const { func, object, string, bool } = PropTypes;

EditListingInstrumentsPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingInstrumentsPanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingInstrumentsPanel;