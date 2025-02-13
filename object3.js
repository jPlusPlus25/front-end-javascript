let employee=[
    {eid:101,ename:'jay'},
    {eid:102,ename:'mona'},
    {eid:103,ename:'rahi'}]
console.log(employee[0].ename)
console.log(employee[1].ename)
console.log(employee[2].ename)
for(let emp of employee){
    console.log(emp.eid)
}