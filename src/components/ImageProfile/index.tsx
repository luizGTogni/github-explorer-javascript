import { Wrapper } from "./styles";

interface ImageProfileProps {
  src: string;
  alt: string;
}

const ImageProfile = ({ src, alt }: ImageProfileProps) => {
  return (
    <Wrapper src={src} alt={alt} />
  );
};

export default ImageProfile;