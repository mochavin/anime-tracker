import FinishedCard from "@/components/finished-card";
import { FormCard } from "@/components/form-card";
import { SonnerDemo } from "@/components/sonner-demo";
import UnfinishedCard from "@/components/unfinished-card";

export default function Home() {
  return (
    <main className="flex justify-around max-md:flex-col gap-4">
      {/* <h1></h1> */}
      <FormCard />
      {/* <SonnerDemo /> */}
      <UnfinishedCard />
      <FinishedCard />
    </main>
  );
}
