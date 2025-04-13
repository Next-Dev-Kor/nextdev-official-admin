// import Header from "@/components/header/header";
import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {/* <Header /> */}
      {children}
    </div>
  );
};

export default RootLayout;
