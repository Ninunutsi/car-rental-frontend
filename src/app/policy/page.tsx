import Loading from "@/modules/common/Loading";
import React, { lazy, Suspense } from "react";
const PrivacyPolicy = lazy(() => import("@/views/policy"));

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <PrivacyPolicy />
    </Suspense>
  );
};

export default page;
