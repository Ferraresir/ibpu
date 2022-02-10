import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Profile(props) {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [router, status]);

  return <div>profile</div>;
}

export const getServerSideProps = async (ctx) => {
  console.log(ctx);
  return { props: { id: "choli" } };
};
