export default function ShowreelPopup() {
  return (
    <div className="main-popup-wrap showreel-popup" id="showreel">
      <div className="popup-wrap">
        <div className="popup-close" />
        <div className="popup">
          <div className="closer btn btn--simple white arr">
            <span>Close</span>
          </div>
          <div className="media-block">
            <video
              preload="none"
              className="fullw radius-12 video-player"
              src="/media/tinyvid_optimized_1_ShowReel_2025_7.mp4"
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
}
