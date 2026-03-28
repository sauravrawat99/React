import { createContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  // ✅ Add Employee
  const addEmployee = (employee) => {
    const newEmp = {
      id: Date.now(),
      ...employee,
    };

    setEmployees((prev) => [...prev, newEmp]);
  };

  // ✅ Delete Employee
  const deleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
