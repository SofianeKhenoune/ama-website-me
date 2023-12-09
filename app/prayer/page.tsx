'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function Prayer() {
  const [iframesHeight, setIframesHeight] = useState(0);
  const [changeMosque, setChangeMosque] = useState(false);
  const isMobileDevice = window.innerWidth < 840;

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0].offsetWidth;
    setIframesHeight(iframe / 2);
  }, []);

  return (
    <main>
      <h1 className={'text-3xl font-bold text-center pb-5'}>
        Horaires de prières dans nos deux mosquées
      </h1>
      <div className='flex text-xl font-bold'>
        <p
          className={clsx(
            'grow p-3 cursor-pointer text-center font-bold rounded-tl-2xl',
            {
              'bg-light text-primary': !changeMosque,
            }
          )}
          onClick={() => {
            if (changeMosque) setChangeMosque(!changeMosque);
          }}
        >
          La Fraternité
        </p>
        <p
          className={clsx(
            'grow p-3 cursor-pointer text-center font-bold rounded-tr-2xl',
            {
              'bg-light text-primary': changeMosque,
            }
          )}
          onClick={() => {
            if (!changeMosque) setChangeMosque(!changeMosque);
          }}
        >
          Al Ansar
        </p>
      </div>
      <div className='relative pb-5'>
        {isMobileDevice ? (
          <>
            <div
              className={clsx('absolute top-0 left-0 right-0 bottom-0', {
                'z-50': !changeMosque,
              })}
            >
              <iframe
                src='https://mawaqit.net/en/m/mosquee-de-la-fraternite-aubervilliers?showNotification=0&showSearchButton=0&showFooter=0&showFlashMessage=0&view=mobile'
                className='mobile w-full rounded-b-2xl h-[500px]'
                scrolling='no'
              ></iframe>
            </div>
            <div
              className={clsx('absolute top-0 left-0 right-0 bottom-0', {
                'z-50': changeMosque,
              })}
            >
              <iframe
                src='https://mawaqit.net/en/m/mosquee-al-ansar-aubervilliers?showNotification=0&showSearchButton=0&showFooter=0&showFlashMessage=0&view=mobile'
                className='mobile w-full rounded-b-2xl h-[500px]'
                scrolling='no'
              ></iframe>
            </div>
          </>
        ) : (
          <>
            <div
              className={clsx('absolute top-0 left-0 right-0', {
                'z-50': !changeMosque,
              })}
            >
              <iframe
                src='https://mawaqit.net/en/w/mosquee-de-la-fraternite-aubervilliers?showOnly5PrayerTimes=0'
                className='mobile w-full rounded-b-2xl'
                style={{ height: iframesHeight }}
              />
            </div>
            <div
              className={clsx('absolute top-0 left-0 right-0', {
                'z-50': changeMosque,
              })}
            >
              <iframe
                src='https://mawaqit.net/en/w/mosquee-al-ansar-aubervilliers?showOnly5PrayerTimes=0'
                className='mobile w-full rounded-b-2xl'
                style={{ height: iframesHeight }}
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
