import Loading from "@/modules/common/Loading";
import React, { lazy, Suspense } from "react";
const Contact = lazy(() => import("@/views/contact"));

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Contact />
    </Suspense>
  );
};

export default page;
