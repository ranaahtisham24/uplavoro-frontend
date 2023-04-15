import ReactSelectField from '@/components/common/reactSelectField'
import TitleCard from '@/components/common/titleCard'
import JobCard from '@/components/jobOffers/jobCard'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ArrowLeft from '../../public/assets/icons/arrow-left.svg'
import ArrowRight from '../../public/assets/icons/arrow-right.svg'

const cards = [
  { id: 1, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 2, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 3, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 4, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 5, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 6, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 7, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 8, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 9, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 10, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 11, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 12, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 13, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 14, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 15, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 16, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 17, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
  { id: 18, published: '4 days ago', job_title: 'Frontend Developer', location: 'Roma, Italia', contract_type: 'Permanent contract', job_type: 'Full time', expiry_date: 'Expires 1' },
]


const itemsPerPage = 9;
const JobOffers = () => {
  const { control } = useForm();
  const [limit, pageLimit] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cards?.length / itemsPerPage);

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = cards?.slice(startIndex, endIndex);


  return (
    <>
      <TitleCard title='Job offers' field={true} start={true} paragraph={'Browse all our offers'} headingAfterParagraph={'All our job offers'} control={control} />
      <div className='w-full lg:px-36 xl:px-40 2xl:px-72 py-6 bg-footer-bar'>

        <div className='flex w-full gap-x-4 py-6'>
          <div className='flex-col w-[30%]'>
            <ReactSelectField name='city' placeholder='Filter by city' control={control} />
          </div>
          <div className='flex-col w-[30%]'>
            <ReactSelectField name='contract_type' placeholder='Filter by contract type' control={control} />
          </div>
          <div className='flex-col w-[30%]'>
            <ReactSelectField name='job_category' placeholder='Filter by job category' control={control} />
          </div>
        </div>
        <div className='flex flex-wrap gap-4 py-6'>
          {displayedItems.map((card, index) => {
            return (
              <JobCard key={card.id} published={card.published} job_title={card.job_title} location={card.location} contract_type={card.contract_type} job_type={card.job_type} expiry_date={card.expiry_date} />
            )
          })}
        </div>

        <div className='flex items-center justify-center gap-x-4 py-6'>
          <button onClick={handlePrevClick} disabled={currentPage === 1} >
            <Image style={{ width: '24px' }} src={ArrowLeft} alt='' />
          </button>
          <p className="text-sm text-gray-700">
            Pagina <span className="font-medium">{currentPage}</span> {' / '}
            <span className="font-medium">{totalPages}</span> results
          </p>
          <button onClick={handleNextClick} disabled={currentPage === totalPages}>
            <Image style={{ width: '24px' }} src={ArrowRight} alt='' />
          </button>
        </div>

      </div>
    </>
  )
}

export default JobOffers