const EmployeesList = () => {

  const fetchList = (page) => { console.log(page)
    return fetch(`https://swapi.co/api/people/?page=${page}`)
    .then(res => res.json())
  };

  return {
    fetchList
  }
};

export const employeesList = EmployeesList();