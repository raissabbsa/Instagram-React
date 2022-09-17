function RenderSugestoes(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.img} />
        <div class="texto">
          <div class="nome">{props.user}</div>
          <div class="razao">Segue você</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  )
}

export default function Sugestoes() {

  const listaUsuarios=[
    {imagem:"assets/img/bad.vibes.memes.svg", usuario:"bad.vibe.memes"},
    {imagem:"assets/img/chibirdart.svg", usuario:"chibirdart"},
    {imagem:"assets/img/razoesparaacreditar.svg", usuario:"razoesparaacreditar"},
    {imagem:"assets/img/adorable_animals.svg", usuario:"adorable_animals"},
    {imagem:"assets/img/smallcutecats.svg", usuario:"smallcutecats"}
  ]

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {listaUsuarios.map((u) => <RenderSugestoes img={u.imagem} user={u.usuario}/>)}
      
    </div>
  );
}