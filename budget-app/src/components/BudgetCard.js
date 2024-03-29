import React from "react";
import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utils";

export default function BudgetCard({ name, amount, max, gray, onAddExpenseClick, hideButtons, onViewExpenseClick })
{
    const classnames = ["mb-4"];
    if(amount > max) classnames.push("bg-danger", "bg-opacity-10");
    else if(gray) classnames.push("bg-light");

    return (
        <Card className={classnames.join(" ")}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between aling-items-baseline fw-normal mb-3">
                    <div className="mb-3">{name}</div>
                    <div className="d-flex align-items-baseline">{currencyFormatter.format(amount)}
                        { max && (<span className="text-muted fs-6 ms-1">
                            / {currencyFormatter.format(max)}
                        </span>)}
                    </div>
                </Card.Title>
                { max && (<ProgressBar 
                    className="rounded-pill"
                    variant={getProgressBarVariant(amount, max)}
                    min={0}
                    max={max}
                    now={amount}
                />)}
                { !hideButtons && (<Stack direction="horizontal" gap="2" className="mt-4">
                    <Button variant="outline-primary" className="ms-auto" onClick={onAddExpenseClick}>Add Expense</Button>
                    <Button onClick={onViewExpenseClick} variant="outline-secondary" >View Expense</Button>
                </Stack> )}
            </Card.Body>
        </Card>
    );
}

function getProgressBarVariant(amount, max)
{
    const ratio = amount / max;
    if(ratio < 0.5) return "primary";
    if(ratio < 0.75) return "warning";
    return "danger";
};