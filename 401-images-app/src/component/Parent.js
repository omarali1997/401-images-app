import React, { useState } from 'react'
import Nature from './Nature'
import Data from './Images.json'
import './css.css'

function Parent() {
    const [allLikes, setallLikes] = useState(0);
    const AllLikes = () => {
        setallLikes(allLikes + 1);
    };

    return (
        <>
        <div className='imag'>
            {Data.map((img) => {
                return (
                    <Nature
                        __id={img.__id}
                        image_url={img.image_url}
                        title={img.title}
                        likes={img.likes}
                        Total={AllLikes}
                    />
                )
            })}
        </div>
        <nav>

            <h1 className='total'>
                Total Likes : {allLikes}

                </h1>
        </nav>
        </>
    )
}
export default Parent;