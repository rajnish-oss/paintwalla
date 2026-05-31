import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function googleSearchUrl(query: string) {
  return `https://www.google.com/search?${new URLSearchParams({ q: query }).toString()}`
}
