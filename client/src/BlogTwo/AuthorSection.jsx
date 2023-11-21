import React from 'react';
// Import the background pattern image
import {BGPattern1, BGPattern2,BGPattern3} from '../imgs/ImgAssets'; // Adjust the path as necessary
import { FaceLessPlace } from '../imgs/ImgAssets';

const AuthorSection = () => {
  // Form submission logic goes here

  return (
    <div className="bg-black rounded-full" style={{ backgroundImage: `url(${BGPattern3})`, backgroundSize: 'cover' }}>
        <form className="bg-black bg-opacity-80 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="pb-6">
                <h2 className="block  text-orange-500 pt-4 italic text-xl text-center font-bold mb-2">About the Author</h2>
            </div>
            <img src={FaceLessPlace} className="rounded-full" alt="Author"/>
            <div className="text-white italic rounded-full pt-6">
                <strong> Jordan A. Maxwell </strong> is a celebrated author renowned for their captivating blend of magical realism and deep-seated mystery. Born in the quaint town of Willow Creek, Jordan's love for storytelling was kindled beneath the starlit skies of their childhood, where tales of folklore and legend were nightly rituals.

                After graduating from the University of Edinburgh with a degree in Literature and Folklore Studies, Jordan embarked on a decade-long journey around the world, gathering inspiration from the diverse cultures and narratives encountered. This unique blend of experiences is intricately woven into their writing, offering readers a tapestry of rich, multifaceted stories.

                Jordan's debut novel, "Whispers of the Ancients," was a New York Times bestseller and won the prestigious Golden Quill Award. This success was followed by a series of critically acclaimed novels, including "Echoes of Eden" and "The Last Alchemist," each exploring the delicate balance between myth and reality.
            </div>
            {/* Uncomment below if you have form elements to include */}
            {/* <input className="shadow appearance-none border rounded w-full bg-gray-700 py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Title" />
            <textarea className="shadow appearance-none border bg-gray-700 rounded h-[500px] w-full py-2 px-3 text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Content"></textarea>
            <button className="bg-transparent border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="submit">Create Post</button> */}
        </form>  
    </div>
  );
};

export default AuthorSection;
