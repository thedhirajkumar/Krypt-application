import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TransactionsProvider } from "./context/TransactionContext.jsx";

createRoot(document.getElementById('root')).render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
)
