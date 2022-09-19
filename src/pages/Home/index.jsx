import LogOutButton from "../../components/LogOutButton"

function Home() {
  const bearerCookie = document.cookie

  return (
    <div>
      {bearerCookie ? <LogOutButton /> : <div></div>}
      <hr />
      <hr />
      <h1>Bienvenue sur le réseau social de GROUPOMANIA!</h1>
      <hr />
      <hr />
      <p>
        Notre nouveau réseau social interne est enfin disponible! Nous espérons
        qu'il répondra à vos attentes... <br />
        Pour participer aux échanges, il vous suffit de vous enregistrer sur la
        page d'authentification avec votre email professionnel puis de vous
        connecter!
      </p>
    </div>
  )
}

export default Home
