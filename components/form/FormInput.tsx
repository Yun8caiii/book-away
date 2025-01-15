import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { defaultConfig } from "next/dist/server/config-shared";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

function FormInput(props: FormInputProps) {
  const { label, name, type, defaultValue, placeholder } = props;
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default FormInput;
