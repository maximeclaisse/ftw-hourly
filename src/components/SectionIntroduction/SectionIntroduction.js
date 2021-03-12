import React from 'react';
import { bool, string } from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { OwnListingLink } from '../../components';

import css from './SectionIntroduction.module.css';

const SectionIntroduction = props => {
  const { rootClassName, className, currentUserListing, currentUserListingFetched } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionIntroduction.titleLineOne" />
      </div>
      <p>
        <FormattedMessage id="SectionIntroduction.part1Text" />
      </p>
    </div>
  );
};

SectionIntroduction.defaultProps = {
  rootClassName: null,
  className: null,
  currentUserListing: null,
  currentUserListingFetched: false,
};

SectionIntroduction.propTypes = {
  rootClassName: string,
  className: string,
  currentUserListing: propTypes.ownListing,
  currentUserListingFetched: bool,
};

export default SectionIntroduction;
