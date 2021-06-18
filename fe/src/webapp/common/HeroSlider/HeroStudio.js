import React from "react";
import imgSlide1 from "webapp/images/slides/home-bg-1.jpg";
import imgSlide2 from "webapp/images/slides/home-bg-2.jpg";
import imgDummy from "webapp/images/dummy.png";
import imgMacbook from "webapp/images/macbookpro.png";
import imgIpad from "webapp/images/ipad.png";
import imgIphone from "webapp/images/ihpone.png";
import imgAstro from "webapp/images/astro-img.png";
import imgPlanet from "webapp/images/planet-img.png";
import imgPlanet2 from "webapp/images/planet-img-2.png";
import imgPlanet3 from "webapp/images/planet-img-3.png";
import imgScreen from "webapp/images/screen1_content.jpg";
import imgScreen2 from "webapp/images/screen2_content.jpg";
import imgScreen3 from "webapp/images/screen3_content.png";
import Icofont from "react-icofont";

const HeroStudio = () => (
  <section className="remove-padding transition-none" id="home">
    <div
      id="rev_slider_975_1_wrapper"
      className="rev_slider_wrapper fullscreen-container"
      data-alias="agency-website"
      data-source="gallery"
      style={{ backgroundColor: "#24182e", padding: "0px" }}
    >
      <div
        id="rev_slider_975_1"
        className="rev_slider fullscreenbanner"
        style={{ display: "none" }}
        data-version="5.4.1"
      >
        <ul>
          <li
            data-index="rs-2730"
            data-transition="slideoverdown"
            data-slotamount="default"
            data-hideafterloop="0"
            data-hideslideonmobile="off"
            data-easein="Power3.easeInOut"
            data-easeout="Power3.easeInOut"
            data-masterspeed="1500"
            data-rotate="0"
            data-saveperformance="off"
            data-title="Intro"
            data-param1=""
            data-param2=""
            data-param3=""
            data-param4=""
            data-param5=""
            data-param6=""
            data-param7=""
            data-param8=""
            data-param9=""
            data-param10=""
            data-description=""
          >
            <img
              src={imgSlide1}
              alt=""
              data-bgposition="center center"
              data-bgfit="cover"
              data-bgrepeat="no-repeat"
              data-bgparallax="off"
              className="rev-slidebg"
              data-no-retina
            />

            <div
              className="tp-caption   rs-parallaxlevel-5"
              id="slide-2730-layer-1"
              data-x="['center','center','center','center']"
              data-hoffset="['0','-30','0','0']"
              data-y="['middle','middle','bottom','bottom']"
              data-voffset="['0','0','40','0']"
              data-width="none"
              data-height="none"
              data-whitespace="nowrap"
              data-type="image"
              data-responsive_offset="off"
              data-responsive="off"
              data-frames='[{"from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","speed":1000,"to":"o:1;","delay":1000,"ease":"Power3.easeOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{ zIndex: "5", textTransform: "left", borderWidth: "0px" }}
            >
              <img
                src={imgDummy}
                alt=""
                data-ww="['1000px','800px','600px','380px']"
                data-hh="['600px','480px','360px','228px']"
                width="1000"
                height="600"
                data-lazyload={imgMacbook}
                data-no-retina
              />
            </div>

            <div
              className="tp-caption   rs-parallaxlevel-5"
              id="slide-2730-layer-2"
              data-x="['center','center','center','center']"
              data-hoffset="['0','-30','0','0']"
              data-y="['middle','middle','bottom','bottom']"
              data-voffset="['-14','-10','97','35']"
              data-width="none"
              data-height="none"
              data-whitespace="nowrap"
              data-type="image"
              data-responsive_offset="off"
              data-responsive="off"
              data-frames='[{"from":"z:0;rX:0deg;rY:0;rZ:0;sX:2;sY:2;skX:0;skY:0;opacity:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1000,"to":"o:1;","delay":1500,"ease":"Power3.easeOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{ zIndex: "6", textTransform: "left", borderWidth: "0px" }}
            >
              <img
                src={imgDummy}
                alt=""
                data-ww="['672px','572px','403','255px']"
                data-hh="['442px','376px','265','169px']"
                width="672"
                height="442"
                data-lazyload={imgScreen}
                data-no-retina
              />
            </div>

            <div
              className="tp-caption tp-shape tp-shapewrapper  tp-resizeme rs-parallaxlevel-3"
              id="slide-2730-layer-3"
              data-x="['right','right','center','center']"
              data-hoffset="['20','0','0','0']"
              data-y="['middle','middle','top','top']"
              data-voffset="['0','0','130','120']"
              data-width="300"
              data-height="330"
              data-whitespace="nowrap"
              data-type="shape"
              data-responsive_offset="on"
              data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1000,"to":"o:1;","delay":1500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "7",
                textTransform: "left",
                backgroundColor: "#F5325C",
                borderColor: "rgba(0, 0, 0, 0.50)",
                borderWidth: "0px",
              }}
            ></div>

            <div
              className="tp-caption Agency-SmallTitle   tp-resizeme rs-parallaxlevel-3"
              id="slide-2730-layer-4"
              data-x="['right','right','center','center']"
              data-hoffset="['40','20','0','0']"
              data-y="['middle','middle','top','top']"
              data-voffset="['-98','-98','164','154']"
              data-width="260"
              data-height="none"
              data-whitespace="normal"
              data-type="text"
              data-responsive_offset="on"
              data-frames='[{"from":"y:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "8",
                minWidth: "260px",
                maxWidth: "260px",
                whiteSpace: "normal",
                textTransform: "left",
                color: "#fff",
              }}
            >
              <span style={{ fontWeight: "700 !important" }}>OUR DESIGN</span>
              COLORFUL LIKE NATURE
            </div>

            <div
              className="tp-caption Agency-SmallContent   tp-resizeme rs-parallaxlevel-3"
              id="slide-2730-layer-5"
              data-x="['right','right','center','center']"
              data-hoffset="['40','20','0','0']"
              data-y="['middle','middle','top','top']"
              data-voffset="['20','20','255','246']"
              data-width="260"
              data-height="none"
              data-whitespace="normal"
              data-type="text"
              data-responsive_offset="on"
              data-frames='[{"from":"y:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":2150,"ease":"Power4.easeOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "9",
                minWidth: "260px",
                maxWidth: "260px",
                whiteSpace: "normal",
                color: "#fff",
                textTransform: "left",
              }}
            >
              When you come across someone colorful and vibrant maybe in the
              present it isn't so interesting, but, in the past, it sheds a
              wonderful light onto living life.
            </div>

            <div
              className="tp-caption tp-resizeme rs-parallaxlevel-4"
              id="slide-3046-layer-6"
              data-x="['left','left','left','left']"
              data-hoffset="['-300','-300','0','0']"
              data-y="['middle','middle','middle','middle']"
              data-voffset="['-200','0','-316','-316']"
              data-width="none"
              data-height="none"
              data-whitespace="nowrap"
              data-type="image"
              data-responsive_offset="on"
              data-frames='[{"from":"opacity:0;","speed":1000,"to":"o:1;","delay":2000,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"nothing"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{ zIndex: "14", borderWidth: "0px" }}
            >
              <div
                className="rs-looped rs-slideloop"
                data-easing=""
                data-speed="3"
                data-xs="0"
                data-xe="0"
                data-ys="10"
                data-ye="-10"
              >
                <img
                  src={imgAstro}
                  alt=""
                  data-ww="['440px','320px','250px','120px']"
                  data-hh="['476px','346px','270px','130px']"
                  width="440"
                  height="476"
                  data-no-retina
                />
              </div>
            </div>

            <div
              className="tp-caption tp-resizeme rs-parallaxlevel-5"
              id="slide-3046-layer-7"
              data-x="['right','right','right','right']"
              data-hoffset="['-300','-300','100','0']"
              data-y="['middle','middle','bottom','bottom']"
              data-voffset="['200','200','50','-100']"
              data-width="none"
              data-height="none"
              data-whitespace="nowrap"
              data-type="image"
              data-responsive_offset="on"
              data-frames='[{"from":"opacity:0;","speed":1000,"to":"o:1;","delay":2000,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"nothing"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{ zIndex: "14", borderWidth: "0px" }}
            >
              <div
                className="rs-looped rs-wave"
                data-speed="4"
                data-angle="0"
                data-radius="10"
                data-origin="50% 50%"
              >
                <img
                  src={imgPlanet}
                  alt=""
                  data-ww="['298px','298px','120px','150px']"
                  data-hh="['342px','342px','130px','162px']"
                  width="298"
                  height="342"
                  data-no-retina
                />
              </div>
            </div>

            <div
              className="tp-caption Agency-NavButton rev-btn  tp-resizeme rs-parallaxlevel-3"
              id="slide-2730-layer-8"
              data-x="['right','right','center','center']"
              data-hoffset="['71','51','175','175']"
              data-y="['middle','middle','top','top']"
              data-voffset="['190','190','181','171']"
              data-width="50"
              data-height="50"
              data-whitespace="nowrap"
              data-type="button"
              data-actions='[{"event":"click","action":"jumptoslide","slide":"previous","delay":""}]'
              data-responsive_offset="on"
              data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1000,"to":"o:1;","delay":2400,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bg:rgba(51, 51, 51, 1.00);bs:solid;"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "11",
                minWidth: "50px",
                maxWidth: "50px",
                whiteSpace: "nowrap",
                color: "#00064b",
                textTransform: "left",
                outline: "none",
                boxShadow: "none",
                boxSizing: "border-box",
                cursor: "pointer",
              }}
            >
              <Icofont icon="simple-left" />
            </div>

            <div
              className="tp-caption Agency-NavButton rev-btn  tp-resizeme rs-parallaxlevel-3"
              id="slide-2730-layer-7"
              data-x="['right','right','center','center']"
              data-hoffset="['20','0','175','175']"
              data-y="['middle','middle','top','top']"
              data-voffset="['190','190','130','120']"
              data-width="50"
              data-height="50"
              data-whitespace="nowrap"
              data-type="button"
              data-actions='[{"event":"click","action":"jumptoslide","slide":"next","delay":""}]'
              data-responsive_offset="on"
              data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1000,"to":"o:1;","delay":2500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bg:rgba(51, 51, 51, 1.00);bs:solid;"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "12",
                minWidth: "50px",
                maxWidth: "50px",
                whiteSpace: "nowrap",
                color: "#00064b",
                textTransform: "left",
                outline: "none",
                boxShadow: "none",
                boxSizing: "border-box",
                cursor: "pointer",
              }}
            >
              <Icofont icon="simple-right" />
            </div>
          </li>

          <li
            data-index="rs-2731"
            data-transition="slideoverdown"
            data-slotamount="default"
            data-hideafterloop="0"
            data-hideslideonmobile="off"
            data-easein="Power3.easeInOut"
            data-easeout="Power3.easeInOut"
            data-masterspeed="1500"
            data-rotate="0"
            data-saveperformance="off"
            data-title="Responsive"
            data-param1=""
            data-param2=""
            data-param3=""
            data-param4=""
            data-param5=""
            data-param6=""
            data-param7=""
            data-param8=""
            data-param9=""
            data-param10=""
            data-description=""
          >
            <img
              src={imgSlide2}
              alt=""
              data-bgposition="center center"
              data-bgfit="cover"
              data-bgrepeat="no-repeat"
              data-bgparallax="off"
              className="rev-slidebg"
              data-no-retina
            />

            <div
              className="tp-caption   rs-parallaxlevel-5"
              id="slide-2731-layer-1"
              data-x="['center','center','center','center']"
              data-hoffset="['70','20','60','20']"
              data-y="['middle','middle','bottom','bottom']"
              data-voffset="['0','0','30','20']"
              data-width="none"
              data-height="none"
              data-whitespace="nowrap"
              data-type="image"
              data-responsive_offset="off"
              data-responsive="off"
              data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1000,"ease":"Power3.easeOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "13",
                textTransform: "left",
                borderWidth: "0px",
              }}
            >
              <img
                src={imgDummy}
                alt=""
                data-ww="['430px','430px','360px','200px']"
                data-hh="['540px','540px','452px','251px']"
                width="430"
                height="540"
                data-lazyload={imgIpad}
                data-no-retina
              />
            </div>

            <div
              className="tp-caption   rs-parallaxlevel-5"
              id="slide-2731-layer-2"
              data-x="['center','center','center','center']"
              data-hoffset="['70','20','60','20']"
              data-y="['middle','middle','bottom','bottom']"
              data-voffset="['-3','-3','97','56']"
              data-width="none"
              data-height="none"
              data-whitespace="nowrap"
              data-type="image"
              data-responsive_offset="off"
              data-responsive="off"
              data-frames='[{"from":"z:0;rX:0deg;rY:0;rZ:0;sX:2;sY:2;skX:0;skY:0;opacity:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1000,"to":"o:1;","delay":1500,"ease":"Power3.easeOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "14",
                textTransform: "left",
                borderWidth: "0px",
              }}
            >
              <img
                src={imgDummy}
                alt=""
                data-ww="['293px','293px','245px','137px']"
                data-hh="['428px','428px','358px','200px']"
                width="293"
                height="428"
                data-lazyload={imgScreen2}
                data-no-retina
              />
            </div>

            <div
              className="tp-caption   rs-parallaxlevel-4"
              id="slide-2731-layer-9"
              data-x="['center','center','center','center']"
              data-hoffset="['-112','-158','-92','-57']"
              data-y="['middle','middle','bottom','bottom']"
              data-voffset="['60','60','15','14']"
              data-width="none"
              data-height="none"
              data-whitespace="nowrap"
              data-type="image"
              data-responsive_offset="off"
              data-responsive="off"
              data-frames='[{"from":"x:50px;opacity:0;","speed":1000,"to":"o:1;","delay":1250,"ease":"Power3.easeOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "15",
                textTransform: "left",
                borderWidth: "0px",
              }}
            >
              <img
                src={imgDummy}
                alt=""
                data-ww="['260px','260px','220px','120px']"
                data-hh="['450px','450px','381px','208px']"
                width="260"
                height="450"
                data-lazyload={imgIphone}
                data-no-retina
              />
            </div>

            <div
              className="tp-caption   rs-parallaxlevel-4"
              id="slide-2731-layer-10"
              data-x="['center','center','center','center']"
              data-hoffset="['-111','-157','-92','-57']"
              data-y="['middle','middle','bottom','bottom']"
              data-voffset="['61','0','0','0']"
              data-width="none"
              data-height="none"
              data-whitespace="nowrap"
              data-type="image"
              data-responsive_offset="off"
              data-responsive="off"
              data-frames='[{"from":"z:0;rX:0deg;rY:0;rZ:0;sX:2;sY:2;skX:0;skY:0;opacity:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1000,"to":"o:1;","delay":1750,"ease":"Power3.easeOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "16",
                textTransform: "left",
                borderWidth: "0px",
              }}
            >
              <img
                src={imgDummy}
                alt=""
                data-ww="['164px','164px','146px','82px']"
                data-hh="['359px','359px','320','180px']"
                width="164"
                height="359"
                data-lazyload={imgScreen3}
                data-no-retina
              />
            </div>

            <div
              className="tp-caption tp-shape tp-shapewrapper  tp-resizeme rs-parallaxlevel-3"
              id="slide-2731-layer-3"
              data-x="['right','right','center','center']"
              data-hoffset="['20','0','0','0']"
              data-y="['middle','middle','top','top']"
              data-voffset="['0','0','130','120']"
              data-width="300"
              data-height="330"
              data-whitespace="nowrap"
              data-type="shape"
              data-responsive_offset="on"
              data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1000,"to":"o:1;","delay":1500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "17",
                textTransform: "left",
                backgroundColor: "rgb(245, 50, 92)",
                borderColor: "rgb(245, 50, 92)",
                borderWidth: "0px",
              }}
            ></div>

            <div
              className="tp-caption Agency-SmallTitle   tp-resizeme rs-parallaxlevel-3"
              id="slide-2731-layer-4"
              data-x="['right','right','center','center']"
              data-hoffset="['40','20','0','0']"
              data-y="['middle','middle','top','top']"
              data-voffset="['-98','-98','164','154']"
              data-width="260"
              data-height="none"
              data-whitespace="normal"
              data-type="text"
              data-responsive_offset="on"
              data-frames='[{"from":"y:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "18",
                minWidth: "260px",
                maxWidth: "260px",
                whiteSpace: "normal",
                textTransform: "left",
              }}
            >
              <span style={{ color: "#fff", fontWeight: "700 !important" }}>
                RESPONSIVE
              </span>
              <br />
              FOR MOBILE PERFECTION
            </div>

            <div
              className="tp-caption Agency-SmallContent   tp-resizeme rs-parallaxlevel-3"
              id="slide-2731-layer-5"
              data-x="['right','right','center','center']"
              data-hoffset="['40','20','0','0']"
              data-y="['middle','middle','top','top']"
              data-voffset="['9','8','255','245']"
              data-width="260"
              data-height="none"
              data-whitespace="normal"
              data-type="text"
              data-responsive_offset="on"
              data-frames='[{"from":"y:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":2150,"ease":"Power4.easeOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "19",
                minWidth: "260px",
                maxWidth: "260px",
                whiteSpace: "normal",
                color: "#fff",
                textTransform: "left",
              }}
            >
              Our Sliders don’t just look great on desktop devices, but scale
              down beautifully to work on mobile devices like smartphones or
              tablets.
            </div>

            <div
              className="tp-caption tp-resizeme rs-parallaxlevel-4"
              id="slide-3046-layer-6"
              data-x="['left','left','left','left']"
              data-hoffset="['-300','-300','-487','-487']"
              data-y="['middle','middle','middle','middle']"
              data-voffset="['-200','0','-316','-316']"
              data-width="none"
              data-height="none"
              data-whitespace="nowrap"
              data-type="image"
              data-responsive_offset="on"
              data-frames='[{"from":"opacity:0;","speed":1000,"to":"o:1;","delay":2000,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"nothing"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{ zIndex: "14", borderWidth: "0px" }}
            >
              <div
                className="rs-looped rs-wave"
                data-speed="4"
                data-angle="0"
                data-radius="10"
                data-origin="50% 50%"
              >
                <img
                  src={imgPlanet2}
                  alt=""
                  data-ww="['440px','440px','820px','820px']"
                  data-hh="['476px','476px','820px','820px']"
                  width="440"
                  height="476"
                  data-no-retina
                />
              </div>
            </div>

            <div
              className="tp-caption tp-resizeme rs-parallaxlevel-5"
              id="slide-3046-layer-7"
              data-x="['right','right','right','right']"
              data-hoffset="['-300','-300','-587','-587']"
              data-y="['middle','middle','middle','middle']"
              data-voffset="['200','200','-316','-316']"
              data-width="none"
              data-height="none"
              data-whitespace="nowrap"
              data-type="image"
              data-responsive_offset="on"
              data-frames='[{"from":"opacity:0;","speed":1000,"to":"o:1;","delay":2000,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"opacity:0;","ease":"nothing"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{ zIndex: "14", borderWidth: "0px" }}
            >
              <div
                className="rs-looped rs-slideloop"
                data-easing=""
                data-speed="3"
                data-xs="0"
                data-xe="0"
                data-ys="10"
                data-ye="-10"
              >
                <img
                  src={imgPlanet3}
                  alt=""
                  data-ww="['298px','298px','820px','820px']"
                  data-hh="['342px','342px','820px','820px']"
                  width="298"
                  height="342"
                  data-no-retina
                />
              </div>
            </div>

            <div
              className="tp-caption Agency-NavButton rev-btn  tp-resizeme rs-parallaxlevel-3"
              id="slide-2731-layer-8"
              data-x="['right','right','center','center']"
              data-hoffset="['71','51','175','175']"
              data-y="['middle','middle','top','top']"
              data-voffset="['190','190','181','171']"
              data-width="50"
              data-height="50"
              data-whitespace="nowrap"
              data-type="button"
              data-actions='[{"event":"click","action":"jumptoslide","slide":"previous","delay":""}]'
              data-responsive_offset="on"
              data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1000,"to":"o:1;","delay":2400,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bg:rgba(51, 51, 51, 1.00);bs:solid;"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "21",
                minWidth: "50px",
                maxWidth: "50px",
                whiteSpace: "nowrap",
                color: "#134e5e",
                textTransform: "left",
                outline: "none",
                boxShadow: "none",
                boxSizing: "border-box",
                cursor: "pointer",
              }}
            >
              <Icofont icon="simple-left" />
            </div>

            <div
              className="tp-caption Agency-NavButton rev-btn  tp-resizeme rs-parallaxlevel-3"
              id="slide-2731-layer-7"
              data-x="['right','right','center','center']"
              data-hoffset="['20','0','175','175']"
              data-y="['middle','middle','top','top']"
              data-voffset="['190','190','130','120']"
              data-width="50"
              data-height="50"
              data-whitespace="nowrap"
              data-type="button"
              data-actions='[{"event":"click","action":"jumptoslide","slide":"next","delay":""}]'
              data-responsive_offset="on"
              data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1000,"to":"o:1;","delay":2500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":3000,"to":"opacity:0;","ease":"Power4.easeIn"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bg:rgba(51, 51, 51, 1.00);bs:solid;"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "22",
                minWidth: "50px",
                maxWidth: "50px",
                whiteSpace: "nowrap",
                color: "#134e5e",
                textTransform: "left",
                outline: "none",
                boxShadow: "none",
                boxSizing: "border-box",
                cursor: "pointer",
              }}
            >
              <Icofont icon="simple-right" />
            </div>
          </li>
        </ul>
        <div
          className="tp-bannertimer tp-bottom"
          style={{ visibility: "hidden !important" }}
        ></div>
      </div>
    </div>
  </section>
);

export default HeroStudio;
