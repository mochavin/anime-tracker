'use client'
import { Suspense } from "react";
import FinishedCard from "@/components/finished-card";
import { FormCard } from "@/components/form-card";
import UnfinishedCard from "@/components/unfinished-card";
import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <main className="flex justify-around max-md:items-center max-md:flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Suspense fallback={<h1>Loading...</h1>}>
          <SearchBar />
        </Suspense>
        <FormCard />
      </div>
      <UnfinishedCard />
      <FinishedCard />
    </main>
  );
}
