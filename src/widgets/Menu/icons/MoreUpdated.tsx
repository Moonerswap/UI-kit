import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} xmlns="http://www.w3.org/2000/svg" data-name="Layer 45" height="32" id="Layer_45" viewBox="0 0 24 24" width="32"><title/><path d="M14.12988,15.50342l-1.41406-1.415,1.42383-1.42285a2.02108,2.02108,0,0,0,0-2.855L9.87012,5.541a2.06778,2.06778,0,0,0-2.85547,0L5.59082,6.96436a2.02108,2.02108,0,0,0,0,2.855L4.17676,11.2334a4.02212,4.02212,0,0,1,0-5.68311L5.60059,4.127a4.01858,4.01858,0,0,1,5.68359,0l4.26953,4.26953a4.02449,4.02449,0,0,1,0,5.68359Z" fill="#4c9ae8"/><path d="M15.55762,20.94971a3.99349,3.99349,0,0,1-2.8418-1.17725L8.44629,15.50293a4.02449,4.02449,0,0,1,0-5.68359L9.87012,8.396l1.41406,1.415L9.86035,11.23389a2.02108,2.02108,0,0,0,0,2.855l4.26953,4.26953a2.06778,2.06778,0,0,0,2.85547,0l1.42383-1.42334a2.02108,2.02108,0,0,0,0-2.855L19.82324,12.666a4.02449,4.02449,0,0,1,0,5.68359l-1.42383,1.42334A3.9917,3.9917,0,0,1,15.55762,20.94971Z" fill="#4c9ae8"/></Svg>
  );
};

export default Icon;


