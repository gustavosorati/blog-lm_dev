# Simple Blog - React and Node.js

<div align="center">
  <img src="https://i.ibb.co/k9ww62C/screencapture-127-0-0-1-5173-2022-10-02-14-27-15.png" height="400px"/>
  <img src="https://i.ibb.co/prYGMwP/screencapture-127-0-0-1-5173-login-2022-10-02-14-28-02.png" height="400px"/>
  <img src="https://i.ibb.co/KWrbCJv/screencapture-127-0-0-1-5173-post-16-2022-10-02-14-27-43.png" height="400px"/>
</div>

<div>
  <p>
    Esse projeto foi desenvolvido com base nos vídeos do canal [Lama Dev](https://www.youtube.com/c/LamaDev), então desde já deixo meus agradecimentos, pelo conteúdo. 
  </p>

  <p>
    O projeto se trata de um microblog, aonde os usuários podem fazer postagens, editar e excluir, contando que estejam autenticados.
  </p>
</div>

<br />

---

## Diferenças do projeto com o material do vídeo

O intuido do projeto é consolidar os conhecimentos adquiridos, tentando sempre agregar com os já obtidos, o backend por exemplo existe mais de uma versão, sendo a versão `.js` desenvolvida durante o curso, e, a `typescript`, desenvolvida posteriormente, tentando conhecer um pouco mais sobre a tipagem do *MYSQL*. No frontend por estar mais familiarizado com typescript o projeto foi desenvolvido diretamente utilizando o mesmo.

---

## Tecnologias que o projeto utiliza 

| Frontend | Backend |
| :---:   | :---: |
| React | Node.js |
| Typescript | Mysql |
| React Router Dom | Express |
| Styled Components | Json Web Token |
| React Quill | Multer |
| Axios | Bcrypt   |
| Date-FNS |    |

---

## Como executar o projeto

Recomendo utilizar como backend a pasta que especifica `backend - typescript`, nela deverá ser criada um arquivo .env com os dados de conexão com o banco de dados mysql. Além disso em sua maquina precisará ter o banco de dados MYSQL instalado e um SGBD, com o uma base de dados criadas e 2 tabelas, como também exibido abaixo.

    MYSQL_HOST=
    MYSQL_USER=
    MYSQL_PASSWORD=
    MYSQL_DATABASE=

  
-> TABLE POSTS
<img src="https://i.ibb.co/dDxrpBz/AAA.png" />
<img src="https://i.ibb.co/QnsfCGN/aaa2.png" />

-> TABLE USERS
<img src="https://i.ibb.co/F4RqfbF/bbb.png" />

Após essas configurações será necessário executar ``npm run dev`, tanto para o backend como para o frontend que o projeto estará funcionando.

---

## O futuro do projeto

Eu tenho a pretensão ainda de tentar implementar o backend utilizando `PRISMA`, além disso pretendo também fazer um arquivo de SEED para o Mysql para não ter que precisar criar manualmente as tabelas conforme a imagem.
