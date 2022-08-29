import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCoins(json);
        setLoading(false);
        console.log(coins);
      });
  }, []);
  return (
    <div>
      <h1>코인트래커</h1>
      {loading ? (
        "Loading..."
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) (${coin.quotes.USD.price})
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
