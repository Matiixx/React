import React, { useRef } from 'react';
import { Form, FormControl, FormGroup, FormLabel, FormSelect, Modal, ModalBody, ModalTitle, Button } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetsContext';

export default function AddExpenseModal({ show, handleClose, defaultBudgetId }) {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const budgetIdRef = useRef();
  const { addExpense, budgets } = useBudgets();

  function handleSubmit(e)
  {
    e.preventDefault();
    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetID: budgetIdRef.current.value,
    });
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit} className="bg-dark text-light">
        <ModalHeader closeButton>
          <ModalTitle>New Expense</ModalTitle>
        </ModalHeader>
        <ModalBody>
        <FormGroup className="mb-4" controlId='description'>
            <FormLabel>Description</FormLabel>
            <FormControl ref={descriptionRef} type='text' required ></FormControl>
          </FormGroup>
          <FormGroup className="mb-4" controlId='amount'>
            <FormLabel>Amount</FormLabel>
            <FormControl ref={amountRef} type='number' min={0} step={0.01} required className="mb-4"></FormControl>
          </FormGroup>
          <FormGroup className="mb-4" controlId='budgetId'>
            <FormLabel>Budget</FormLabel>
            <FormSelect defaultValue={defaultBudgetId} ref={budgetIdRef}>
              <option id={UNCATEGORIZED_BUDGET_ID}>{UNCATEGORIZED_BUDGET_ID}</option>
              {budgets.map(budget => (
                <option key={budget.id} value={budget.id}>{budget.name}</option>
              ))}
            </FormSelect>
          </FormGroup>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">Add</Button>
          </div>
        </ModalBody>
      </Form>
    </Modal>
  )
}
