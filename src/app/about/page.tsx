import Loading from "@/modules/common/Loading";
import React, { lazy, Suspense } from "react";
const About = lazy(() => import("@/views/about"));

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <About />
    </Suspense>
  );
};

export default page;
