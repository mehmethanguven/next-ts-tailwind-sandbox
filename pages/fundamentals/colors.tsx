import Card from '@/components/Card'
import Checkbox from '@/components/Checkbox'
import React, { useState } from 'react'

const Colors = () => {
  const [checked, setChecked] = useState(false)
  return (
    <div className="m-4 p-4">
      <Card
        title="colors"
        isBack={true}
        classNameTitle="text-2xl text-slate-700 dark:text-white"
      />
      {/* <!-- Default colors --> */}
      {/* <!-- white, black, red, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, zinc, neutral, stone, amber,  --> */}
      {/* <!-- Text Colors --> */}
      <Card title="text-color">
        <p className="text-black">Tailwind is awesome</p>
        <p className="text-red-50">Tailwind is awesome</p>
        <p className="text-red-100">Tailwind is awesome</p>
        <p className="text-red-200">Tailwind is awesome</p>
        <p className="text-red-300">Tailwind is awesome</p>
        <p className="text-red-400">Tailwind is awesome</p>
        <p className="text-red-500">Tailwind is awesome</p>
        <p className="text-red-600">Tailwind is awesome</p>
        <p className="text-red-700">Tailwind is awesome</p>
        <p className="text-red-800">Tailwind is awesome</p>
        <p className="text-red-900">Tailwind is awesome</p>
        {/* <!-- Background Colors --> */}
        <div className="bg-slate-600">
          <p className="text-white">Tailwind is awesome</p>
        </div>
        <div className="bg-zinc-400">
          <p className="text-white">Tailwind is awesome</p>
        </div>
        <div className=" bg-emeral-800">
          <p className="text-white">Tailwind is awesome</p>
        </div>
        {/* <!-- Text Underline --> */}
        <p className="text-red-700 underline decoration-red-700">
          Tailwind is awesome
        </p>
        <p className="text-blue-700 underline decoration-blue-700">
          Tailwind is awesome
        </p>
      </Card>

      {/* <!-- Border Colors --> */}
      <Card className="flex flex-col gap-2" title="boder colors">
        <input className="border-2 border-rose-500" />
        <input className="border-2 border-blue-300" />
        <input className="border-2 border-purple-900" />
        <input className="border-2 border-yellow-500" />
      </Card>
      {/* <!-- Divide Colors --> */}
      <Card className="gap-2 divide-y divide-blue-200" title="divide colors">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
      </Card>
      {/* <!-- Outline Colors --> */}
      <Card className="flex flex-wrap gap-3" title="outline colors">
        <button className="rounded-lg p-2 outline outline-blue-500">
          Subscribe
        </button>
        <button className="rounded-lg p-2 outline outline-purple-300">
          Subscribe
        </button>
        <button className="rounded-lg p-2 outline outline-gray-500">
          Subscribe
        </button>
        {/* <!-- Box Shadow Colors (Opacity defaults to 100, but you cans set it)--> */}
        <button className="rounded-lg bg-cyan-500 p-2 shadow-lg shadow-cyan-500">
          Subscribe
        </button>
        <button className="rounded-lg bg-blue-500 p-2 shadow-lg shadow-blue-500/50">
          Subscribe
        </button>
        <button className="rounded-lg bg-indigo-500 p-2 shadow-lg shadow-indigo-500/50">
          Subscribe
        </button>
      </Card>
      {/* <!-- Accent Colors --> */}
      <Card title="Accent Colors">
        <div className="flex gap-3">
          <input
            type="checkbox"
            className="accent-purple-500"
            onChange={(e) => setChecked(e.target.checked)}
            checked={checked}
          />
          <label htmlFor="">Option 1</label>
          <input
            type="checkbox"
            className="accent-pink-500"
            onChange={(e) => setChecked(e.target.checked)}
            checked={checked}
          />
          <label htmlFor="">Option 2</label>
          <input
            type="checkbox"
            onChange={(e) => setChecked(e.target.checked)}
            className="accent-red-300"
            checked={checked}
          />
          <label>Option 3</label>
        </div>
      </Card>
      <Card className="flex flex-col gap-3" title="custom checkboxes">
        <div className="flex flex-wrap">
          <Checkbox labelTitle="Option 1" className="text-red-500" />
          <Checkbox labelTitle="Option 2" className="text-slate-700" />
          <Checkbox labelTitle="Option 3" className="text-purple-500" />
        </div>
      </Card>

      {/* <!-- Arbitrary Colors --> */}
      <Card className="flex flex-col gap-2" title="arbitrary colors">
        <div className="h-10 rounded-lg bg-[#427fab] p-2">Hello</div>
        <div className="h-10 rounded-lg bg-white p-2 text-[#427fab] shadow-lg">
          Hello
        </div>
        <div className="h-10 rounded-lg border border-[#427fab] p-2">Hello</div>
      </Card>
    </div>
  )
}

export default Colors
