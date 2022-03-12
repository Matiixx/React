import React from 'react';
import {Modal, ModalBody, ModalTitle, Button, Stack } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetsContext';
import { currencyFormatter } from '../utils';

export default function ViewExpensesModal({ budgetId, handleClose}) {

  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets();

  const budget = UNCATEGORIZED_BUDGET_ID === budgetId
    ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
    : budgets.find(b => b.id === budgetId);
  
  const expenses = getBudgetExpenses(budgetId);
  console.log(expenses);
  return (
    <Modal show={budget != null} onHide={handleClose}>
      <ModalHeader closeButton>
        <Stack direction='horizontal' gap={3}>
          <ModalTitle>Expenses - {budget?.name}</ModalTitle>
          { budgetId !== UNCATEGORIZED_BUDGET_ID && ( <Button variant='outline-danger' onClick={() => {
            deleteBudget(budget);
            handleClose();
          }}>Delete</Button> )}
        </Stack>
      </ModalHeader>
      <ModalBody>
        <Stack direction='vertical' gap={4}>
          {expenses.map((expense) => (
            <Stack direction='horizontal' gap={2} key={expense.id}>
              <div className="me-auto fs-4">{expense.description}</div>
              <div className="fs-4">{currencyFormatter.format(expense.amount)}</div>
              <Button size='sm' variant='outline-danger' onClick={() => deleteExpense(expense)}>&times;</Button>
            </Stack>
          ))}
        </Stack>
      </ModalBody>
    </Modal>
  )
}

