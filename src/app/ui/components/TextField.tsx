type TextFieldProps = {
  type?: 'text' | 'textarea';
  name: string;
  placeholder: string;
};

export const TextField = ({
  type = 'text',
  name,
  ...props
}: TextFieldProps): React.JSX.Element => {
  return (
    <div>
      <label htmlFor={name}></label>
      {type === 'text' && <input {...props} />}
      {type === 'textarea' && <textarea {...props} />}
    </div>
  );
};
