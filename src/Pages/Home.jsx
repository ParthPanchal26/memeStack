import React from 'react'
import MemeCard from '../Components/MemeCard'
import { getMemes } from '../api/memes'

const Home = () => {

    const [memes, setMeme] = React.useState([])

    React.useState(() => {
        getMemes()
            .then((res) => {
                console.log(res)
                setMeme(res?.data?.memes)
            })
        console.log(memes);
    }, [])

    return (
        <div className="w-full">
            <div className='flex flex-wrap'>
                {memes && memes.map((meme) => (
                    <MemeCard key={meme?.id} img={meme?.url} title={meme?.name} />
                ))}
            </div>
        </div>
    )

}

export default Home