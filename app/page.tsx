import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";

const RootPage = async () => {
  const supabase = createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    redirect("/dashboard");
  } else {
    redirect("/auth");
  }
};

export default RootPage;
