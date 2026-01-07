const Loader = () => {
    return <div className="fixed inset-0 flex items-center justify-center bg-gray-100/70 backdrop-blur-sm z-50">
        <div className="flex flex-col items-center gap-3">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            <p className="text-sm text-gray-700">Loading, please wait...</p>
        </div>
    </div>
}

export default Loader