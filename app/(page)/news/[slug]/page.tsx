import { getNewsBySlug, getRelatedNews } from "@/prisma/actions/news.action";
import { notFound } from "next/navigation";
import NewsDetailsItem from "./NewsDetailsItem";
import Title from "@/components/shared/Title";
import NewsForum from "../NewsForum";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const news = await getNewsBySlug(params.slug);

  if (!news) {
    return notFound();
  }
  return {
    title: news.title,
    description: news.briefDetails,
  };
}

export default async function NewsDetailsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;
  const news = await getNewsBySlug(slug);
  const relatedNews = await getRelatedNews({
    category: news?.category ?? "game-news",
    excludeSlug: news?.slug ?? "/",
  });
  return (
    <div className="p-5">
      {news && <NewsDetailsItem news={news} />}

      <Title title="Here's related news:" medium />
      <div className="py-5 md:py-10">
        <div className="flex gap-5">
          {relatedNews.map((news) => (
            <NewsForum key={news.slug} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
}
