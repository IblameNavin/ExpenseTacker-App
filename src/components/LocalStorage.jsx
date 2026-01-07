const expenseTracker = "ExpenseTrackerApp"


export const localStorageSetItem = (expenses)=>{
        localStorage.setItem(expenseTracker, JSON.stringify(expenses))
}

export const localStorageGetItem = () =>{
 const data = localStorage.getItem(expenseTracker)
 if(!data) return []
 return JSON.parse(data)
}