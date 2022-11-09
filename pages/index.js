import React from "react";

import config from "../config.json";
import styled from "styled-components";

import Menu from "../src/components/Menu/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosDaHomePage = {
    // backgroundColor: "red"
  };

  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <div style={estilosDaHomePage}>
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
      </div>
    </>
  );
}
export default HomePage;

const StyledHeader = styled.div`

  background-color: ${({ theme }) => theme.backgroundLevel1} ;
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
const StyledBanner = styled.div`
  background-image: url(${({ bg }) => bg});
  height: 230px;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />

      <section className="user-info">
        <img src={`http://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ searchValue, ...props }) {
  const playlistsName = Object.keys(props.playlists);

  return (
    <StyledTimeline>
      {playlistsName.map((playlistsName) => {
        const videos = props.playlists[playlistsName];
        return (
          <section key={playlistsName}>
            <h2>{playlistsName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />

                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
