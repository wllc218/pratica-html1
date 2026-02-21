fetch("produtos.json")
    .then(res => res.json())
    .then(dados => {

        const container = document.querySelector(".cards");
        const carroselContainer = document.querySelector(".carrosel-cards");

        function card(item) {
            return `
      
          <div class="card">
        <div class="imagem">

            <img src="/img/${item.imagem}" alt="">
            <div class="icones">
                <div class="icon-eye">
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.05762 4.53516C9.31998 4.53533 10.3389 5.55366 10.3389 6.81445C10.3389 8.07524 9.31998 9.09357 8.05762 9.09375C6.79511 9.09375 5.77638 8.07535 5.77637 6.81445C5.77637 5.55355 6.7951 4.53516 8.05762 4.53516Z" stroke="#0F0008" fill="transparent" stroke-width="1.33353" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.05762 0.666992C10.6815 0.667094 13.2003 2.21092 14.9961 5.03223L14.9971 5.0332C15.2827 5.48049 15.4482 6.12557 15.4482 6.81055C15.4482 7.49535 15.2827 8.13972 14.9971 8.58691L14.9961 8.58789C13.2003 11.4093 10.6815 12.953 8.05762 12.9531C5.43354 12.9531 2.91404 11.4095 1.11816 8.58789V8.58691L1.0166 8.41016C0.793624 7.97788 0.667046 7.40977 0.666992 6.81055C0.666992 6.12557 0.832505 5.48049 1.11816 5.0332V5.03223C2.91403 2.21069 5.43358 0.666992 8.05762 0.666992Z" stroke="#0F0008" stroke-width="1.33353" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                
                <div class="icon-heart">

                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9817 18.0216C10.6859 18.126 10.1986 18.126 9.9027 18.0216C7.37912 17.1601 1.74023 13.5662 1.74023 7.47476C1.74023 4.78585 3.90703 2.61035 6.57854 2.61035C8.1623 2.61035 9.56332 3.37613 10.4422 4.5596C10.8893 3.95557 11.4716 3.46465 12.1426 3.12616C12.8135 2.78766 13.5544 2.61101 14.3059 2.61035C16.9774 2.61035 19.1442 4.78585 19.1442 7.47476C19.1442 13.5662 13.5053 17.1601 10.9817 18.0216Z" stroke="#0F0008" fill="transparent" stroke-width="1.3053" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>


                </div>
                <div class="icon-car">

                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.74023 1.74023H3.25438C4.19419 1.74023 4.93386 2.54952 4.85555 3.48063L4.13328 12.1478C4.10508 12.4836 4.14693 12.8216 4.25618 13.1403C4.36543 13.4591 4.5397 13.7517 4.76795 13.9995C4.9962 14.2474 5.27344 14.4452 5.58212 14.5803C5.8908 14.7154 6.22418 14.785 6.56113 14.7845H15.8288C17.0818 14.7845 18.1783 13.7577 18.274 12.5133L18.7439 5.9868C18.8483 4.54227 17.7519 3.36751 16.2987 3.36751H5.06439M7.83162 6.96143H18.274M14.1406 19.1442C14.4291 19.1442 14.7057 19.0296 14.9097 18.8256C15.1137 18.6216 15.2283 18.3449 15.2283 18.0565C15.2283 17.768 15.1137 17.4913 14.9097 17.2873C14.7057 17.0833 14.4291 16.9687 14.1406 16.9687C13.8521 16.9687 13.5754 17.0833 13.3714 17.2873C13.1674 17.4913 13.0528 17.768 13.0528 18.0565C13.0528 18.3449 13.1674 18.6216 13.3714 18.8256C13.5754 19.0296 13.8521 19.1442 14.1406 19.1442ZM7.17898 19.1442C7.46746 19.1442 7.74414 19.0296 7.94813 18.8256C8.15212 18.6216 8.26672 18.3449 8.26672 18.0565C8.26672 17.768 8.15212 17.4913 7.94813 17.2873C7.74414 17.0833 7.46746 16.9687 7.17898 16.9687C6.89049 16.9687 6.61381 17.0833 6.40982 17.2873C6.20583 17.4913 6.09123 17.768 6.09123 18.0565C6.09123 18.3449 6.20583 18.6216 6.40982 18.8256C6.61381 19.0296 6.89049 19.1442 7.17898 19.1442Z" stroke="#0F0008" fill="transparent" stroke-width="1.3053" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>
            </div>

        </div>
        <div class="conteudo-card">
            <h3>${item.nome}</h3>
            <div class="tags">
                ${item.tags.map(tag => `<div class="tag">${tag}</div>`).join("")}
            </div>
            <div class="info">
                <div class="preco"><b>R$ ${item.preco},00</b></div>
                <div class="star">${"⭐".repeat(item.estrelas)}</div>
            </div>
            <button class="comprar"><b>Compra rápida</b></button>
        </div>
    </div>
      
      `



        }


        container.innerHTML += card(dados[0]);
        container.innerHTML += card(dados[1]);
        container.innerHTML += card(dados[2]);

        dados.forEach(item => {
            carroselContainer.innerHTML += card(item);
        });

    });

const esquerda = document.querySelector(".seta-esq");
const direita = document.querySelector(".seta-dir");
const carrosel = document.querySelector(".carrosel-cards");

esquerda.addEventListener("click", () => {
    carrosel.style.transform += "translateX(320px)";
});

direita.addEventListener("click", () => {
    carrosel.style.transform += "translateX(-320px)";
});
