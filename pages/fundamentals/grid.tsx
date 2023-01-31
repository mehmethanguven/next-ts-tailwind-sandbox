import Card from '@/components/Card'

const Grid = () => {
  return (
    <div>
      <Card
        title="grid"
        classNameTitle="text-2xl text-slate-700 dark:text-white"
        isBack={true}
      />
      <Card title="grid cols and rows">
        <div className="w-100 grid grid-cols-3 grid-rows-4 gap-4 bg-gray-100">
          <div className="border border-blue-600 bg-blue-100 p-10">01</div>
          <div className="border border-blue-600 bg-blue-100 p-10">02</div>
          <div className="border border-blue-600 bg-blue-100 p-10">03</div>
          <div className="border border-blue-600 bg-blue-100 p-10">04</div>
          <div className="border border-blue-600 bg-blue-100 p-10">05</div>
          <div className="border border-blue-600 bg-blue-100 p-10">06</div>
          <div className="border border-blue-600 bg-blue-100 p-10">07</div>
          <div className="border border-blue-600 bg-blue-100 p-10">08</div>
          <div className="border border-blue-600 bg-blue-100 p-10">09</div>
        </div>
      </Card>
      <Card title="col and row span">
        <div className="w-100 grid grid-cols-3 gap-4 bg-gray-100">
          <div className="col-span-2 row-span-5 border border-blue-600 bg-blue-100 p-10">
            01
          </div>
          <div className="border border-blue-600 bg-blue-100 p-10">02</div>
          <div className="border border-blue-600 bg-blue-100 p-10">03</div>
          <div className="border border-blue-600 bg-blue-100 p-10">04</div>
          <div className="border border-blue-600 bg-blue-100 p-10">05</div>
          <div className="border border-blue-600 bg-blue-100 p-10">06</div>
          <div className="col-span-3 border border-blue-600 bg-blue-100 p-10">
            07
          </div>
          <div className="border border-blue-600 bg-blue-100 p-10">08</div>
          <div className="col-span-2 border border-blue-600 bg-blue-100 p-10 ">
            09
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Grid

// <!--
//   Grid Template Columns
//   grid-cols-1	    grid-template-columns: repeat(1, minmax(0, 1fr));
//   grid-cols-2	    grid-template-columns: repeat(2, minmax(0, 1fr));
//   grid-cols-3	    grid-template-columns: repeat(3, minmax(0, 1fr));
//   grid-cols-4	    grid-template-columns: repeat(4, minmax(0, 1fr));
//   grid-cols-5	    grid-template-columns: repeat(5, minmax(0, 1fr));
//   grid-cols-6	    grid-template-columns: repeat(6, minmax(0, 1fr));
//   grid-cols-7	    grid-template-columns: repeat(7, minmax(0, 1fr));
//   grid-cols-8	    grid-template-columns: repeat(8, minmax(0, 1fr));
//   grid-cols-9	    grid-template-columns: repeat(9, minmax(0, 1fr));
//   grid-cols-10	  grid-template-columns: repeat(10, minmax(0, 1fr));
//   grid-cols-11	  grid-template-columns: repeat(11, minmax(0, 1fr));
//   grid-cols-12	  grid-template-columns: repeat(12, minmax(0, 1fr));
//   grid-cols-none	grid-template-columns: none;
//  -->

// <!-- Grid Template Rows
//   grid-rows-1	    grid-template-rows: repeat(1, minmax(0, 1fr));
//   grid-rows-2	    grid-template-rows: repeat(2, minmax(0, 1fr));
//   grid-rows-3	    grid-template-rows: repeat(3, minmax(0, 1fr));
//   grid-rows-4	    grid-template-rows: repeat(4, minmax(0, 1fr));
//   grid-rows-5	    grid-template-rows: repeat(5, minmax(0, 1fr));
//   grid-rows-6	    grid-template-rows: repeat(6, minmax(0, 1fr));
//   grid-rows-none	grid-template-rows: none;
//   -->
