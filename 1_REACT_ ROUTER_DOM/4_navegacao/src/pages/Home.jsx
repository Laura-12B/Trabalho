import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Lovi u</h1>
      <Link to={"/usuarios"}>Ver Usuários</Link>
    </div>
  )
}

export default Home