import Card from '@/components/Card'
import Image from 'next/image'

const Columns = () => (
  <div>
    <Card title="column layouts" className="text-2xl" isBack={true} />
    <Card title="column-2">
      <div className="columns-2 gap-4">
        <Image
          src="/images/img1.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full"
        />
        <Image
          src="/images/img2.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full"
        />
      </div>
    </Card>
    <Card title="column-3">
      <div className="columns-3 gap-4">
        <Image
          src="/images/img1.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full"
        />
        <Image
          src="/images/img2.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full"
        />
        <Image
          src="/images/img3.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full"
        />
      </div>
    </Card>
    <Card title="column-4">
      <div className="columns-4 gap-4">
        <Image
          src="/images/img1.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full"
        />
        <Image
          src="/images/img2.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full"
        />
        <Image
          src="/images/img3.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full"
        />
        <Image
          src="/images/img4.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full"
        />
      </div>
    </Card>
    <Card title="break-after-column">
      <div className="columns-2 gap-8">
        <Image
          src="/images/img1.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full"
        />
        <Image
          src="/images/img2.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full"
        />
        <Image
          src="/images/img3.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full break-after-column"
        />
        <Image
          src="/images/img4.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full"
        />
      </div>
    </Card>

    <Card title="break-before-column">
      <div className="columns-3 gap-24">
        <Image
          src="/images/img1.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full"
        />
        <Image
          src="/images/img2.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full break-before-column"
        />
        <Image
          src="/images/img3.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full"
        />
        <Image
          src="/images/img4.jpg"
          alt=""
          height={0}
          width={0}
          sizes="100vh"
          className="w-full"
        />
      </div>
    </Card>
    <Card title="aspect ratios">
      <div className="columns-3xs">
        {/* < />!-- Video Aspect Ratio --> */}
        <Image
          width={0}
          height={0}
          alt=""
          sizes="100vh"
          className="aspect-video w-full"
          src="/images/img8.jpg"
        />
        {/* < />!-- Square Aspect Ratio --> */}
        <Image
          width={0}
          height={0}
          alt=""
          sizes="100vh"
          className="aspect-square w-full"
          src="/images/img9.jpg"
        />
        <Image
          width={0}
          height={0}
          alt=""
          sizes="100vh"
          className="break w-full"
          src="/images/img1.jpg"
        />
        <Image
          width={0}
          height={0}
          alt=""
          sizes="100vh"
          className="w-full"
          src="/images/img2.jpg"
        />
      </div>
    </Card>
  </div>
)

export default Columns

// <!-- Column Classes
// columns-1	      columns: 1;
// columns-2	      columns: 2;
// columns-3	      columns: 3;
// columns-4	      columns: 4;
// columns-5	      columns: 5;
// columns-6	      columns: 6;
// columns-7	      columns: 7;
// columns-8	      columns: 8;
// columns-9	      columns: 9;
// columns-10	    columns: 10;
// columns-11	    columns: 11;
// columns-12	    columns: 12;
// columns-auto	  columns: auto;
// columns-3xs	    columns: 16rem; /* 256px */
// columns-2xs	    columns: 18rem; /* 288px */
// columns-xs	    columns: 20rem; /* 320px */
// columns-sm	    columns: 24rem; /* 384px */
// columns-md	    columns: 28rem; /* 448px */
// columns-lg	    columns: 32rem; /* 512px */
// columns-xl	    columns: 36rem; /* 576px */
// columns-2xl	    columns: 42rem; /* 672px */
// columns-3xl	    columns: 48rem; /* 768px */
// columns-4xl	    columns: 56rem; /* 896px */
// columns-5xl	    columns: 64rem; /* 1024px */
// columns-6xl	    columns: 72rem; /* 1152px */
// columns-7xl	    columns: 80rem; /* 1280px */
// -->

// <!-- Break After
//   break-after-auto	break-after: auto;
//   break-after-avoid	break-after: avoid;
//   break-after-all	break-after: all;
//   break-after-avoid-page	break-after: avoid-page;
//   break-after-page	break-after: page;
//   break-after-left	break-after: left;
//   break-after-right	break-after: right;
//   break-after-column	break-after: column;
// -->

// <!-- Break Before
//   reak-before-auto	break-before: auto;
//   break-before-avoid	break-before: avoid;
//   break-before-all	break-before: all;
//   break-before-avoid-page	break-before: avoid-page;
//   break-before-page	break-before: page;
//   break-before-left	break-before: left;
//   break-before-right	break-before: right;
//   break-before-column	break-before: column;
// -->
