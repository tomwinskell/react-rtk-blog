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
      <label>
        {props.placeholder}
        {type === 'text' && (
          <input className="w-full p-2 border rounded" {...props} />
        )}
        {type === 'textarea' && (
          <textarea className="w-full p-2 border rounded h-32" {...props} />
        )}
      </label>
    </div>
  );
};
