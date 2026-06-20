import { toast } from 'react-toastify';
const GetStoredLawyer = () => {
  const storedLawyerSTR = localStorage.getItem('booking');
  if (storedLawyerSTR) {
    const storedLawyerData = JSON.parse(storedLawyerSTR);
    return storedLawyerData;
  }
  else {
    return []
  }
}
const AddToStoredLawyer = (id, name) => {
  const storedLawyerData = GetStoredLawyer();
  if (storedLawyerData.includes(id)) {
    toast.error(' Appointment already exists.', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  else {
    toast.success(`Appointment with ${name} booked successfully.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    storedLawyerData.push(id);
    const data = JSON.stringify(storedLawyerData);
    localStorage.setItem('booking', data)
  }
}

const save = (booking) => {
  const test = JSON.stringify(booking);
  localStorage.setItem("booking", test)
}
const RemoveToStored = (id,) => {
  const getData = GetStoredLawyer();
  const remaining = getData.filter(lawyerId => lawyerId != id);
  save(remaining);
}
export { AddToStoredLawyer, GetStoredLawyer, RemoveToStored }