import Image from 'next/image'

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]' style={{width:'100vw'}}>
<Image
src='/heroimg.jpg'
layout='fill'
objectFit='cover'
priority={true}
/>
<div className='absolute top-1/3  w-[230px] text-left ml-[50px] lg:ml-28'>
    <p className='text-sm sm:text-lg text-white font-bold xl:text-[30px] xl:w-[400px]'>Not sure where to go? Perfect.</p>
    <button className='text-purple-500 bg-white px-5 py-[8px] shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 xl:mt-[25px]'>I'm flexible</button>
</div>
        </div>
    )
}

export default Banner
