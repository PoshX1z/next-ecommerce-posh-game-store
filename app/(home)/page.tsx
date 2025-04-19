import HomeCarousal from "@/components/shared/home/HomeCarousel";
import Recommendation from "@/components/shared/home/Recommendation";
import data from "@/lib/data";

export default function Page() {
  return (
    <div>
      <div className="pt-3">
        <HomeCarousal items={data.homeCarousels} />
        <Recommendation />
      </div>
    </div>
  );
}
