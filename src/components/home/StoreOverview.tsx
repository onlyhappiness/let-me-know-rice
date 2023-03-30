import { Card, Typography } from "antd";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetAllStore } from "../../hooks/store.query";

import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const { Meta } = Card;
const { Title } = Typography;

export default function StoreOverview() {
  const { data } = useGetAllStore();

  return (
    <div>
      <Title level={4} style={{ marginBottom: 20 }}>
        추천 가게
      </Title>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        style={{ marginBottom: 40 }}
        spaceBetween={30}
        slidesPerView={3}
      >
        {data?.map((item: any) => (
          <SwiperSlide style={{ marginRight: 30 }} key={item.id}>
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  style={{
                    height: 200,
                  }}
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title={item.name} description={item.address} />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
