import { useAnimeStore } from "@/app/store/useAnimeStore"
import useStore from "@/app/store/useStore"
import { useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { Button } from "./ui/button"
import { RemoveDialog } from "./remove-dialog"
import { EditDrawer } from "./edit-drawer"
import { AnimeType } from "@/lib/type"

export default function MyCardContent({
  type,
}: {
  type: string
}) {
  let listAnime = useStore(useAnimeStore, (state: any) => state.animeList)
  const searchParams = useSearchParams()

  if (!listAnime) return (<div>loading...</div>)

  const animeList = listAnime.filter((anime: AnimeType) => {
    let searchTerm = searchParams.get('search')?.toLowerCase();
    const isUnfinishedType = type === "unfinished";
    return (isUnfinishedType && !anime.isFinished || !isUnfinishedType && anime.isFinished) &&
      (!searchTerm || anime.anime.toLowerCase().includes(searchTerm));
  })

  if (animeList.length === 0) return (<div>no anime found</div>)

  return (
    <div className="gap-8 flex flex-col">
      {animeList.map((anime: AnimeType, index: number) => (
        <div key={index}>
          <ContentDetailed anime={anime} />
        </div>
      ))}
    </div>
  )
}

function ContentDetailed({ anime }: { anime: AnimeType }) {
  const toggleStateFinished = useAnimeStore((state: any) => state.toggleStateFinished)

  function handleClick() {
    toast(anime.anime + " " + (!anime.isFinished ? "finished" : "unfinished"))
    toggleStateFinished(anime)
  }

  return (
    <div className="flex gap-2 flex-col">
      <div className="flex gap-2 justify-between">
        <div className="font-semibold text-sm ">{anime.anime}</div>
        <div className="flex flex-col text-xs opacity-50 gap-1 items-end flex-shrink-0">
          <div>season: {anime.season}</div>
          <div>episode: {anime.episode}</div>
        </div>
      </div>
      <div className="flex gap-1">
        <Button size="sm" onClick={handleClick}>
          {anime.isFinished ? "unfinished" : "finished"}
        </Button>
        {!anime.isFinished && (
          <EditDrawer anime={anime} />
        )}
        <RemoveDialog anime={anime} />
      </div>
    </div>
  )
}