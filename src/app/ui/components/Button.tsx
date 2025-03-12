import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  handleClick?: (id: string) => void;
  children: React.ReactNode;
  id?: string;
};

export const Button = ({
  type,
  handleClick,
  children,
  id,
}: ButtonProps): React.JSX.Element => {
  const buttonStyle =
    'w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mt-5';
  return (
    <>
      {type === 'submit' ? (
        <button type={type} className={buttonStyle}>
          {children}
        </button>
      ) : (
        <button
          type={type}
          className={buttonStyle}
          onClick={() => handleClick!(id!)}
        >
          {children}
        </button>
      )}
    </>
  );
};
