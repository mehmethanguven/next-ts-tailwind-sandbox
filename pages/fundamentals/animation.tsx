import Card from '@/components/Card'

const Animation = () => {
  return (
    <div>
      <Card
        title="animation"
        className="text-2xl text-slate-700 dark:text-white"
        isBack={true}
      />
      <Card>
        <div className="flex h-96 items-center justify-center bg-slate-600 dark:bg-slate-900">
          <svg
            className="w-48 animate-wiggle text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </Card>
    </div>
  )
}

export default Animation
