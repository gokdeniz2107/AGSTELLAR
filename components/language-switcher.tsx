"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center bg-zinc-800 rounded-md overflow-hidden">
      <Button
        variant="ghost"
        size="sm"
        className={`px-3 py-1 text-xs font-medium rounded-none ${
          language === "en"
            ? "bg-cyan-500 text-white hover:bg-cyan-600"
            : "text-zinc-300 hover:text-white hover:bg-zinc-700"
        }`}
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`px-3 py-1 text-xs font-medium rounded-none ${
          language === "tr"
            ? "bg-cyan-500 text-white hover:bg-cyan-600"
            : "text-zinc-300 hover:text-white hover:bg-zinc-700"
        }`}
        onClick={() => setLanguage("tr")}
      >
        TR
      </Button>
    </div>
  )
}
