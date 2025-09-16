import DisplayCars from "@/modules/DisplayCars";
import FAQMain from "@/modules/FAQ";
import MainPage from "@/modules/MainPage";
import SendAQuestion from "@/modules/SendAQuestion";
import { SessionWatcher } from "@/utils/SessionWatcher";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  return (
    <>
      <SessionWatcher />
      <MainPage />
      <DisplayCars searchParams={searchParams} />
      <FAQMain />
      {/* <SendAQuestion /> */}
    </>
  );
}
