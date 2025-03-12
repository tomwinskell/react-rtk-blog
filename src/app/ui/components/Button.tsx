import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  handleClick?: () => void;
  children: React.ReactNode;
};

export const Button = ({
  type,
  handleClick,
  children,
}: ButtonProps): React.JSX.Element => {
  return (
    <>
      {type === 'submit' ? (
        <button type={type}>{children}</button>
      ) : (
        <button type={type} onClick={() => handleClick}>
          {children}
        </button>
      )}
    </>
  );
};
