import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../logo192.png";
import {
  player,
  BelivePlayerWidget
} from "../belive-player-widget";

export default function Home() {
  const isInIframe = React.useMemo(() => {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }, []);

  React.useEffect(() => {
    player.on(
      BelivePlayerWidget.PlayerEventType.READY,
      () => {
        console.log("Player Widget Ready");
      }
    );

    player.on(
      BelivePlayerWidget.PlayerEventType.MINIMIZED,
      () => {
        console.log("Player Widget MINIMIZED");
      }
    );

    player.on(
      BelivePlayerWidget.PlayerEventType.UNMINIMIZED,
      () => {
        console.log("Player Widget UNMINIMIZED");
      }
    );

    player.on(
      BelivePlayerWidget.PlayerEventType.CLOSE,
      () => {
        console.log("Player Widget CLOSE");
      }
    );
    return () => {
      player.removeAllListeners();
    };
  }, []);

  function close() {
    player.close();
  }

  function minimize() {
    player.minimize();
  }

  function unminimize() {
    player.unminimize();
  }

  function watchLive() {
    player.open();
  }

  return (
    <div>
      {isInIframe && (
        <div className="alert alert-danger" role="alert">
          We are restricting iframe from using our script.
          To make this sample code work
          <a
            href="/"
            target="_blank"
            className="alert-link mx-1"
          >
            click here
          </a>
          to open this page in another browser tab and try
          to click "Watch Live" again
        </div>
      )}
      <div className="d-flex flex-column align-items-center justify-content-center">
        <img
          width="100px"
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h1>Demo BeLive Player Widget!</h1>
        <Link to="/about">Navigate to another page</Link>
        <div className="d-flex justify-content-center mt-5">
          <button
            id="watch-button"
            className="btn btn-primary mx-2"
            onClick={watchLive}
          >
            Watch Live
          </button>
          <button
            id="close-button"
            className="btn btn-primary mx-2"
            onClick={close}
          >
            Close Widget
          </button>
          <button
            id="minimize-button"
            className="btn btn-primary mx-2"
            onClick={minimize}
          >
            Minimize
          </button>
          <button
            id="unminimize-button"
            className="btn btn-primary mx-2"
            onClick={unminimize}
          >
            Unminimize
          </button>
        </div>
      </div>
    </div>
  );
}
