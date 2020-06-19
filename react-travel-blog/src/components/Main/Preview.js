import React from "react";
import lake from "../../assets/img/15Peyto_Lake_Mountains_Canada800.jpg";

const Preview = ({place, selected, key}) => {
  console.log(key)

  return (
    <div className={"bloglist__card text-teal-900 " + ((selected && (place.title === selected.title)) ? " border-solid border-4 border-red-700 hoverEffect" : console.log(selected))} >      
      <img
        className="block"
        src={lake}
        alt="{place.title}"
      />
      <div className="bloglist__content">
      <h4 className="bloglist__title">{place.title}</h4>
      <div className="bloglist__date">visiting date: xxx</div>
      <div className="bloglist__author"> {place.author}</div>
      </div>
    </div>
  )
}

export default Preview

