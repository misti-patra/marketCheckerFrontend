import stocks from "../data/stocks.json";
import "./StockTable.css";

const getIndicatorClass = (diff) => {
  if (diff > 0) return "green";
  if (diff < 0) return "red";
  return "neutral";
};


function StockTable() {
  return (
    <table className="stock-table">

      <thead>
        <tr>
          <th>Ticker</th>
          <th>Name</th>
          <th>Exchange</th>
          <th>CMP</th>
          <th>10 DMA</th>
          <th>30 DMA</th>
          <th>50 DMA</th>
          <th>200 DMA</th>
          <th> TEMA Crossed</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock) => {
          const isTEMACrossed =
            stock.above10DMA &&
            stock.above30DMA &&
            stock.above50DMA;

          return (
            <tr key={stock.ticker}>
              <td>{stock.ticker}</td>
              <td>{stock.fullName}</td>
              <td>{stock.exchange}</td>
              <td>{stock.currentPrice}</td>

              <td>
                <span className={`indicator ${getIndicatorClass(stock.diff10DMA)}`}></span>
                {stock.above10DMA ? "Yes" : "No"}
              </td>

              <td>
                <span className={`indicator ${getIndicatorClass(stock.diff30DMA)}`}></span>
                {stock.above30DMA ? "Yes" : "No"}
              </td>

              <td>
                <span className={`indicator ${getIndicatorClass(stock.diff50DMA)}`}></span>
                {stock.above50DMA ? "Yes" : "No"}
              </td>


              <td>
                <span className={`indicator ${getIndicatorClass(stock.diff200DMA)}`}></span>
                {stock.above200DMA ? "Yes" : "No"}
              </td>

              <td>
                <span className={`indicator ${isTEMACrossed ? "green" : "red"}`}></span>
                {isTEMACrossed ? "Yes" : "No"}
              </td>
            </tr>
          );
        })}
      </tbody>

    </table>
  );
}

export default StockTable;
