import InfosUsuario from "./InfosUsuario";

function CardVideo(){
    const titulo = "Título do vídeo";
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }
    return(
        <>
      
        <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <InfosUsuario />
            </div>
        </>  
    )
}
export default CardVideo