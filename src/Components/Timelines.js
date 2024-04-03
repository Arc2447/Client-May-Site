const Timelines= ()=>{
    return ( <div className='h-landscape bg-bgcolor2 text-center w-dvw text-white '>
<div className='w-dvw h-fit bg-bgcolor2 pl-7 pt-9 '>
            <h1 className='text-5xl text-heading font-roxbo'>Biographical &<br></br>Cause Timelines</h1>
        </div>

<div class=" lg:gap-x-8 flex flex-col md:flex-row md:flex-wrap max-h-full pt-8">

  <div class="w-full md:w-1/2 lg:w-1/5 p-4  bg-red-600 ml-20 h-96">
     <img src="" alt="Image 1" class="w-full "></img>
    <h3 class="text-lg font-semibold mt-2">Title 1</h3>
    <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>

 
  <div class="w-full md:w-1/2 lg:w-1/5 p-4 bg-white">
  <img src="" alt="Image 1" class="w-full "></img>
    <h3 class="text-lg font-semibold mt-2">Title 2</h3>
    <p class="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>


  <div class="w-full md:w-1/2 lg:w-1/5 p-4 bg-red-600">
    <img src="" alt="Image 1" class="w-full "></img>
    <h3 class="text-lg font-semibold mt-2">Title 3</h3>
    <p class="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
  </div>


  <div class="w-full md:w-1/2 lg:w-1/5 p-4  bg-white">
     <img src="" alt="Image 1" class="w-full h-auto"></img>
    <h3 class="text-lg font-semibold mt-2">Title 4</h3>
    <p class="text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
  </div>
</div>


        </div>
        
        
        )
}
export default Timelines;