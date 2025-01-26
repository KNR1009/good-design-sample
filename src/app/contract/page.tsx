import { ContractProvider } from '../../context/ContractContext';
import { ContractDisplay } from '../../components/ContractDisplay';

export default function ContractPage() {
  'use client';

  return (
    <ContractProvider>
      <ContractDisplay />
    </ContractProvider>
  );
}
