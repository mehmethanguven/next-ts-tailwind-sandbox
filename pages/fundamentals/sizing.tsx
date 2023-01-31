import Card from '@/components/Card'
import React from 'react'

const Sizing = () => {
  return (
    <div>
      <Card
        title="widths"
        isBack={true}
        classNameTitle="text-3xl text-blue-500 dark:text-white"
      >
        <div className="my-2 w-0 bg-black px-2 text-white">w-0</div>
        <div className="my-2 w-1 bg-black px-2 text-white">w-1</div>
        <div className="my-2 w-1.5 bg-black px-2 text-white">w-1.5</div>
        <div className="my-2 w-2 bg-black px-2 text-white">w-2</div>
        <div className="my-2 w-3 bg-black px-2 text-white">w-3</div>
        <div className="my-2 w-5 bg-black px-2 text-white">w-5</div>
        <div className="my-2 w-6 bg-black px-2 text-white">w-6</div>
        <div className="my-2 w-7 bg-black px-2 text-white">w-7</div>
        <div className="my-2 w-8 bg-black px-2 text-white">w-8</div>
        <div className="my-2 w-9 bg-black px-2 text-white">w-9</div>
        <div className="my-2 w-10 bg-black px-2 text-white">w-10</div>
        <div className="my-2 w-11 bg-black px-2 text-white">w-11</div>
        <div className="my-2 w-12 bg-black px-2 text-white">w-12</div>
        {/* <!-- By 2 --> */}
        <div className="my-2 w-14 bg-black px-2 text-white">w-14</div>
        <div className="my-2 w-16 bg-black px-2 text-white">w-16</div>
        {/* <!-- By 4 --> */}
        <div className="my-2 w-20 bg-black px-2 text-white">w-20</div>
        <div className="my-2 w-24 bg-black px-2 text-white">w-24</div>
        <div className="my-2 w-28 bg-black px-2 text-white">w-28</div>
        <div className="my-2 w-32 bg-black px-2 text-white">w-32</div>
        <div>...</div>
        <div className="my-2 w-36 bg-black px-2 text-white">w-36</div>
        {/* <!-- By 8 --> */}
        <div className="my-2 w-64 bg-black px-2 text-white">w-64</div>
        {/* <!-- By 16 --> */}
        <div className="my-2 w-80 bg-black px-2 text-white">w-80</div>
        <div className="my-2 w-96 bg-black px-2 text-white">w-96</div>
        <div className="w-112 my-2 bg-black px-2 text-white">w-112</div>
        <div className="my-2 w-[28rem] bg-black px-2 text-white">w-[28rem]</div>
        <div className="my-2 w-[32rem] bg-black px-2 text-white">w-[32rem]</div>
        <div className="my-2 w-[36rem] bg-black px-2 text-white">w-[36rem]</div>
        <div className="w-144 my-2 bg-black px-2 text-white">w-144</div>
        <div className="my-2 w-[48rem] bg-black px-2 text-white">w-[48rem]</div>
        <div className="w-192 my-2 bg-black px-2 text-white">w-192</div>
        <div className="my-2 w-auto bg-black px-2 text-white">Auto</div>
      </Card>
      <Card title="percentage">
        <div className="text-white-700 my-2 w-1/2 bg-sky-700 px-2">w-1/2</div>
        <div className="text-white-700 my-2 w-1/3 bg-sky-700 px-2">w-1/3</div>
        <div className="text-white-700 my-2 w-2/3 bg-sky-700 px-2">w-2/3</div>
        <div className="text-white-700 my-2 w-1/4 bg-sky-700 px-2">w-1/4</div>
        <div className="text-white-700 my-2 w-2/4 bg-sky-700 px-2">w-2/4</div>
        <div className="text-white-700 my-2 w-3/4 bg-sky-700 px-2">w-3/4</div>
        <div className="text-white-700 my-2 w-1/5 bg-sky-700 px-2">w-1/5</div>
        <div className="text-white-700 my-2 w-2/5 bg-sky-700 px-2">w-2/5</div>
        <div className="text-white-700 my-2 w-3/5 bg-sky-700 px-2">w-3/5</div>
        <div className="text-white-700 my-2 w-4/5 bg-sky-700 px-2">w-4/5</div>
        <div className="w-5/5-700 text-white-700 my-2 bg-sky-700 px-2">
          w-5/5
        </div>
        <div className="tex-white w-screen bg-sky-700">w-screen</div>
      </Card>
      <Card title="width viewport / min / max / arbitray / max width">
        <div className="my-2 w-screen bg-fuchsia-500 px-2 text-white">
          w-screen
        </div>
        <div className="my-2 w-full bg-fuchsia-500 px-2 text-white">w-full</div>
        <div className="my-2 w-min bg-fuchsia-500 px-2 text-white">w-min</div>
        <div className="my-2 w-max bg-fuchsia-500 px-2 text-white">w-max</div>
        <div className="my-2 w-[300px] bg-fuchsia-500 px-2 text-white">
          w-[300px]
        </div>
        <div className="my-2 max-w-xs bg-fuchsia-500 px-2 capitalize text-white">
          max-w-xs Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Doloribus facere rerum ad sit et officiis culpa hic recusandae
          impedit, vitae eum esse ipsum molestias dolore. Amet quisquam laborum
          sapiente animi!
        </div>
        <div className="my-2 max-w-sm bg-fuchsia-500 px-2 capitalize text-white">
          max-w-sm Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Doloribus facere rerum ad sit et officiis culpa hic recusandae
          impedit, vitae eum esse ipsum molestias dolore. Amet quisquam laborum
          sapiente animi!
        </div>
        <div className="my-2 max-w-md bg-fuchsia-500 px-2 capitalize text-white">
          max-w-md Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Doloribus facere rerum ad sit et officiis culpa hic recusandae
          impedit, vitae eum esse ipsum molestias dolore. Amet quisquam laborum
          sapiente animi!
        </div>
        <div className="my-2 max-w-lg bg-fuchsia-500 px-2 capitalize text-white">
          max-w-lg Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Doloribus facere rerum ad sit et officiis culpa hic recusandae
          impedit, vitae eum esse ipsum molestias dolore. Amet quisquam laborum
          sapiente animi!
        </div>
        <div className="my-2 max-w-xl bg-fuchsia-500 px-2 capitalize text-white">
          max-w-xl Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Doloribus facere rerum ad sit et officiis culpa hic recusandae
          impedit, vitae eum esse ipsum molestias dolore. Amet quisquam laborum
          sapiente animi!
        </div>
        <div className="my-2 max-w-2xl bg-fuchsia-500 px-2 capitalize text-white">
          max-w-2xl Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Doloribus facere rerum ad sit et officiis culpa hic recusandae
          impedit, vitae eum esse ipsum molestias dolore. Amet quisquam laborum
          sapiente animi!
        </div>
        <div className="my-2 max-w-3xl bg-fuchsia-500 px-2 capitalize text-white">
          max-w-3xl Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Doloribus facere rerum ad sit et officiis culpa hic recusandae
          impedit, vitae eum esse ipsum molestias dolore. Amet quisquam laborum
          sapiente animi!
        </div>
        <div className="my-2 max-w-4xl bg-fuchsia-500 px-2 capitalize text-white">
          max-w-4xl Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Doloribus facere rerum ad sit et officiis culpa hic recusandae
          impedit, vitae eum esse ipsum molestias dolore. Amet quisquam laborum
          sapiente animi!
        </div>
        <div className="my-2 max-w-5xl bg-fuchsia-500 px-2 capitalize text-white">
          max-w-5xl Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Doloribus facere rerum ad sit et officiis culpa hic recusandae
          impedit, vitae eum esse ipsum molestias dolore. Amet quisquam laborum
          sapiente animi!
        </div>
        <div className="my-2 max-w-6xl bg-fuchsia-500 px-2 capitalize text-white">
          max-w-6xl Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Doloribus facere rerum ad sit et officiis culpa hic recusandae
          impedit, vitae eum esse ipsum molestias dolore. Amet quisquam laborum
          sapiente animi!
        </div>
        <div className="my-2 max-w-7xl bg-fuchsia-500 px-2 capitalize text-white">
          max-w-7xl Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Doloribus facere rerum ad sit et officiis culpa hic recusandae
          impedit, vitae eum esse ipsum molestias dolore. Amet quisquam laborum
          sapiente animi!
        </div>
        <div className="max-w-8xl my-2 bg-fuchsia-500 px-2 capitalize text-white">
          max-w-8xl Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur vel voluptate, ullam ea sint nesciunt deserunt rem
          repudiandae voluptates obcaecati provident! Reprehenderit cupiditate
          corrupti et! Quisquam quod ducimus obcaecati iusto!
        </div>
      </Card>
      <Card title="height">
        <div className="flex items-end">
          <div className="h-24 w-20 rounded-t border bg-orange-500 px-2 text-center text-white">
            h-24
          </div>
          <div className="h-32 w-20 rounded-t border bg-orange-500 px-2 text-center text-white">
            h-32
          </div>
          <div className="h-40 w-20 rounded-t border bg-orange-500 px-2 text-center text-white">
            h-40
          </div>
          <div className="h-48 w-20 rounded-t border bg-orange-500 px-2 text-center text-white">
            h-48
          </div>
          <div className="h-64 w-20 rounded-t border bg-orange-500 px-2 text-center text-white">
            h-64
          </div>
          <div className="h-80 w-20 rounded-t border bg-orange-500 px-2 text-center text-white">
            h-80
          </div>
        </div>
      </Card>
      <Card title="height min / max / fullscreen">
        <div className="h-48 bg-red-200">
          <div className="h-24 min-h-full bg-red-600 p-2 text-white">
            h-24 min-h-full
          </div>
        </div>
        <div className="mt-4 h-24 bg-orange-200">
          <div className="h-48 max-h-full bg-orange-500 p-2 text-white">
            h-48 max-h-full
          </div>
        </div>
        <div className="mt-4 h-screen bg-blue-300 p-2 text-gray-700">
          h-screen full screen height
        </div>
      </Card>
    </div>
  )
}

