"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function Combobox({ value, setValue }: { value: string, setValue: React.Dispatch<React.SetStateAction<string>> }) {
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [animeList, setAnimeList] = React.useState<any>([])

  React.useEffect(() => {
    if (!searchQuery) return
    const timer = setTimeout(() => {
      async function getAnimeList() {
        const response = await fetch(`https://api.jikan.moe/v4/anime?limit=5&&order_by=start_date&&q=` + searchQuery + `&&sort=desc`)
        const data = await response.json()
        setAnimeList(data?.data)
      }
      // force re-render
      setAnimeList([])
      getAnimeList()
      console.log('fetching anime list')
    }, 1000)
    return () => clearTimeout(timer)
  }, [searchQuery, setAnimeList])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between overflow-hidden whitespace-nowrap overflow-ellipsis"
        >
          {value
            ? animeList.find((anime: any) => anime.title.toLowerCase() === value)?.title
            : "Select anime..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search anime..." className="h-9" onValueChange={(e) => setSearchQuery(e.toLowerCase())} />
          <CommandEmpty>No anime found.</CommandEmpty>
          <CommandGroup>
            {animeList.map((anime: any, index: number) => (
              <CommandItem
                key={index}
                value={anime.title}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {anime.title}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === anime.title ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
