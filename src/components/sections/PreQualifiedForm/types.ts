import { PreQualifiedFormType } from './schema';

export type InputFieldProps = {
  type?: string;
  placeholder: string;
  error?: string;
  register: any;
  name: keyof PreQualifiedFormType;
};

export type OptionType = {
  value: string | number;
  label: string;
};

export type SelectFieldProps = {
  label: string;
  options: OptionType[];
  error?: string;
  register: any;
  name: keyof PreQualifiedFormType;
};
