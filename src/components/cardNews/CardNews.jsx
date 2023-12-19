import "./index.scss";
import useFetch from "../../Hooks/useFetch";

export const CardNews = () => {
  const { data, isFetching } = useFetch(
    "https://desafio-julio3-0-backend.vercel.app/"
  );

  const renderContent = () => {
    if (isFetching) {
      return <span>CARREGANDO..</span>;
    } else if (data) {
      return Object.values(data.articles).map((articles) => {
        return (
          <>
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
          </>
        );
      });
    } else {
      return null;
    }
  };

  return <>{renderContent()}</>;
};
