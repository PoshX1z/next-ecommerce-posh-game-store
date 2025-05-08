import Title from "@/components/shared/Title";
import NewsCard from "./NewsCard";
import NewsForum from "./NewsForum";
import { getNewsByCategory } from "@/prisma/actions/news.action";

export default async function Page() {
  const headlineNews = await getNewsByCategory("headline");
  const subHeadlineNews = await getNewsByCategory("sub-headline");
  const urgentNews = await getNewsByCategory("urgent-news");
  const gameNews = await getNewsByCategory("game-news");
  return (
    <div>
      <Title title="NEWS" large />
      <div className="p-5">
        <h1 className="text-2xl font-bold pb-10">Welcome To News Page</h1>
        <div className="flex gap-5 flex-col md:flex-row items-center">
          <div className="flex-1">
            {headlineNews.map((news) => (
              <NewsCard key={news.slug} news={news} large />
            ))}
          </div>
          <div className="grid grid-cols-2 flex-1 gap-5">
            {subHeadlineNews.map((news) => (
              <NewsCard key={news.slug} news={news} small />
            ))}
          </div>
        </div>

        <h1 className="text-2xl font-bold py-10">Urgent News</h1>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-1.5 sm:gap-2 md:gap-4 lg:gap-5">
          {urgentNews.map((news) => (
            <NewsForum key={news.slug} news={news} />
          ))}
        </div>
        <h1 className="text-2xl font-bold py-10">Game News</h1>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-1.5 sm:gap-2 md:gap-4 lg:gap-5">
          {gameNews.map((news) => (
            <NewsForum key={news.slug} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
}

/*


    <div className="flex">
      <Image
        src="/images/games/Control.png"
        alt="haha"
        width={396}
        height={396}
      />
      <div className="flex flex-col justify-between">
        <Image
          src="/images/games/Control.png"
          alt="haha"
          width={200}
          height={200}
        />
        <Image
          src="/images/games/Control.png"
          alt="haha"
          width={200}
          height={200}
        />
      </div>
    </div>

*/
