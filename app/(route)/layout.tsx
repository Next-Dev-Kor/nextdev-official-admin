import { PropsWithChildren } from "react";

<<<<<<< HEAD
const RootLayout = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
=======
const RootLayout = async ({ children }: PropsWithChildren) => {
  return <>{children}</>;
>>>>>>> d04d0301f0cdf74d44ca1bf91af868c8d6f8656d
};

export default RootLayout;
