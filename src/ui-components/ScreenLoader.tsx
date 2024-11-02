export default function ScreenLoader() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
            <div className="w-16 h-16 border-4 border-zinc-600 border-t-zinc-100 rounded-full animate-spin"></div>
        </div>
    )
}