import arrowLeft from 'assets/icons/icon-arrow-left.svg';
import arrowRigth from 'assets/icons/icon-arrow-rigth.svg';
import Image from 'next/image';
import { IButton } from 'types/interfaces';

import styles from './Button.module.css';

const CLASSNAMES_BUTTONS_COLORS = {
  blue: styles.button__blue,
  white: styles.button__white,
  orange: styles.button__orange,
};
type Props = IButton;

const Button = ({
  msg,
  type = 'button',
  color = 'blue',
  action,
  arrow = false,
}: Props) => {
  const colorClassName = CLASSNAMES_BUTTONS_COLORS[color];

  const handleClick = () => {
    action && action();
  };
  return (
    <button
      type={type}
      className={`${styles.button} ${colorClassName}`}
      onClick={handleClick}
    >
      <span>{msg}</span>
      {arrow && (
        <Image
          src={color === 'blue' ? arrowRigth : arrowLeft}
          alt={color === 'blue' ? 'arrow rigth' : 'arrow left'}
        />
      )}
    </button>
  );
};

export default Button;
