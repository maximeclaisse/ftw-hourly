import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import nyImage from './images/ny-yogi.jpg';
import laImage from './images/la-yogi.jpg';
import sfImage from './images/sf-yogi.jpg';
import bayonneImage from './images/bayonne.jpg';
import parisImage from './images/paris.jfif';
import hendayeImage from './images/hendaye.jpg';
import stJeanImage from './images/stjean.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
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
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Bayonne',
          bayonneImage,
          '?address=Bayonne%2C%20Pyrénées-Atlantiques%2C%20France&bounds=43.518974%2C-1.418087%2C43.452072%2C-1.504866'
        )}
        {locationLink(
          'Hendaye',
          hendayeImage,
          '?address=Hendaye%2C%20Pyrénées-Atlantiques%2C%20France&bounds=43.38509%2C-1.731871%2C43.342154%2C-1.789155'
        )}
        {locationLink(
          'Saint-Jean-de-Luz',
          stJeanImage,
          '?address=Saint-Jean-de-Luz%2C%20Pyrénées-Atlantiques%2C%20France&bounds=43.42264%2C-1.597611%2C43.365076%2C-1.668996'
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
