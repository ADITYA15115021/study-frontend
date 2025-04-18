import axios from "axios";
import { useEffect, useState } from "react"
import { Spinner } from "../components/Spinner.jsx";
import { Appbar } from "../components/AppBar.jsx";

export default function QuizHistory(){

    const userId = localStorage.getItem("userId");
    const [history,setHistory] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {

        if(!userId)return;

        async function fetchRecords() {
            const response = await axios.get("https://ak-backend1.xyz/get-result",{
                params : {userId}
            });
            setHistory(response.data.dbResponse);
            setLoading(false);
        }

        fetchRecords();
       
    },[userId])

    
    if( loading ){
      return (
       <div className="h-screen flex justify-center items-center">
         <Spinner/>
       </div>
      )
   }

    return (

      <div>

        <div className="">
         <Appbar />       
        </div>


      <div className="min-h-screen bg-gray-100 px-4 py-10">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Your Test History</h1>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {history.length === 0 ? (
              <div className="text-center text-gray-500">No records found.</div>
            ) : (
              history.map((record, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow p-6 border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xl font-semibold text-blue-700">{record.subject.toUpperCase()}</span>
                    <span className="text-sm text-gray-500">{new Date(record.takenAt).toLocaleString("en-US", { timeZone: "Asia/Kolkata" })}</span>
                  </div>
                  <div className="text-gray-700">Score: <span className="font-semibold text-green-600">{record.score}</span> / {record.tolalMarks}</div>
                </div>
              ))
            )}
          </div>
        </div>


    </div>
        
    
      );
      

   
}