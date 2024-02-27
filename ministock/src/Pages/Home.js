import React from "react";
import CarouselComponent from "../Components/CrouselComponent";
import Footer from "../Components/Footer";

const Home = () => {
    return (
        <>
            <div className=" mt-[3rem] w-[100%] flex flex-col justify-around  text-[#354fb9e7]">
                <CarouselComponent />

                <div className=" flex flex-col w-[100%] justify-around items-center mt-24 mb-20">
                    <div className="text-center">
                        <h1 className="border-2 transitionSection text-5xl font-bold p-5" >
                            TOP SECTIONS
                        </h1>
                    </div>

                    <div className="flex justify-around mt-20 w-[100%]">


                        <div className=" relative  card text-center">
                            <img src="https://source.unsplash.com/random/900×700/?menfashion" alt="Women's Products" className="w-full h-full" />
                            <div
                                className="absolute w-[100%] h-[100%] hover:bg-[#0000006c] duration-1000 flex justify-center items-center">
                                <h1
                                    className="transitionSectionSmall  font-bold">
                                    Men's Products
                                </h1>
                            </div>
                        </div>
                        <div className=" relative card text-center">
                            <img src="https://source.unsplash.com/random/900×700/?womenfashion" alt="Women's Products" className="w-full h-full" />
                            <div className="absolute w-[100%] h-[100%] hover:bg-[#0000006c] duration-1000 flex justify-center items-center">
                                <h1 className="transitionSectionSmall font-bold">
                                    Women's Products
                                </h1>
                            </div>
                        </div>
                        <div className=" relative card text-center">
                            <img src="https://source.unsplash.com/random/900×700/?kid fashion" alt="Women's Products" className="w-full h-full" />
                            <div className="absolute w-[100%] h-[100%] hover:bg-[#0000006c] duration-1000 flex justify-center items-center">
                                <h1 className="transitionSectionSmall font-bold">
                                    Kid's Products
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>


        </>
    );
}

export default Home;