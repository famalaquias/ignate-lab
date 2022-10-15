import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Dependências instaladas para execução do Projeto:
// tailwindcss: dependência de desenvolvimento.
// postcss: automatiza tarefas dentro do css.
//autoprefixer: biblioteca que adiciona prefixo para algumas funcionalidades do css.
