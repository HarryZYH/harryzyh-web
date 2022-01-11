import Harry from '../Assets/harry.jpg'

const Content = () => {
    return (
        <div className="min-h-screen bg-black grid grid-cols-1 place-items-end items-stretch p-8">

            <div className='w-full md:w-3/5 mb-40 relative'>
                <img src={Harry} alt="harry" className='w-full' />

                <div className='absolute w-4/5 left-4 inset-y-72 md:inset-y-1/4 md:-left-2/3 md:w-4/5 h-fit bg-white drop-shadow-2xl p-4'>
                    <h1 className='font-mono text-xl md:text-2xl lg:text-4xl pt-4'>Harry Zeng</h1>
                    <p className='font-mono text-sm md:text-lg lg:text-xl pt-8'>📩 My private email list for written articles, exclusive offers, sales & more: http://bit.ly/2mtASGW🧴 The Skincare Products I Use: https://bit.ly/3pdS2DO - coupon code "DC10" for 10% off your entire order
                        🥩 The Best </p>
                </div>

            </div>

        </div>
    )
}

export default Content
