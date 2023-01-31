import Card from '@/components/Card'
import React from 'react'

const BackgroundsShadows = () => {
  return (
    <div>
      <Card
        title="background classes"
        isBack={true}
        classNameTitle="text-2xl text-slate-700 dark:text-white"
      >
        <div
          className="h-64 w-72 bg-blue-500 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/img1.jpg')" }}
        ></div>
      </Card>
      <Card title="gradients" className="m-2 gap-1">
        <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        <div className="h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      </Card>

      <Card title="shadows" className="m-2">
        <Card title="shadow-none" className="m-2">
          <div className="s mt-2 ml-4 w-96 p-3 shadow-none">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            asperiores explicabo quos. Placeat adipisci, magni veritatis
            ratione, delectus ullam saepe sint quidem porro, alias non numquam
            ea laboriosam veniam impedit?
          </div>
        </Card>
        <Card title="shadow-sm" className="mb-2">
          <div className="mt-2 ml-4 w-96 p-3 shadow-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            asperiores explicabo quos. Placeat adipisci, magni veritatis
            ratione, delectus ullam saepe sint quidem porro, alias non numquam
            ea laboriosam veniam impedit?
          </div>
        </Card>
        <Card title="shadow" className="mb-2">
          <div className="mt-2 ml-4 w-96 p-3 shadow">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            asperiores explicabo quos. Placeat adipisci, magni veritatis
            ratione, delectus ullam saepe sint quidem porro, alias non numquam
            ea laboriosam veniam impedit?
          </div>
        </Card>
        <Card title="shadow-md" className="mb-2">
          <div className="mt-2 ml-4 w-96 p-3 shadow-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            asperiores explicabo quos. Placeat adipisci, magni veritatis
            ratione, delectus ullam saepe sint quidem porro, alias non numquam
            ea laboriosam veniam impedit?
          </div>
        </Card>
        <Card title="shadow-lg" className="mb-2">
          <div className="mt-2 ml-4 w-96 p-3 shadow-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            asperiores explicabo quos. Placeat adipisci, magni veritatis
            ratione, delectus ullam saepe sint quidem porro, alias non numquam
            ea laboriosam veniam impedit?
          </div>
        </Card>
        <Card title="shadow-xl" className="m-2">
          <div className="mt-2 ml-4 w-96 p-3 shadow-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            asperiores explicabo quos. Placeat adipisci, magni veritatis
            ratione, delectus ullam saepe sint quidem porro, alias non numquam
            ea laboriosam veniam impedit?
          </div>
        </Card>
        <Card title="shadow-2xl" className="m-2">
          <div className="s mt-2 ml-4 w-96 p-3 shadow-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            asperiores explicabo quos. Placeat adipisci, magni veritatis
            ratione, delectus ullam saepe sint quidem porro, alias non numquam
            ea laboriosam veniam impedit?
          </div>
        </Card>
        <Card title="shadow-inner" className="m-2">
          <div className="s mt-2 ml-4 w-96 p-3 shadow-inner">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            asperiores explicabo quos. Placeat adipisci, magni veritatis
            ratione, delectus ullam saepe sint quidem porro, alias non numquam
            ea laboriosam veniam impedit?
          </div>
        </Card>
        <Card
          title="shadow colors"
          subtitle="shadow-blue-500/50"
          className="m-2"
        >
          <div className="s mt-2 ml-4 w-96 p-3 shadow-xl shadow-blue-500/50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            asperiores explicabo quos. Placeat adipisci, magni veritatis
            ratione, delectus ullam saepe sint quidem porro, alias non numquam
            ea laboriosam veniam impedit?
          </div>
        </Card>
        <Card
          title="shadow colors"
          subtitle="shadow-blue-500/100"
          className="m-2"
        >
          <div className="s mt-4 ml-4 w-96 p-3 shadow-xl shadow-blue-500/100">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            asperiores explicabo quos. Placeat adipisci, magni veritatis
            ratione, delectus ullam saepe sint quidem porro, alias non numquam
            ea laboriosam veniam impedit?
          </div>
        </Card>
      </Card>

      <Card title="mix blend">
        <div className="flex justify-center -space-x-24">
          <div className="... bg-blue-400 mix-blend-multiply">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            minus deleniti iusto delectus alias natus quam dolor explicabo quas
            eius!
          </div>
          <div className="... bg-pink-400 mix-blend-multiply">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            minus deleniti iusto delectus alias natus quam dolor explicabo quas
            eius!
          </div>
        </div>
      </Card>
    </div>
  )
}

export default BackgroundsShadows

// <!-- Background Size
//   bg-auto	    background-size: auto;
//   bg-cover	  background-size: cover;
//   bg-contain	background-size: contain;
// -->

// <!-- Background Repeat
//   bg-repeat	      background-repeat: repeat;
//   bg-no-repeat	  background-repeat: no-repeat;
//   bg-repeat-x	    background-repeat: repeat-x;
//   bg-repeat-y	    background-repeat: repeat-y;
//   bg-repeat-round	background-repeat: round;
//   bg-repeat-space	background-repeat: space;
// -->

// <!-- Background Position
//   bg-bottom	      background-position: bottom;
//   bg-center	      background-position: center;
//   bg-left	        background-position: left;
//   bg-left-bottom	background-position: left bottom;
//   bg-left-top	    background-position: left top;
//   bg-right	      background-position: right;
//   bg-right-bottom	background-position: right bottom;
//   bg-right-top	  background-position: right top;
//   bg-top	        background-position: top;
// -->

// <!-- Background Attachment
//   bg-fixed	  background-attachment: fixed;
//   bg-local	  background-attachment: local;
//   bg-scroll	  background-attachment: scroll;
// -->

// <!--
//   Shadows
//   shadow-sm	    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
//   shadow	      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
//   shadow-md	    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
//   shadow-lg	    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
//   shadow-xl	    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
//   shadow-2xl	  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
//   shadow-inner	box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
//   shadow-none	  box-shadow: 0 0 #0000;
//  -->
