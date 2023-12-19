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
        // const clubeCasa = data.sources[articles.source];
        // const clubeVisitante = data.clubes[partida.clube_visitante_id];
        return (
          <>
            <div className="cardgeral">
              <section className="cardjogo">
                <div className="cardjogo__aside cardjogo__asideleft">
                  <p>{articles.author}</p>
                  <h2>{articles.title}</h2>
                  <a href={articles.url} target="_blank" rel="noreferrer">Clique para mais noticias</a>
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
