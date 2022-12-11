import CoupleImage from "../../../assets/mock/sec-2-mock.jpg";

const Section2 = () => {
  return (
    <div className="flex bg-[aqua]">
      <div>
        <img src={CoupleImage} alt="couple img" className="w-[40rem]" />
      </div>
      <div className="bg-[gray] m-[10px]">
        <p className="font-bold text-[1.5rem]">Description</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        repudiandae sunt natus obcaecati suscipit tenetur cum libero nemo unde
        expedita.
      </div>
    </div>
  );
};

export default Section2;
