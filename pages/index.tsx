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
      <div className="container mx-auto h-full p-6 dark:bg-slate-900">
        <Card
          title="Tailwind CSS Sandbox"
          classNameTitle="text-blue-500 text-3xl text-center mt-4 dark:text-white dark:bg-slate-900"
        >
          <div className="mt-4 grid grid-cols-1 gap-5 dark:bg-slate-900 md:grid-cols-3">
            {(lists || []).map(
              (
                {
                  title,
                  href,
                  className = 'text-blue-500 hover:text-blue-300 dark:text-white',
                },
                id
              ) => (
                <Card key={id} className="dark:bg-slate-900">
                  <Link
                    className={
                      (clsx('text-blue-500 hover:text-blue-300'), className)
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
