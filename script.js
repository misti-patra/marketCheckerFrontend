fetch("stocks.json")
    .then(res => res.json())
    .then(stocks => {
        const tbody = document.getElementById("stockBody");

        stocks.forEach(stock => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td class="ticker">${stock.ticker}</td>
                <td>${stock.fullName}</td>
                <td><span class="exchange">${stock.exchange}</span></td>
                <td class="cmp">₹${stock.currentPrice}</td>
                <td class="${stock.above10DMA ? 'yes' : 'no'}">
                    ${stock.above10DMA ? 'Yes' : 'No'}
                </td>
                <td class="${stock.above30DMA ? 'yes' : 'no'}">
                    ${stock.above30DMA ? 'Yes' : 'No'}
                </td>
                <td class="${stock.above50DMA ? 'yes' : 'no'}">
                    ${stock.above50DMA ? 'Yes' : 'No'}
                </td>
                <td class="${stock.above200DMA ? 'yes' : 'no'}">
                    ${stock.above200DMA ? 'Yes' : 'No'}
                </td>
            `;

            tbody.appendChild(row);
        });
    })
    .catch(err => console.error("Failed to load stock data:", err));
