import { Button } from "antd";
import { Content } from "antd/lib/layout/layout";
import Title from "antd/lib/skeleton/Title";
import React from "react";

function HomeContent() {
  return (
    <div>
      <Content style={{}}>
        <Title level={3} style={{ padding: "12px" }}>
          Welcome back, Bread 👋
          {/* Let me know Rice 🤤 */}
        </Title>
        <div
          style={{
            // height: '20%',
            border: `1px solid black`,
            height: "100px",
          }}
        >
          추천하는 곳으로 이동
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px",
          }}
        >
          <Button type="primary" shape="round">
            All
          </Button>
          <Button type="primary" shape="round">
            Category1
          </Button>
          <Button type="primary" shape="round">
            Category2
          </Button>
          <Button type="primary" shape="round">
            Category3
          </Button>
          <Button type="primary" shape="round">
            Category4
          </Button>
        </div>

        {/* FIXME: Swiper 적용  */}
        {/* <Swiper
          modules={[Pagination, Scrollbar]}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          scrollbar={{ draggable: true }}
          // pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  height={220}
                  src="https://i.pinimg.com/564x/1d/f1/bb/1df1bb675b3bd2ab585b7358a0793bd8.jpg"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  height={220}
                  src="https://i.pinimg.com/564x/1d/f1/bb/1df1bb675b3bd2ab585b7358a0793bd8.jpg"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  height={220}
                  src="https://i.pinimg.com/564x/1d/f1/bb/1df1bb675b3bd2ab585b7358a0793bd8.jpg"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  height={220}
                  src="https://i.pinimg.com/564x/1d/f1/bb/1df1bb675b3bd2ab585b7358a0793bd8.jpg"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </SwiperSlide>
        </Swiper> */}
      </Content>
      <Content style={{ display: "flex", marginTop: "40px" }}>
        {/* FIXME: Grid */}
        <div style={{ width: "60%" }}>추천 메뉴?</div>
        <div style={{ width: "40%" }}>
          weather Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Laboriosam rem dolores cumque explicabo officiis sunt sed suscipit
          reiciendis officia. Est tempora distinctio possimus cumque repellendus
          placeat esse facere voluptatibus quod! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Laboriosam expedita nam quas perferendis
          cupiditate iusto? Deleniti ullam, voluptates soluta totam magnam
          dignissimos eveniet doloremque molestiae unde minus hic consectetur
          at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          nam vero repudiandae quos ipsa ullam maiores? Nemo qui, quis
          reprehenderit tenetur sequi nulla non id rerum officia eos, molestias
          commodi! lore, Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Numquam quos harum veritatis atque ratione eius consectetur illo
          nesciunt, molestiae perspiciatis architecto maxime doloremque quia
          aperiam explicabo voluptatem ullam! Placeat, sed? Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Nostrum blanditiis saepe non
          dolor repellat quasi aperiam consequatur exercitationem. Ipsam unde,
          illum officiis repellat esse labore vitae placeat nobis saepe facilis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          ducimus est impedit porro distinctio consequatur soluta ut ipsum aut
          iste nulla mollitia recusandae non aspernatur, quisquam blanditiis
          dolorem tempora. Id. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium labore voluptatem sapiente incidunt id
          saepe molestias? Hic aliquid harum labore fugit, ea quis
          necessitatibus tempora? Itaque tempora velit odio odit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Nihil facilis dolorum,
          deserunt eveniet unde, facere amet, in perferendis accusamus quia
          repellendus architecto porro odit debitis odio non consequatur
          incidunt dolore. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Sint animi illum ipsa distinctio repellendus blanditiis quae,
          itaque voluptate labore deleniti asperiores nisi rem vitae quis?
          Maiores deserunt tempora architecto quam? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Architecto ipsam voluptatum cum, dolore
          assumenda, aspernatur sed totam dolores dolorem ullam fuga laborum
          veritatis iste qui ducimus voluptate! Excepturi, fugiat iste. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Hic, sed eveniet
          voluptates esse rem harum enim magnam aspernatur sequi, quaerat itaque
          inventore maiores vero odio beatae quas ipsam? Ab, error? lo Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Ad, nesciunt?
          Ratione incidunt, dignissimos quidem eos neque, odio magni debitis
          autem impedit ipsam harum aperiam, mollitia necessitatibus ex
          voluptatibus ipsum facilis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Blanditiis, commodi pariatur? Culpa voluptatem
          dolorum aliquid beatae tempora quo placeat iure eaque ut minima, dicta
          est labore eum provident? Impedit, repudiandae. Possimus magnam sunt,
          quaerat laudantium rem assumenda laboriosam molestias consectetur unde
          distinctio a ullam aliquam suscipit nostrum illo quasi inventore
          corporis. Totam repellat beatae ut soluta? Recusandae, minima! Quas,
          dolorum. Voluptates nulla ducimus laboriosam ipsam, aliquid, similique
          suscipit molestias earum mollitia, beatae voluptate doloremque. Quia
          aliquam sit nemo reiciendis asperiores, a amet, dolore voluptates
          dolor impedit quam accusamus aut dicta. Deleniti perspiciatis mollitia
          quisquam. Amet vero repellat dolorem eaque incidunt totam. Enim
          placeat saepe, tempore facilis accusantium odit impedit dolorem veniam
          itaque a corrupti? Ullam natus nobis vitae non soluta. Dignissimos
          adipisci quam voluptatum debitis, amet mollitia autem impedit
          necessitatibus possimus, eligendi voluptatibus accusantium id officia
          cupiditate aliquid? Eos aliquid hic tempore ex recusandae numquam
          eveniet reiciendis voluptatum nemo consequatur? Odio facere iste fuga,
          at repellendus provident magnam porro! Odit, libero facilis quidem sit
          quae saepe, laudantium repellendus numquam vitae explicabo vero cumque
          similique. Sit laudantium omnis maiores assumenda ut. Consequatur
          suscipit atque rerum eos enim. Doloremque, placeat vel, rerum odio
          molestias a exercitationem, nemo nostrum ex veritatis aliquam! Natus
          nostrum cupiditate veniam nulla vitae ipsa? Doloribus accusantium sunt
          recusandae? Modi earum iste ducimus adipisci voluptatem officiis quod.
          Iusto, debitis. Aspernatur rerum minus rem ad cumque mollitia tenetur
          omnis aliquid. Dolorem a nemo ad. Recusandae id rerum illo dolorem
          consectetur. Cum deleniti natus ducimus velit blanditiis non suscipit
          repudiandae perferendis ipsa, id autem dolorem cupiditate, ab iste
          neque quo alias. Reiciendis doloribus animi quis praesentium ipsa
          perspiciatis alias eligendi ullam. Ipsum deleniti iste vel tempora
          laboriosam alias molestiae error maiores excepturi suscipit ratione
          minima, repudiandae quia id officia sequi incidunt sed ad quam!
          Sapiente quo aperiam dolor quod dolorem ab! Assumenda quos laborum
          dolore, nesciunt autem impedit ratione non esse iusto modi sequi
          tenetur, dignissimos adipisci? Tempore nihil pariatur officia in
          dolores aperiam ullam inventore excepturi, debitis voluptate. Rem,
          autem. Vitae tempore soluta reiciendis dicta molestiae? Perspiciatis
          optio voluptatem maxime asperiores? In architecto quaerat quibusdam
          labore repellendus repellat culpa dignissimos necessitatibus incidunt
          omnis porro molestias, laborum dolorem recusandae maxime temporibus!
          Quam unde nulla totam accusantium expedita sequi, nisi animi quas
          fuga, error in eum iusto, et dolores labore quae nesciunt nam
          voluptate deserunt non reprehenderit soluta cum blanditiis? Eaque,
          nostrum! Provident rerum dicta commodi ipsum mollitia tempora est rem
          dolorum, vero explicabo possimus? Eos eum rerum sunt ad atque, facilis
          molestias nam excepturi aperiam natus, aut quam quia ratione
          assumenda! Corrupti, qui perspiciatis numquam mollitia nobis minima!
          Quo harum unde exercitationem ipsum, commodi maxime excepturi magnam.
          Voluptatibus quaerat beatae deleniti sint. Eum est consectetur quo
          odit culpa nesciunt praesentium quia. Nam quae quasi, voluptatem
          possimus ullam, rem facere velit adipisci enim alias unde repellat
          impedit optio ratione veniam, doloribus laudantium expedita aliquam
          porro cumque officia error nihil. Fugiat, officia veritatis! Quae
          minus odit consequatur ullam natus quis veritatis voluptas iste
          placeat eligendi quas sed non, perferendis ut animi modi? Numquam
          unde, aspernatur quisquam pariatur commodi neque similique assumenda
          sequi nulla! Officia, totam expedita ad nam harum necessitatibus vero.
          Numquam accusamus voluptas nemo quis dolores cum aspernatur temporibus
          molestias incidunt, quidem blanditiis necessitatibus corporis
          consequuntur quaerat natus officia sunt enim saepe! Molestias magnam
          reprehenderit quaerat officiis accusantium iusto, optio non eos et
          delectus! Tempora unde doloribus vel est, suscipit rerum
          necessitatibus dicta harum, temporibus aliquam eos possimus provident?
          Blanditiis, nam alias! Libero dignissimos nihil excepturi accusamus
          debitis nulla eligendi reprehenderit fuga eum incidunt earum eos nemo
          amet beatae, quae explicabo quas qui totam. Dolor similique nostrum
          beatae vero, ipsum dignissimos ullam. Soluta, doloremque minus,
          aliquam numquam ratione neque quam dignissimos voluptates quo velit
          quidem saepe animi iusto? Magnam minima, ad, accusantium cumque
          repellendus, aliquid ducimus a voluptatibus maiores quia illo vero!
          Commodi aliquid minima reiciendis tenetur aperiam architecto maiores
          non possimus fuga debitis cum voluptatem cupiditate quo, consectetur,
          vitae autem cumque voluptates soluta dicta qui, consequuntur excepturi
          eius. Excepturi, iusto culpa. Ea cumque excepturi suscipit soluta
          earum voluptates, minus, sit, iure reiciendis pariatur aspernatur
          necessitatibus facere rem maiores at! Quidem amet corporis magnam
          tenetur ullam incidunt temporibus totam optio neque. Sequi?
          Perferendis maiores nemo quam at quia cum eaque accusantium. Earum
          ipsa, tempora, mollitia similique possimus expedita nemo veniam fugiat
          perferendis facere nisi, eveniet modi obcaecati? Libero necessitatibus
          ea amet assumenda! Impedit similique esse praesentium labore
          dignissimos ipsum tenetur architecto, quas error laboriosam ipsa
          quisquam inventore quaerat magnam deserunt, aut voluptatem blanditiis
          eligendi eaque perspiciatis saepe aspernatur nulla facere facilis?
          Mollitia? Quasi, quae? Numquam quis perspiciatis iure inventore ullam
          minus ut ipsa earum fuga. Tempora possimus, dolore consequuntur amet
          aut saepe iste illum minima odio totam nesciunt exercitationem animi
          quisquam! Doloremque. Facere vitae, ipsam sequi ratione voluptas
          laborum, magnam quidem eius id, veniam sunt maiores neque libero
          nihil! Deleniti neque tempora odit nisi, ea dignissimos eligendi
          veniam quo deserunt, porro aliquid. Animi, nihil omnis? Illo pariatur
          architecto est odit atque quaerat voluptatum? Iure nulla expedita
          similique pariatur. Laboriosam, deserunt! Dolore atque labore sequi
          magnam aliquam hic placeat eius nemo et maiores. Natus perferendis,
          eligendi molestias quae, iure quos quia vero nisi sequi aspernatur
          laudantium accusamus harum, fuga reprehenderit consectetur
          dignissimos. Eveniet distinctio laboriosam tempore illo velit.
          Laudantium ipsam quas corrupti sint? Earum autem cumque asperiores
          maiores similique iste quod odio, dicta sunt, accusamus animi
          veritatis iusto porro possimus totam nostrum ullam eius magnam magni
          perferendis assumenda ut ipsum maxime adipisci. Porro? Obcaecati
          laborum accusantium dolore veritatis? Cumque, ad, quibusdam ipsam
          dolorem rem quam distinctio ab ut blanditiis doloribus nostrum libero
          non rerum, deserunt nesciunt soluta numquam impedit expedita dolores
          tempora saepe. Deleniti qui eos, porro est dolore, sequi aliquid harum
          laudantium ex quisquam nam. Distinctio obcaecati quos odit et autem
          quia velit excepturi quis consectetur quam? Sint velit quia eveniet
          possimus! Perferendis, hic. Aperiam doloremque sint alias explicabo
          consequatur labore distinctio laboriosam magni enim deleniti ea
          expedita placeat numquam facilis dolorum, ipsum consequuntur dicta
          nobis natus! Nesciunt dolores quisquam nihil sequi? Culpa, nihil. Hic
          minus, accusamus sapiente ullam ab suscipit exercitationem molestias
          temporibus ea accusantium facere consequuntur doloribus earum quasi
          ipsam, dolore rerum quia! Sit, voluptatibus veritatis quae porro neque
          aliquam! Maiores veritatis adipisci explicabo pariatur, illum aliquam,
          hic mollitia voluptates dolore aperiam quam sint ab. Temporibus, sint
          deserunt hic omnis quod commodi, ab unde quis quia, explicabo autem
          libero consequatur. Repellat corporis, eum blanditiis minus
          perspiciatis voluptas velit ipsam inventore ut consequatur dolorum,
          repudiandae molestiae explicabo nihil eius accusantium placeat amet
          vitae labore sit laudantium necessitatibus? Numquam commodi
          exercitationem nemo. Quaerat tempore ratione minima alias, vel
          aliquid. Laudantium eveniet voluptatem, iure quam expedita, illum
          dolorum modi excepturi hic natus soluta necessitatibus! Eligendi,
          laboriosam saepe repellendus vero temporibus ex velit possimus.
          Voluptatem obcaecati perferendis aliquam magnam tempora quibusdam
          excepturi? Deleniti, ea! Eius nihil nesciunt, velit optio quam
          quibusdam expedita incidunt quidem magni assumenda quae veniam
          accusamus perferendis hic voluptas odio provident! Dignissimos
          veritatis suscipit eos dolor, reiciendis ea magni hic quaerat! Sunt
          similique minima, iste et eius doloribus praesentium accusantium
          nostrum saepe omnis rem voluptatum odit, perspiciatis consectetur
          dolore atque eveniet. Illo sequi perspiciatis quod numquam aut
          incidunt iusto consequatur vel sunt laborum officiis eveniet, quaerat
          nostrum reiciendis possimus! Voluptatibus nobis neque quo error
          molestias! Natus debitis alias nam atque autem! Nam, alias harum.
          Commodi voluptatem ex esse possimus reprehenderit recusandae ullam,
          tempora error praesentium ut repellat dolor sequi exercitationem ipsum
          excepturi aut aspernatur harum rem cum vero quis voluptatibus nostrum?
          Delectus eligendi animi eos voluptates, nostrum vitae neque vero nulla
          quis doloribus tempora fugit dicta explicabo, assumenda maxime ipsum.
          Quo molestias unde amet harum dignissimos aperiam eaque repellat iure
          quasi? Asperiores modi magnam nobis, delectus ullam officiis adipisci
          quae nulla perspiciatis. Quidem dignissimos placeat iusto consequuntur
          veniam nemo neque repellat quibusdam hic dolorem sit, impedit eveniet
          distinctio, eligendi natus quo. Magni, recusandae! Cum voluptates
          aliquam rerum saepe dicta hic ea accusantium dolores dolorem adipisci
          impedit quos iste ab ad nesciunt corrupti, optio quis aliquid aperiam?
          Similique, impedit quis! Reiciendis, odio. A excepturi magnam minus
          quis ea saepe soluta, repellat, maiores aspernatur laboriosam incidunt
          earum ratione illo natus, adipisci numquam molestias consequatur
          dolor! Dicta fugit optio ipsum? Quae exercitationem magnam ipsum. Nam
          cupiditate inventore nulla at sint repellendus numquam quidem harum
          sunt nesciunt sapiente consectetur vitae fugiat dolor sequi a
          dignissimos illo praesentium in, debitis voluptatem eligendi accusamus
          deserunt. Placeat, asperiores. Eos necessitatibus illo dolorem fugiat
          eum aliquid consequuntur, odit vel veniam maiores dolorum quam
          aspernatur iste reprehenderit unde, nisi omnis, laboriosam nesciunt
          voluptatibus. Reprehenderit unde odit mollitia, consequatur
          accusantium cumque? Sit fugiat eum est quia commodi ea necessitatibus
          sequi architecto tenetur nobis facilis ut, suscipit sint, nesciunt
          ipsum corrupti unde, natus omnis harum explicabo? Modi ratione
          delectus esse placeat est. Porro error facilis eos minus iste quo
          aperiam reprehenderit praesentium dolores! Enim minus voluptate
          repellat in, corrupti, placeat totam ad necessitatibus non, molestias
          temporibus voluptatibus inventore cumque perspiciatis laborum
          quisquam. Beatae pariatur tempora veniam, repellat perferendis
          recusandae, ut in atque suscipit cum laboriosam magnam! Minima veniam
          provident itaque, sunt velit, corrupti quae culpa fugit ullam eius
          nisi eveniet error dolore! Pariatur, repellendus ducimus labore,
          incidunt non facere eligendi mollitia dolor cupiditate temporibus
          aperiam obcaecati magnam! Incidunt similique nobis sed exercitationem
          tempore? Voluptas cupiditate quaerat dolore maxime aperiam. Eos,
          debitis ut. Voluptates, laboriosam. Beatae labore, odio totam, fuga
          illo ullam amet debitis maiores aperiam vel repellendus saepe placeat
          ipsum obcaecati necessitatibus quod doloribus sint eos non ratione!
          Eos magnam eveniet distinctio. Saepe ea sit, deserunt eligendi quis
          accusantium cum! Delectus consequatur obcaecati, optio suscipit eum
          cum alias quis labore nisi ipsam nesciunt esse enim consectetur
          aperiam officiis earum in pariatur? Distinctio. Incidunt rerum maiores
          molestiae. Cumque facere quasi soluta facilis, ducimus doloremque sit
          commodi suscipit amet ratione quo at itaque rem rerum qui quam
          consectetur asperiores cum non distinctio quidem! Magnam! Quaerat
          voluptate aut vero dolores perferendis rem fugit architecto
          asperiores. Necessitatibus impedit molestias blanditiis facilis
          debitis sit voluptatibus aliquam! Assumenda rem perferendis facere
          repellat officiis, magni repellendus explicabo aliquid eum. Corrupti
          explicabo dicta pariatur provident veritatis? Iure sed, doloribus
          delectus asperiores sapiente consequatur provident aperiam iste nulla
          reprehenderit, nemo assumenda id deleniti, sint itaque quam quae
          corporis qui molestias eum! Fugit minima provident consequatur nam
          inventore aliquid temporibus incidunt porro magni quibusdam quia vero,
          veritatis non nulla in nostrum aut sapiente quos omnis aspernatur
          possimus consequuntur rem, quisquam mollitia. Quod! Et accusantium eum
          laborum facere omnis blanditiis ipsum accusamus voluptatum eius, vitae
          expedita odit obcaecati doloribus in delectus culpa dignissimos quae
          repellat qui alias voluptate animi, iure impedit inventore? Quos? Quos
          officia nihil illo animi aspernatur corporis id, eum ipsam incidunt
          eius veritatis harum provident quis rerum vel? Totam mollitia facere
          sunt, aliquid eligendi vel cupiditate rem eius incidunt eveniet?
          Debitis labore omnis ex quidem sapiente veritatis voluptas tenetur
          aliquid molestiae eveniet maiores, ducimus perferendis doloribus
          laboriosam totam fugiat autem quis quia beatae odit, incidunt
          obcaecati quod molestias maxime? Repellendus! Ab sint nesciunt, quos
          nostrum iure dolorem magni! Repudiandae reiciendis beatae et molestias
          autem animi sequi omnis tempora neque deserunt natus itaque nemo
          obcaecati explicabo, fugit quis est! Aut, excepturi. Odit fuga
          molestiae expedita, sunt saepe asperiores voluptatibus ut amet ab
          molestias nihil voluptas aliquid eligendi vero iure error consectetur,
          reprehenderit repellat ea veniam eius corrupti, hic eum? Cumque,
          accusamus? Illum facilis velit harum nulla. Voluptates ullam quod
          laudantium corporis quo facere quia magni? Impedit, consequuntur
          facere a, nostrum rerum animi aspernatur, quas earum quos ut deleniti
          eum sed eaque. Nostrum sunt exercitationem, alias neque aspernatur
          laboriosam aut esse ab fugiat quidem beatae totam pariatur veniam amet
          deserunt voluptatum, maxime sapiente consectetur? Expedita, incidunt
          error nam totam aliquam illo iste. Ex asperiores expedita vero, eos
          perferendis quo nihil voluptatem rem laborum beatae consequuntur quos
          inventore iste nemo dolorum quis aliquid, illo neque omnis. Distinctio
          dolore consequuntur fugiat ab minima id! Hic, officiis ea consectetur
          deleniti facilis non quo? Nesciunt, a illum architecto pariatur cum
          ipsa aliquid autem maiores veniam necessitatibus fuga minus soluta.
          Rerum itaque soluta cum quae velit dolorem. Repellendus, dignissimos
          officia? Culpa voluptatibus aspernatur adipisci modi ipsum incidunt
          vel provident ab voluptas, atque, odit eaque temporibus sapiente sequi
          quos ut iure dolor totam ad, ullam excepturi? Harum, maiores.
          Inventore dolores, minima architecto, temporibus illum laborum aut
          quos sint unde perferendis, dolorum quam incidunt corporis. Architecto
          est non consequuntur dolorem officia delectus doloremque a? Mollitia
          esse totam velit accusantium! Placeat quibusdam porro maxime illum
          dolorem distinctio, quo esse. Iste blanditiis soluta quo nesciunt
          cupiditate at hic? Mollitia, ducimus distinctio eaque eius commodi sed
          dolorum, totam corporis alias similique facilis? Alias, vel beatae.
          Dolor aperiam exercitationem, earum, tenetur quisquam perferendis
          iusto quis iure omnis, quod nulla culpa minus assumenda vel esse
          impedit reprehenderit dolorem corrupti. Aperiam labore quod iure
          tempore. Sed dolore nesciunt incidunt asperiores atque obcaecati
          commodi inventore fuga cumque, soluta a laudantium eum, tempora illum
          corporis dolores. Reiciendis magnam aliquid ducimus maxime doloribus
          sunt est totam placeat sequi. Veritatis velit at vel, facere
          voluptatem quos atque iusto ipsum, consequatur animi obcaecati vitae.
          Pariatur veritatis illum et omnis, recusandae excepturi aut quidem
          incidunt fuga nobis sit minima provident cumque? In harum fuga
          deleniti doloribus minus doloremque quasi explicabo a. Iure fuga
          quaerat consequatur accusamus harum non eius beatae animi quis
          cupiditate tenetur numquam, quas nihil vero sint dolorem perspiciatis?
          Ab, quasi quae quibusdam minima beatae sint consequuntur reiciendis
          quos voluptatem. Nihil saepe, dignissimos minima consequatur quia
          doloremque magni iste adipisci. Totam, hic quam! Autem nostrum qui
          numquam eius error. At amet illum facilis aliquam doloremque natus
          pariatur atque porro laudantium sed excepturi nam, ipsam alias
          mollitia illo. Necessitatibus cumque, inventore ex officia sapiente
          blanditiis suscipit natus laboriosam quidem eum. Dolore blanditiis
          obcaecati sed minus, porro eius excepturi natus ad commodi! Nostrum,
          repudiandae? Minima molestias eligendi dolores exercitationem,
          consequatur mollitia repellendus nesciunt at numquam dolorum qui sunt
          ipsam sint id. Cumque architecto optio obcaecati. Tenetur ut quasi
          optio possimus, cumque quidem voluptates odio, odit laudantium cum
          aliquid reiciendis dolorum adipisci sint consequuntur sit quas modi
          eum accusamus in natus ducimus? Laborum, laudantium iure ad sed fugiat
          sint repellat provident incidunt officia expedita numquam non optio
          eos architecto nulla facere eum deleniti iusto ducimus iste sit?
          Repellendus dignissimos doloribus iure quibusdam. Maiores aliquam
          molestias sapiente similique, nulla voluptate incidunt in. Atque eum
          praesentium ipsam nulla, perferendis repellat laborum beatae fugiat
          possimus placeat consequuntur natus maxime ut dolore hic nihil debitis
          magni. Doloremque, in, nostrum qui delectus quibusdam iure, rerum odit
          nisi non ducimus illum veniam iusto soluta. Reiciendis, soluta ipsam!
          Totam dolore rerum iste? Accusantium ipsam culpa quidem saepe
          voluptatibus esse. Commodi corporis rem, vitae quasi iure cumque
          impedit iste, dicta dolorem voluptatibus deserunt. Necessitatibus
          asperiores ipsum, ad odit saepe, consectetur amet libero maiores
          recusandae omnis doloribus tenetur voluptatem, ut quas! Facilis nemo
          dicta commodi, beatae saepe error dolore ratione voluptate dolorem
          nobis laudantium adipisci nam, tenetur repellendus impedit earum quos
          aliquam modi vitae repudiandae, eligendi rerum similique sed
          voluptates? Similique. Corrupti totam expedita assumenda doloribus
          recusandae quod, earum veniam nam voluptatum magnam molestiae aut illo
          sed, non pariatur aperiam ab. Sapiente soluta labore suscipit
          voluptatibus possimus, hic quaerat a. Fuga. Nisi laborum ratione
          voluptas porro dolore quis magnam cupiditate incidunt culpa magni,
          explicabo maxime repellendus dolorum quo asperiores qui perferendis
          quisquam expedita eius consequuntur similique quos fuga beatae! Sed,
          sapiente! Exercitationem sit eius inventore, beatae minima quis
          reiciendis earum magnam, eum quas, molestias doloribus sequi! Vel,
          magnam necessitatibus dolore voluptatum soluta nobis ab doloremque.
          Harum praesentium est blanditiis tenetur sit. Recusandae placeat
          delectus numquam velit sequi eveniet officia soluta praesentium facere
          pariatur? Magnam qui quis nobis fugit ipsam! Quo accusamus sunt
          dolores autem facilis sequi nisi optio necessitatibus officiis
          provident. Reprehenderit ad quo libero obcaecati odio maxime nesciunt
          doloremque sequi exercitationem ipsum beatae, necessitatibus autem
          voluptatum, magni recusandae vero suscipit sunt labore facilis
          adipisci ut asperiores dolores esse impedit? Laudantium! Provident
          repellat quos voluptatem, nihil sed asperiores, libero repudiandae
          accusamus ratione ad sit quis eligendi quibusdam inventore consectetur
          ea optio alias doloribus hic rem eveniet eaque. Facilis alias ipsum
          voluptatum? Itaque minus perspiciatis hic dolores alias quae aliquam
          similique voluptate in tempore nobis, sunt deserunt iste rem eius?
          Quidem nobis autem deleniti numquam animi libero omnis ducimus
          exercitationem hic fugiat? Tempora sapiente iusto vel pariatur
          accusamus doloremque sunt sit, blanditiis non est praesentium incidunt
          recusandae architecto magni asperiores sequi repellat. Reprehenderit
          sit vero quasi esse repudiandae totam inventore quos labore. Tempore
          eaque blanditiis laborum. Eveniet, esse! At, unde sapiente blanditiis
          et atque ipsam repellendus accusamus assumenda quaerat quam vel
          exercitationem sunt cumque aliquid, doloribus architecto ut pariatur
          quae laborum! Exercitationem. Et quia laborum soluta unde dolores
          quidem voluptatibus reiciendis vero consequuntur. Impedit aliquid
          labore aut voluptas earum doloremque quibusdam dolores obcaecati
          dignissimos sit? Laudantium provident iste similique perferendis animi
          adipisci. Libero, repudiandae fugit! Corrupti ad quo minus sit
          assumenda deleniti, officiis dolorum labore eum perferendis,
          consectetur quis quia qui inventore. Eaque, voluptatem qui sunt
          dolorem porro recusandae ex commodi! Deserunt. Veritatis molestias
          mollitia nihil voluptate magnam, labore unde tempora dolorum tenetur
          adipisci in ratione, minima eum maiores, iste repellendus dignissimos
          eius nam vero qui pariatur vitae officiis aut non? Explicabo. Culpa
          quia facilis veritatis ea perspiciatis error. Expedita, est ducimus.
          Corporis incidunt obcaecati atque fugit sed quo necessitatibus
          voluptatum voluptatibus veniam totam aliquid, dolores reiciendis
          praesentium? Animi quisquam iure ipsa. Ea nulla nostrum nihil, earum
          provident ut accusantium, unde maiores cupiditate laborum at ab harum
          tenetur placeat corrupti minus? Itaque incidunt nobis quos fugiat illo
          impedit mollitia sint. Tempora, ratione? Amet laudantium possimus,
          eveniet debitis eius sint quae dolor soluta rerum inventore numquam
          eaque nisi architecto at facilis? Ullam porro molestias debitis nulla
          esse dolores excepturi reiciendis. Explicabo, aliquam quo. Temporibus
          quod dolorem ea tempora incidunt perferendis eligendi culpa quos!
          Magni quisquam corrupti modi reiciendis doloremque architecto non in
          iure repellendus fugit deleniti, facere nesciunt. Placeat, ipsam! Hic,
          qui eos! Inventore, totam. Asperiores optio laudantium voluptatem
          doloremque, officia inventore beatae porro ut eaque sapiente
          consequuntur, nobis reiciendis. Qui illo, unde vitae non iusto maxime
          libero iste architecto in tempora nostrum! In ullam perspiciatis
          doloribus nisi itaque fugiat suscipit delectus, laborum vitae
          cupiditate provident sapiente ipsa modi inventore sequi corporis
          eligendi natus, unde odit repellat obcaecati esse quos optio. Earum,
          est!
        </div>
      </Content>
    </div>
  );
}

export default HomeContent;
