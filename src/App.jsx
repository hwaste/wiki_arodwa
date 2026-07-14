import { useEffect, useState } from 'react'
import { BookOpen, Network, Server, ShieldCheck, Sparkles, Wrench } from 'lucide-react'
import MarkdownDoc from './components/MarkdownDoc'
import './App.css'

const docs = [
  { id: '01-inicio-arodwa', title: 'Inicio', file: 'docs_arodwa/01-inicio-arodwa.md', icon: BookOpen },
  { id: '02-instalacion-arodwa', title: 'Instalación', file: 'docs_arodwa/02-instalacion-arodwa.md', icon: Wrench },
  { id: '03-active-directory-arodwa', title: 'Active Directory', file: 'docs_arodwa/03-active-directory-arodwa.md', icon: Server },
  { id: '04-cliente-dominio-arodwa', title: 'Cliente en dominio', file: 'docs_arodwa/04-cliente-dominio-arodwa.md', icon: ShieldCheck },
  { id: '05-servicios-de-red-arodwa', title: 'Servicios de red', file: 'docs_arodwa/05-servicios-de-red-arodwa.md', icon: Network },
  { id: '06-gpo-arodwa', title: 'GPO', file: 'docs_arodwa/06-gpo-arodwa.md', icon: ShieldCheck },
  { id: '07-prompts-arodwa', title: 'Prompts', file: 'docs_arodwa/07-prompts-arodwa.md', icon: Sparkles },
]

function App() {
  const [activeDoc, setActiveDoc] = useState(docs[0])
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(activeDoc.file)
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch(() => setContent('# Error al cargar el documento'))
  }, [activeDoc])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.25),_transparent_35%),linear-gradient(135deg,_#020617,_#111827)] text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 lg:flex-row lg:px-8">
        <aside className="w-full rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-slate-950/40 lg:w-72">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Wiki AroDWA</p>
            <h1 className="mt-2 text-2xl font-semibold text-white">Documentación inicial</h1>
            <p className="mt-2 text-sm text-slate-400">
              Estructura lista para ampliar con contenido real y capturas laterales.
            </p>
          </div>

          <nav className="space-y-2">
            {docs.map((doc) => {
              const Icon = doc.icon
              const selected = activeDoc.id === doc.id

              return (
                <button
                  key={doc.id}
                  type="button"
                  onClick={() => setActiveDoc(doc)}
                  className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                    selected
                      ? 'border-sky-400 bg-sky-500/15 text-white'
                      : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700 hover:bg-slate-800/70'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{doc.title}</span>
                </button>
              )
            })}
          </nav>

          <div className="mt-6 rounded-2xl border border-dashed border-slate-700 bg-slate-950/70 p-4 text-sm text-slate-400">
            <p className="font-medium text-slate-200">Comandos útiles</p>
            <ul className="mt-2 space-y-2">
              <li>npm install</li>
              <li>npm run dev</li>
              <li>npm run build</li>
            </ul>
          </div>
        </aside>

        <main className="flex-1 rounded-3xl border border-slate-800 bg-slate-900/70 p-4 shadow-2xl shadow-slate-950/40 sm:p-6">
          <MarkdownDoc content={content} title={activeDoc.title} />
        </main>
      </div>
    </div>
  )
}

export default App
