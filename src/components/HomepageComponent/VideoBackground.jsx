const VideoBackground = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/de8yddexc/video/upload/v1737120267/SSL/ea9rnj9ojflzbdqtqe8p.mp4"
        autoPlay
        loop
        muted
      />

      {/* Centered Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
  <div className="bg-slate-100 bg-opacity-30 text-black text-center p-12 sm:p-12 md:w-[70%] mx-auto rounded-md">
    <h1 className="text-xl md:text-3xl font-bold mb-4 text-blue-400">Why choose Stylorium Sourcing Limited?</h1>
    <p className="text-sm md:text-xl text-[#1F2937]">
      Stylorium Sourcing attains many features which are unique in the export industry and contribute heavily to success, including the implementation of the latest ERP software.
    </p>
  </div>
</div>

    </div>
  );
};

export default VideoBackground;
