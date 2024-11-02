export default function ScreenLoader({loaded} : {loaded: boolean}) {
    return (
        // <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <div className={`${loaded? 'disappear' : ''} preloader-animation`}>
            <div className="w-1/6 m-auto justify-center">
                <img
                    className="w-[32px] m-auto animate-bounce"
                    src="/png/upfolio_logo.png"
                    alt=""
                />
            </div>
        </div>
    )
}