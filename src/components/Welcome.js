import React, { useEffect, useState } from 'react';
import * as LottiePlayer from '@lottiefiles/lottie-player'

export default function Welcome() {

    const [leftCount, setLeftCount] = useState(0);
    const [rightCount, setRightCount] = useState(0);

    useEffect(() => {
        if (leftCount === 3 && rightCount === 3) {
            // alert('hoice')
        }

    }, [leftCount, rightCount]);

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-300">
            <div className='relative'>
                <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src="https://assets7.lottiefiles.com/private_files/lf30_qynkjvnj.json"
                    style={{ width: '300px' }}
                ></lottie-player>

                <div onClick={() => setLeftCount(prev => prev < 3 ? leftCount + 1 : 3)} className='w-10 h-10 absolute top-[29%] left-[27%]'></div>
                <div onClick={() => setRightCount(prev => prev < 3 ? rightCount + 1 : 3)} className='w-10 h-10 absolute top-[30%] left-[60%]'></div>
            </div>
        </div>
    )
}
