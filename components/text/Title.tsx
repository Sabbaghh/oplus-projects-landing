import React from 'react';

type Props = {
  text: string;
  size?: 'small' | 'medium' | 'large' | 'x-large';
  withAnimation?: boolean;
  className?: string;
};
function Title(props: Props) {
  const {
    text,
    size = 'medium',
    withAnimation = false,
    className = '',
  } = props;
  const fontSize = (): string => {
    switch (size) {
      case 'small':
        return 'text-sm';
      case 'medium':
        return 'text-md';
      case 'large':
        return 'text-9xl';
      case 'x-large':
        return 'lg:text-[25rem] md:text-[20rem] sm:text-[15rem] text-[10em]';
      default:
        return 'text-6xl';
    }
  };
  const animation = withAnimation ? 'custom-scale' : '';
  return (
    <h1
      className={`${className} font-[family-name:var(--six-caps)] text-black`}
    >
      {text.split('').map((word, index) => (
        <span
          className={`inline-block uppercase ${fontSize()} ${animation} ${className} `}
          key={index}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}

export default Title;
