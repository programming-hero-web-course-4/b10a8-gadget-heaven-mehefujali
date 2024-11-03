
const Hero = () => {
      return (
            <div className=" bg-primary-color h-[622px]   lg:mx-6 ">
                  <div className=" max-w-6xl mx-auto text-center pt-8">
                        <h1 className=" text-5xl text-white mx-auto font-bold ">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className=" text-gray-200 max-w-3xl mt-4 mx-auto text-lg">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                        <button className=" btn bg-white text-primary-color mt-6 rounded-full text-xl font-bold px-7">Shop now</button>
                  </div>
                  <div className=" max-w-6xl mx-auto relative top-16 border-2 border-white p-6 rounded-2xl">
                        <img className=" rounded-2xl w-full max-h-[563px] object-cover " src="https://i.ibb.co/cvBztwq/banner.jpg" alt="" />
                  </div>
            </div>
      );
};

export default Hero;