export default Sizing

// <!--
//   Width Sizes
//     w-0	    width: 0px;
//     w-px	  width: 1px;
//     w-0.5	  width: 0.125rem; /* 2px */
//     w-1	    width: 0.25rem; /* 4px */
//     w-1.5	  width: 0.375rem; /* 6px */
//     w-2	    width: 0.5rem; /* 8px */
//     w-2.5	  width: 0.625rem; /* 10px */
//     w-3	    width: 0.75rem; /* 12px */
//     w-3.5	  width: 0.875rem; /* 14px */
//     w-4	    width: 1rem; /* 16px */
//     w-5   	width: 1.25rem; /* 20px */
//     w-6	    width: 1.5rem; /* 24px */
//     w-7	    width: 1.75rem; /* 28px */
//     w-8	    width: 2rem; /* 32px */
//     w-9	    width: 2.25rem; /* 36px */
//     w-10	  width: 2.5rem; /* 40px */
//     w-11	  width: 2.75rem; /* 44px */
//     w-12	  width: 3rem; /* 48px */
//     w-14	  width: 3.5rem; /* 56px */
//     w-16	  width: 4rem; /* 64px */
//     w-20	  width: 5rem; /* 80px */
//     w-24	  width: 6rem; /* 96px */
//     w-28	  width: 7rem; /* 112px */
//     w-32	  width: 8rem; /* 128px */
//     w-36	  width: 9rem; /* 144px */
//     w-40	  width: 10rem; /* 160px */
//     w-44	  width: 11rem; /* 176px */
//     w-48	  width: 12rem; /* 192px */
//     w-52	  width: 13rem; /* 208px */
//     w-56	  width: 14rem; /* 224px */
//     w-60	  width: 15rem; /* 240px */
//     w-64	  width: 16rem; /* 256px */
//     w-72	  width: 18rem; /* 288px */
//     w-80	  width: 20rem; /* 320px */
//     w-96	  width: 24rem; /* 384px */
//     w-auto	width: auto;
//     w-1/2	  width: 50%;
//     w-1/3	  width: 33.333333%;
//     w-2/3	  width: 66.666667%;
//     w-1/4	  width: 25%;
//     w-2/4	  width: 50%;
//     w-3/4	  width: 75%;
//     w-1/5	  width: 20%;
//     w-2/5	  width: 40%;
//     w-3/5	  width: 60%;
//     w-4/5	  width: 80%;
//     w-1/6	  width: 16.666667%;
//     w-2/6	  width: 33.333333%;
//     w-3/6	  width: 50%;
//     w-4/6	  width: 66.666667%;
//     w-5/6	  width: 83.333333%;
//     w-1/12	width: 8.333333%;
//     w-2/12	width: 16.666667%;
//     w-3/12	width: 25%;
//     w-4/12	width: 33.333333%;
//     w-5/12	width: 41.666667%;
//     w-6/12	width: 50%;
//     w-7/12	width: 58.333333%;
//     w-8/12	width: 66.666667%;
//     w-9/12	width: 75%;
//     w-10/12	width: 83.333333%;
//     w-11/12	width: 91.666667%;
//     w-full	width: 100%;
//     w-screen  width: 100vw;
//     w-min	  width: min-content;
//     w-max	  width: max-content;
//     w-fit	  width: fit-content; -->

