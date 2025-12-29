import React, { useState, type FC, type JSX } from "react"


type CCAppProps = {
  render: (amount: number) => JSX.Element;
};

const CCApp:FC<CCAppProps> = ({render}) => {
  const [amount, setAmount] = useState<number>(0);

  const amountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < 0) {
      console.log("amount can't be negative");
      return;
    }
    setAmount(value);
  };

  return (
    <div className="flex flex-col gap-4 items-start font-semibold">
        <h1>INR to USD, POUND</h1>
      <input
        type="number"
        placeholder="Enter amount"
        onChange={amountChangeHandler}
        className="border p-2 rounded"
      />
      {render(amount)}
    </div>
  );
};
export default CCApp
