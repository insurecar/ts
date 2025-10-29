import { FC, PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{
  image: {
    src: string;
    alt: string;
  };
}>;

export const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
