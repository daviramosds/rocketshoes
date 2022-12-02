import ImgVideo from "../assets/img-video.png";
import ArrowIcon from "../assets/icon-arrow.svg";

export function Footer() {
  return (
    <footer className="bg-white w-full h-[17vh]">
      <div className="flex justify-between items-center h-full bg-zinc-200">
        <img src={ImgVideo} className="h-full" />
        <a href="" className="font-bold text-lg">
          FACEBOOK
        </a>
        <a href="" className="font-bold text-lg">
          INSTAGRAM
        </a>
        <a href="" className="font-bold text-lg">
          YOUTUBE
        </a>
        <a href="" className="font-bold text-lg">
          TWITTER
        </a>
        <a
          href=""
          className="font-bold text-xl w-96 h-full bg-black text-white flex items-center justify-center"
        >
          EXPLORE MAIS <img src={ArrowIcon} className="w-8 ml-4" />
        </a>
      </div>
    </footer>
  );
}
