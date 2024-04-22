import { createContext, ReactNode, useContext } from "react";

export const TranslationContext = createContext<any>(null);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("Wrap app TranslationProvider");
  }
  return context;
};

export const TranslationProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: Object;
}) => {
  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};
