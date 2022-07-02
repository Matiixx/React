import React, { useEffect, useState } from "react";
import useStore from "../../store/useStore";
import { Link } from "react-router-dom";
import Advice from "./Advice";
import { Button } from "primereact/button";
import "./Advices.css";

export default function Advices() {
  const [loading, setLoading] = useState(true);

  const advice = useStore((state) => state.advice);
  const fetchNewAdvice = useStore((state) => state.fetchNewAdvice);

  useEffect(() => {
    (async () => {
      await fetchNewAdvice();
      setLoading(false);
    })();

    // eslint-disable-next-line
  }, []);

  const newAdviceHandle = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(async () => {
        fetchNewAdvice();
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div>
      Advices
      <p>
        <Link to="/">Go To Home</Link>
      </p>
      <div className="advice-container">
        <Advice adviceContent={advice?.slip} />
        <Button
          loading={loading}
          label="New Random Advice"
          onClick={newAdviceHandle}
        />
      </div>
    </div>
  );
}
