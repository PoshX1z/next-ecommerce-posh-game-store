import HomeCarousal from "@/components/shared/home/HomeCarousel";
import data from "@/lib/data";

export default function Page() {
  return (
    <div>
      <div className="pt-3">
        <HomeCarousal items={data.homeCarousels} />
      </div>
    </div>
  );
}
