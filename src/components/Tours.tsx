import Tour from "./Tour"
import type { TourProps } from "../types/TourProps";

type ToursComponentProps = { tours: TourProps[]; onRemove: (id: string) => void; onRefresh: () => void }

const Tours: React.FC<ToursComponentProps> = ({ tours, onRemove, onRefresh }) => {

    return (
        <section className="container mx-auto mt-8 mb-8 min-h-screen">
            <h1 className="flex flex-col text-4xl text-center pb-2 mb-6"><span>Our Tours</span><span className="h-1 bg-green-400 flex w-25 mx-auto"></span></h1>
            {tours.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tours.map((tour: TourProps) => (<Tour tour={tour} key={tour.id} onClickHandler={onRemove} />))}
                </div>
            ) : (
                <div className="min-h-screen w-full items-center justify-center flex flex-col">
                        <p className="text-red-700 text-2xl mb-4">Tour not available!!!</p>
                    <button className="ml-4 px-6 py-2 bg-green-600 text-white text-[18px] cursor-pointer" onClick={onRefresh}>Refresh</button>
                </div>
            )}

        </section>
    )
}

export default Tours