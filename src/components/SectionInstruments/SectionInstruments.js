import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionInstruments.module.css';

import pianoImage from './images/piano.jpg';
import violinImage from './images/violin.jpg';
import drumsImage from './images/drums.jpg';


class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const InstrumentLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionInstruments.listingsInLocation"
          values={{ instrument: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className, intl } = props;

  const classes = classNames(rootClassName || css.root, className);


  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionInstruments.title" />
      </div>
      <div className={css.locations}>
        {InstrumentLink(
          intl.formatMessage({ id: 'Instruments.piano' }),
          pianoImage,
          '?address=France&bounds=51.148409399929%2C9.66015649291518%2C41.3108229%2C-5.24227249992918&pub_musicInstruments=piano'
        )}
        {InstrumentLink(
          intl.formatMessage({ id: 'Instruments.drums' }),
          drumsImage,
          '?address=France&bounds=51.148409399929%2C9.66015649291518%2C41.3108229%2C-5.24227249992918&pub_musicInstruments=drums'
        )}
        {InstrumentLink(
          intl.formatMessage({ id: 'Instruments.violin' }),
          violinImage,
          '?address=France&bounds=51.148409399929%2C9.66015649291518%2C41.3108229%2C-5.24227249992918&pub_musicInstruments=violin'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
