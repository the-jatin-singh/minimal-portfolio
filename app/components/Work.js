"use client";
import React, { useState } from 'react'
import { work } from '../data/data'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Work = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(work.content.length / itemsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const startIndex = currentPage * itemsPerPage;
    const selectedItems = work.content.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
            <div className='text-md md:w-[500px] w-full min-h-[250px] overflow-hidden flex flex-col items-start'>
                {selectedItems.map((item, index) => {
                    return (
                        <Link target='_blank' className='w-full' href={item.link} key={index}>
                            <div className='w-full border-b-[1px] border-lightTxt/15'>
                                <div className='w-full flex items-center gap-4 py-2 px-2 hover:bg-lightTxt/5 rounded-xl'>
                                    <div className='text-sm rounded-full w-[40px] h-[40px] flex items-center justify-center bg-darkTxt/10 font-bold text-darkTxt/40'>{item.abbreviation}</div>
                                    <div className='flex flex-col items-start'>
                                        <h2 className='text-darkTxt/90'>{item.title}</h2>
                                        <p className=' text-lightTxt'>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            {work.content.length > itemsPerPage && (
                <div className='md:w-[500px] w-full flex items-center justify-end gap-4'>
                    <div
                        className={`rounded-full w-[30px] h-[30px] flex items-center justify-center bg-darkTxt/10 ${currentPage === 0 ? 'text-darkTxt/40' : 'text-darkTxt'}`}
                        onClick={handlePrevPage}
                    >
                        <ChevronLeft size={17} />
                    </div>
                    <div
                        className={`rounded-full w-[30px] h-[30px] flex items-center justify-center bg-darkTxt/10 ${currentPage === totalPages - 1 ? 'text-darkTxt/40' : 'text-darkTxt'}`}
                        onClick={handleNextPage}
                    >
                        <ChevronRight size={17} />
                    </div>
                </div>
            )}
        </>
    )
}

export default Work
