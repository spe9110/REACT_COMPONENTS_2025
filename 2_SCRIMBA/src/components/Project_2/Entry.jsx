import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";

const Entry = () => {
  return (
    <div>
        <article className="journal-entry flex w-full h-[300px]">
            {/* Image container */}
            <div className="main-image-container w-[200px] h-[300px] overflow-hidden">
                <img
                className="main-image w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrOvPv9GAoV9uhu89Nam5rEDqLLTdfiT6cWJfAjH08UiCHUmnQ14zIhNUzEVzK6SDgDYgxwMPAWcrrzrV7WqrIYarxgGdeTLCEsiv8euBjORpODesAIza22qrikxNliinF7i9Hv=w408-h422-k-no"
                alt="mount fuji"
                />
            </div>

            {/* Text content */}
            <div className="info-container p-4 flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="uppercase tracking-wide text-sm">Japan</span>
                <a
                    className="underline text-gray-500 text-sm"
                    href="https://www.google.com/maps/place/Mount+Fuji/@35.3606255,138.7273634,13z"
                    target="_blank"
                    rel="noreferrer"
                >
                    View on Google Maps
                </a>
                </div>
                <h2 className="text-xl font-bold">Mount Fuji</h2>
                <h3 className="text-sm font-semibold text-gray-500">
                12 Jan, 2021 - 24 Jan, 2021
                </h3>
                <p className="text-sm leading-relaxed">
                Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
                (12,389 feet). It is an active stratovolcano and one of Japan’s most iconic
                landmarks, often depicted in art and photography. It’s a popular
                destination for hikers, especially during the summer climbing season.
                </p>
            </div>
        </article>

    </div>
  )
}

export default Entry
