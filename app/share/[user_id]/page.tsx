import { getProfileById } from "@/actions/auth/user.action";
import { permanentRedirect } from "next/navigation";

interface SharePageProps {
  params: { user_id: string };
  searchParams: {};
}

const page = async (props: SharePageProps) => {
  const userId = props?.params?.user_id;
  const profile = await getProfileById({ serverComponent: true, userId });

  console.log(">> profile", profile);
  if (!profile) {
    permanentRedirect("/");
  }

  return <div>Share Page</div>;
};

export default page;
