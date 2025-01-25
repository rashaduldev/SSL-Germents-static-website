import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Navber/Nav";

const CategoryDisplay = () => {
  const { category, subcategory } = useParams(); // Retrieve category and subcategory from URL
  const [images, setImages] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null); // State for dynamic video source
  const [productNames, setProductNames] = useState([]); // State for product names
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    setLoading(true); // Start loading
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        // Find the category
        const selectedCategory = data.categories.find(
          (cat) => cat.category.toLowerCase() === category.toLowerCase()
        );

        if (selectedCategory) {
          if (subcategory) {
            // Handle subcategories if available
            const selectedSubcategory = selectedCategory.subcategories?.find(
              (subcat) => subcat.name.toLowerCase() === subcategory.toLowerCase()
            );

            if (selectedSubcategory) {
              setImages(selectedSubcategory.images);
              setVideoSrc(selectedSubcategory.video || null); // Use the video URL from JSON
              setProductNames(selectedSubcategory.productName); // Set the product names dynamically
            } else {
              setImages(null);
              setVideoSrc(null);
              setProductNames([]); // Clear product names if no subcategory is found
            }
          } else {
            // If no subcategory, set category-level video and images
            setImages(selectedCategory.images || null);
            setVideoSrc(selectedCategory.video || null); // Use the category video URL from JSON
            setProductNames([]); // Clear product names if no subcategory
          }
        } else {
          setImages(null);
          setVideoSrc(null);
          setProductNames([]); // Clear product names if no category is found
        }
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false)); // Stop loading
  }, [category, subcategory]);

  // Log the video URL to console for debugging
  useEffect(() => {
    if (videoSrc) {
      console.log("Video URL:", `${videoSrc}`); // Log the local video URL
    }
  }, [videoSrc]);

  if (loading) {
    return (
      <div>
        <Nav isVisible={true} />
        <p className="mt-36 container mx-auto text-center text-3xl font-bold">
          Loading...
        </p>
      </div>
    );
  }

  if (!images) {
    return (
      <div>
        <Nav isVisible={true} />
        <p className="mt-36 container mx-auto text-center text-3xl font-bold">
          No data found for {category} {subcategory ? `- ${subcategory}` : ''}.
        </p>
      </div>
    );
  }

  return (
    <div>
      <Nav isVisible={true} />
      <div className="mt-20 md:mt-36 pb-24 bg-white">
        <div className="container mx-auto">
          {videoSrc && (
            <div className="w-full h-[400px]">
              {/* Check if the video source is a Google Drive link */}
              {videoSrc.includes("drive.google.com") ? (
                <iframe
                  key={videoSrc} // Add key prop to force re-render on videoSrc change
                  width="100%"
                  height="100%"
                  src={`https://drive.google.com/file/d/${videoSrc.split("/d/")[1].split("/")[0]}/preview?autoplay=1&controls=0`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Google Drive Video"
                ></iframe>
              ) : videoSrc.includes("youtube.com") ? (
                <iframe
                  key={videoSrc} // Add key prop to force re-render on videoSrc change
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoSrc.split("v=")[1]}?autoplay=1&controls=0&loop=1&playlist=${videoSrc.split("v=")[1]}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube Video"
                ></iframe>
              ) : (
                <video
                  key={videoSrc} // Add key prop to force re-render on videoSrc change
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  preload="auto"
                  poster="/assets/images/placeholder.jpg" // Optional
                >
                  <source
                    src={`${videoSrc}`} // Use the dynamic video path from JSON
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
        </div>
        <h1 className="text-3xl pl-5 md:py-8 mt-8 md:text-5xl font-bold pt-[10px] uppercase container mx-auto">
          {subcategory ? `${category} - ${subcategory}` : `${category}`}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 container mx-auto gap-10">
          {images.map((image, index) => (
            <div key={index} className="card bg-base-100 border">
              <figure>
                <img
                  src={image}
                  alt={`${category} ${index + 1}`}
                  className="w-full h-[450px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">
                  {productNames.length > 0 ? productNames[index] : "Name of products"}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDisplay;