import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ModeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-10 h-10 "
          role="button"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <MoonIcon
          className="w-10 h-10 text-slate-700 "
          role="button"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  return (
    <div
      aria-label="Toggle dark mode"
      className="px-3 py-2 transition rounded-full shadow-lg group bg-white/90 shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur hover:bg-gray-400 dark:ring-white"
    >
      {renderThemeChanger()}
    </div>
  )
}
