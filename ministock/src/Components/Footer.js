import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <>
            <div className=" flex flex-col justify-center items-center p-5  bg-[#0b1628]">
                <div className="p-5">
                    <h1 className="text-white ">
                        Made with ❤️ by Nikhil Walia
                    </h1>
                </div>

                <div className="flex  text-lg justify-between mb-5 ">
                    <button className="flex justify-around items-center  bg-[#0077b5] mr-5 w-[6em] p-2  text-white">
                        <FontAwesomeIcon icon={faLinkedin} />
                        LinkedIn
                    </button>

                    <button className="flex justify-around items-center bg-[#b50003] w-[6em] p-2  text-white">
                        <FontAwesomeIcon icon={faGithub} />
                        GitHub
                    </button>
                </div>
            </div>
        </>
    );
}

export default Footer;