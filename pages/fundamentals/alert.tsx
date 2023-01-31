import Card from '@/components/Card'
import Image from 'next/image'
import React, { useCallback } from 'react'

const Alert = () => {
  const handleAccept = useCallback(() => {
    console.log('Accepted')
  }, [])

  const handleCancel = useCallback(() => {
    console.log('Cancelled')
  }, [])

  return (
    <>
      <Card title="utility first example" isBack={true}></Card>
      <Card
        className="mx-auto mt-10 flex h-80 max-w-md flex-col items-center justify-center"
        classNameTitle="text-center text-2xl text-slate-700 dark:text-white"
      >
        <div className="flex items-center gap-3">
          <Image
            src="/images/warning.svg"
            alt="alert"
            height={0}
            width={0}
            className="h-12 w-12"
            sizes="100vh"
          />
          <div className="">
            <div className="text-xl font-medium">Are you sure?</div>
            <div className="text-slate-500">You are about to delete a post</div>
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-4">
          <button className="rounded-lg bg-blue-500 p-3" onClick={handleAccept}>
            Yes
          </button>
          <button
            className="rounded-lg bg-red-500 p-3 text-white"
            onClick={handleCancel}
          >
            No
          </button>
        </div>
      </Card>
    </>
  )
}

export default Alert
