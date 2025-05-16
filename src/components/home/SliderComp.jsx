import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor siticing elit. Assumenda voluptateleniti
              quibusdam, laboriosam veritatis. Labore, nam?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/24f74a1b-3100-4c93-9863-365f1c1f3abb/W+AIR+ZOOM+PEGASUS+41+PRM.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor siticing elit. Assumenda voluptateleniti
              quibusdam, laboriosam veritatis. Labore, nam?
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/914614b3-eaa0-4c54-b9ff-8f4f790ab5b2/W+NIKE+REACTX+PEGASUS+TRAIL+5.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
