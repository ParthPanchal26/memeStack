import { useNavigate } from 'react-router-dom';

const MemeCard = (props) => {

    const navigate = useNavigate()

    return (
        <>
            <section className="text-gray-600 body-font block m-auto">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        <div className="p-4 w-86 sm:w-86">
                            <div style={{boxShadow: "0 0 2px black"}} className="h-full border-0 p-2 shadow-inner sm:border-gray-200 border-opacity-0 rounded-md overflow-hidden">
                                <img className="lg:h-48 md:h-36 border-b-2 p-1 w-full object-contain" src={props.img} alt="img" />
                                <div className="p-6">
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-center">{props.title}</h1>
                                    <div className="flex items-center flex-wrap justify-center">
                                        <button onClick={(e) => navigate(`/edit?url=${props.img}`)} className="text-indigo-700 text-lg border-2 rounded-md border-slate-950 px-5 py-2 inline-flex items-center md:mb-2 lg:mb-0">Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default MemeCard;