import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";
import BudgetCard from "./components/BudgetCard";
import TotalBudgetCard from "./components/TotalBudgetCard";
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard";
import ViewExpensesModal from "./components/ViewExpensesModal";
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "./contexts/BudgetsContext";

function App() {
    const [showAddBudgetModal, setshowAddBudgetModal] = useState(false);
    const [showAddExpenseModal, setshowAddExpenseModal] = useState(false);
    const [addExpenseModalBudgetId, setaddExpenseModalBudgetId] = useState();
    const [viewExpensesModalBudgetId, setviewExpensesModalBudgetId] = useState();

    function openAddExpenseModal(budgetId) {
        setshowAddExpenseModal(true);
        setaddExpenseModalBudgetId(budgetId);
    }

    const { budgets, getBudgetExpenses } = useBudgets();

    return (
        <>
            <Container className="mt-4 bg-dark">
                <Stack direction="horizontal" gap="4" className="mb-5">
                    <h1 className="me-auto text-light">Budgets</h1>
                    <Button variant="primary" onClick={() => {setshowAddBudgetModal(true)}}>Add Budget</Button>
                    <Button variant="outline-primary" onClick={openAddExpenseModal}>Add Expense</Button>
                </Stack>
                <div style={{display: "grid", gridTemplateColumns: "reapeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start"}}>
                    {budgets.map(budget => {
                        const amount = getBudgetExpenses(budget.id).reduce((total, expense) => 
                            total + expense.amount
                        , 0)
                        return (
                            <BudgetCard
                                key={budget.id}
                                name={budget.name}
                                amount={amount}
                                max={budget.max}
                                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                                onViewExpenseClick={() => setviewExpensesModalBudgetId(budget.id)}
                            ></BudgetCard>
                        );
                    })}
                    <UncategorizedBudgetCard
                        onAddExpenseClick={() => openAddExpenseModal(UNCATEGORIZED_BUDGET_ID)}
                        onViewExpenseClick={() => setviewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)}
                    />
                    <TotalBudgetCard />
                </div>
            </Container>
            <AddBudgetModal show={showAddBudgetModal} handleClose={() => {setshowAddBudgetModal(false)}}/>
            <AddExpenseModal show={showAddExpenseModal} defaultBudgetId={addExpenseModalBudgetId} handleClose={() => {setshowAddExpenseModal(false)}}/>
            <ViewExpensesModal budgetId={viewExpensesModalBudgetId} handleClose={() => setviewExpensesModalBudgetId()} />
        </>
    );
}

export default App;