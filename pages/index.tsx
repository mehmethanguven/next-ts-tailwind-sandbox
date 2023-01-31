import Card from '@/components/Card'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

export interface IListItem {
  title: string
  href: string
  className?: string
}
const lists: IListItem[] = [
  {
    title: 'utility first example',
    href: 'fundamentals/alert',
  },
  {
    title: 'colors',
    href: 'fundamentals/colors',
  },
  {
    title: 'container & spacing',
    href: 'fundamentals/container-spacing',
  },
  {
    title: 'typography',
    href: 'fundamentals/typography',
  },
  {
    title: 'sizing',
    href: 'fundamentals/sizing',
  },
  {
    title: 'layout & position',
    href: 'fundamentals/layout-position',
  },
  {
    title: 'backgrounds & shadows',
    href: 'fundamentals/backgrounds-shadows',
  },
  {
    title: 'borders & border radius',
    href: 'fundamentals/borders',
  },
  {
    title: 'filters',
    href: 'fundamentals/filters',
  },
  {
    title: 'interactivity',
    href: 'fundamentals/interactivity',
  },
  {
    title: 'breakpoints',
    href: 'fundamentals/breakpoints',
  },
  {
    title: 'column layouts',
    href: 'fundamentals/columns',
  },
  {
    title: 'flexbox',
    href: 'fundamentals/flexbox',
  },
  {
    title: 'grid',
    href: 'fundamentals/grid',
  },
  {
    title: 'tranform & transitions',
    href: 'fundamentals/transform-transitions',
  },
  {
    title: 'animation',
    href: 'fundamentals/animation',
  },
  {
    title: 'customization & config',
    href: 'fundamentals/customization-config',
  },
  {
    title: 'dark & mode',
    href: 'fundamentals/dark-mode',
  },
]

const Page = () => {
  return (
    <div className="bg-gray-50 dark:bg-slate-900">
      <div className="container h-full p-6 mx-auto dark:bg-slate-900">
        <Card
          title="Tailwindcss Sandbox"
          classNameTitle="text-slate-700 text-2xl text-center mt-4 dark:text-white dark:bg-slate-900"
        >
          <div className="grid grid-cols-1 gap-5 mt-4 dark:bg-slate-900 md:grid-cols-3">
            {(lists || []).map(
              (
                {
                  title,
                  href,
                  className = 'text-slate-700 hover:text-slate-500 dark:text-white',
                },
                id
              ) => (
                <Card key={id} className="dark:bg-slate-900">
                  <Link
                    className={
                      (clsx('text-slate-700 hover:text-slate-500'), className)
                    }
                    href={href}
                  >
                    <h2 className="p-2 font-semibold capitalize">{title}</h2>
                  </Link>
                </Card>
              )
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Page
