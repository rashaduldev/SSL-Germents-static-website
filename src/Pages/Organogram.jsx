import Nav from "../components/Navber/Nav";
import SecondNavImg from "../components/SecondNavImg";
import oranogramimg from '../assets/image/Organogram.JPG'
import navBgimg from '../assets/image/Organogram_Top_Image.jpeg'


const componentName = () => {
    return (
        <div>
            <Nav isVisible={true}/>
            <div className="mt-[110px]">
              <SecondNavImg text="Heart of the company" img={navBgimg}/>
                <h1 className="text-center text-2xl md:text-4xl font-bold mt-10 italic tracking-wider">Company Organogram</h1>
                <div className="container mx-auto my-10 flex justify-center">
                    <img className="w-full h-full" src={oranogramimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default componentName;