import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const RadioButton = ({
  radioButtonOnSelect,
  workOrderCode,
}) => {
  return (
    <Radio
      checked={radioButtonOnSelect === workOrderCode}
      value={workOrderCode}
      name="radio-button-demo"
      aria-label="C"
    />
  );
};

export default (RadioButton);