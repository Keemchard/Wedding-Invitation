import CoupleImage from "../../../assets/mock/sec-2-mock.jpg";

const Section2 = () => {
  return (
    <div className="sec-2 flex bg-wd_coffee my-16">
      <div className="couple-img-con">
        <img
          src={CoupleImage}
          alt="couple img"
          className="couple-img w-[40rem]"
        />
      </div>
      <div className="m-[10px] text-white">
        <p className="head-text font-bold text-[1.5rem] border-b-2 border-b-wd_mikado_yellow mb-[1rem]">
          Description
        </p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        repudiandae sunt natus obcaecati suscipit tenetur cum libero nemo unde
        expedita. Lorem ipsum dolor sit amet.lorem30
      </div>
    </div>
  );
};

export default Section2;
