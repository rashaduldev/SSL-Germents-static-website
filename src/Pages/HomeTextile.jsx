import Nav from "../components/Navber/Nav";
import vedio from "../assets/video/men_shoose.mp4";

const HomeTextile = () => {
    return (
        <div>
             <Nav isVisible={true} />
             <div className="mt-28">
             <div className="container mx-auto">
           <video
          className="w-full h-[400px] object-cover"
          autoPlay
             muted
             loop
            preload="auto"
           >
            <source src={vedio} type="video/mp4" />
            Your browser does not support the video tag.
           </video>
        </div>
        <h3 className="text-3xl font-bold container mx-auto mt-10">Home Textile</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 my-10 container mx-auto gap-10">
          <div className="card bg-base-100 border">
          <figure>
          <img className="w-full h-[450px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8MJyxcg2I7nvRMFaOtcIAWtRt4uBXXmWXQ&s" alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name of the product</h2>
          </div>
        </div>
        <div className="card bg-base-100 border">
          <figure>
          <img className="w-full h-[450px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUA6701c69OTJzWrGW6dNrtrZ-fQzvOFSfEw&s" alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name of the product</h2>
          </div>
        </div>
        <div className="card bg-base-100 border">
          <figure>
          <img className="w-full h-[450px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsbt82_y9j-y_5iCJo9XPnmTLDd5ui23j3Tg&s" alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name of the product</h2>
          </div>
        </div>
          
        </div>
             </div>
        </div>
    );
};

export default HomeTextile;