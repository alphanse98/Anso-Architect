"use client";

import Image from "next/image";

// IMAGES
import floor1 from "../assets/floor plan1.png";

import elevation1 from "../assets/GalleryImgs/elevation1.jpeg";
import elevation2 from "../assets/GalleryImgs/elevation2.jpeg";
import elevation3 from "../assets/GalleryImgs/elevation3.jpeg";

import interior1 from "../assets/GalleryImgs/interior1.jpeg";
import interior2 from "../assets/GalleryImgs/interior2.jpeg";
import interior3 from "../assets/GalleryImgs/interior3.jpeg";
import interior4 from "../assets/GalleryImgs/interior4.jpeg";

import floorPlan1 from "../assets/floorplan1.jpeg";

export default function Gallery() {
  const leftImages = [floor1, elevation1, elevation2, elevation3, elevation2];
  const rightImages = [interior2, interior3, floorPlan1, interior1, interior4];

  return (
    <>
      {/* 🔥 GLOBAL ANIMATION CSS (NO CONFLICT) */}
      <style jsx global>{`
        @keyframes galleryScrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes galleryScrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>

      <section className="w-full">
        <h1
          id="Gallery"
          className="text-3xl font-bold text-center mb-10 fontFamily"
        >
          Gallery
        </h1>

        <div className="lg:flex-row justify-center">
          {/* LEFT SLIDER */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex whitespace-nowrap w-max"
              style={{
                animation: "galleryScrollLeft 20s linear infinite",
              }}
            >
              {[...leftImages, ...leftImages].map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt="Gallery"
                  className="w-[150px] sm:w-[200px] md:w-[250px] h-auto mx-2 rounded-lg shadow-md inline-block"
                />
              ))}
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="relative w-full overflow-hidden mt-4">
            <div
              className="flex whitespace-nowrap w-max"
              style={{
                animation: "galleryScrollRight 20s linear infinite",
              }}
            >
              {[...rightImages, ...rightImages].map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt="Gallery"
                  className="w-[150px] sm:w-[200px] md:w-[250px] h-auto mx-2 rounded-lg shadow-md inline-block"
                />
              ))}
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-black text-white rounded-md shadow hover:bg-gray-800">
            View More
          </button>
        </div>
      </section>
    </>
  );
}