// <!--
//     Min Width Sizes
//     min-w-0	      min-width: 0px;
//     min-w-full	  min-width: 100%;
//     min-w-min	    min-width: min-content;
//     min-w-max	    min-width: max-content;
//     min-w-fit	    min-width: fit-content;
//     -->

// <!--
//     Max Width Sizes
//     max-w-0	      max-width: 0rem; /* 0px */
//     max-w-none	  max-width: none;
//     max-w-xs	    max-width: 20rem; /* 320px */
//     max-w-sm	    max-width: 24rem; /* 384px */
//     max-w-md	    max-width: 28rem; /* 448px */
//     max-w-lg	    max-width: 32rem; /* 512px */
//     max-w-xl	    max-width: 36rem; /* 576px */
//     max-w-2xl	    max-width: 42rem; /* 672px */
//     max-w-3xl	    max-width: 48rem; /* 768px */
//     max-w-4xl	    max-width: 56rem; /* 896px */
//     max-w-5xl	    max-width: 64rem; /* 1024px */
//     max-w-6xl	    max-width: 72rem; /* 1152px */
//     max-w-7xl	    max-width: 80rem; /* 1280px */
//     max-w-full	  max-width: 100%;
//     max-w-min	    max-width: min-content;
//     max-w-max	    max-width: max-content;
//     max-w-fit	    max-width: fit-content;
//     max-w-prose	  max-width: 65ch;
//     max-w-screen-sm	max-width: 640px;
//     max-w-screen-md	max-width: 768px;
//     max-w-screen-lg	max-width: 1024px;
//     max-w-screen-xl	max-width: 1280px;
//     max-w-screen-2xl	max-width: 1536px;
//   -->

