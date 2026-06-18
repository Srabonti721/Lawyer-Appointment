const GetStoredLawyer= () =>{
    const storedLawyerSTR = localStorage.getItem('booking');
    if(storedLawyerSTR){
const storedLawyerData = JSON.parse(storedLawyerSTR);
return storedLawyerData;
    }
    else{
        return []
    }
}
const AddToStoredLawyer = (id) =>{
  const  storedLawyerData = GetStoredLawyer();
  if(storedLawyerData.includes(id)){
    alert("this id is exist")
  }
  else{
    storedLawyerData.push(id);
    const data = JSON.stringify(storedLawyerData);
    localStorage.setItem('booking', data)
  }
}



// const save = (booking)=>{
// const test = JSON.stringify(booking);
// localStorage.setItem("booking", test)
// }

// const addData = (id) =>{
//   const add = GetStoredLawyer();
//   const newAdd = [...add, id];
//   save(newAdd)
// }

// const RemoveToStored = (id) =>{
//   const getData = GetStoredLawyer();
//     const remaining = getData.filter(
//     lawyerId => lawyerId !== id
//   );
// addData(remaining)
// }
export {AddToStoredLawyer, GetStoredLawyer}