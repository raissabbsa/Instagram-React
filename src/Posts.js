import React from "react";

function RenderPost(props) {

  const [salvar, setSalvar] = React.useState("bookmark-outline")
  const [coracao, setCoracao] = React.useState("heart-outline")
  const [classeCoracao, setClasse] = React.useState("escondido")
  const [like, setLike] = React.useState(props.qtdd)

  function curtida() {
    if(coracao =="heart-outline") {
      setCoracao("heart")
      setLike(like+1)
      setClasse("visivel")
    }
    else {
      setCoracao("heart-outline")
      setLike(like-1)
      setClasse("escondido")
    }
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.img} />
          {props.user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src="assets/img/gato-telefone.svg" />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon onClick={curtida} name={coracao} class={classeCoracao}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={() => setSalvar("bookmark")} name={salvar}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={`assets/img/${props.userCurtida}.svg`} />
          <div class="texto">
            Curtido por <strong>{props.userCurtida}</strong> e <strong>outras {like} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Posts() {

  const posts = [
    {imgPost:"assets/img/meowed.svg", userPost:"meowed", userCurtida:"respondeai",qtdd:101523},
    {imgPost:"assets/img/barked.svg", userPost:"barked",userCurtida:"adorable_animals", qtdd:200541}
    ];

  return (
    <div class="posts">
      {posts.map((p) => <RenderPost img={p.imgPost} user={p.userPost} userCurtida={p.userCurtida} qtdd={p.qtdd}/>)}
    </div>
  );
}