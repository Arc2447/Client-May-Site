const Welcomepage = () => {
return (
   //bg to be changed to bg image , sizing 
<div className='   bg-black text-white text-center md:h-custom h-fit'>
<h1 className='md:text-5xl md:pt-16 pt-10 font-fira'>Servent of God <br></br> <b>Sr Reinolda Franziska May OSB</b></h1>

<hr className="mt-1 md:mt-2 mx-auto h-1 w-2/3"></hr>
{/* red bg to be replaced bg image*/}
<div className='bg-red-600 w-fit md:h-16 h- text-center mx-auto h-8'>
<h2 className = 'md:text-2xl font-bold md:mt-4 md:pt-4  text-xs pt-1 font-blackbone'>Called to prepare Tabernacles</h2>
</div>
<hr className="mt-1 ml-auto mr-auto h-0.5 w-1/2"></hr>
<div className='bg-primary md:w-24 w-16 md:h-[2rem] h-5 text-center mt-4 ml-auto mr-auto font-gotham font-semibold text-[10px] md:text-sm pt-1 hover:bg-textcolor hover:cursor-pointer'>Read more</div>
</div>
);

}

export default Welcomepage;