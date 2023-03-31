import { Card, Typography } from "antd";
import React from "react";
import { useReview } from "../../hooks/review.query";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const { Title } = Typography;
const { Meta } = Card;

export default function ReviewOverview() {
  const { data } = useReview();

  console.log("리뷰 데이터::", data);

  return (
    <div>
      <Title level={4} style={{ marginBottom: 20 }}>
        추천 리뷰
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
              style={{ width: 250 }}
              cover={
                <img
                  style={{
                    height: 180,
                  }}
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title={item?.Store?.name} description={item?.Menu?.name} />
              <p>{item?.title}</p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
