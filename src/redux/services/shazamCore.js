import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react"

export const shazamCoreApi = createApi({ 
  reducerPath: "shazamCoreApi",
  baseQuery:fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "a9c2a3e220msh2a505d2d813d97ap135bc4jsn819713e5a7fb")

      return headers
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${ songid }` }),
    getSongRelated: builder.query({ query: ({ songid }) =>  `/tracks/related?track_id=${ songid }`})
  })
})

export const {
  useGetTopChartsQuery, 
  useGetSongDetailsQuery, 
  useGetSongRelatedQuery
} = shazamCoreApi