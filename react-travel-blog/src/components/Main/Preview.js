import React from "react";
import lake from "../../assets/img/15Peyto_Lake_Mountains_Canada800.jpg";

const Preview = ({place, selected, key}) => {
  console.log(key)

  return (
    <div className={"flex bg-white rounded mt-8  mr-8 text-teal-900 " + ((selected && (place.title === selected.title)) ? " bg-red-700" : console.log(selected))} >      
      <img
        className="block rounded"
        src={lake}
        alt=""
        width="200"
      />
      <div className="text-left pl-4 pt-2 flex flex-col">
      <div className="text-left pl-4 text-4xl">{place.title}</div>
      <div className="text-left pl-4 pt-1 text-2xl">visiting date: xxx</div>
      <div className="text-left pl-4 pt-1 pb-1 text-2xl"> {place.author}</div>
      </div>
    </div>
  )
}

export default Preview

