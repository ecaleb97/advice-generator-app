import { useEffect, useState } from "react";
import { getRandomAdvice } from "../services/advices";

export function useAdvice() {
  const [advice, setAdvice] = useState<string>("");
  const [id, setId] = useState<number>();

  const refreshAdvice = async () => {
    const response = await getRandomAdvice()
    setAdvice(response.advice)
    setId(response.id)
  }

  useEffect(() => {
    refreshAdvice()
  }, []);

  return { advice, id, refreshAdvice };
}