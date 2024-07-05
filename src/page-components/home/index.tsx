export default function HomePage() {
  return (
    <main className="h-screen relative isolate px-3 md:px6 pt-14 lg:px-8 min-h-full">
      {/* <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4690e4] to-[#77afee] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}
      <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-5xl py-36 md:py-24 lg:py-24">
        <div className="hidden sm:mb-8 lg:mb-1 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of announcements.{' '}
            <a href="#" className="font-semibold text-yellow-500">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="mb-5 md:mb-2 md:mt-28 lg:mt-20 text-center sm:mb-8 lg:mb-1 flex justify-center">
          <p className="text-md  text-gray-900 font-semibold">
            DISCOVER YOUR PATH
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-normal tracking-tight text-slate-950">
            Elevate your <span className="text-cyan-600">career journey</span>
          </h1>
          <p className="m-auto mt-6 text-md md:text-lg leading-6 md:leading-8 md:max-w-md lg:max-w-xl text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
            <iframe src="https://lottie.host/embed/efa765d4-5819-4724-bf3c-081f17b66428/cZKIo7U85K.json"></iframe>
            <a href="#" className="text-sm font-normal -mt-5 leading-6 text-gray-900">
              Learn more 
            </a>
          </div>
        </div>
      </div>
      {/* <div
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4690e4] to-[#77afee] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div> */}
    </main>
  )
}
