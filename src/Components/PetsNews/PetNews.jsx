import React from 'react'

export default function PetNews({news}) {

const {image,news_details,news_heading,posted_date} = news

  return (
    <div>
        
      <div className="max-w-md h-96 rounded-md shadow-md dark:bg-white-900 dark:text-gray-100">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-48 dark:bg-gray-700"
        />
        <div className="flex flex-col justify-between p-4 space-y-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-semibold text-black">{news_heading}</h2>
            <p className="dark:text-gray-400">
            {news_details}
            </p>
            <p className='text-gray-400 mb-2'>{posted_date}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
