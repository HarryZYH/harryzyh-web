import Harry from '../Assets/harry.jpg'

const Content = () => {
    return (
        <div className="min-h-screen bg-black grid grid-cols-1 place-items-end items-stretch p-4">

            <div className='w-full h-fit md:w-3/5 mb-40 relative'>
                <img src={Harry} alt="harry" className='w-full' />

                <div className='absolute w-5/6 left-4 -bottom-36 md:inset-y-1/4 md:-left-2/3 md:w-4/5 h-fit bg-white drop-shadow-2xl p-4'>
                    <h1 className='font-mono text-xl pt-2 md:text-2xl lg:text-4xl lg:pt-4'>Harry Zeng</h1>
                    <p className='font-mono text-xs pt-2 md:text-lg lg:text-xl lg:pt-8'>📩 My private email list for written articles, exclusive offers, sales & more:🧴 The Skincare Products I Use: - coupon code "DC10" for 10% off your entire order
                        🥩 The Best </p>
                </div>

            </div>

        </div>
    )
}

export default Content
