import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import MaxWidthWrapper from "@/components/common/MaxWidthWrapper";
import prisma from "@/lib/prisma";
import Dashboard from "@/components/Dashboard";

type Props = {};

const page = async (props: Props) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/");
  }

  const userData = await prisma.user.findFirst({
    where: {
      id: user?.id,
    },
    select: {
      lessonPlans: true,
    },
  });

  if (!userData) {
    redirect("/");
  }

  return (
    <MaxWidthWrapper className="py-8 md:py-20">
      <Dashboard lessonPlans={userData.lessonPlans} />
    </MaxWidthWrapper>
  );
};

export default page;
