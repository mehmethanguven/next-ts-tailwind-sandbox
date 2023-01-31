import Card from '@/components/Card'
import useWindowSize from '@/hooks/useWindowSize'

const CustomizationConfig = () => {
  const { width } = useWindowSize()
  return (
    <div>
      {' '}
      <Card
        title="Customization Config"
        isBack={true}
        className="text-2xl text-slate-700 dark:text-white"
      ></Card>
      <Card>
        <div className="bg-blue md: bg-primary flex h-96 items-center justify-center xs:bg-slate-400 sm:bg-green-800 lg:bg-yellow-800 xl:bg-purple-800 2xl:bg-orange-800">
          <div className="rounded-lg p-5">
            <h1 className="md:text-secondary text-xl text-white md:text-2xl xl:text-5xl">
              Screen width: {width}
            </h1>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CustomizationConfig
