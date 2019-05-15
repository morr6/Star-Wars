const EmployeesList = () => {

  const fetchList = () => {
    return fetch("https://swapi.co/api/people")
    .then(res => res.json())
  };

  return {
    fetchList
  }
};

export const employeesList = EmployeesList();