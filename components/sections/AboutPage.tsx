"use client";

import React, { useState, useEffect, useRef } from "react";

// Helper components

// Count Up Animation for Statistics
const AnimatedCounter = ({ value, startVal = 0, duration = 2000 }: { value: number; startVal?: number; duration?: number }) => {
  const [count, setCount] = useState(startVal);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = startVal;
          const end = value;
          if (start === end) return;

          const totalMs = duration;
          let incrementTime = Math.abs(Math.floor(totalMs / end));
          incrementTime = Math.max(incrementTime, 20); // cap to prevent throttling

          const step = Math.ceil(end / (totalMs / incrementTime));

          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(start);
            }
          }, incrementTime);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [value, startVal, duration]);

  return <div ref={elementRef}>{count}</div>;
};

// Team Member Card Component (Plays custom video feed on hover)
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  video?: string;
}

const TeamCardComponent = ({ member }: { member: TeamMember }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (member.video && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Video play interrupted", err);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (member.video && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`team-card radius-8 bg--dark-gray p-32 card advisor-card ${member.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="media" style={{ opacity: isHovered && member.video ? 0 : 1, transition: "opacity 0.2s ease" }}>
        <img
          className="fullw radius-12"
          src={member.image}
          alt={`Image - ${member.name}`}
          loading="lazy"
          style={{ aspectRatio: 1, objectFit: "cover" }}
        />
      </div>
      {member.video && (
        <div
          className="video-file radius-8"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: isHovered ? "block" : "none",
            zIndex: 1,
          }}
        >
          <video
            ref={videoRef}
            preload="none"
            className="fullw radius-8"
            src={member.video}
            playsInline
            muted
            loop
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      )}
      <div
        className="name radius-4 bg--dark-tertiary color--white flex v--center gap-4"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="icon icon--20">
          <img src="/images/mic_off.svg" alt="mic off" />
        </div>
        <div className="txt txt--s">{`${member.name} (${member.role})`}</div>
      </div>
    </div>
  );
};

// Emoji Reactions Column Component
const EMOJIS = [
  { id: "1", src: "/images/emoji1.png.webp" },
  { id: "2", src: "/images/emoji2.png.webp" },
  { id: "3", src: "/images/emoji3.png.webp" },
  { id: "4", src: "/images/emoji4.png.webp" },
  { id: "5", src: "/images/emoji5.png.webp" },
];

