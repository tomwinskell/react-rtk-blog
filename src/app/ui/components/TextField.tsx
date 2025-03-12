type TextFieldProps = {
  type?: 'text' | 'textarea';
  name: string;
  placeholder: string;
};

export const TextField = ({
  type = 'text',
  ...props
}: TextFieldProps): React.JSX.Element => {
  return (
    <div>
      <label>{props.placeholder}
        {type === 'text' && <input {...props} />}
        {type === 'textarea' && <textarea {...props} />}
      </label>
    </div>
  );
};
