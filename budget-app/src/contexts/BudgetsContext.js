import React, { useContext } from "react";
import { v4 as uuidV4 } from 'uuid'; 
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetsContext = React.createContext();

export const UNCATEGORIZED_BUDGET_ID = "Uncategorized";

export function useBudgets()
{
  return useContext(BudgetsContext);
}

export const BudgetProvider = ({ children }) =>
{
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  function getBudgetExpenses(budgetID)
  {
    return expenses.filter(expense => expense.budgetID === budgetID);
  }

  function addExpense({ description, amount, budgetID })
  {
    setExpenses(prev => {
      return [...prev, { id: uuidV4(), description, amount, budgetID } ];
    })
  }

  function addBudget({ name, max })
  {
    setBudgets(prev => {
      if(prev.find(budgets => budgets.name === name))
      {
        return prev;
      }
      return [...prev, { id: uuidV4(), name, max } ];
    })
  }

  function deleteBudget({ id })
  {
    setExpenses(prev => {
      return prev.map(expense => {
        if(expense.budgetID !== id) return expense;
        return { ...expense, budgetID: UNCATEGORIZED_BUDGET_ID };
      })
    })

    setBudgets(prev => {
      return prev.filter(budget => budget.id !== id);
    })
  }

  function deleteExpense({ id })
  {
    setExpenses(prev => {
      return prev.filter(expense => expense.id !== id);
    })
  }

  return (
    <BudgetsContext.Provider value={{
      budgets,
      expenses,
      getBudgetExpenses,
      addExpense,
      addBudget,
      deleteBudget,
      deleteExpense,
    }}>
      {children}
    </BudgetsContext.Provider>
  );
}