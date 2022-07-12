import useSWR from "swr"
import { Font } from "../types/schema"

export default function useFetchFonts() {
    return useSWR('fonts', async () => {
        const res = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDUIf6phYGeXaLPM3u0ffq1p6Q7B9nmpr0&sort=alpha')
        const data = (await res.json()) as { items: Font[] }
        return data.items
    })
}