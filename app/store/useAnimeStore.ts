import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAnimeStore = create(
  persist(
    (set, get: any) => ({
      animeList: [],
      addAnime: (anime: any) => set({ animeList: [...get().animeList, anime] }),
      removeAnime: (anime: any) =>
        set({
          animeList: get().animeList.filter(
            (a: any) => a.anime !== anime.anime
          ),
        }),
      toggleStateFinished: (anime: any) =>
        set({
          animeList: get().animeList.map((a: any) =>
            a.anime === anime.anime
              ? { ...a, isFinished: !a.isFinished }
              : { ...a, isFinished: a.isFinished }
          ),
        }),
      editProgress: (anime: any, season: number, episode: number) =>
        set({
          animeList: get().animeList.map((a: any) =>
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
