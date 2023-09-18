import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <NewsInfo newsTitle="My News Feed" />
      <WorkExperience>
        <Article
          newsImage="https://randomuser.me/api/portraits/men/3.jpg"
          name=<a href="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/">
            {" "}
            Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD
            Blade Batteries Coming{" "}
          </a>
          author="By: Steve Hanley"
          Lorem
          Ipsum
        />

        <Article
          name=<a href="https://www.milenio.com/negocios/elon-musk-deuda-eu-60-billones-dolares">
            {" "}
            Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60
            billones de dólares{" "}
          </a>
          author="By: Milenio Digital"
        />
        <Article
          name=<a href="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/">
            Tesla recall for heater and defroster systems issued by Transport
            Canada{" "}
          </a>
          author="By: Maria Merano"
        />
        <Article
          name=<a href="https://www.infobae.com/america/agencias/2022/02/14/china-represento-la-mitad-de-las-ventas-globales-de-coches-electricos-en-2021-2/">
            {" "}
            China representó la mitad de las ventas globales de coches
            eléctricos en 2021{" "}
          </a>
          author="By: Newsroom Infobae"
        />
      </WorkExperience>
    </div>
  );
}

function NewsInfo(props) {
  return (
    <div className="profile-container">
      <div className="profile">
        <p></p>
        <p className="profile-tagline">{props.tagline}</p>
      </div>
    </div>
  );
}

function WorkExperience(props) {
  return (
    <div>
      <h1>My News Feed</h1>
      <ul className="work li">
        <li>{props.children}</li>
      </ul>
    </div>
  );
}

function Article(props) {
  return (
    <div className="main-content-container">
      <div className="content-container">
        <div className="work-container">
          <img src="https://placehold.co/800x1200" alt="image1" />
          <div className="company">
            <h3>
              <a href="https://www.example.com">{props.name}</a>
            </h3>
            <span className="author">{props.author}</span>
            <h6>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
              nulla neque. Fusce auctor mi tempus enim dignissim, quis malesuada
              nibh rhoncus. Nullam est ipsum, pharetra in dictum at, convallis
              et nisi.
            </h6>
          </div>
        </div>
        <p></p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
