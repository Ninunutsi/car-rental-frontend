import Loading from "@/modules/common/Loading";
import React, { lazy, Suspense } from "react";
const Terms = lazy(() => import("@/views/terms"));

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Terms />
    </Suspense>
  );
};

export default page;
