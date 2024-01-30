'use client'
import FinishedCard from "@/components/finished-card";
import { FormCard } from "@/components/form-card";
import { SonnerDemo } from "@/components/sonner-demo";
import UnfinishedCard from "@/components/unfinished-card";
import useStore from "./store/useStore";
import { useAnimeStore } from "./store/useAnimeStore";

export default function Home() {
  const animeList = useStore(useAnimeStore, (state: any) => state.animeList)
  return (
    <main className="flex justify-around max-md:flex-col gap-4">
      <FormCard />
      <UnfinishedCard />
      <FinishedCard />
    </main>
  );
}
