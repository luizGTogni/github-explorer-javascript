interface IconProps {
  src: string;
  alt: string;
  size?: number;
  onClick?: () => void;
}

const Icon = ({ src, alt, size = 16, onClick }: IconProps) => {
  return (
    <img src={src} alt={alt} width={size} height={size} onClick={onClick} />
  );
}

export default Icon;