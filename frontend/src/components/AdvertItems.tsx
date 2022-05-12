import React, { useEffect, useState } from 'react'
import customApiService, { ICarAdvert } from '../services/customApiService';
import Button from './Button';
import Modal from './Modal';
import Spinner from './Spinner';

const AdvertItems = () => {
  const [adverts, setAdverts] = useState<Array<ICarAdvert>>([]);
  const [loading, setLoading] = useState(false);
  const [deleteAdvert, setDeleteAdvert] = useState(false);

  useEffect(() => {
    fetchAdvertPosts()
  }, [])

  const fetchAdvertPosts = async () => {
    const fetchedPosts: any = await customApiService.getCarAdvertPosts();
    if (fetchedPosts) {
      const data = (fetchedPosts.data)
      setLoading(true)
      setAdverts(data)
    }
  }
  const deleteAdvertPosts = async () => {
    await customApiService.deleteCarAdvertPosts();
    setDeleteAdvert(true);
    window.location.reload();
  }
  return (
    <div>
      {loading ?
        <>
          {
            adverts && adverts.length > 0 ? (
              <>
                {
                  adverts.map((advert) => {
                    return (
                      <main key={advert._id} className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
                        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                          <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
                            <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-slate">{advert.model} (year : {advert.year})</h1>
                            <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">{advert.brand}</p>
                          </div>
                          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
                            <img src={advert.image} alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
                          </div>
                          <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                            <dt className="sr-only">Reviews</dt>
                            <dd className="text-slate-600 flex flex-col dark:text-slate-400">
                              <span>{`$${advert.cost}`} </span>
                            </dd>
                            <dt className="sr-only">Location</dt>
                            <dd className="flex items-center">
                              <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                                <circle cx="1" cy="1" r="1" />
                              </svg>
                              Color: {advert.color}
                            </dd>
                          </dl>

                          <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                            {advert.description}
                          </p>
                        </div>

                      </main>
                    )
                  })
                }
                <div className="flex flex-row align-center justify-center">

                  <Button onClick={deleteAdvertPosts} title="Delete All Advert" />
                  <Modal showModal={deleteAdvert} setShowModal={setDeleteAdvert}>
                    <div>
                      Deleted Sucessfully
                    </div>
                  </Modal>
                </div>
              </>
            ) : (<div className="flex flex-row items-center justify-center h-screen">
              Data is Empty
            </div>)
          }</>
        : <Spinner />}
    </div>
  )
}

export default AdvertItems;