
# 🌍 Language Switch / Trocar Idioma

[English](./README.md) | [Português](./README-pt-br.md)

# 🚀 PromptMania

Bem-vindo ao **PromptMania**! 📝✨ Esta plataforma permite que os usuários compartilhem prompts criativos com outros, explorem uma variedade de ideias geradas pela comunidade e interajam com perfis. Você pode fazer login, criar prompts, editar ou excluir, e procurar prompts por nome de usuário ou hashtags. Clique no perfil de qualquer usuário para ver todos os seus prompts compartilhados!

## 🔑 Funcionalidades

- **🔒 Autenticação de Usuário**: Faça login usando sua conta do Google via `next-auth` 🌐.
- **📝 Criar e Compartilhar Prompts**: Usuários podem criar novos prompts e compartilhá-los com a comunidade.
- **✏️ Editar & Excluir**: Modifique ou remova seus prompts a qualquer momento.
- **🔍 Buscar**: Encontre facilmente prompts pesquisando por nome de usuário ou hashtags.
- **👤 Perfis de Usuário**: Visite perfis para ver todos os prompts compartilhados por um usuário específico.

## ⚙️ Tecnologias Utilizadas

- **Next.js** para o frontend 🌟
- **React** para construção de componentes UI ⚛️
- **MongoDB** para armazenar dados de usuários e prompts 📦
- **bcrypt** para autenticação e segurança 🔑
- **Tailwind CSS** para design estiloso e responsivo 🎨
- **next-auth** para autenticação via Google ✨

---

## 🛠️ Instruções de Setup

Para rodar este projeto localmente, siga os passos abaixo:

### 1. Clone o repositório

```bash
git clone https://github.com/seuusername/prompt-sharing-website.git
```

### 2. Instale as dependências

Acesse a pasta do projeto e instale as dependências necessárias:

```bash
cd prompt-sharing-website
npm install
```

### 3. Crie um arquivo `.env`

Na raiz do diretório, crie um arquivo `.env` e adicione as seguintes variáveis de ambiente:

```bash
GOOGLE_ID=seu-google-client-id
GOOGLE_CLIENT_SECRET=seu-google-client-secret

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=seu-next-auth-secret
```

Certifique-se de substituir `seu-google-client-id`, `seu-google-client-secret` e `seu-next-auth-secret` com suas credenciais reais.

### 4. Rode o projeto localmente

Após configurar o arquivo `.env`, execute o seguinte comando para iniciar o servidor:

```bash
npm run dev
```

Isso irá iniciar o app em [http://localhost:3000](http://localhost:3000). 🎉

---

## 📚 Como Usar

1. **Faça login com o Google**: Use o botão de login do Google para autenticar.
2. **Crie um Prompt**: Após o login, clique no botão "Criar Prompt" e compartilhe suas ideias.
3. **Pesquise por Prompts**: Use a barra de pesquisa para encontrar prompts por hashtags ou nomes de usuários.
4. **Veja Perfis de Usuários**: Clique no perfil de qualquer usuário para ver todos os prompts que ele compartilhou.

---

## 🖥️ Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes. 📝
