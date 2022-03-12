async function GetFetch() {
    const response = await fetch('http://localhost:5000/logs')
    return response.json();
}

// function ChatLogs() {



//     const items = [];
//     GetFetch()
//         .then(res => {
//             const logs = res.data;
            
//             for(let i in logs)
//             {
//                 items.push(
//                     <div className="messageBox">
//                         <span className="nickname">
//                             {logs[i].nick}
//                         </span>
//                         <span className="messageText">
//                             {logs[i].message}
//                         </span>
//                     </div>
//                 )
//             }
//         });
//     console.log(items);
// }
export default GetFetch;