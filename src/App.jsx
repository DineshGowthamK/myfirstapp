

function App() {
  //const [count, setCount] = useState(0)
  const users= [{
    name:"Dinesh",
    email: "dinesh@gmail.com",
    batch:"b53wd"
  },
  {
    name:"Ram",
    email: "ram@gmail.com",
    batch:"b50wd"
  },
  {
    name:"vicky",
    email: "vicky@gmail.com",
    batch:"b54wd"
  },
  {
    name:"arun",
    email: "arun@gmail.com",
    batch:"b52wd"
  },
  {
    name:"Deepak",
    email: "deepak@gmail.com",
    batch:"b512we"
  }
  
]
  return <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((e,i)=>{
              return <tr>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.batch}</td>
            </tr>
            })
            
          }
        </tbody>
      </table>
      
    </>
}

export default App
// {
//   users.map((e)=>{
//     return <>
//     <h1>Welcome to React {e.name} to batch {e.batch}</h1>
//     </>
//   })
// }