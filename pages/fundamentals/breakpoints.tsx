import Card from '@/components/Card'
import useWindowSize from '@/hooks/useWindowSize'

const Breakpoints = () => {
  const { width } = useWindowSize()

  return (
    <div>
      <Card title="breakpoints" isBack={true} className="text-2xl" />
      <Card title="change colors">
        <div className="flex h-96 resize items-center justify-center gap-5 rounded-lg bg-black p-4 text-white sm:bg-green-800 md:bg-blue-500 lg:bg-yellow-500 xl:bg-purple-800 2xl:bg-red-500">
          <h1 className="text-4xl">Width: {width}</h1>
        </div>
      </Card>
    </div>
  )
}

export default Breakpoints

// <!-- Breakpoint Classes
//     sm	640px	  @media (min-width: 640px) { ... }
//     md	768px	  @media (min-width: 768px) { ... }
//     lg	1024px	@media (min-width: 1024px) { ... }
//     xl	1280px	@media (min-width: 1280px) { ... }
//     2xl	1536px	@media (min-width: 1536px) { ... }
//   -->
