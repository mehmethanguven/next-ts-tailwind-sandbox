import Card from '@/components/Card'
import React from 'react'

const DarkMode = () => {
  return (
    <div>
      <Card title="dark mode" isBack={true} className="text-3xl" />

      <Card>
        <div className="container mx-auto mt-10 rounded-lg px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:ring-white">
          <h3 className="text-base font-bold tracking-tight text-blue-500 dark:text-white">
            Writes Upside-Down
          </h3>
          <p className="mt-2 text-sm ">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
      </Card>
    </div>
  )
}

export default DarkMode
