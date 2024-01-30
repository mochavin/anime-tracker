import { useAnimeStore } from "@/app/store/useAnimeStore"
import useStore from "@/app/store/useStore"
import { Button } from "./ui/button"
import { toast } from "sonner"

export default function FinishedCardContent() {
  const listAnime = useStore(useAnimeStore, (state: any) => state.animeList)
  if (!listAnime) return (<div>loading...</div>)
  console.log(listAnime)

  const animeList = listAnime.filter((anime: any) => anime.isFinished)
  return (
    <div className="gap-8 flex flex-col">
      {animeList.map((anime: any, index: number) => (
        <div key={index}>
          <CardContent anime={anime} />
        </div>
      ))}
    </div>
  )
}

function CardContent({ anime }: any) {
  const removeAnime = useAnimeStore((state: any) => state.removeAnime)
  const toggleStateFinished = useAnimeStore((state: any) => state.toggleStateFinished)

  function handleRemove() {
    removeAnime(anime)
    toast(anime.anime + " removed")
  }

  function handleUnFinished() {
    toggleStateFinished(anime)
    toast(anime.anime + " unfinished")
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
        <Button size="sm" onClick={handleUnFinished}>
          Uninished
        </Button>
        <Button variant="destructive" size="sm" onClick={handleRemove}>
          <img src="./icons/trash.svg" alt="trash" className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}