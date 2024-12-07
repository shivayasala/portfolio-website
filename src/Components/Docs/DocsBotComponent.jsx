import React, { useEffect } from 'react';
import './DocBotComponent.css';

const DocsBotComponent = () => {
  useEffect(() => {
    window.DocsBotAI = window.DocsBotAI || {};
    DocsBotAI.init = function(e) {
      return new Promise((resolve, reject) => {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://widget.docsbot.ai/chat.js";
        let firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode.insertBefore(script, firstScript);

        script.addEventListener("load", () => {
          let checkElement;
          Promise.all([
            new Promise((resolve, reject) => {
              window.DocsBotAI.mount(Object.assign({}, e)).then(resolve).catch(reject);
            }),
            (checkElement = function(selector) {
              return new Promise(resolve => {
                if (document.querySelector(selector)) return resolve(document.querySelector(selector));
                let observer = new MutationObserver(() => {
                  if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                  }
                });
                observer.observe(document.body, { childList: true, subtree: true });
              });
            })("#docsbotai-root"),
          ])
          .then(() => resolve())
          .catch(reject);
        });

        script.addEventListener("error", (e) => {
          reject(e.message);
        });
      });
    };

    DocsBotAI.init({ id: "8iEdKMKknBjpAN59wsf6/WJtl6H4zCNnf6qZSlxap" });
  }, []);

  return <div id="docsbotai-root" className="docsbot-container"></div>;
};

export default DocsBotComponent;
