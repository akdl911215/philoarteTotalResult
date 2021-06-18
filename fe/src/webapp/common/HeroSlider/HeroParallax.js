import React from "react";
import imgDummy from "../../assets/images/dummy.png";
import imgVideo from "../../assets/videos/parallax-video.png";
import video from "../../assets/videos/parallax-video.mp4";

const HeroParallax = () => (
  <section className="remove-padding transition-none">
    <div
      id="rev_slider_1079_1_wrapper"
      className="rev_slider_wrapper fullscreen-container"
      data-alias="sliding-overlays"
      data-source="gallery"
      style={{ backgroundColor: "#24182e", padding: "0px" }}
    >
      <div
        id="rev_slider_1079_1"
        className="rev_slider fullscreenbanner"
        style={{ display: "none" }}
        data-version="5.4.1"
      >
        <ul>
          <li
            data-index="rs-3050"
            data-transition="slidingoverlayvertical"
            data-slotamount="default"
            data-hideafterloop="0"
            data-hideslideonmobile="off"
            data-easein="default"
            data-easeout="default"
            data-masterspeed="default"
            data-rotate="0"
            data-saveperformance="off"
            data-title="Wow Factor"
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
              src={imgDummy}
              alt=""
              data-lazyload={imgVideo}
              data-bgposition="center center"
              data-bgfit="cover"
              data-bgparallax="5"
              className="rev-slidebg"
              data-no-retina
            />

            <div
              className="rs-background-video-layer"
              data-forcerewind="on"
              data-volume="mute"
              data-videowidth="100%"
              data-videoheight="100%"
              data-videomp4={video}
              data-videopreload="auto"
              data-videoloop="loop"
              data-forcecover="1"
              data-aspectratio="16:9"
              data-autoplay="true"
              data-autoplayonlyfirsttime="false"
            ></div>
            <div
              className="tp-caption SlidingOverlays-Title   tp-resizeme rs-parallaxlevel-3"
              id="slide-3050-layer-1"
              data-x="['center','center','center','center']"
              data-hoffset="['0','0','0','0']"
              data-y="['top','top','top','top']"
              data-voffset="['480','380','380','280']"
              data-fontsize="['50','40','45','40']"
              data-lineheight="['70','55','45','45']"
              data-width="['none','none','600','480']"
              data-height="['none','none','139','139']"
              data-whitespace="['nowrap','nowrap','normal','normal']"
              data-type="text"
              data-basealign="slide"
              data-responsive_offset="on"
              data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[175%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "5",
                whiteSpace: "nowrap",
                lineHeight: "70px",
                textTransform: "left",
                fontFamily: "'Cardo', serif",
              }}
            >
              How about something really fancy?
            </div>

            <div
              className="tp-caption SlidingOverlays-Title tp-resizeme rs-parallaxlevel-9"
              id="slide-3050-layer-2"
              data-x="['center','center','center','center']"
              data-hoffset="['0','0','0','0']"
              data-y="['top','top','top','top']"
              data-voffset="['350','260','260','150']"
              data-fontsize="['120','110','100','90']"
              data-lineheight="['140','135','110','100']"
              data-width="['none','none','600','480']"
              data-height="['none','none','139','139']"
              data-whitespace="['nowrap','nowrap','normal','normal']"
              data-type="text"
              data-basealign="slide"
              data-responsive_offset="on"
              data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[175%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
              data-paddingtop="[0,0,0,0]"
              data-paddingright="[0,0,0,0]"
              data-paddingbottom="[0,0,0,0]"
              data-paddingleft="[0,0,0,0]"
              style={{
                zIndex: "5",
                whiteSpace: "nowrap",
                lineHeight: "70px",
                textTransform: "left",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: "800",
              }}
            >
              Anno Parallax
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

export default HeroParallax;
