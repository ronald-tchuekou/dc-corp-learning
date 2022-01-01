import { useRouter } from 'next/router'
import React from 'react'
import { Pause, Play } from '../svg'

export const ChapterContent = ({ title, contents }) => {
    return (
        <div className="p-4 space-y-4 bg-white rounded-md shadow-md">
            <div className="text-xl md:text-2xl text-gray-700">{title}</div>
            {contents.map((item, i) => (
                <ChapterContentItem key={i} item={item} />
            ))}
        </div>
    )
}

export const ChapterContentItem = ({ item, is_current = false }) => {
    const router = useRouter()
    return (
        <div
            onClick={() => router.push(`/formations/detail/${item.code}`)}
            className="cursor-pointer transition flex flex-row space-x-4 border items-center border-purple-500 border-opacity-25 rounded-md px-3 py-2 hover:border-opacity-80"
        >
            <div className="text-purple-500">
                {is_current ? <Pause className="text-yellow-500 w-8 h-8" /> : <Play className="w-8 h-8" />}
            </div>
            <span className="text-base md:text-xl text-gray-600 w-full" style={{ lineHeight: '1.2rem' }}>
                {item.title}
            </span>
            <div className="text-gray-400 text-sm flex flex-row">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.9925 1.5C4.8525 1.5 1.5 4.86 1.5 9C1.5 13.14 4.8525 16.5 8.9925 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 8.9925 1.5ZM9 15C5.685 15 3 12.315 3 9C3 5.685 5.685 3 9 3C12.315 3 15 5.685 15 9C15 12.315 12.315 15 9 15ZM9.375 5.25H8.25V9.75L12.1875 12.1125L12.75 11.19L9.375 9.1875V5.25Z"
                        fill="currentColor"
                    />
                </svg>
                <span>{item.time}</span>
            </div>
        </div>
    )
}
