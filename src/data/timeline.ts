import { Timeline } from "../types/types";
import wedding_ring from "../assets/timeline assets/wedding-rings.png";
import photo_camera from "../assets/timeline assets/photo-camera.png";
import dinner from "../assets/timeline assets/dinner.png";
import fireworks from "../assets/timeline assets/fireworks.png";
import ceremony from "../assets/timeline assets/ceremony.png";

export const timelineData: Timeline[] = [
  {
    id: Math.random(),
    time: "3:00 PM",
    title: "Ceremony",
    description: "Lorem ipsum do etur adipisic orem ipsum dolor",
    box_position: "right",
    image: ceremony,
  },
  {
    id: Math.random(),
    time: "5:00 PM",
    title: "Cocktails & Photos",
    description: "Lorem ipsum do etur adipisic orem ipsum dolor",
    box_position: "left",
    image: photo_camera,
  },
  {
    id: Math.random(),
    time: "6:00 PM",
    title: "Reception Proper",
    description: "Lorem ipsum do etur adipisic orem ipsum dolor",
    box_position: "right",
    image: wedding_ring,
  },
  {
    id: Math.random(),
    time: "7:00 PM",
    title: "Dinner",
    description: "Lorem ipsum do etur adipisic orem ipsum dolor",
    box_position: "left",
    image: dinner,
  },
  {
    id: Math.random(),
    time: "8:00 PM",
    title: "Sparklers & Fireworks",
    description: "Lorem ipsum do etur adipisic orem ipsum dolor",
    box_position: "right",
    image: fireworks,
  },
];
//NOTE: change the timeline line height whenever theres an additional event here above
