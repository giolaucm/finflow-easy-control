
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: string;
  userId: string;
}

interface FinanceContextType {
  transactions: Transaction[];
  balance: number;
  addTransaction: (transaction: Omit<Transaction, 'id' | 'userId'>) => void;
  updateTransaction: (id: string, transaction: Omit<Transaction, 'id' | 'userId'>) => void;
  deleteTransaction: (id: string) => void;
}

const FinanceContext = createContext<FinanceContextType | null>(null);

export const useFinance = () => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance deve ser usado dentro de um FinanceProvider');
  }
  return context;
};

export const FinanceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    if (user) {
      const savedTransactions = JSON.parse(localStorage.getItem('transactions') || '[]');
      const userTransactions = savedTransactions.filter((t: Transaction) => t.userId === user.id);
      setTransactions(userTransactions);
    } else {
      setTransactions([]);
    }
  }, [user]);

  const saveTransactions = (newTransactions: Transaction[]) => {
    const allTransactions = JSON.parse(localStorage.getItem('transactions') || '[]');
    const otherUsersTransactions = allTransactions.filter((t: Transaction) => t.userId !== user?.id);
    const updatedTransactions = [...otherUsersTransactions, ...newTransactions];
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  const addTransaction = (transaction: Omit<Transaction, 'id' | 'userId'>) => {
    if (!user) return;
    
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
      userId: user.id
    };
    
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    saveTransactions(updatedTransactions);
  };

  const updateTransaction = (id: string, updatedData: Omit<Transaction, 'id' | 'userId'>) => {
    if (!user) return;
    
    const updatedTransactions = transactions.map(t => 
      t.id === id ? { ...updatedData, id, userId: user.id } : t
    );
    setTransactions(updatedTransactions);
    saveTransactions(updatedTransactions);
  };

  const deleteTransaction = (id: string) => {
    const updatedTransactions = transactions.filter(t => t.id !== id);
    setTransactions(updatedTransactions);
    saveTransactions(updatedTransactions);
  };

  const balance = transactions.reduce((acc, transaction) => {
    return transaction.type === 'income' 
      ? acc + transaction.amount 
      : acc - transaction.amount;
  }, 0);

  return (
    <FinanceContext.Provider value={{
      transactions,
      balance,
      addTransaction,
      updateTransaction,
      deleteTransaction
    }}>
      {children}
    </FinanceContext.Provider>
  );
};
