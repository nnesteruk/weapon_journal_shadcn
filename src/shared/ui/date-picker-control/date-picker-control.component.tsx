import { Box, FormLabel } from "@mui/material";
import {
  DatePicker,
  type DatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import {
  useController,
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form";

type TextControlProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RegisterOptions<T>;
  labelText?: string;
} & Omit<DatePickerProps, "name" | "value" | "defaultValue" | "onChange">;

export const DatePickerControl = <T extends FieldValues>({
  name,
  control,
  rules,
  labelText,
  ...props
}: TextControlProps<T>) => {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <Box>
      {labelText && <FormLabel htmlFor={name}>{labelText}</FormLabel>}
      <DatePicker {...field} {...props} label={labelText} name={name} />;
      {fieldState.error && (
        <span className="text-sm text-red-600 ">Поле обязательно</span>
      )}
    </Box>
  );
};
