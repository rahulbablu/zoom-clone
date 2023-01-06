import { EuiComboBox, EuiFormRow } from "@elastic/eui";

function MeetingUsersField({
  label,
  placeholder,
  options,
  selectedOptions,
  isClearable,
  onChange,
  singleSelection = false,
  isInvalid,
  error,
}: {
  label: string;
  placeholder: string;
  options: any;
  isClearable: boolean;
  onChange: any;
  selectedOptions: any;
  singleSelection: any;
  isInvalid: boolean;
  error: Array<string>
}) {
  return (
    <EuiFormRow label={label} isInvalid={isInvalid} error={error}>
      <EuiComboBox
        options={options}
        onChange={onChange}
        selectedOptions={selectedOptions}
        singleSelection={singleSelection}
        placeholder={placeholder}
        isClearable={isClearable}
        isInvalid={isInvalid}
      />
    </EuiFormRow>
  );
}

export default MeetingUsersField;
