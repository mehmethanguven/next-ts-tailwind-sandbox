import Card from '@/components/Card'
import React from 'react'

const Typography = () => {
  return (
    <>
      <Card
        isBack={true}
        classNameTitle="text-2xl text-slate-700 dark:text-white"
        title="Typography"
      ></Card>
      <Card title="font-family">
        <p className="font-sans">font-sans</p>
        <p className="font-serif">font-serif</p>
        <p className="font-mono">font-mono</p>
      </Card>
      <Card title="font size">
        <p className="text-xs">Tailwind</p>
        <p className="text-sm">Tailwind</p>
        <p className="text-base">Tailwind</p>
        <p className="text-lg">Tailwind</p>
        <p className="text-xl">Tailwind</p>
        <p className="text-2xl">Tailwind</p>
        <p className="text-2xl">Tailwind</p>
        <p className="text-4xl">Tailwind</p>
        <p className="text-5xl">Tailwind</p>
        <p className="text-6xl">Tailwind</p>
        <p className="text-7xl">Tailwind</p>
        <p className="text-8xl">Tailwind</p>
        <p className="text-9xl">Tailwind</p>
      </Card>
      <Card title="font weight">
        <p className="font-light">Tailwind is awesome font-light</p>
        <p className="font-normal">Tailwind is awesome font-normal</p>
        <p className="font-medium">Tailwind is awesome font-medium</p>
        <p className="font-semibold">Tailwind is awesome ont-semibold</p>
        <p className="font-bold">Tailwind is awesome font-bold</p>
      </Card>

      <Card title="letter spacing">
        <p className="tracking-tight">tracking-tight</p>
        <p className="tracking-normal">tracking-normal</p>
        <p className="tracking-wide">tracking-wide</p>
      </Card>

      <Card title="text alignment">
        <p className="text-left">text-left</p>
        <p className="text-center">text-center</p>
        <p className="text-right">text-right</p>
      </Card>
      <Card title="text decoration">
        <p className="underline decoration-4">underline decoration-4</p>
        <p className="line-through">line-through</p>
        <p className="overline">overline</p>
        <p className="no-underline">no-underline</p>
      </Card>
      <Card title="decoration style">
        <p className="underline decoration-solid">underline decoration-solid</p>
        <p className="underline decoration-double">
          underline decoration-double
        </p>
        <p className="underline decoration-dotted">
          underline decoration-dotted
        </p>
        <p className="underline decoration-dashed">
          underline decoration-dashed
        </p>
        <p className="underline decoration-wavy">underline decoration-wavy</p>
      </Card>
      <Card title="decoration offset">
        <p className="underline underline-offset-1">
          underline underline-offset-1
        </p>
        <p className="underline underline-offset-2">
          underline underline-offset-2
        </p>
        <p className="underline underline-offset-4">
          underline underline-offset-4
        </p>
        <p className="underline underline-offset-8">
          underline underline-offset-8
        </p>
      </Card>
      <Card title="text transform">
        <p className="normal-case">normal case</p>
        <p className="uppercase">upper case</p>
        <p className="lowercase">lower case</p>
        <p className="capitalize">capitalize</p>
      </Card>
    </>
  )
}

export default Typography
