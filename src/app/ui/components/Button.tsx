import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  handleClick: () => void;
};

export const Button = ({ type, handleClick }: ButtonProps) => {
  return <button type={type} onClick={() => handleClick()}></button>;
};
