import { redirect } from "next/navigation";

const RootPage = async () => {
  redirect("/dashboard");
};

export default RootPage;
