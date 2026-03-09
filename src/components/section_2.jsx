export function Section_2() {
  return (
    <div className="bg-white w-full h-[90vh] flex justify-center items-center  md:px-0">
      
      {/* Inner container */}
      <div className="w-full h-[80%] bg-[#EEEEEE] lg:bg-[linear-gradient(to_right,#EEEEEE_74%,white_74%)] flex flex-col lg:flex-row justify-between items-center">
        
        {/* Left Text Section */}
        <div className="flex flex-col w-full lg:w-[40%] items-start text-left pt-20 lg:items-start justify-center gap-6 lg:gap-7 px-4 lg:px-40 text-center lg:text-left">
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal">
            Precision-Cut <br /> Comfort
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-500 leading-relaxed">
            The moon may always be our first love because it is the one far away space object that has the unique distinction of flying close to the earth and upon which man has walked.
          </p>

          <button className="border-b-2 border-black hover:border-none mt-2 px-4 py-2">
            Show Now
          </button>
        </div>

        {/* Right Image Section */}
        <img
          src="section2.png"
          alt=""
          className="w-full lg:w-[55%] h-[50%] sm:h-[60%] lg:h-[70%] object-contain filter brightness-125 contrast-125 mt-6 lg:mt-0"
        />

      </div>
    </div>
  );
}