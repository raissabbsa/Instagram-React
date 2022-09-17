import React from "react";

export default function Usuario() {

  const [nome, setNome] = React.useState("Catana")
  const [foto, setFoto] = React.useState("assets/img/catanacomics.svg")

  return (
    <div class="usuario">
      <img onClick = {() => setFoto(prompt("Insira sua foto"))} src={foto} />
      <div class="texto">
        <strong>catanacomics</strong>
        <span>
          {nome}
          <ion-icon onClick={() => setNome(prompt("Insira o seu nome"))} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}

