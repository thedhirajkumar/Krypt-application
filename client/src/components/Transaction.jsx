import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div
      className="bg-gradient-to-b from-gray-800 via-gray-900 to-black m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-4 rounded-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex flex-col items-center w-full mt-3">
        {/* Transaction Details */}
        <div className="w-full mb-6 p-3 rounded-lg bg-gray-700/50">
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
            className="block text-white text-sm hover:text-blue-400 transition"
          >
            From: {shortenAddress(addressFrom)}
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
            className="block text-white text-sm hover:text-blue-400 transition"
          >
            To: {shortenAddress(addressTo)}
          </a>
          <p className="text-white text-sm mt-2">Amount: <span className="text-green-400 font-medium">{amount} ETH</span></p>
          {message && (
            <p className="text-white text-sm mt-2">Message: <span className="italic">{message}</span></p>
          )}
        </div>

        {/* GIF/Image */}
        <img
          src={gifUrl || url}
          alt="Transaction GIF"
          className="w-full h-64 2xl:h-96 rounded-lg shadow-md object-cover"
        />

        {/* Timestamp */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 px-5 w-max rounded-full -mt-6 shadow-xl">
          <p className="text-white font-semibold text-sm">{timestamp}</p>
        </div>
      </div>
    </div>

  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {[...dummyData, ...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
