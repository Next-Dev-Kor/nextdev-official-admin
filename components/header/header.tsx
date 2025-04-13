import { ModeToggle } from "@/components/header/mode-toggle";

const Header = () => {
  return (
    <div className="flex justify-between px-5 items-center py-2 border-b">
      <div>NextDev</div>
      <ModeToggle />
    </div>
  );
};

export default Header;
