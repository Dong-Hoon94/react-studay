import Cars from "./Cars";

function Users(props) {
  const useData = props.data
  return (
    <Users>
      <ul>
        {
          useData.map(item => console.log(item))
        }
        {
          useData.map(({id,name,age} )=> {
            return (
              <li>
                <span>item{id}</span>
                <span>item{name}</span>
                <span>item{age}</span>
              </li>
            )
        })
        }
      </ul>
      <Cars/>
    </Users>
  )

}

export default Users;