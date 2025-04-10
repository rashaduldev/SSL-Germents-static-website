import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Navber/Nav";

const CategoryDisplay = () => {
  const { category, subcategory } = useParams();
  const [images, setImages] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [productNames, setProductNames] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    console.log("Category:", category);
    
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedCategory = data.categories.find(
          (cat) => cat.category.toLowerCase() === category.toLowerCase()
        );

        if (selectedCategory) {
          if (subcategory) {
            const selectedSubcategory = selectedCategory.subcategories?.find(
              (subcat) => subcat.name.toLowerCase() === subcategory.toLowerCase()
            );

            if (selectedSubcategory) {
              setImages(selectedSubcategory.images);
              setVideoSrc(selectedSubcategory.video || null);
              setProductNames(selectedSubcategory.productName);
            } else {
              setImages(null);
              setVideoSrc(null);
              setProductNames([]);
            }
          } else {
            setImages(selectedCategory.images || null);
            setVideoSrc(selectedCategory.video || null);
            setProductNames([]);
          }
        } else {
          setImages(null);
          setVideoSrc(null);
          setProductNames([]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [category, subcategory]);

  if (!images) {
    return (
      <div>
        <Nav isVisible={true} />
        <p className="mt-64 container mx-auto text-center text-3xl font-bold min-h-[50vh]">
          No data found for {category} {subcategory ? `- ${subcategory}` : ''}.
        </p>
      </div>
    );
  }

  // URLs where images should have height 250px
  const urlsWith250pxHeight = [
    "https://stylorium.net/gallery/women/footware",
    "https://stylorium.net/gallery/men/footware",
    "https://stylorium.net/gallery/kids/footware",
    "http://localhost:5173/gallery/women/footware",
    "http://localhost:5173/gallery/men/footware",
    "http://localhost:5173/gallery/kids/footware",
  ];

  return (
    <div>
      <Nav isVisible={true} />
      <div className="mt-20 md:mt-36 pb-24 bg-white">
        <div className="container mx-auto">
          {videoSrc && (
            <div className="w-full h-[400px]">
              <video
                key={videoSrc}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                preload="auto"
                poster="/assets/images/placeholder.jpg"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>

        <h1 className="text-3xl pl-5 md:py-8 mt-8 md:text-5xl font-bold pt-[10px] uppercase container mx-auto">
          {subcategory ? `${category} - ${subcategory}` : `${category}`}
        </h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 container mx-auto gap-10">
          {images.map((image, index) => {
            const shouldUse250pxHeight = urlsWith250pxHeight.includes(window.location.href);

            return (
              <div key={index} className="card bg-base-100 border cursor-pointer" onClick={() => setSelectedImage(image)}>
                <figure>
                  <img
                    src={image}
                    alt={`${category} ${index + 1}`}
                    className={`w-full ${shouldUse250pxHeight ? "h-[250px]" : "h-[450px]"} object-cover`}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold">
                    {productNames.length > 0 ? productNames[index] : "Name of products"}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-5 rounded-lg shadow-lg max-w-3xl mx-auto">
            <button
              className="absolute top-2 right-2 text-3xl font-bold text-red-600"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Selected" className="w-[500px] h-[500px]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDisplay;
