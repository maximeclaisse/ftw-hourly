import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import classNames from 'classnames';
import {
  intlShape,
  injectIntl,
  FormattedMessage,
} from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { required } from '../../util/validators';
import { Form, Button, FieldSelect } from '../../components';

// Create this file using EditListingFeaturesForm.module.css
// as a template.
import css from './EditListingInstrumentsForm.module.css';

export const EditListingInstrumentsFormComponent = props => (
  <FinalForm
    {...props}
    render={fieldRenderProps => {
      const {
        className,
        disabled,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateError,
        updateInProgress,
        instrumentsOptions,
      } = fieldRenderProps;

      const instrumentsPlaceholder = intl.formatMessage({
        id: 'EditListingInstrumentsForm.instrumentsPlaceholder',
      });

      const errorMessage = updateError ? (
        <p className={css.error}>
          <FormattedMessage id="EditListingInstrumentsForm.updateFailed" />
        </p>
      ) : null;

      const instrumentsRequired = required(
        intl.formatMessage({
          id: 'EditListingInstrumentsForm.instrumentsRequired',
        })
      );

      const classes = classNames(css.root, className);
      const submitReady = updated && pristine;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          {errorMessage}

          <FieldSelect
            className={css.instruments}
            name="instruments"
            id="instruments"
            validate={instrumentsRequired}
          >
            <option value="">{instrumentsPlaceholder}</option>
            {instrumentsOptions.map(c => (
              <option key={c.key} value={c.key}>
                {c.label}
              </option>
            ))}
          </FieldSelect>

          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>
        </Form>
      );
    }}
  />
);

EditListingInstrumentsFormComponent.defaultProps = {
  selectedPlace: null,
  updateError: null,
};

EditListingInstrumentsFormComponent.propTypes = {
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  updated: bool.isRequired,
  updateError: propTypes.error,
  updateInProgress: bool.isRequired,
  instrumentsOptions: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ).isRequired,
};

export default compose(injectIntl)(EditListingInstrumentsFormComponent);