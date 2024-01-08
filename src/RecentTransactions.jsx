const mockTransactions = [
    {
      txId: "01e4dsa",
      user: "johndoe",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
    {
      txId: "01e4dsa",
      user: "aberdohnny",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "51034szv",
      user: "goodmanave",
      date: "2022-11-05",
      cost: "200.95",
    },
    {
      txId: "0a123sb",
      user: "stevebower",
      date: "2022-11-02",
      cost: "13.55",
    },
    {
      txId: "01e4dsa",
      user: "aberdohnny",
      date: "2021-09-01",
      cost: "43.95",
    },
    {
      txId: "120s51a",
      user: "wootzifer",
      date: "2019-04-15",
      cost: "24.20",
    },
    {
      txId: "0315dsaa",
      user: "jackdower",
      date: "2022-04-01",
      cost: "133.45",
    },
  ];

export default function RecentTransaction() {

    return (
        <div className="recentTransaction">
            <h3>Recent Transaction</h3>
          <ul className="recentTransactionList">
            {mockTransactions.map((transaction, index) => (
                <Transaction key={index} data={transaction} />
            ))}
          </ul>
        </div>
    )
}

function Transaction({ data }) {
    return (
      <li>
        <div className="transaction">
            <div className="trData">
                <p className="txId">{data.txId}</p>
                <p>{data.user}</p>
            </div>
            <div className="trData"> 
                <span>{data.date}</span>
            </div>
            <div className="trData">
                <span className="cost">{data.cost}</span>
            </div>
        </div>
      </li>
    );
  }