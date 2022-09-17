function RenderPost(props) {
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
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={`assets/img/${props.userCurtida}.svg`} />
          <div class="texto">
            Curtido por <strong>{props.userCurtida}</strong> e <strong>outras {props.qtdd} pessoas</strong>
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