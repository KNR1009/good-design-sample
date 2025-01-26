'use client';

// 必要なインポートを行う
import { createContext, useContext, ReactNode, JSX } from 'react';
import { ContractDetails } from '../types/contract';

// ContractContextTypeの型を定義
type ContractContextType = {
  details: ContractDetails;
  calculateTotal: () => number;
};

// ContractContextを定義
const ContractContext = createContext<ContractContextType | undefined>(undefined);

// ContractProviderコンポーネントを定義
export const ContractProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  // コントラクトの詳細を定義
  const details: ContractDetails = {
    amountExcludingTax: 1000,
    salesTaxRate: 0.1,
  };

  // 合計金額を計算する関数
  const calculateTotal = () => {
    return details.amountExcludingTax * (1 + details.salesTaxRate);
  };

  // ContractContext.Providerを返す
  return (
    <ContractContext.Provider value={{ details, calculateTotal }}>
      {children}
    </ContractContext.Provider>
  );
};

// useContractフックを定義
export const useContract = (): ContractContextType => {
  // ContractContextを使用
  const context = useContext(ContractContext);
  // コンテキストが未指定の場合はエラーを投げる
  if (!context) {
    throw new Error('useContract must be used within a ContractProvider');
  }
  // コンテキストを返す
  return context;
};
