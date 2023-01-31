import Card from '@/components/Card'
import Image from 'next/image'

const Filters = () => {
  return (
    <div>
      <Card
        title="filters"
        isBack={true}
        classNameTitle="text-3xl text-blue-500 dark:text-white"
      />
      <Card title="blurs" className="gap-4">
        <label>blur-none</label>
        <div className="blur-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in
          repellat esse eius autem aliquid tempora voluptatem reprehenderit
          accusantium suscipit! Eveniet, temporibus officia adipisci eaque illum
          consectetur atque aspernatur a!
        </div>
        <label>blur-sm</label>
        <div className="mt-2 blur-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam in
          repellat esse eius autem aliquid tempora voluptatem reprehenderit
          accusantium suscipit! Eveniet, temporibus officia adipisci eaque illum
          consectetur atque aspernatur a!
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          <Card title="blur-none">
            <div className="blur-none">
              <Image
                alt=""
                src="/images/img1.jpg"
                width={0}
                height={0}
                sizes="100vh"
                className="h-auto w-48"
              />
            </div>
          </Card>

          <Card title="blur-lg">
            <div className="blur-lg">
              <Image
                alt=""
                src="/images/img1.jpg"
                width={0}
                height={0}
                sizes="100vh"
                className="h-auto w-48"
              />
            </div>
          </Card>

          <Card title="blur-2xl">
            <div className="blur-2xl">
              <Image
                alt=""
                src="/images/img1.jpg"
                width={0}
                height={0}
                sizes="100vh"
                className="h-auto w-48"
              />
            </div>
          </Card>
        </div>
      </Card>
      <Card>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
          <Card title="brightness">
            <div className="brightness-50">
              <Image
                className="h-auto w-48"
                width={0}
                height={0}
                alt=""
                src="/images/img1.jpg"
                sizes="100vh"
              ></Image>
            </div>
            <div className="mt-2 brightness-100">
              <Image
                className="h-auto w-48"
                width={0}
                height={0}
                alt=""
                src="/images/img1.jpg"
                sizes="100vh"
              ></Image>
            </div>
            <div className="mt-2 brightness-150">
              <Image
                className="h-auto w-48"
                width={0}
                height={0}
                alt=""
                src="/images/img1.jpg"
                sizes="100vh"
              ></Image>
            </div>
            <div className="mt-2 brightness-200">
              <Image
                className="h-auto w-48"
                width={0}
                height={0}
                alt=""
                src="/images/img1.jpg"
                sizes="100vh"
              ></Image>
            </div>
          </Card>

          <Card title="contrast">
            <div className="contrast-50">
              <Image
                className="h-auto w-48"
                width={0}
                height={0}
                alt=""
                src="/images/img2.jpg"
                sizes="100vh"
              ></Image>
            </div>
            <div className="mt-2 contrast-100">
              <Image
                className="h-auto w-48"
                width={0}
                height={0}
                alt=""
                src="/images/img2.jpg"
                sizes="100vh"
              ></Image>
            </div>
            <div className="mt-2 contrast-150">
              <Image
                className="h-auto w-48"
                width={0}
                height={0}
                alt=""
                src="/images/img2.jpg"
                sizes="100vh"
              ></Image>
            </div>
            <div className="mt-2 contrast-200">
              <Image
                className="h-auto w-48"
                width={0}
                height={0}
                alt=""
                src="/images/img2.jpg"
                sizes="100vh"
              ></Image>
            </div>
          </Card>
          <Card title="saturate">
            <div className="saturate-50">
              <Image
                sizes="100vh"
                width={0}
                height={0}
                className="w-48"
                src="/images/img4.jpg"
                alt=""
              />
            </div>
            <div className="mt-2 saturate-100">
              <Image
                sizes="100vh"
                width={0}
                height={0}
                className="w-48"
                src="/images/img4.jpg"
                alt=""
              />
            </div>
            <div className="mt-2 saturate-150">
              <Image
                sizes="100vh"
                width={0}
                height={0}
                className="w-48"
                src="/images/img4.jpg"
                alt=""
              />
            </div>
            <div className="mt-2 saturate-200">
              <Image
                sizes="100vh"
                width={0}
                height={0}
                className="w-48"
                src="/images/img4.jpg"
                alt=""
              />
            </div>
          </Card>
        </div>
      </Card>
      <Card>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
          <Card title="grayscale">
            <div className="grayscale">
              <Image
                width={0}
                height={0}
                sizes="100vh"
                className="w-48"
                src="/images/img3.jpg"
                alt=""
              />
            </div>
          </Card>
          <Card title="invert">
            <div className="invert">
              <Image
                width={0}
                height={0}
                sizes="100vh"
                className="w-48"
                src="/images/img3.jpg"
                alt=""
              />
            </div>
          </Card>
          <Card title="sephia">
            <div className="sephia">
              <Image
                width={0}
                height={0}
                sizes="100vh"
                className="w-48"
                src="/images/img3.jpg"
                alt=""
              />
            </div>
          </Card>
        </div>
      </Card>

      <Card title="saturate">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
          <div className="saturate-50">
            <Image
              sizes="100vh"
              width={0}
              height={0}
              className="w-48"
              src="/images/img4.jpg"
              alt=""
            />
          </div>
          <div className="saturate-100">
            <Image
              sizes="100vh"
              width={0}
              height={0}
              className="w-48"
              src="/images/img4.jpg"
              alt=""
            />
          </div>
          <div className="saturate-150">
            <Image
              sizes="100vh"
              width={0}
              height={0}
              className="w-48"
              src="/images/img4.jpg"
              alt=""
            />
          </div>
          <div className="saturate-200">
            <Image
              sizes="100vh"
              width={0}
              height={0}
              className="w-48"
              src="/images/img4.jpg"
              alt=""
            />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Filters

// <!-- Blur
//   blur-none	    filter: blur(0);
//   blur-sm	      filter: blur(4px);
//   blur	        filter: blur(8px);
//   blur-md	      filter: blur(12px);
//   blur-lg	      filter: blur(16px);
//   blur-xl	      filter: blur(24px);
//   blur-2xl	    filter: blur(40px);
//   blur-3xl	    filter: blur(64px);
// -->

// <!-- Brightness
//   brightness-0	    filter: brightness(0);
//   brightness-50	    filter: brightness(.5);
//   brightness-75	    filter: brightness(.75);
//   brightness-90	    filter: brightness(.9);
//   brightness-95	    filter: brightness(.95);
//   brightness-100	  filter: brightness(1);
//   brightness-105	  filter: brightness(1.05);
//   brightness-110	  filter: brightness(1.1);
//   brightness-125	  filter: brightness(1.25);
//   brightness-150	  filter: brightness(1.5);
//   brightness-200	  filter: brightness(2);
// -->

// <!-- Contrast
//   contrast-0	  filter: contrast(0);
//   contrast-50	  filter: contrast(.5);
//   contrast-75	  filter: contrast(.75);
//   contrast-100	filter: contrast(1);
//   contrast-125	filter: contrast(1.25);
//   contrast-150	filter: contrast(1.5);
//   contrast-200	filter: contrast(2);
// -->

// <!-- Hue Rotate
//   hue-rotate-0	    filter: hue-rotate(0deg);
//   hue-rotate-15	    filter: hue-rotate(15deg);
//   hue-rotate-30	    filter: hue-rotate(30deg);
//   hue-rotate-60	    filter: hue-rotate(60deg);
//   hue-rotate-90	    filter: hue-rotate(90deg);
//   hue-rotate-180	  filter: hue-rotate(180deg);
// -->
