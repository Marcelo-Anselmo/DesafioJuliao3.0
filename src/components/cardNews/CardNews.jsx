import "./index.scss";
import useFetch from "../../Hooks/useFetch";
import { MOCK } from "../../MOCK/moc";

export const CardNews = () => {
  const { data, isFetching } = useFetch(
    "https://desafio-julio3-0-backend.vercel.app/"
  );

  const renderContent = () => {
    if (isFetching) {
      return <span>CARREGANDO..</span>;
    } else if (data) {
      console.log(data);
      return Object.values(data.articles).map((articles, index) => {
        if (MOCK.following.includes(articles.author)) {
          return (
            <div key={index}>
              <div className="cardgeral">
                <section className="cardnews">
                  <div className="card">
                    <p>{articles.author}</p>
                    <h2>{articles.title}</h2>
                    <a
                      id="lastNews"
                      href={articles.url}
                      target="_blank"
                      rel="noreferrer">
                      Saiba mais
                    </a>
                    <p>{articles.publishedAt}</p>
                  </div>
                </section>
              </div>
            </div>
          );
        }
      });
    } else {
      return null;
    }
  };

  return <>{renderContent()}</>;
};