// <!--
//     Height Sizes
//     h-0	        height: 0px;
//     h-px	      height: 1px;
//     h-0.5	      height: 0.125rem; /* 2px */
//     h-1	        height: 0.25rem; /* 4px */
//     h-1.5	      height: 0.375rem; /* 6px */
//     h-2	        height: 0.5rem; /* 8px */
//     h-2.5	      height: 0.625rem; /* 10px */
//     h-3	        height: 0.75rem; /* 12px */
//     h-3.5	      height: 0.875rem; /* 14px */
//     h-4	        height: 1rem; /* 16px */
//     h-5	        height: 1.25rem; /* 20px */
//     h-6	        height: 1.5rem; /* 24px */
//     h-7	        height: 1.75rem; /* 28px */
//     h-8	        height: 2rem; /* 32px */
//     h-9	        height: 2.25rem; /* 36px */
//     h-10	      height: 2.5rem; /* 40px */
//     h-11	      height: 2.75rem; /* 44px */
//     h-12	      height: 3rem; /* 48px */
//     h-14	      height: 3.5rem; /* 56px */
//     h-16	      height: 4rem; /* 64px */
//     h-20	      height: 5rem; /* 80px */
//     h-24	      height: 6rem; /* 96px */
//     h-28	      height: 7rem; /* 112px */
//     h-32	      height: 8rem; /* 128px */
//     h-36	      height: 9rem; /* 144px */
//     h-40	      height: 10rem; /* 160px */
//     h-44	      height: 11rem; /* 176px */
//     h-48	      height: 12rem; /* 192px */
//     h-52	      height: 13rem; /* 208px */
//     h-56	      height: 14rem; /* 224px */
//     h-60	      height: 15rem; /* 240px */
//     h-64	      height: 16rem; /* 256px */
//     h-72	      height: 18rem; /* 288px */
//     h-80	      height: 20rem; /* 320px */
//     h-96	      height: 24rem; /* 384px */
//     h-auto	    height: auto;
//     h-1/2	      height: 50%;
//     h-1/3	      height: 33.333333%;
//     h-2/3	      height: 66.666667%;
//     h-1/4	      height: 25%;
//     h-2/4	      height: 50%;
//     h-3/4	      height: 75%;
//     h-1/5	      height: 20%;
//     h-2/5	      height: 40%;
//     h-3/5	      height: 60%;
//     h-4/5	      height: 80%;
//     h-1/6	      height: 16.666667%;
//     h-2/6	      height: 33.333333%;
//     h-3/6	      height: 50%;
//     h-4/6	      height: 66.666667%;
//     h-5/6	      height: 83.333333%;
//     h-full	    height: 100%;
//     h-screen	  height: 100vh;
//     h-min	      height: min-content;
//     h-max	      height: max-content;
//     h-fit	      height: fit-content;
//    -->

