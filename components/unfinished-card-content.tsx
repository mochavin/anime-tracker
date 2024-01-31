import { useAnimeStore } from "@/app/store/useAnimeStore"
import useStore from "@/app/store/useStore"
import { Button } from "./ui/button"
import { toast } from "sonner"
import { EditDrawer } from "./edit-drawer"
import { useSearchParams } from "next/navigation"
import { RemoveDialog } from "./remove-dialog"

export default function UnfinishedCardContent() {
  let listAnime = useStore(useAnimeStore, (state: any) => state.animeList)
  const searchParams = useSearchParams()
  if (!listAnime) return (<div>loading...</div>)
  const animeList = listAnime.filter((anime: any) => !anime.isFinished && anime.anime.toLowerCase().includes(searchParams.get('search')?.toLowerCase()))

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
  const toggleStateFinished = useAnimeStore((state: any) => state.toggleStateFinished)

  function handleFinished() {
    toggleStateFinished(anime)
    toast(anime.anime + " finished")
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
        <Button size="sm" onClick={handleFinished}>
          Finished
        </Button>
        <EditDrawer anime={anime} />
        <RemoveDialog anime={anime} />
      </div>
    </div>
  )
}