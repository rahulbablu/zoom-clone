import { EuiComboBox, EuiFormRow } from "@elastic/eui";
import React from "react";

function MeetingUsersField({
  label,
  placeholder,
  options,
  selectedOptions,
  isClearable,
  onChange,
  singleSelection = false,
}: {
  label: string;
  placeholder: string;
  options: any;
  isClearable: boolean;
  onChange: any;
  selectedOptions: any;
  singleSelection: any;
}) {
  return (
    <EuiFormRow label={label}>
      <EuiComboBox
        options={options}
        onChange={onChange}
        selectedOptions={selectedOptions}
        singleSelection={singleSelection}
        placeholder={placeholder}
        isClearable={isClearable}
      />
    </EuiFormRow>
  );
}

export default MeetingUsersField;
