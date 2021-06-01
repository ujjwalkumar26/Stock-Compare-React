import { TickerSymbolSearch } from 'ticker-symbol-search'
import React from 'react';
function Symbolsearch({showChart}) {
    const customTheme = {
      paper: {
        background: "rgba(128, 128, 128, 0.75)",
        color: "white",
      },
      search: {
        icon: {
          color: "rgba(188, 204, 221, 0.25)",
        },
        input: {
          color: "white",
          placeholderColor: "rgba(188, 204, 221, 0.25)",
        },
      },
      markets: {
        background: "rgba(0, 0, 0, 0.25)",
        color: "white",
      },
      selector: {
        color: "white",
      },
    }
  
    return <TickerSymbolSearch
            callback = {(data) => {console.log(data);showChart(data);}}
            theme={customTheme} // optional
            />;
}
export default Symbolsearch;