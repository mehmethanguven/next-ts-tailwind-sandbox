import Card from '@/components/Card'

const Flexbox = () => {
  return (
    <div>
      <Card
        title="flexbox"
        isBack={true}
        classNameTitle="text-2xl text-slate-700 dark:text-white"
      />
      <Card title="flex and alignment">
        <div className="w-100 flex h-72 flex-wrap items-center justify-around bg-gray-100">
          <div className="border border-blue-600 bg-blue-100 p-10 md:w-1/5">
            01
          </div>
          <div className="border border-blue-600 bg-blue-100 p-10 md:w-1/5">
            02
          </div>
          <div className="self-start border border-blue-600 bg-blue-100 p-10 md:w-1/5">
            03
          </div>
          <div className="self-end border border-blue-600 bg-blue-100 p-10 md:w-1/5">
            04
          </div>
        </div>
      </Card>
      <Card title="flex column, gap and order">
        <div className="w-100 flex flex-col items-center justify-around gap-4 bg-gray-200 py-2 md:flex-row">
          <div className="order-4 border border-blue-600 bg-blue-100 p-10 md:w-1/4">
            01
          </div>
          <div className="order-1 border border-blue-600 bg-blue-100 p-10 md:w-1/4">
            02
          </div>
          <div className="border border-blue-600 bg-blue-100 p-10 md:w-1/4">
            03
          </div>
          <div className="border border-blue-600 bg-blue-100 p-10 md:w-1/4">
            04
          </div>
        </div>
      </Card>
      <Card title="grow and shrink">
        <div className="w-100 flex flex-wrap gap-3 bg-gray-300">
          {/* <!-- flex-none: Prevent item from growing or shrinking --> */}
          <div className="flex-none border border-blue-600 bg-blue-100 p-10 md:w-64">
            01
          </div>
          {/* <!-- flex-initial:  Allow item to shrink but not grow, taking into account its initial size  --> */}
          <div className="flex-initial border border-blue-600 bg-blue-100 p-10 md:w-64">
            02
          </div>
          {/* <!-- flex-auto: Allow item to grow and shrink, taking into account its initial size --> */}
          <div className="flex-auto border border-blue-600 bg-blue-100 p-10 md:w-64">
            03
          </div>
          {/* <!-- flex-1: Allow item to grow and shrink as needed, ignoring its initial size --> */}
          <div className="flex-1 border border-blue-600 bg-blue-100 p-10 md:w-64">
            04
          </div>
          <div className="border border-blue-600 bg-blue-100 p-10">05</div>
          <div className="border border-blue-600 bg-blue-100 p-10">06</div>
          <div className="border border-blue-600 bg-blue-100 p-10">07</div>
        </div>
      </Card>
    </div>
  )
}

export default Flexbox

// <!-- Justify Content
//       justify-start	      justify-content: flex-start;
//       justify-end	        justify-content: flex-end;
//       justify-center	    justify-content: center;
//       justify-between	    justify-content: space-between;
//       justify-around	    justify-content: space-around;
//       justify-evenly	    justify-content: space-evenly;
//     -->

// <!--
//       items-start	align-items: flex-start;
//       items-end	align-items: flex-end;
//       items-center	align-items: center;
//       items-baseline	align-items: baseline;
//       items-stretch	align-items: stretch;
//      -->

// <!-- Flex Direction
//       flex-row	        flex-direction: row;
//       flex-row-reverse	flex-direction: row-reverse;
//       flex-col	        flex-direction: column;
//       flex-col-reverse	flex-direction: column-reverse;
//     -->

// <!--
//       flex-wrap	        flex-wrap: wrap;
//       flex-wrap-reverse	flex-wrap: wrap-reverse;
//       flex-nowrap	      flex-wrap: nowrap;
//      -->

// <!-- Flex Properties
//       flex-none	    flex: none;
//       Prevent item from growing or shrinking

//       flex-initial	flex: 0 1 auto;
//       Allow item to shrink but not grow, taking into account its initial size

//       flex-auto	    flex: 1 1 auto;
//       Allow item to grow and shrink, taking into account its initial size

//       flex-1	      flex: 1 1 0%;
//       Allow item to grow and shrink as needed, ignoring its initial size
//     -->
