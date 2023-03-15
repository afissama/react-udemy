import Expense from "./components/Expenses/Expenses";

const App =()=> {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const expenses2 = [
    {
      id: "e1",
      title: "Migolet Paper",
      amount: 94.12,
      date: new Date(2024, 5, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Credit Insurance",
      amount: 794.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "New Laptop (HP)",
      amount: 4500,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense expenses={expenses} />
      <Expense expenses={expenses2} />
    </div>
  );
}

function Hello() {
  return <p>This is Hello world !!</p>;
}

export default App;
