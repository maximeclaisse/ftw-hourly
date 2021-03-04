import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.module.css';

const SectionInstrumentsMaybe = props => {
  const { options, provided_option, publicData } = props;
  if (!publicData) {
    return null;
  }

  const selectedOptions = publicData && publicData.musicInstruments ? publicData.musicInstruments : [];
  const selectedConfigOptions = options.filter(o => selectedOptions.find(s => s === o.key));

  const instrumentProvided = publicData && publicData.instrumentProvided ? publicData.instrumentProvided : false;
  let instrumentProvidedContent;

  if (instrumentProvided) {
    instrumentProvidedContent = <p>Note : Instrument provided by teacher</p>;
  } else {
    instrumentProvidedContent = <p>Note : Please bring your own instrument</p>;
  }

  return (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.instrumentsTitle" />
      </h2>
      <PropertyGroup
        id="ListingPage.musicInstruments"
        options={selectedConfigOptions}
        selectedOptions={selectedOptions}
        twoColumns={selectedConfigOptions.length > 5}
      />
      <p>{instrumentProvidedContent}</p>
    </div>
  );
};

export default SectionInstrumentsMaybe;