const ReactionCol = ({ title, traitKey }: { title: string; traitKey: string }) => {
  const [reactions, setReactions] = useState<{ [key: string]: number }>({
    "1": 3,
    "2": 1,
  });
  const [pickerOpen, setPickerOpen] = useState(false);

  const handleReact = (emojiId: string) => {
    setReactions((prev) => ({
      ...prev,
      [emojiId]: (prev[emojiId] || 0) + 1,
    }));
    setPickerOpen(false);
  };

  return (
    <div className="reactions_col isview slidetop" data-trait={traitKey}>
      <div className="title title--s">{title}</div>

      <div className="reactions_ui mt-16 flex v--center h--wrap gap-6" style={{ position: "relative" }}>
        <div className="reaction_list font1 flex v--center gap-6">
          {Object.entries(reactions).map(([emojiId, count]) => {
            if (count === 0) return null;
            const emoji = EMOJIS.find((e) => e.id === emojiId);
            return (
              <div
                key={emojiId}
                className="reaction_item flex v--center gap-4 bg--gray radius-100 p-6-12"
                style={{ cursor: "pointer", userSelect: "none" }}
                onClick={() => handleReact(emojiId)}
              >
                <img src={emoji?.src} alt="" style={{ width: "16px", height: "16px" }} />
                <span>{count}</span>
              </div>
            );
          })}
        </div>
        <div className="react-btn-wrap" style={{ position: "relative" }}>
          <button
            className={`react_btn ${pickerOpen ? "active" : ""}`}
            type="button"
            aria-label="Add reaction"
            onClick={() => setPickerOpen(!pickerOpen)}
          >
            <span className="react_btn_icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.3951 8.8234V8.0734H16.8951V8.8234H17.6451H18.3951ZM17.6451 9.62549L18.3951 9.62925V9.62549H17.6451ZM10.3513 2.3509L11.0976 2.42589L11.2476 0.933403L10.5013 0.858413L10.4263 1.60465L10.3513 2.3509ZM7.01592 10.7797L6.56592 10.1797L5.36592 11.0797L5.81592 11.6797L6.41592 11.2297L7.01592 10.7797ZM13.4326 11.6797L13.8826 11.0797L12.6826 10.1797L12.2326 10.7797L12.8326 11.2297L13.4326 11.6797ZM7.218 6.46924C6.80379 6.46924 6.468 6.80502 6.468 7.21924C6.468 7.63345 6.80379 7.96924 7.218 7.96924V7.21924V6.46924ZM7.22603 7.96924C7.64024 7.96924 7.97603 7.63345 7.97603 7.21924C7.97603 6.80502 7.64024 6.46924 7.22603 6.46924V7.21924V7.96924ZM12.0305 6.46924C11.6163 6.46924 11.2805 6.80502 11.2805 7.21924C11.2805 7.63345 11.6163 7.96924 12.0305 7.96924V7.21924V6.46924ZM12.0385 7.96924C12.4527 7.96924 12.7885 7.63345 12.7885 7.21924C12.7885 6.80502 12.4527 6.46924 12.0385 6.46924V7.21924V7.96924ZM12.8326 3.2609H12.0826V4.7609H12.8326V4.0109V3.2609ZM17.6451 4.7609H18.3951V3.2609H17.6451V4.0109V4.7609ZM15.9888 1.60465V0.854654H14.4888V1.60465H15.2388H15.9888ZM14.4888 6.41715V7.16715H15.9888V6.41715H15.2388H14.4888ZM17.6451 8.8234H16.8951V9.62549H17.6451H18.3951V8.8234H17.6451ZM17.6451 9.62549L16.8951 9.62173C16.8877 11.0892 16.4365 12.5201 15.6007 13.7264L16.2172 14.1535L16.8336 14.5807C17.8419 13.1256 18.3862 11.3995 18.3951 9.62925L17.6451 9.62549ZM16.2172 14.1535L15.6007 13.7264C14.7649 14.9326 13.5836 15.8577 12.2122 16.38L12.4792 17.0809L12.7461 17.7818C14.4004 17.1517 15.8254 16.0358 16.8336 14.5807L16.2172 14.1535ZM12.4792 17.0809L12.2122 16.38C10.8408 16.9023 9.34345 16.9974 7.91697 16.6528L7.74086 17.3818L7.56474 18.1109C9.28549 18.5266 11.0918 18.4118 12.7461 17.7818L12.4792 17.0809ZM7.74086 17.3818L7.91697 16.6528C6.4905 16.3082 5.2017 15.54 4.21999 14.4492L3.66252 14.9509L3.10505 15.4527C4.28929 16.7685 5.84398 17.6952 7.56474 18.1109L7.74086 17.3818ZM3.66252 14.9509L4.21999 14.4492C3.23828 13.3584 2.60962 11.9961 2.41665 10.5413L1.67317 10.64L0.929677 10.7386C1.16245 12.4935 1.92081 14.1368 3.10505 15.4527L3.66252 14.9509ZM1.67317 10.64L2.41665 10.5413C2.22369 9.08658 2.47545 7.60748 3.13885 6.29847L2.46985 5.95943L1.80086 5.62039C1.00061 7.19944 0.696903 8.9837 0.929677 10.7386L1.67317 10.64ZM2.46985 5.95943L3.13885 6.29847C3.80224 4.98947 4.84621 3.91185 6.13351 3.20728L5.77343 2.54938L5.41334 1.89147C3.86046 2.7414 2.60111 4.04134 1.80086 5.62039L2.46985 5.95943ZM5.77343 2.54938L6.13351 3.20728C7.42082 2.50271 8.8912 2.20416 10.3513 2.3509L10.4263 1.60465L10.5013 0.858413C8.73994 0.681409 6.96622 1.04154 5.41334 1.89147L5.77343 2.54938ZM6.41592 11.2297C5.81592 11.6797 5.8161 11.6799 5.81629 11.6801C5.81636 11.6802 5.81655 11.6805 5.81668 11.6807C5.81695 11.681 5.81725 11.6814 5.81756 11.6818C5.81818 11.6827 5.81888 11.6836 5.81966 11.6846C5.82121 11.6866 5.82307 11.6891 5.82523 11.6919C5.82956 11.6975 5.83512 11.7046 5.84189 11.7132C5.85542 11.7303 5.87384 11.7531 5.89705 11.7807C5.94343 11.836 6.00923 11.911 6.09375 11.9992C6.26217 12.175 6.50843 12.4066 6.82701 12.6383C7.46127 13.0996 8.415 13.5838 9.62425 13.5838V12.8338V12.0838C8.8283 12.0838 8.17787 11.766 7.70926 11.4252C7.47641 11.2558 7.29657 11.0864 7.17673 10.9614C7.11712 10.8992 7.07327 10.8489 7.04602 10.8164C7.03241 10.8002 7.02303 10.7885 7.01796 10.7821C7.01543 10.7789 7.01398 10.7771 7.01363 10.7766C7.01346 10.7764 7.01357 10.7765 7.01395 10.777C7.01414 10.7773 7.0144 10.7776 7.01472 10.7781C7.01489 10.7783 7.01507 10.7785 7.01527 10.7788C7.01537 10.7789 7.01553 10.7791 7.01558 10.7792C7.01575 10.7794 7.01592 10.7797 6.41592 11.2297ZM9.62425 12.8338V13.5838C10.8335 13.5838 11.7872 13.0996 12.4215 12.6383C12.7401 12.4066 12.9863 12.175 13.1548 11.9992C13.2393 11.911 13.3051 11.836 13.3515 11.7807C13.3747 11.7531 13.3931 11.7303 13.4066 11.7132C13.4134 11.7046 13.4189 11.6975 13.4233 11.6919C13.4254 11.6891 13.4273 11.6866 13.4289 11.6846C13.4296 11.6836 13.4303 11.6827 13.431 11.6818C13.4313 11.6814 13.4316 11.681 13.4318 11.6807C13.432 11.6805 13.4322 11.6802 13.4322 11.6801C13.4324 11.6799 13.4326 11.6797 12.8326 11.2297C12.2326 10.7797 12.2328 10.7794 12.2329 10.7792C12.233 10.7791 12.2331 10.7789 12.2332 10.7788C12.2334 10.7785 12.2336 10.7783 12.2338 10.7781C12.2341 10.7776 12.2344 10.7773 12.2346 10.777C12.2349 10.7765 12.235 10.7764 12.2349 10.7766C12.2345 10.7771 12.2331 10.7789 12.2306 10.7821C12.2255 10.7885 12.2161 10.8002 12.2025 10.8164C12.1752 10.8489 12.1314 10.8992 12.0718 10.9614C11.9519 11.0864 11.7721 11.2558 11.5392 11.4252C11.0706 11.766 10.4202 12.0838 9.62425 12.0838V12.8338ZM7.218 7.21924V7.96924H7.22603V7.21924V6.46924H7.218V7.21924ZM12.0305 7.21924V7.96924H12.0385V7.21924V6.46924H12.0305V7.21924ZM12.8326 4.0109V4.7609H17.6451V4.0109V3.2609H12.8326V4.0109ZM15.2388 1.60465H14.4888V6.41715H15.2388H15.9888V1.60465H15.2388Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </button>

          {pickerOpen && (
            <div
              className="reaction_picker active flex gap-4 p-8 bg--gray radius-12 shadow"
              style={{
                position: "absolute",
                bottom: "40px",
                left: "0",
                zIndex: 100,
                display: "flex",
                background: "#f0f0f0",
                border: "1px solid #ccc",
                borderRadius: "12px",
              }}
            >
              {EMOJIS.map((emoji) => (
                <div
                  key={emoji.id}
                  className="emoji cursor-pointer"
                  onClick={() => handleReact(emoji.id)}
                  style={{ width: 24, height: 24 }}
                >
                  <img src={emoji.src} alt="" style={{ width: "100%", height: "100%" }} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Testimonial Video Component
const TestimonialVideo = ({ src, poster }: { src: string; poster: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div
      className={`video_player radius-12 ${isPlaying ? "is-playing" : ""}`}
      onClick={togglePlay}
      style={{ cursor: "pointer", position: "relative" }}
    >
      <video ref={videoRef} src={src} className="fullw" preload="none" poster={poster} playsInline loop />
      {!isPlaying && (
        <div
          className="btn-wrap"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          <button className="btn btn--play"></button>
        </div>
      )}
    </div>
  );
};

// Data sets

const LEADERSHIP_MEMBERS: TeamMember[] = [
  { id: 1, name: "Polina C.", role: "co-founder", image: "/images/Profile-Picture-Container-4.png.webp", video: "/media/video_polina-1.mp4" },
  { id: 2, name: "Valerii F.", role: "co-founder", image: "/images/Profile-Picture-Container.png.webp", video: "/media/zoom-1.mp4" },
  { id: 3, name: "Yuliia A.", role: "CEO", image: "/images/Profile-Picture-Container-9-2.png.webp", video: "/media/Video-Project-29-1.mp4" },
  { id: 4, name: "Ruslan V.", role: "head of design", image: "/images/Profile-Picture-Container-44.png.webp", video: "/media/video-1.mov" },
  { id: 5, name: "Alina S.", role: "operations director", image: "/images/Profile-Picture-Container-26.png.webp", video: "/media/video1365762158-1.mp4" },
  { id: 6, name: "Anatoliy S.", role: "head of development", image: "/images/Profile-Picture-Container-23.png.webp", video: "/media/video1747026778-1.mp4" },
  { id: 7, name: "Denis R.", role: "head of IT engineering and business analysis", image: "/images/Profile-Picture-Container-8.png.webp", video: "/media/norm-1.mov" },
  { id: 8, name: "Dmitriy K.", role: "head of art", image: "/images/Profile-Picture-Container-28.png.webp", video: "/media/Video-Project-30-1.mp4" },
  { id: 9, name: "Alena O.", role: "promo team lead", image: "/images/Profile-Picture-Container-25.png.webp", video: "/media/Кино-26.01.2026-в-11.27-1.mov" },
  { id: 10, name: "Artem I.", role: "product team lead", image: "/images/Profile-Picture-Container-65.png.webp", video: "/media/IMG_2141-1.mov" },
  { id: 11, name: "Anastasia D.", role: "account executive", image: "/images/Profile-Picture-Container-3.png_1.webp", video: "/media/video-phenomenon-1-1.mov" },
  { id: 12, name: "Ksenia S.", role: "account executive", image: "/images/Profile-Picture-Container.png_1.webp", video: "/media/Video-Project-18-1.mp4" },
  { id: 13, name: "Oleksandr K.", role: "marketing manager", image: "/images/Profile-Picture-Container-1.png_1.webp", video: "/media/Фільм-1-19-26-о-3.45 пп-1.mov" },
  { id: 14, name: "Iryna R.", role: "PM lead", image: "/images/Profile-Picture-Container-31.png.webp", video: "/media/zoom.us-Zoom-Meeting-30-April-2026-1.mp4" },
  { id: 15, name: "Vadym S.", role: "lead front-end engineer", image: "/images/Profile-Picture-Container-55.png.webp", video: "/media/vadym_video-1.mov" },
  { id: 16, name: "Anna Ch.", role: "HR manager", image: "/images/Profile-Picture-Container-24.png.webp", video: "/media/Анна-Ч-1.mp4" },
  { id: 17, name: "Denys M.", role: "solution architect", image: "/images/Profile-Picture-Container-9.png.webp", video: "/media/d.melnyk_greeting_video-1.mp4" },
  { id: 18, name: "Denys Z.", role: "recruiter", image: "/images/Profile-Picture-Container-5-1.png.webp", video: "/media/media-69d8fd137c38c5b378f47d70.mp4" },
  { id: 19, name: "Daria L.", role: "product designer", image: "/images/Profile-Picture-Container-6.png.webp", video: "/media/Video-2-1.mov" },
  { id: 20, name: "Katerina K.", role: "product designer", image: "/images/Profile-Picture-Container-63.png.webp", video: "/media/Katerina_video-1.mov" },
];

const TALENTED_MEMBERS: TeamMember[] = [
  { id: 1, name: "Anastasiia M.", role: "product designer", image: "/images/Profile-Picture-Container-22.png.webp" },
  { id: 2, name: "Daria K.", role: "product designer", image: "/images/Profile-Picture-Container-5.png.webp", video: "/media/Video-DariaK-1.mp4" },
  { id: 3, name: "Oleh F.", role: "UI/UX designer", image: "/images/Profile-Picture-Container-35.png.webp", video: "/media/705d88e0-6438-4c42-9ea1-596e9b0e1a72.mp4" },
  { id: 4, name: "Oleksandr K.", role: "product designer", image: "/images/Profile-Picture-Container-37.png.webp", video: "/media/Screen-Recording-2026-01-22-at-9.18.49-1.mov" },
  { id: 5, name: "Ihor B.", role: "graphic designer", image: "/images/Profile-Picture-Container-29.png.webp", video: "/media/ihor-video-1.mp4" },
  { id: 6, name: "Vladyslav M.", role: "2D/motion designer", image: "/images/Profile-Picture-Container-50.png.webp", video: "/media/WIN_20260120_16_32_52_Pro-1.mp4" },
  { id: 7, name: "Mariia L.", role: "product designer", image: "/images/Profile-Picture-Container-60.png.webp" },
  { id: 8, name: "Mariia Z.", role: "product designer", image: "/images/Profile-Picture-Container-59.png.webp" },
  { id: 9, name: "Oleksii Pr.", role: "product designer", image: "/images/Profile-Picture-Container-1.png.webp", video: "/media/Video-Project-22-1.mp4" },
  { id: 10, name: "Mykhailo O.", role: "graphic designer", image: "/images/Profile-Picture-Container-57.png.webp" },
  { id: 11, name: "Oleh S.", role: "graphic designer", image: "/images/Profile-Picture-Container-36.png.webp" },
  { id: 12, name: "Anna Tk.", role: "graphic designer", image: "/images/Profile-Picture-Container-16.png.webp", video: "/media/AT-video-1.mov" },
  { id: 13, name: "Serhii F.", role: "UI/UX designer", image: "/images/Profile-Picture-Container-45.png.webp", video: "/media/video_feshchyk-1.mp4" },
  { id: 14, name: "Tania Hr.", role: "product designer", image: "/images/Profile-Picture-Container-47.png.webp" },
  { id: 15, name: "Yana T.", role: "UI/UX designer", image: "/images/Profile-Picture-Container-52.png.webp" },
  { id: 16, name: "Yuliia L.", role: "UI/UX designer", image: "/images/Profile-Picture-Container-53.png.webp", video: "/media/video-1.mp4" },
  { id: 17, name: "Anna V.", role: "product designer", image: "/images/Profile-Picture-Container-15-1.png.webp" },
  { id: 18, name: "Valeriia V.", role: "project manager", image: "/images/Profile-Picture-Container-48.png.webp", video: "/media/Final-1.mp4" },
  { id: 19, name: "Daria Zh.", role: "project manager", image: "/images/Profile-Picture-Container-7.png.webp", video: "/media/video-1-1.mov" },
  { id: 20, name: "Sofiia P.", role: "project manager", image: "/images/Profile-Picture-Container-46.png.webp", video: "/media/Sofiia-Pitenko-1.mov" },
  { id: 21, name: "Daniel Shch.", role: "project manager", image: "/images/Profile-Picture-Container-13.png.webp", video: "/media/Screen-Recording-2026-02-06-at-12.03.54.mov" },
  { id: 22, name: "Julia M.", role: "project manager", image: "/images/Profile-Picture-Container-64.png.webp", video: "/media/Julia-Misiuk-video-1.mp4" },
  { id: 23, name: "Natiia P.", role: "project manager", image: "/images/Profile-Picture-Container-32.png.webp", video: "/media/Запис-екрана-2026-01-20-о-11.04.42-1.mov" },
  { id: 24, name: "Anastasiia Y.", role: "junior PM", image: "/images/Profile-Picture-Container-21.png.webp", video: "/media/IMG_9340-1.mov" },
  { id: 25, name: "Olha A.", role: "SDR/sales operations", image: "/images/Profile-Picture-Container-40.png.webp", video: "/media/aboutus_olga-1.mov" },
  { id: 26, name: "Anna L.", role: "billing manager", image: "/images/Profile-Picture-Container-18.png.webp" },
  { id: 27, name: "Artem Tk.", role: "fullstack developer", image: "/images/Profile-Picture-Container-14.png.webp", video: "/media/video-2-1.mov" },
  { id: 28, name: "Mykola K.", role: "front-end developer", image: "/images/Profile-Picture-Container-56.png.webp", video: "/media/Video-Project-23-1.mp4" },
  { id: 29, name: "Dmitriy H.", role: "back-end developer", image: "/images/Profile-Picture-Container-27.png.webp", video: "/media/video-3-1.mov" },
  { id: 30, name: "Milan S.", role: "back-end developer", image: "/images/Profile-Picture-Container-7.png_1.webp", video: "/media/MS-video-1.mov" },
  { id: 31, name: "Serhiy H.", role: "front-end developer", image: "/images/Profile-Picture-Container-54.png.webp" },
  { id: 32, name: "Vlad Sh.", role: "front-end developer", image: "/images/Profile-Picture-Container-51.png.webp", video: "/media/video-vs-1.mp4" },
  { id: 33, name: "Danylo Iv.", role: "front-end developer", image: "/images/Profile-Picture-Container-2.png.webp", video: "/media/zoom-1-1.mov" },
  { id: 34, name: "Nazar H.", role: "front-end developer", image: "/images/Profile-Picture-Container-33.png.webp" },
  { id: 35, name: "Nazarii Tk.", role: "fullstack developer", image: "/images/Profile-Picture-Container-34.png.webp", video: "/media/video_1-1.mov" },
  { id: 36, name: "Daniil B.", role: "python developer", image: "/images/Profile-Picture-Container-3.png.webp" },
  { id: 37, name: "Pavlo S.", role: "QA specialist", image: "/images/Profile-Picture-Container-42.png.webp", video: "/media/test.mp4" },
  { id: 38, name: "Roman Irh.", role: "QA specialist", image: "/images/Profile-Picture-Container-43.png.webp" },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [showAllLeadership, setShowAllLeadership] = useState(false);
  const [showAllTalented, setShowAllTalented] = useState(false);

  // Filtered lists for team grids
  const visibleLeadership = showAllLeadership ? LEADERSHIP_MEMBERS : LEADERSHIP_MEMBERS.slice(0, 8);
  const visibleTalented = showAllTalented ? TALENTED_MEMBERS : TALENTED_MEMBERS.slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <section className="hero bg--dark clipped-bottom next_block_sticky">
        <div className="container color--white">
          <div className="txt txt--caption-m color--white-secondary uppercase fw-600 mb-24 mb-16-mob isview slidetop">
            <h1>Product Design and development Agency</h1>
          </div>
          <div className="nobr-mob title title--xl mw1040 isview slidetop new-animate trd02">
            <span>From</span> <span>a</span> <span>four-person</span> <span>startup</span> <span>studio</span>{" "}
            <span>to</span> <span>a</span> <span>70+</span> <span>talent</span> <span>team</span>{" "}
            <span>designing</span> <span>across</span> <span>industries</span> <span>and</span> <span>continents</span>
          </div>
          <div className="txt txt--l mt-48 mw706 isview slidetop trd02 color--white-secondary inner-inherit">
            <div>
              Phenomenon Studio began with late nights on Upwork, often chasing projects until 3 - 4 a.m. First clients
              came - and stayed. The work scaled. So did the team. What’s never changed: high standards, deep thinking,
              and a shared drive to do things right.
            </div>
          </div>
          <div className="mt-24 flex v--center h--start gap-8 fd--column-mob isview slidetop trd04">
            <a className="btn btn--orange hover--white btn--lg-desk arr arr-right" href="#contact-form" target="_self">
              <span>
                <b>Let’s talk</b>
              </span>
            </a>
            <a
              className="btn btn--white-light arr arr-right hover--white btn--lg-desk"
              href="/projects"
              target="_self"
            >
              <span>
                <b>View our cases</b>
              </span>
            </a>
          </div>
          <div className="mt-60 pt-32">
            <div className="txt txt--caption-m color--white-secondary text--left mb-24 uppercase fw-600 isview fadein inner-inherit">
              <div>OUR PRODUCT DESIGN AGENCY IN NUMBERS</div>
            </div>
            <div className="values_wrap grid col-4 col-2-mob clip_1 isview slidetop">
              <div className="col flex v--center h--center fd--column">
                <div className="title--l color--white">98%</div>
                <div className="txt color--white-secondary txt--s minh-2lh minh-3lh-mob text--center">
                  <p>customer satisfaction rate</p>
                </div>
              </div>
              <div className="col flex v--center h--center fd--column">
                <div className="title--l color--white">35%+</div>
                <div className="txt color--white-secondary txt--s minh-2lh minh-3lh-mob text--center">
                  <p>boost in conversions after redesign</p>
                </div>
              </div>
              <div className="col flex v--center h--center fd--column">
                <div className="title--l color--white">70+</div>
                <div className="txt color--white-secondary txt--s minh-2lh minh-3lh-mob text--center">
                  <p>top-tier designers and developers on board</p>
                </div>
              </div>
              <div className="col flex v--center h--center fd--column">
                <div className="title--l color--white">92%</div>
                <div className="txt color--white-secondary txt--s minh-2lh minh-3lh-mob text--center">
                  <p>of clients return for additional work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grounded History Section */}
      <section className="grounded pt-200 pt-100-mob about-template-section">
        <div className="sticky-space">
          <div className="container">
            <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop inner-inherit">
              WHAT GROUNDED US THEN, AND STILL DOES
            </div>
            <div className="mt-24 mt-16-mob mw1040 title title--xl nobr-mob isview slidetop new-animate trd02">
              <span>It</span> <span>wasn’t</span> <span>one</span> <span>client</span> <span>or</span> <span>one</span>{" "}
              <span>breakthrough:</span> <span>just</span> <span>consistent</span> <span>work,</span> <span>good</span>{" "}
              <span>people,</span> <span>and</span> <span>a</span> <span>clear</span> <span>sense</span> <span>of</span>{" "}
              <span>what</span> <span>matters</span>
            </div>
          </div>
          <div className="content-row mt-100 mt-32-mob">
            <div className="row">
              <div className="inner">
                <div className="container">
                  <div className="grid col-2 gap-36 col-1-mob gap-32-mob">
                    <div className="left pr-24 pr-0-mob pc-visible">
                      <div className="txt txt--l">
                        <p>In the founders’ words</p>
                      </div>
                    </div>
                    <div className="right">
                      <div className="text-block">
                        <div className="visible-text">
                          <div className="txt txt--lead">
                            Our company was founded in 2019 by Valerii Filimonov and Polina Chebanova, both with a background in product design but different perspectives.
                          </div>
                        </div>
                        <div className="hidden-text">
                          <div className="txt txt--lead">
                            Valerii came from e-commerce and early-stage startups, driven by systems thinking and user flows. Polina led cross-functional teams at design studios in Ukraine and the UK, refining how interfaces look, feel, and behave.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-divider isview fadeIn" data-offset="200"></div>
      </section>

      {/* Valerii Quote Card with Audio */}
      <div className="row row-checker isview slidetop" data-offset="100">
        <div className="inner">
          <div className="container">
            <div className="grid col-2 gap-36 col-1-mob gap-32-mob">
              <div className="left pc-visible"></div>
              <div className="right">
                <div className="quote mt-64 p-28 radius-16 bg--gray">
                  <div className="heading-row flex v--center gap-16">
                    <div className="icon icon--xxs">
                      <img
                        src="/images/Rectangle-34624326.png_1.webp"
                        alt="Valerii Filimonov"
                        loading="lazy"
                        style={{ aspectRatio: 1 }}
                      />
                    </div>
                    <div className="info">
                      <div className="txt txt--s">Valerii Filimonov</div>
                      <div className="txt txt--s dark-secondary">co-founder</div>
                    </div>
                  </div>
                  <div className="txt txt--l mt-30">
                    I saw that for many designers, beauty mattered more than logic. I wanted to create something
                    grounded—with people who think deeply.
                  </div>
                  <div className="audio-file mt-30">
                    <audio className="audio-player" controls src="/media/Valerii-comment.mp3"></audio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Gallery Grid */}
      <section className="our_team pt-200 pt-100-mob">
        <div className="container">
          <div className="team_grid_wrap">
            <div className="grid col-4 gap-20 col-1-mob">
              <div className="col isview slidetop pc-visible span-2 span-1-mob">
                <div className="animated-media-wrapper isview slidetop">
                  <img
                    className="radius-12 animated-media trd00"
                    src="/images/IMG_0477-e1776164064781.jpg.webp"
                    alt="Team gallery"
                    loading="lazy"
                    style={{ aspectRatio: 1.7057 }}
                  />
                </div>
              </div>
              <div className="col isview slidetop pc-visible">
                <div className="animated-media-wrapper isview slidetop"></div>
              </div>
              <div className="col isview slidetop">
                <div className="animated-media-wrapper isview slidetop">
                  <img
                    className="radius-12 animated-media trd02"
                    src="/images/telegram-cloud-document-2-5300745544623214765-1.jpg.webp"
                    alt="Team gallery"
                    loading="lazy"
                    style={{ aspectRatio: 0.8232 }}
                  />
                </div>
              </div>
              <div className="col isview slidetop">
                <div className="animated-media-wrapper isview slidetop">
                  <img
                    className="radius-12 animated-media trd03"
                    src="/images/telegram-cloud-document-2-5300745544623214761.jpg.webp"
                    alt="Team gallery"
                    loading="lazy"
                    style={{ aspectRatio: 0.8232 }}
                  />
                </div>
              </div>
              <div className="col isview slidetop pc-visible">
                <div className="animated-media-wrapper isview slidetop"></div>
              </div>
              <div className="col isview slidetop pc-visible">
                <div className="animated-media-wrapper isview slidetop">
                  <img
                    className="radius-12 animated-media trd05"
                    src="/images/IMG_0478.jpg.webp"
                    alt="Team gallery"
                    loading="lazy"
                    style={{ aspectRatio: 0.8232 }}
                  />
                </div>
              </div>
              <div className="col isview slidetop">
                <div className="animated-media-wrapper isview slidetop">
                  <img
                    className="radius-12 animated-media trd06"
                    src="/images/telegram-cloud-photo-size-2-5253719888026007023-y.jpg.webp"
                    alt="Team gallery"
                    loading="lazy"
                    style={{ aspectRatio: 0.8232 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Odometer Section */}
      <section className="pt-200 pt-100-mob about-template-section">
        <div className="sticky-space">
          <div className="container">
            <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop inner-inherit">
              OUR PRODUCT DESIGN AGENCY IN NUMBERS
            </div>
            <div className="visible-heading">
              <div className="mt-24 mt-16-mob title title--xl nobr-mob isview slidetop new-animate trd02">
                <span>What</span> <span>we've</span> <span>gained</span> <span>together</span> <span>since</span>{" "}
                <span className="year">2019</span>
              </div>
            </div>

            <div className="grid col-4 mt-24 col-2-mob ov-hidden numbers-columns">
              <div className="vertical_line grid col-4 col-2-mob span-4 span-1-mob clipped isview full fadein">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="col p-32 p-24-mob">
                <div className="title title--l text--center h--center">
                  <AnimatedCounter value={78} />
                </div>
                <div className="txt txt--s mt-2 text--center color--dark-secondary">team members on board</div>
              </div>
              <div className="vertical_line grid col-4 col-2-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="col p-32 p-24-mob">
                <div className="title title--l text--center h--center">
                  <AnimatedCounter value={601} />
                </div>
                <div className="txt txt--s mt-2 text--center color--dark-secondary">projects successfully delivered</div>
              </div>
              <div className="vertical_line grid col-4 col-2-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="col p-32 p-24-mob">
                <div className="title title--l text--center h--center">
                  <AnimatedCounter value={298} />
                </div>
                <div className="txt txt--s mt-2 text--center color--dark-secondary">satisfied clients</div>
              </div>
              <div className="vertical_line grid col-4 col-2-mob span-4 span-1-mob clipped isview full fadein mob-visible">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="col p-32 p-24-mob">
                <div className="title title--l text--center h--center">
                  <AnimatedCounter value={46} />
                </div>
                <div className="txt txt--s mt-2 text--center color--dark-secondary">industry awards won</div>
              </div>
            </div>

            <div className="content-row mt-100 mt-32-mob">
              <div className="row">
                <div className="inner">
                  <div className="container">
                    <div className="grid col-2 gap-36 col-1-mob gap-32-mob">
                      <div className="left pr-24 pr-0-mob pc-visible">
                        <div className="txt txt--l"></div>
                      </div>
                      <div className="right">
                        <div className="text-block">
                          <div className="visible-text">
                            <div className="txt txt--lead">
                              We started working with our first few startups on products they needed to bring to market
                              quickly. Many of those early clients are still with us today, as we’ve grown side by side
                              and watched each other evolve.{" "}
                            </div>
                          </div>
                          <div className="hidden-text">
                            <div className="txt txt--lead">
                              Step by step, these first projects turned into long-term collaborations, and today our
                              portfolio spans hundreds of products for companies around the world.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-divider isview fadeIn" data-offset="200" style={{ height: "60vh" }}></div>
      </section>

      {/* Polina Quote Row */}
      <div className="row row-checker isview slidetop" data-offset="100">
        <div className="inner">
          <div className="container">
            <div className="grid col-2 gap-36 col-1-mob gap-32-mob">
              <div className="left pc-visible"></div>
              <div className="right">
                <div className="quote mt-64 p-28 radius-16 bg--gray">
                  <div className="heading-row flex v--center gap-16">
                    <div className="icon icon--xxs">
                      <img src="/images/av.png.webp" alt="Polina Chebanova" loading="lazy" style={{ aspectRatio: 1 }} />
                    </div>
                    <div className="info">
                      <div className="txt txt--s">Polina Chebanova</div>
                      <div className="txt txt--s dark-secondary">co-founder</div>
                    </div>
                  </div>
                  <div className="txt txt--l mt-30">
                    We never aimed to grow fast. The goal was to build something better—and people who felt the same
                    kept joining us.
                  </div>
                  <div className="audio-file mt-30">
                    <audio className="audio-player" controls src="/media/2026-02-10-13.04.49.mp3"></audio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Cases client log grid */}
      <section className="best_cases pt-100 pt-64-mob ov-hidden">
        <div className="grid col-4 cols_wrap clip_all_sides isview slidetop pt-1">
          <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="col p-24 bg--white flex v--center h--center">
            <img src="/images/logo1.svg" alt="logo1" loading="lazy" />
          </div>
          <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="col p-24 bg--white flex v--center h--center">
            <img src="/images/logo8.svg" alt="logo8" loading="lazy" />
          </div>
          <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="col p-24 bg--white flex v--center h--center">
            <img src="/images/logo5.svg" alt="logo5" loading="lazy" />
          </div>
          <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="col p-24 bg--white flex v--center h--center">
            <img src="/images/logo2.svg" alt="logo2" loading="lazy" />
          </div>
          <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="col p-24 bg--white flex v--center h--center">
            <img src="/images/logo4.svg" alt="logo4" loading="lazy" />
          </div>
          <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="col p-24 bg--white flex v--center h--center">
            <img src="/images/logo3.svg" alt="logo3" loading="lazy" />
          </div>
          <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="col p-24 bg--white flex v--center h--center">
            <img src="/images/logo6.svg" alt="logo6" loading="lazy" />
          </div>
          <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="col p-24 bg--white flex v--center h--center">
            <img src="/images/Wisdom.svg" alt="Wisdom" loading="lazy" />
          </div>
          <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="col p-24 bg--white flex v--center h--center">
            <img src="/images/HORMN.svg" alt="HORMN" loading="lazy" />
          </div>
          <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="col p-24 bg--white flex v--center h--center">
            <img src="/images/Pragmatike.svg" alt="Pragmatike" loading="lazy" />
          </div>
          <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="col p-24 bg--white flex v--center h--center">
            <img src="/images/PrettyPatty.svg" alt="PrettyPatty" loading="lazy" />
          </div>
          <div className="vertical_line grid col-4 col-1-mob span-4 span-1-mob clipped isview full fadein mob-visible">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="col p-24 bg--white flex v--center h--center">
            <img src="/images/Zebeyond.svg" alt="Zebeyond" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Worldwide Section */}
      <section className="locations_section pt-200 pt-100-mob pb-200 pb-100-mob awards-sticky-checker">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            Worldwide, Where You Need Us
          </div>
          <div className="mt-24 mw1040 title title--xl nobr-mob isview slidetop new-animate trd02">
            <span>Collaborating</span> <span>across</span> <span>borders</span> <span>to</span> <span>deliver</span>{" "}
            <span>seamless</span> <span>solutions</span> <span>—</span> <span>wherever</span> <span>you</span>{" "}
            <span>are</span>
          </div>
          <div className="color--dark-secondary txt txt--l mt-48 mw-674 mt-32-mob isview slidetop trd02 inner-inherit">
            You’ll collaborate with project leads based near your region in the USA, and Switzerland, while your design
            & development team works across senior hubs in Europe. This setup gives you the proximity and trust of a
            local partner with the efficiency and speed of a global team.
          </div>
        </div>
        <div className="map_wrap mt-48">
          <div className="container">
            <div className="pt-28 pt-0-mob fd--column-mob flex v--start gap-90 gap-48-mob">
              <div className="left grid gap-60 gap-48-mob">
                <div className="row">
                  <div className="title title--xs isview slidetop color--dark">North America & Switzerland</div>
                  <div className="styled_ul_wrap font1 mt-24 isview slidetop color--dark-light visible">
                    <ul>
                      <li>Client-facing</li>
                      <li>Strategy & discovery</li>
                      <li>Product leads</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="title title--xs isview slidetop color--dark">Europe</div>
                  <div className="styled_ul_wrap font1 mt-24 isview slidetop color--dark-light visible">
                    <ul>
                      <li>UX/UI design</li>
                      <li>Development</li>
                      <li>Branding & motion design</li>
                      <li>Marketing & growth</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="right">
                <picture className="image">
                  <source srcSet="/images/Frame-2131329712-1.svg" media="(max-width:992px)" />
                  <img
                    className="fullw cover"
                    src="/images/Frame-2131329712.svg"
                    alt="Worldwide Locations"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="contact-position-checker how_we_do_it_section next_block_sticky pt-200 pb-200 pt-100-mob pb-100-mob bg--dark clipped-bottom clipped-top radius-80 radius-32-mob">
        <div className="container">
          <div className="txt txt--caption-m color--white-light uppercase fw-600 inner-inherit">
            <div>WHAT MAKES US DIFFERENT</div>
          </div>
          <div className="mt-24 mt-16-mob color--white mw1040 title title--xl isview slidetop new-animate">
            <span>We’ve</span> <span>built</span> <span>hundreds</span> <span>of</span> <span>products</span>{" "}
            <span>by</span> <span>focusing</span> <span>on</span> <span>the</span> <span>right</span> <span>things.</span>{" "}
            <span>Here’s</span> <span>what</span> <span>our</span> <span>clients</span> <span>value</span>{" "}
            <span>most</span>
          </div>
        </div>
        <div className="how_we_do_it_items mt-48 mt-32-mob">
          <div className="container">
            <div className="grid col-3 col-1-mob services_row clipped">
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img src="/images/asterisk-svgrepo-com-2.svg" alt="asterisk" loading="lazy" />
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--xs color--white">Partners, not vendors</div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      We don’t disappear after a kickoff call or pass work down a chain. You’ll work directly with the
                      team building your product: in Slack, in Figma, and in your workflow.
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img src="/images/asterisk-svgrepo-com-2-1.svg" alt="asterisk" loading="lazy" />
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--xs color--white">Design that holds up over time</div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      We build thoughtful, system-based interfaces, not flashy one-offs. Our work adapts to your
                      product, keeps logic intact, and holds up to change.
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img src="/images/asterisk-svgrepo-com-2-2.svg" alt="asterisk" loading="lazy" />
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--xs color--white">Developer-ready by default</div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      Every component is reusable, accessible, and engineered for handoff. Tokens, states,
                      constraints—we speak dev and design like we code. That’s how we ship fast.
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img src="/images/asterisk-svgrepo-com-2-3.svg" alt="asterisk" loading="lazy" />
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--xs color--white">Process you can follow</div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      You see what we see. From day one, we make progress visible in Notion, Jira, Figma, or your stack.
                      Scope, estimates, and feedback loops stay open and honest.
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img src="/images/asterisk-svgrepo-com-2-4.svg" alt="asterisk" loading="lazy" />
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--xs color--white">Product-led design thinking</div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      We work at the intersection of design and business. From product-market fit to scale-readiness,
                      our designers think like product managers, aligning UX with growth metrics, not just user flow.
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical_line dark grid col-3 col-1-mob span-3 span-1-mob clipped isview full fadein mob-visible">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="col flex p-32 pb-40 p-20-mob pt-28-mob pb-28-mob fd--column v--start">
                <span className="icon">
                  <img src="/images/asterisk-svgrepo-com-2-5.svg" alt="asterisk" loading="lazy" />
                </span>
                <div className="pt-100 pt-48-mob">
                  <div className="title title--xs color--white">People who care about the work</div>
                  <div className="txt txt--m mt-8 mt-4-mob color--white-light inner-inherit">
                    <div>
                      Our edge isn’t tools or templates—it’s the people. Curious, invested, and obsessive about doing
                      the right thing right. You’ll feel it in the work and in every interaction.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Zoom Team Card Tabs */}
      <section className="zoom-team pt-200 pt-100-mob pb-200 pb-100-mob tabs pricing-tabs-wrapper bg--white">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 inner-inherit">
            <div>OUR TEAM</div>
          </div>
          <div className="mt-24 mt-16-mob mw1040 title title--xl isview new-animate">
            <span>Meet</span> <span>the</span> <span>phenomenal</span> <span>people</span> <span>behind</span>{" "}
            <span>our</span> <span>projects</span>
          </div>
          <div className="txt txt--l mt-48 mw706 isview slidetop trd02 inner-inherit color--dark-secondary">
            <div>
              We believe great work doesn’t come from titles; it comes from people. Ours think deeply, care fiercely,
              and take pride in what they build. From product leads and designers to developers and advisors, we work
              across time zones and disciplines but share the same core: curiosity, honesty, and a hands-on commitment
              to doing things right.
            </div>
          </div>
        </div>

        {/* Tab Toggle buttons */}
        <div className="sticky-wrapper pt-88 pt-28-mob bg--white">
          <div className="sticky-container pb-12 pt-12 bg--white">
            <div className="container">
              <div className="tabs-actions disable-scrollbar isview slidetop">
                <button
                  type="button"
                  className={`btn btn--white hover--gray active--dark ${activeTab === 1 ? "is-active" : ""}`}
                  onClick={() => setActiveTab(1)}
                >
                  <span>
                    <b>Leadership</b>
                  </span>
                </button>
                <button
                  type="button"
                  className={`btn btn--white hover--gray active--dark ${activeTab === 2 ? "is-active" : ""}`}
                  onClick={() => setActiveTab(2)}
                >
                  <span>
                    <b>Talented team</b>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div id="sticky-wrapper" className="mt-24"></div>

          {/* Tab Screens */}
          <div className="container tabs-container">
            <div className="screens pt-32">
              {activeTab === 1 && (
                <div className="isview slidetop pricing_tabs_holder screen screen-1" id="screen-1">
                  <div className="grid col-4 col-2-tablet col-1-mob gap-12">
                    {visibleLeadership.map((member) => (
                      <TeamCardComponent key={member.id} member={member} />
                    ))}
                  </div>
                  <div className="wrap-load-more-advisors text--center mt-40">
                    <button
                      className="show_more_team_custom show_more btn btn--simple dark arr arr-down revert"
                      onClick={() => setShowAllLeadership(!showAllLeadership)}
                    >
                      <span>
                        <b className="visible-text">{showAllLeadership ? "Show less" : "Show more"}</b>
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="isview slidetop pricing_tabs_holder screen screen-2" id="screen-2">
                  <div className="grid col-4 col-2-tablet col-1-mob gap-12">
                    {visibleTalented.map((member) => (
                      <TeamCardComponent key={member.id} member={member} />
                    ))}
                  </div>
                  <div className="wrap-load-more-advisors text--center mt-40">
                    <button
                      className="show_more_team_custom show_more btn btn--simple dark arr arr-down revert"
                      onClick={() => setShowAllTalented(!showAllTalented)}
                    >
                      <span>
                        <b className="visible-text">{showAllTalented ? "Show less" : "Show more"}</b>
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 17 Traits & Reaction State emoji picker */}
      <section className="reactions">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 inner-inherit">
            <div>THE TRAITS WE WORK BY</div>
          </div>
          <div className="mt-24 mt-16-mob mw1040 title title--xl isview new-animate slidetop">
            <span>What</span> <span>our</span> <span>team</span> <span>said,</span> <span>in</span> <span>three</span>{" "}
            <span>words</span> <span>each,</span> <span>when</span> <span>asked</span> <span>to</span>{" "}
            <span>describe</span> <span>Phenomenon</span>
          </div>
        </div>
        <div className="reactions_wrap mt-48 flex v--center h--wrap rows-wrapper-has-after">
          <ReactionCol title="Supportive" traitKey="supportive-0" />
          <ReactionCol title="Creative" traitKey="creative-1" />
          <ReactionCol title="Curious" traitKey="curious-2" />
          <ReactionCol title="Ambitious" traitKey="ambitious-3" />
          <ReactionCol title="Skilled" traitKey="skilled-4" />
          <ReactionCol title="Talented" traitKey="talented-5" />
          <ReactionCol title="Professional" traitKey="professional-6" />
          <ReactionCol title="Calm" traitKey="calm-7" />
          <ReactionCol title="Open" traitKey="open-8" />
          <ReactionCol title="Focused" traitKey="focused-9" />
          <ReactionCol title="Thoughtful" traitKey="thoughtful-10" />
          <ReactionCol title="Reliable" traitKey="reliable-11" />
          <ReactionCol title="Versatile" traitKey="versatile-12" />
          <ReactionCol title="Accountable" traitKey="accountable-13" />
          <ReactionCol title="Inspiring" traitKey="inspiring-14" />
          <ReactionCol title="Fast" traitKey="fast-15" />
          <ReactionCol title="Responsible" traitKey="responsible-16" />
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-list pt-200 pt-100-mob pb-200 pb-100-mob">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 inner-inherit">
            <div>Awards</div>
          </div>
          <div className="mt-24 mt-16-mob mw1040 title title--xl isview slidetop new-animate">
            <span>Wins</span> <span>that</span> <span>inspire</span> <span>us</span> <span>forward</span>
          </div>
        </div>
        <div className="awards-list_wrap mt-48 grid gap-24 rows-wrapper-has-after">
          <div className="awards-list_row pt-30 pt-24-mob">
            <div className="flex v--start h--between fd--column-mob gap-24">
              <div className="left">
                <div className="txt txt--l">Clutch</div>
              </div>
              <div className="right">
                <div className="row">
                  <div className="txt txt--m color--dark">Top 1000 Company 2025</div>
                  <img src="/images/Award-2.png.webp" alt="Award" loading="lazy" style={{ aspectRatio: 1.338 }} />
                </div>
                <div className="row">
                  <div className="txt txt--m color--dark">Top Product Design Company 2024</div>
                  <img src="/images/Award-2.png.webp" alt="Award" loading="lazy" style={{ aspectRatio: 1.338 }} />
                </div>
                <div className="row">
                  <div className="txt txt--m color--dark">Top User Research Company 2024</div>
                  <img src="/images/Award-2.png.webp" alt="Award" loading="lazy" style={{ aspectRatio: 1.338 }} />
                </div>
                <div className="row">
                  <div className="txt txt--m color--dark">Top React Developers 2024</div>
                  <img src="/images/Award-2.png.webp" alt="Award" loading="lazy" style={{ aspectRatio: 1.338 }} />
                </div>
                <div className="row">
                  <div className="txt txt--m color--dark">Top Ukrainian Company 2024</div>
                  <img src="/images/Award-2.png.webp" alt="Award" loading="lazy" style={{ aspectRatio: 1.338 }} />
                </div>
                <div className="row">
                  <div className="txt txt--m color--dark">Top B2B Company 2021 - Creative & Design</div>
                  <img src="/images/Award-2.png.webp" alt="Award" loading="lazy" style={{ aspectRatio: 1.338 }} />
                </div>
              </div>
            </div>
          </div>

          <div className="awards-list_row pt-30 pt-24-mob">
            <div className="flex v--start h--between fd--column-mob gap-24">
              <div className="left">
                <div className="txt txt--l">UX Design Awards</div>
              </div>
              <div className="right">
                <a
                  href="/projects/isora-governance-risk-and-compliance-assessment-platform"
                  className="row has_case"
                >
                  <span className="txt txt--m color--dark">Isora GRC - Nomination 2024</span>
                  <img src="/images/Case-Preview-5.png.webp" alt="Isora GRC" />
                </a>
                <a
                  href="/projects/mywisdom-a-digital-platform-for-safer-more-connected-aging"
                  className="row has_case"
                >
                  <span className="txt txt--m color--dark">MyWisdom - Nomination 2026</span>
                  <img src="/images/Case-preview-10.png.webp" alt="MyWisdom" />
                </a>
              </div>
            </div>
          </div>

          <div className="awards-list_row pt-30 pt-24-mob">
            <div className="flex v--start h--between fd--column-mob gap-24">
              <div className="left">
                <div className="txt txt--l">Webflow</div>
              </div>
              <div className="right">
                <div className="row">
                  <div className="txt txt--m color--dark">Webflow 101 certification</div>
                  <img src="/images/Group-1.png.webp" alt="Webflow" loading="lazy" style={{ aspectRatio: 1.338 }} />
                </div>
                <div className="row">
                  <div className="txt txt--m color--dark">Webflow CMS certification</div>
                  <img src="/images/Group-1.png.webp" alt="Webflow" loading="lazy" style={{ aspectRatio: 1.338 }} />
                </div>
                <div className="row">
                  <div className="txt txt--m color--dark">Webflow experts certification</div>
                  <img src="/images/Group-1.png.webp" alt="Webflow" loading="lazy" style={{ aspectRatio: 1.338 }} />
                </div>
              </div>
            </div>
          </div>

          <div className="awards-list_row pt-30 pt-24-mob">
            <div className="flex v--start h--between fd--column-mob gap-24">
              <div className="left">
                <div className="txt txt--l">awwwards</div>
              </div>
              <div className="right">
                <a
                  href="/projects/pretty-patty-a-deliciously-interactive-fast-food-experience"
                  className="row has_case"
                >
                  <span className="txt txt--m color--dark">Pretty Patty – Honorable Mention 2025</span>
                  <img src="/images/Case-preview-17.png.webp" alt="Pretty Patty" />
                </a>
                <a href="/projects/paradigm-website-for-low-code-software-developers" className="row has_case">
                  <span className="txt txt--m color--dark">Paradigm – Honorable Mention 2025</span>
                  <img src="/images/IMg-Wrapper.png.webp" alt="Paradigm" />
                </a>
                <a
                  href="/projects/shaga-odyssey-awarded-website-development-for-web3-gamepad"
                  className="row has_case"
                >
                  <span className="txt txt--m color--dark">Shaga Odyssey – Site Of The Day Oct 27, 2024</span>
                  <img src="/images/Media-9-3-1.png.webp" alt="Shaga Odyssey" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="testimonials_section pb-200 pb-100-mob bg--white">
        <div className="container">
          <div className="flex v--end h--between heading_wrap flex--block-mob">
            <div className="left">
              <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
                what our clients say
              </div>
              <div className="title title--xl mt-16 color--dark mw1040 isview slidetop new-animate">
                <h2>
                  <span>
                    5.0 is our average <br />
                    on clutch & designrush
                  </span>
                </h2>
              </div>
            </div>
            <div className="services_cards grid col-2 gap-8 mt-32-mob">
              <a
                href="https://clutch.co/profile/phenomenon-studio"
                target="_blank"
                rel="nofollow"
                className="card bg--gray radius-12 p-12 flex fd--column isview slidetop"
              >
                <span className="icon">
                  <img className="visible-icon" src="/images/clutch-icon.svg" alt="clutch" loading="lazy" />
                  <img className="hover-icon" src="/images/Icon.svg" alt="clutch icon" loading="lazy" />
                </span>
                <div className="ratings flex v--center h--between mt-auto">
                  <div className="stars flex v--center h--start gap-2">
                    <img src="/images/star.svg" alt="star" loading="lazy" />
                    <img src="/images/star.svg" alt="star" loading="lazy" />
                    <img src="/images/star.svg" alt="star" loading="lazy" />
                    <img src="/images/star.svg" alt="star" loading="lazy" />
                    <img src="/images/star.svg" alt="star" loading="lazy" />
                  </div>
                  <div className="txt txt--caption-m color--dark-light fw-600">5.0</div>
                </div>
              </a>
              <a
                href="https://www.designrush.com/agency/profile/phenomenon-studio"
                target="_blank"
                rel="nofollow"
                className="card bg--gray radius-12 p-12 flex fd--column isview slidetop"
              >
                <span className="icon">
                  <img className="visible-icon" src="/images/design-icon.svg" alt="design" loading="lazy" />
                  <img className="hover-icon" src="/images/icon2.svg" alt="design icon" loading="lazy" />
                </span>
                <div className="ratings flex v--center h--between mt-auto">
                  <div className="stars flex v--center h--start gap-2">
                    <img src="/images/star.svg" alt="star" loading="lazy" />
                    <img src="/images/star.svg" alt="star" loading="lazy" />
                    <img src="/images/star.svg" alt="star" loading="lazy" />
                    <img src="/images/star.svg" alt="star" loading="lazy" />
                    <img src="/images/star.svg" alt="star" loading="lazy" />
                  </div>
                  <div className="txt txt--caption-m color--dark-light fw-600">4.9</div>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-40 mt-12-mob testimonials_wrap grid col-3 col-2-tablet col-1-mob gap-12">
            <div className="col radius-12 bg--gray flex fd--column isview slidetop">
              <div className="top auth_wrap flex v--center h--start gap-16">
                <img
                  className="md"
                  src="/images/1516924597216.jpeg.webp"
                  alt="Craig Tortolani"
                  loading="lazy"
                  style={{ aspectRatio: 1 }}
                />
                <div className="bio">
                  <div className="txt txt--m gap-0">
                    <p>Craig Tortolani</p>
                    <span>CPO at Dekryption Labs </span>
                  </div>
                </div>
              </div>
              <div className="video_wrap mt-auto isview slidetop">
                <TestimonialVideo
                  src="/media/review-craig.mp4"
                  poster="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/cover-craig.webp"
                />
              </div>
            </div>

            <div className="col radius-12 bg--gray flex fd--column isview slidetop">
              <div className="top auth_wrap flex v--center h--start gap-16">
                <img
                  className="md"
                  src="/images/1766946800665.jpeg.webp"
                  alt="Ash Bryant"
                  loading="lazy"
                  style={{ aspectRatio: 1 }}
                />
                <div className="bio">
                  <div className="txt txt--m gap-0">
                    <p>Ash Bryant</p>
                    <span>Founder of Hormn</span>
                  </div>
                </div>
              </div>
              <div className="txt txt--l mt-auto pt-24 text_wrap">
                <p>
                  The design team is truly world-class, excelling in both user interface design and creating solutions
                  optimized for conversion.
                </p>
              </div>
            </div>

            <div className="col radius-12 bg--gray flex fd--column isview slidetop">
              <div className="top auth_wrap flex v--center h--start gap-16">
                <img
                  className="md"
                  src="/images/KlickEx.jpeg.webp"
                  alt="KlickEx Team"
                  loading="lazy"
                  style={{ aspectRatio: 1 }}
                />
                <div className="bio">
                  <div className="txt txt--m gap-0">
                    <p>KlickEx Team </p>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="video_wrap mt-auto isview slidetop">
                <TestimonialVideo
                  src="/media/klickex-review.mp4"
                  poster="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/klickex-cover.webp"
                />
              </div>
            </div>

            <div className="col radius-12 bg--gray flex fd--column isview slidetop">
              <div className="top auth_wrap flex v--center h--start gap-16">
                <img
                  className="md"
                  src="/images/Rectangle-34624326.png.webp"
                  alt="George Fry"
                  loading="lazy"
                  style={{ aspectRatio: 1.006 }}
                />
                <div className="bio">
                  <div className="txt txt--m gap-0">
                    <p>George Fry</p>
                    <span>Founder at Neap</span>
                  </div>
                </div>
              </div>
              <div className="txt txt--l mt-auto pt-24 text_wrap">
                <p>
                  The quality of the designs is fantastic. Phenomenon Studio works at speed and is extremely punctual
                  with timelines. They deliver top-notch outcomes with exceptional designs.
                </p>
              </div>
            </div>

            <div className="col radius-12 bg--gray flex fd--column isview slidetop">
              <div className="top auth_wrap flex v--center h--start gap-16">
                <img
                  className="md"
                  src="/images/image.png.webp"
                  alt="Andre Guerra"
                  loading="lazy"
                  style={{ aspectRatio: 1.006 }}
                />
                <div className="bio">
                  <div className="txt txt--m gap-0">
                    <p>Andre Guerra</p>
                    <span>Co-Owner at RADCAT Design</span>
                  </div>
                </div>
              </div>
              <div className="video_wrap mt-auto isview slidetop">
                <TestimonialVideo
                  src="/media/radcat-review.mp4"
                  poster="https://cdn.phenomenonstudio.com/wp-content/uploads/2025/03/cover-andre-scaled.webp"
                />
              </div>
            </div>

            <div className="col radius-12 bg--gray flex fd--column isview slidetop">
              <div className="top auth_wrap flex v--center h--start gap-16">
                <img
                  className="md"
                  src="/images/1683997337066.jpeg.webp"
                  alt="Kevin Alvarez"
                  loading="lazy"
                  style={{ aspectRatio: 1 }}
                />
                <div className="bio">
                  <div className="txt txt--m gap-0">
                    <p>Kevin Alvarez</p>
                    <span>Founder & General Partner, Predictive</span>
                  </div>
                </div>
              </div>
              <div className="txt txt--l mt-auto pt-24 text_wrap">
                <p>
                  Phenomenon Studio's ability to translate concepts and rough design mock-ups into high-fidelity assets,
                  designs, and visuals was very impressive. The goal was to maintain simple elegance in the design
                  aesthetic, and they did it very well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring CTA Section */}
      <section className="pb-200 pb-100-mob bg--white">
        <div className="container">
          <div className="txt txt--caption-m color--dark-light uppercase fw-600 isview slidetop">
            WHAT IF YOU HIRE PHENOMENON
          </div>
          <div className="title title--xl mt-24 mt-16-mob color--dark mw1040 isview slidetop new-animate">
            <span>Diving</span> <span>deeper</span> <span>into</span> <span>what</span> <span>we</span> <span>can</span>{" "}
            <span>bring</span> <span>to</span> <span>your</span> <span>table</span>
          </div>
          <div className="txt txt--l mt-48 mw706 isview slidetop trd02 color--dark-secondary inner-inherit">
            <div>If you’re curious to see the thinking, processes, and hands-on delivery that power our work, here’s where to start:</div>
          </div>
        </div>
        <div className="mt-100 mt-32-mob services_items ov-hidden">
          <div className="awards_container ov-hidden">
            <div className="grid awards_wrap col-3 col-2-tablet col-1-mob">
              <div className="col flex p-32 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-1 isview slidetop">
                <div className="title title--xs color--dark">Services</div>
                <div className="txt txt--s mt-8 mt-4-mob color--dark-light">
                  <p>
                    From investor-ready MVPs and product design systems to full dev team extensions, we help tech
                    companies build things that work and last. Whether you need UX strategy, interface design, or
                    ongoing product delivery, you’ll work with a focused team that embeds fast, adapts to your stack,
                    and delivers without dragging timelines.
                  </p>
                </div>
                <div className="btn-wrap mt-auto pt-48">
                  <a href="/services" className="btn btn--simple dark arr">
                    <span>Explore</span>
                  </a>
                </div>
              </div>
              <div className="col flex p-32 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-2 isview slidetop">
                <div className="title title--xs color--dark">Cases</div>
                <div className="txt txt--s mt-8 mt-4-mob color--dark-light">
                  <p>
                    We design and build products across FinTech, EdTech, Healthcare, Web3, and SaaS. From mobile apps and
                    dashboards to branded websites and internal platforms, our work covers real user needs at every
                    product stage. Whether it’s shaping flows from scratch or delivering clean UI kits for development,
                    we focus on clarity, usability, and results that make sense.
                  </p>
                </div>
                <div className="btn-wrap mt-auto pt-48">
                  <a href="/projects" className="btn btn--simple dark arr">
                    <span>Explore</span>
                  </a>
                </div>
              </div>
              <div className="col flex p-32 p-20-mob pt-28-mob pb-28-mob fd--column v--start col-3 isview slidetop">
                <div className="title title--xs color--dark">Prices</div>
                <div className="txt txt--s mt-8 mt-4-mob color--dark-light">
                  <p>
                    Every product and company are different, but pricing shouldn’t feel like a black box. We offer
                    transparent estimates for every stage of building a product: design, development, research, and
                    strategy. Whether launching an app, building an MVP, or redesigning a platform, you’ll see the scope,
                    service, and delivery details clearly laid out.
                  </p>
                </div>
                <div className="btn-wrap mt-auto pt-48">
                  <a href="/pricing" className="btn btn--simple dark arr">
                    <span>Explore</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
