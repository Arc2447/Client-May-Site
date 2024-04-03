const BiographyContent = () => {
return(
<div className=' text-textcolor   bg-bgcolor flex flex-col md:flex-row md:flex-wrap'>

    <div className='md:w-1/2 h-full font-gotham    order-1'>
        <h3 className=" text-heading font-better font-bold md:pt-3 md:pl-20 text-center md:text-left">Early Years</h3>
        <p className=' text-xs md:px-20 px-3 md:pt-1'>She was born on Monday, October 21, 1901 and baptized the following day as Franziska,
            the youngest of nine children of the devoutly Catholic family, headed by a hard-working master
            shoemaker and small farmer at Pfahlheim, Diocese of Rottenburg, southwest Germany.
            <br></br>
            <br></br>
            The parish priest of Pfahlheim, Fr Eugene Adis, highly advocated parishioners to actively commit
             and participate in the various Catholic sodalities. Young and old were encouraged to practice their
              faith and to fulfil their duties to the church conscientiously. Devotion to the Eucharist,
               especially in the exposed Blessed Sacrament, was implanted into the soul of Franziska at an early age.

        </p>
        {/*Images to be added underneath P */}
    </div>

    <div className='md:w-1/2  md:border-l-4 md:border-dotted md:border-gray-500  order-2 h-full font-gotham '>
         <h3 className=" text-heading font-better font-bold md:pl-2 text-center md:pt-3 md:text-left">Youth</h3>
         <p className=' text-xs md:pl-2 md:pr-28 md:pt-1 px-3'>In her youth, Franziska learned about Mary and consider her mother and wanted to emulate her.
             She joined the sodality of Our Lady, awakening a real love and devotion to Mary. In the sodality, 
             she was guided to serve God through a Christian life; urged to fight against the enemy of the faith, 
             live chaste and to support the work of Jesus and His church.
            <br></br>
            <br></br>
            In a quest to realize her missionary work interest, Francisca applied to join the Missionary Benedictine 
            Sisters of Tutzing, as advised by Father Adis; but her health was found wanting, unfit for missionary work; 
            she returned to Pfahlheim, 220km away and spent her days praying at her local chapel in front of the 
            Eucharist. Later she traveled back to Tutzing and this time was accepted and entered the Missionary 
            Benedictine Sisters Convent on March 1, 1922, she took her religious profession on February 10, 1925, 
            and the religious name, Sister Reinolda.
            <br></br>
            <br></br>
            After receiving the missionary cross, she was sent to South Africa on June 21, 1925. There pronounced 
            her final vows on February 12, 1928, she worked as a seamstress at the Entabeni and Mbongolwane stations 
            for 10-years; learned to speak Zulu; and whenever possible, visited the locals in their homes on foot and 
            on horseback.  <button className='bg-primary md:hidden hover:bg-heading text-white font-bold  px-4 rounded'>
            Continue Reading
            </button>
          
         </p>
         
        

    </div>

</div>
)

}

export default BiographyContent;