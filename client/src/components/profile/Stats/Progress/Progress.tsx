import React from "react";
import { progress } from "../../../../assets/img/svgIcons";
import ProgressBlock from "./ProgressBlock/ProgressBlock";


const ChildTest = () => {
  return (
    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis minus nostrum libero esse corrupti ea corporis necessitatibus impedit, animi dolorem accusamus veniam eos atque autem asperiores assumenda, dicta, porro iusto.</div>
  )
}


const Progress = () => {
  return (
    <>
      <ProgressBlock src={progress} title="Прогресс" child={<ChildTest />} />
      <ProgressBlock src={progress} title="Прогресс2" child={<ChildTest />} />
    </>
  );
};

export default Progress;
