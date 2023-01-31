import Card from '@/components/Card'
import Image from 'next/image'
import React from 'react'

const LayoutPosition = () => {
  return (
    <div className="mb-10">
      <Card
        title="positioning"
        isBack={true}
        classNameTitle="text-2xl text-slate-700 dark:text-white"
      >
        <div className="relative h-12 w-full bg-red-200">
          <p>Parent element</p>
          <div className="absolute bottom-0 right-0 bg-red-500 p-1">
            <p>Absolute child</p>
          </div>
        </div>
        <div className="relative mt-2 h-12 w-full bg-red-200">
          <div className="absolute top-0 left-0 bg-red-500 p-1">
            <p>Top left</p>
          </div>
        </div>
        <div className="relative mt-2 h-12 w-full bg-red-200">
          <div className="absolute top-0 right-0 bg-red-500 p-1">
            <p>Top right</p>
          </div>
        </div>
        <div className="relative mt-2 h-12 w-full bg-red-200">
          <div className="absolute bottom-0 left-0 bg-red-500 p-1">
            <p>Bottom left</p>
          </div>
        </div>
        <div className="relative mt-2 h-12 w-full bg-red-200">
          <div className="absolute bottom-0 right-0 bg-red-500 p-1">
            <p>Bottom right</p>
          </div>
        </div>
      </Card>
      <Card title="span to edge">
        <div className="relative mt-2 h-32 w-full bg-red-200">
          <div className="absolute inset-x-0 top-0 h-16 bg-red-500">
            <p>Span top edge</p>
          </div>
        </div>

        <div className="relative mt-2 h-32 w-full bg-red-200">
          <div className="absolute inset-y-0 left-0 w-16 bg-red-500">
            <p>Span left edge</p>
          </div>
        </div>

        <div className="relative mt-2 h-32 w-full bg-red-200">
          <div className="absolute inset-y-0 right-0 w-16 bg-red-500">
            <p>Span right edge</p>
          </div>
        </div>

        <div className="relative mt-2 h-32 w-full bg-red-200">
          <div className="absolute inset-x-0 bottom-0 h-16 bg-red-500">
            <p>Span bottom edge</p>
          </div>
        </div>
      </Card>
      <Card title="display classes">
        <div className="w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          <span className="inline text-slate-700">
            This is display inline and will wrap normally
          </span>
          sapiente ut rerum esse ullam provident, fugit
          <span className="inline-block text-red-400">
            This is display inline-block and will not extend beyond it&apos;s
            parent
          </span>
          eos quam
          <span className="block text-fuchsia-500">
            This is display block and will move to it&apos;s own line
          </span>
          reprehenderit est hic aut unde sequi, officia, ipsa amet doloribus
          ratione
          <span className="hidden">
            This is display none and will not display at all
          </span>
          ad.
        </div>
      </Card>

      <Card title="z-index">
        <div className="relative h-36">
          <div className="absolute left-0 z-40 h-24 w-24 bg-blue-200">1</div>
          <div className="absolute left-16 h-24 w-24 bg-blue-300">2</div>
          <div className="absolute left-40 z-10 h-24 w-24 bg-blue-400 md:left-40">
            3
          </div>
          <div className="absolute left-60 z-20 h-24 w-24 bg-blue-500 md:left-60">
            4
          </div>
          <div className="absolute left-64 h-24 w-24 bg-blue-600 md:left-80">
            5
          </div>
        </div>
      </Card>

      <Card title="floats">
        <div>
          <Image
            alt=""
            src="/images/img1.jpg"
            height={0}
            width={0}
            className="float-right mx-2 h-48 w-48"
            sizes="100vh"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam
            aut qui vero temporibus voluptatibus, quos tempora, eaque labore
            neque quaerat maxime sit aliquid harum odio sapiente amet, repellat
            nesciunt!
          </p>
        </div>
      </Card>
    </div>
  )
}

export default LayoutPosition

// <!-- Position Classes
//       static	    position: static;
//       fixed	      position: fixed;
//       absolute	  position: absolute;
//       relative	  position: relative;
//       sticky	    position: sticky;
//     -->

// <!-- Display Classes
//       block	            display: block;
//       inline-block	    display: inline-block;
//       inline	          display: inline;
//       flex	            display: flex;
//       inline-flex	      display: inline-flex;
//       table	            display: table;
//       grid	            display: grid;
//       inline-grid	      display: inline-grid;
//       contents	        display: contents;
//       list-item	        display: list-item;
//       hidden	          display: none;
//     -->

// <!-- Z-Index
//       z-0	    z-index: 0;
//       z-10	  z-index: 10;
//       z-20	  z-index: 20;
//       z-30	  z-index: 30;
//       z-40	  z-index: 40;
//       z-50	  z-index: 50;
//       z-auto	z-index: auto;
//     -->

// <!-- Float
//       float-right	  float: right;
//       float-left	  float: left;
//       float-none	  float: none;
//     -->
