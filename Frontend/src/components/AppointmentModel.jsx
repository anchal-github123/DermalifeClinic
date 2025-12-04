import { useState } from "react"
export default function AppointmentModel({isClick,setIsClick}) {
  const [userdata,setUserData]=useState({
    name:"",
    date:"",
    time:"",
    message:""
})

function handelEachFiled(e){
  const {name,value}=e.target;
  setUserData((prev)=>({...prev,[name]:value}))
  console.log(isClick)

}
function handleSubmit(){

      // Create message text for WhatsApp
    const text = `
Appointment Request  
----------------------
Name: ${userdata.name}
Date: ${userdata.date}
Time: ${userdata.time}
Message: ${userdata.message}

 `

 const whatsappNumber = "9776636330" // ← Your client number

    // Create WhatsApp URL
    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(text)

    // Open WhatsApp
    window.open(whatsappURL, "_blank")
    setIsClick(false)


}

 return (

    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 w-[350px] rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-center">Book Appointment</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded mb-3"
          name="name"
          value={userdata.name}
          onChange={(e)=>handelEachFiled(e)}
       
        />
        <input
          type="date"
          className="w-full p-2 border rounded mb-3"
           name="date"
          placeholder="Enter date"
           value={userdata.date}
          onChange={(e)=>handelEachFiled(e)}
      
        />

        <input
          type="time"
          className="w-full p-2 border rounded mb-3"
          name="time"
         placeholder="time"
          value={userdata.time}
          onChange={(e)=>handelEachFiled(e)}
        
        />

        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded mb-4"
          rows="3"
          name="message"
          value={userdata.message}
          onChange={(e)=>handelEachFiled(e)}

        ></textarea>

        <div className="flex justify-end gap-3">
          <button
            onClick={()=>setIsClick(false)}
            className="px-4 py-2 rounded bg-[#3e3e3e] text-light"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-primary text-light"
          >
            Book Now
          </button>
          
        </div>
      </div>
    </div>
  )
}
