const todoKey = "ReactExpenseTracker"


export const localStorageSetItem = (expenses)=>{
    return   localStorage.setItem(todoKey, JSON.stringify(expenses))
}

export const localStorageGetItem = ()=>{
     const rawTodos = localStorage.getItem(todoKey)
    if(!rawTodos) return []
    return JSON.parse(rawTodos)
  }
