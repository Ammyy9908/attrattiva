import React from "react";

import styled, { keyframes } from "styled-components";
import { slideInRight } from "react-animations";

const slideInAnimation = keyframes`${slideInRight}`;

const SlideInDiv = styled.div`
  animation: 1s ${slideInAnimation};
`;

function StoryCard({ image, title, description }) {
  return (
    <SlideInDiv>
      <div>
        <div className="story-card-body h-[315px] relative group cursor-pointer overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover group-hover:scale-125 transition-all"
          />
          <h2 className="hidden group-hover:block absolute -translate-x-[50%] top-[50%] left-[50%] text-white text-sm md:text-xl z-20">
            {title}
          </h2>
          <div className="story-card-overlay absolute w-full h-full group-hover:bg-black/20 inset-0 z-10 transition-all"></div>
        </div>
        <div className="story-card-footer my-6">
          <h2 className="text-center text-black/50 text-xl">
            {description.slice(0, 60) + "..."}
          </h2>
        </div>
      </div>
    </SlideInDiv>
  );
}

export default StoryCard;
