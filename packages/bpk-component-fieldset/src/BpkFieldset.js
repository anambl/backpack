import PropTypes from 'prop-types';
import React, { cloneElement } from 'react';
import BpkLabel from 'bpk-component-label';
import BpkFormValidation from 'bpk-component-form-validation';
import { cssModules } from 'bpk-react-utils';

import STYLES from './bpk-fieldset.scss';

const getClassName = cssModules(STYLES);

const BpkFieldset = (props) => {
  const {
    children,
    label,
    className,
    validationMessage,
    valid,
    required,
    isCheckbox,
    validationProps,
    disabled,
    ...rest
  } = props;

  if (!children) {
    return null;
  }

  const classNames = [getClassName('bpk-fieldset')];
  const validationMessageId = `${children.props.id}_validation_message`;

  // Explicit check for false primitive value as undefined is
  // treated as neither valid nor invalid
  const isInvalid = isCheckbox
    ? valid === false
    : children.props.valid === false;

  const childrenProps = { disabled };

  if (isCheckbox) {
    childrenProps.required = required;
  } else {
    childrenProps['aria-required'] = required;
  }

  if (validationMessage && isInvalid) {
    childrenProps['aria-describedby'] = validationMessageId;
  }

  const clonedChildren = cloneElement(children, childrenProps);

  if (className) { classNames.push(className); }

  return (
    <fieldset className={classNames.join(' ')} {...rest}>
      {!isCheckbox && (
        <BpkLabel
          htmlFor={children.props.id}
          required={required}
          disabled={disabled}
        >{label}</BpkLabel>
      )}
      {clonedChildren}
      {validationMessage && (
        <BpkFormValidation
          id={validationMessageId}
          expanded={isInvalid}
          isCheckbox={isCheckbox}
          {...validationProps}
        >
          {validationMessage}
        </BpkFormValidation>
      )}
    </fieldset>
  );
};

BpkFieldset.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  valid: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  validationMessage: PropTypes.string,
  isCheckbox: PropTypes.bool,
  validationProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

BpkFieldset.defaultProps = {
  disabled: false,
  label: null,
  valid: null,
  required: false,
  className: null,
  validationMessage: null,
  isCheckbox: false,
  validationProps: {},
};

export default BpkFieldset;
