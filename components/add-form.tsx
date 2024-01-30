"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Combobox } from "./combo-box"
import { useState } from "react"
import useStore from "@/app/store/useStore"
import { useAnimeStore } from "@/app/store/useAnimeStore"
import { toast } from "sonner"

const formSchema = z.object({
  anime: z.string().min(0, {
    message: "Choose an anime.",
  }),
  season: z.string().min(1, {
    message: "season must be at least 1 characters.",
  }),
  episode: z.string().min(1, {
    message: "episode must be at least 1 characters.",
  }),
  isFinished: z.boolean(),
})

export default function AddForm() {
  const [value, setValue] = useState("");
  const addAnime = useAnimeStore((state: any) => state.addAnime)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      anime: "",
      season: '1',
      episode: '1',
      isFinished: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    values.anime = value
    addAnime(values)
    form.reset()
    toast("anime added", {
      description: "a new anime has been added!",
      invert: true,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="anime"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Combobox value={value} setValue={setValue} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="season"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Season</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="episode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>episode</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
