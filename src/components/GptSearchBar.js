import React, { useRef } from "react";
import { LOGO } from "../utils/constant";
import { useSelector } from "react-redux";
import lang from "../utils/language";
import openai from "../utils/openai";

export const GptSearchBar = () => {
  const searchText = useRef(null);

  const langKey = useSelector((store) => store.config.lang);
  const handleGptSerchbutton = async () =>{
    console.log(searchText.current.value);
    const getQuery ="Act as movie recommendation system and suggest some"+searchText.current.value+". Only give 5 movies comma seperated as example : don,gadar,Sholay,KGF,Breakingbad";
    const getResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: getQuery }],
        model: 'gpt-3.5-turbo',
      });
    console.log(getResults);
  }
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          input="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button className="col-span-3 m-4 px-4 py-2 bg-red-600 text-white rounded-lg" onClick={handleGptSerchbutton}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
