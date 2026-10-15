# FGS Pesquisas

Estudo de interface inspirado em uma página inicial de pesquisa.

## Recursos

Formulário de busca e validação para impedir consultas vazias.

## Tecnologias

HTML, CSS e JavaScript; sem etapa de build npm na estrutura analisada.

## Executar localmente

Sirva os arquivos por HTTP; uma opção com Python 3 instalado:

```sh
git clone https://github.com/Felipegaldinos/pagina-inicial-google.git
cd pagina-inicial-google
python -m http.server 8000
```

Abra http://localhost:8000. Recursos de terceiros, quando usados, exigem conexão com a internet.

## Onde começar no código

- `index.html` — ponto de entrada para entender o projeto.

## Estado atual

A pesquisa é encaminhada ao Google por formulário GET. Este projeto não implementa indexação nem um motor de busca próprio.

## Autoria

[Felipe Galdino](https://github.com/Felipegaldinos). Consulte os arquivos do repositório para os termos de licença aplicáveis.
