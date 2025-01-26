'use client';

import { useContract } from '../context/ContractContext';

export function ContractDisplay() {
  const { details, calculateTotal } = useContract();

  return (
    <div>
      <p>税抜金額: {details.amountExcludingTax}</p>
      <p>税込金額: {calculateTotal()}</p>
    </div>
  );
}
