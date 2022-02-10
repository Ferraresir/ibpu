import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import prisma from "../prisma";

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

