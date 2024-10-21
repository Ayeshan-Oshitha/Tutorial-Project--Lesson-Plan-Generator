import { redirect } from "next/navigation";
import { CreateUserIfNull } from "./action";

const Page = async () => {
  const { success } = await CreateUserIfNull();
  if (!success) {
    return <div>Something went wrong in signing in. Contact support</div>;
  }
  redirect("/");
};

export default Page;
