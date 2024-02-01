import { AnimeType } from '@/lib/type';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAnimeStore = create(
  persist(
    (set, get: any) => ({
      animeList: [],
      addAnime: (anime: AnimeType) => set({ animeList: [...get().animeList, anime] }),
      removeAnime: (anime: AnimeType) =>
        set({
          animeList: get().animeList.filter(
            (a: AnimeType) => a.anime !== anime.anime
          ),
        }),
      toggleStateFinished: (anime: AnimeType) =>
        set({
          animeList: get().animeList.map((a: AnimeType) =>
            a.anime === anime.anime
              ? { ...a, isFinished: !a.isFinished }
              : { ...a, isFinished: a.isFinished }
          ),
        }),
      editProgress: (anime: AnimeType, season: number, episode: number) =>
        set({
          animeList: get().animeList.map((a: AnimeType) =>
            a.anime === anime.anime
              ? { ...a, season: season, episode: episode }
              : { ...a, season: a.season, episode: a.episode }
          ),
        }),
    }),
    {
      name: 'anime-list',
    }
  )
);
