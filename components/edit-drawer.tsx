import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAnimeStore } from "@/app/store/useAnimeStore"
import { toast } from "sonner"
import { AnimeType } from "@/lib/type"

export function EditDrawer({ anime }: { anime: AnimeType }) {
  const [open, setOpen] = React.useState(false)
  const [season, setSeason] = React.useState(anime.season)
  const [episode, setEpisode] = React.useState(anime.episode)
  const editProgress = useAnimeStore((state: any) => state.editProgress)

  function handleSubmit(e: any) {
    e.preventDefault()
    setOpen(false)
    toast("Saved")
    editProgress(anime, season, episode)
  }


  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm">Edit</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
        </DrawerHeader>
        <EditForm className="px-4" anime={anime} setSeason={setSeason} setEpisode={setEpisode} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button onClick={handleSubmit}>Submit</Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function EditForm(
  { className, anime, setSeason, setEpisode }
    : {
      className?: string
      anime: AnimeType
      setSeason: React.Dispatch<React.SetStateAction<string>>
      setEpisode: React.Dispatch<React.SetStateAction<string>>
    }) {

  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="season">season</Label>
        <Input id="season" defaultValue={anime.season} onChange={(e) => setSeason(e.target.value)} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="episode">episode</Label>
        <Input id="episode" defaultValue={anime.episode} onChange={(e) => setEpisode(e.target.value)} />
      </div>
    </form>
  )
}
