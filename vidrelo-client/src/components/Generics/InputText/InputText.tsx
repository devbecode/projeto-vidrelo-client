import { InputHTMLAttributes, useState } from 'react';
import './Style/InputText.scss';
import { useForm } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export default function InputText({ name, label, ...rest }: InputProps) {
  const { register, handleSubmit, setValue, setFocus } = useForm();

  return (
    <>
      <div className="input-part">
        <label htmlFor={name}>{label}</label>
        <input
          required
          id={name}
          {...register}
          {...setValue}
          {...setFocus}
          {...rest}
        />
      </div>
    </>
  );
}
