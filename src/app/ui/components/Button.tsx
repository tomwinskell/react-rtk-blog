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
  return (
    <>
      {type === 'submit' ? (
        <button type={type}>{children}</button>
      ) : (
        <button type={type} onClick={() => handleClick!(id!)}>
          {children}
        </button>
      )}
    </>
  );
};