// <!--
//   Min Height Sizes
//     min-h-0	        min-height: 0px;
//     min-h-full	    min-height: 100%;
//     min-h-screen	  min-height: 100vh;
//     min-h-min	      min-height: min-content;
//     min-h-max	      min-height: max-content;
//     min-h-fit	      min-height: fit-content;
//  -->

// <!--
//    Max Height Sizes
//     max-h-0         max-height: 0px;
//     max-h-px	      max-height: 1px;
//     max-h-0.5	      max-height: 0.125rem; /* 2px */
//     max-h-1	        max-height: 0.25rem; /* 4px */
//     max-h-1.5	      max-height: 0.375rem; /* 6px */
//     max-h-2	        max-height: 0.5rem; /* 8px */
//     max-h-2.5	      max-height: 0.625rem; /* 10px */
//     max-h-3	        max-height: 0.75rem; /* 12px */
//     max-h-3.5	      max-height: 0.875rem; /* 14px */
//     max-h-4	        max-height: 1rem; /* 16px */
//     max-h-5	        max-height: 1.25rem; /* 20px */
//     max-h-6	        max-height: 1.5rem; /* 24px */
//     max-h-7	        max-height: 1.75rem; /* 28px */
//     max-h-8	        max-height: 2rem; /* 32px */
//     max-h-9	        max-height: 2.25rem; /* 36px */
//     max-h-10	      max-height: 2.5rem; /* 40px */
//     max-h-11	      max-height: 2.75rem; /* 44px */
//     max-h-12	      max-height: 3rem; /* 48px */
//     max-h-14	      max-height: 3.5rem; /* 56px */
//     max-h-16	      max-height: 4rem; /* 64px */
//     max-h-20	      max-height: 5rem; /* 80px */
//     max-h-24	      max-height: 6rem; /* 96px */
//     max-h-28	      max-height: 7rem; /* 112px */
//     max-h-32	      max-height: 8rem; /* 128px */
//     max-h-36	      max-height: 9rem; /* 144px */
//     max-h-40	      max-height: 10rem; /* 160px */
//     max-h-44	      max-height: 11rem; /* 176px */
//     max-h-48	      max-height: 12rem; /* 192px */
//     max-h-52	      max-height: 13rem; /* 208px */
//     max-h-56	      max-height: 14rem; /* 224px */
//     max-h-60	      max-height: 15rem; /* 240px */
//     max-h-64	      max-height: 16rem; /* 256px */
//     max-h-72	      max-height: 18rem; /* 288px */
//     max-h-80	      max-height: 20rem; /* 320px */
//     max-h-96	      max-height: 24rem; /* 384px */
//     max-h-full	    max-height: 100%;
//     max-h-screen	  max-height: 100vh;
//     max-h-min	      max-height: min-content;
//     max-h-max	      max-height: max-content;
//     max-h-fit	      max-height: fit-content;
//   -->
