import ReactMarkdown from 'react-markdown'

function MarkdownDoc({ content, title }) {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/30">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
          <ReactMarkdown
            components={{
              h1: ({ ...props }) => <h1 className="text-3xl font-semibold text-white" {...props} />,
              h2: ({ ...props }) => <h2 className="mt-6 text-xl font-semibold text-slate-100" {...props} />,
              h3: ({ ...props }) => <h3 className="mt-5 text-lg font-semibold text-slate-200" {...props} />,
              p: ({ ...props }) => <p className="text-slate-300" {...props} />,
              ul: ({ ...props }) => <ul className="ml-5 list-disc space-y-2" {...props} />,
              ol: ({ ...props }) => <ol className="ml-5 list-decimal space-y-2" {...props} />,
              li: ({ ...props }) => <li className="text-slate-300" {...props} />,
              blockquote: ({ ...props }) => (
                <blockquote className="rounded-2xl border border-sky-500/30 bg-sky-500/10 p-4 italic text-sky-100" {...props} />
              ),
              code: ({ inline, ...props }) => (
                inline ? (
                  <code className="rounded bg-slate-800 px-2 py-1 text-sm text-sky-200" {...props} />
                ) : (
                  <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm text-sky-100" {...props} />
                )
              ),
              img: ({ src, alt, ...props }) => (
                <img
                  src={src}
                  alt={alt}
                  className="my-4 w-full rounded-2xl border border-slate-800 object-cover shadow-lg"
                  {...props}
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  )
}

export default MarkdownDoc
