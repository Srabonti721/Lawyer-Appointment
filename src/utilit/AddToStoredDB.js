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
export {AddToStoredLawyer, GetStoredLawyer}