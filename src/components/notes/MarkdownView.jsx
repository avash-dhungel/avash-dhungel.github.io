import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MarkdownView({ children, asContent = false }) {
  return (
    <div className="prose-custom text-[15px] leading-7 text-steel">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (props) =>
            asContent ? (
              <h2 className="mb-4 mt-8 text-xl font-bold text-ink first:mt-0" {...props} />
            ) : (
              <h1 className="mb-4 mt-8 text-2xl font-bold text-ink first:mt-0" {...props} />
            ),
          h2: (props) => <h2 className="mb-3 mt-8 text-xl font-bold text-ink" {...props} />,
          h3: (props) => <h3 className="mb-2 mt-6 text-lg font-bold text-ink" {...props} />,
          p: (props) => <p className="my-4" {...props} />,
          ul: (props) => <ul className="my-4 list-disc space-y-1 pl-6" {...props} />,
          ol: (props) => <ol className="my-4 list-decimal space-y-1 pl-6" {...props} />,
          li: (props) => <li className="leading-7" {...props} />,
          strong: (props) => <strong className="font-semibold text-ink" {...props} />,
          em: (props) => <em className="italic" {...props} />,
          blockquote: (props) => (
            <blockquote
              className="my-5 border-l-4 border-blueprint bg-fog/70 px-4 py-3 text-steel"
              {...props}
            />
          ),
          code: (props) => (
            <code
              className="rounded bg-fog px-1.5 py-0.5 font-mono text-[0.85em] text-navy"
              {...props}
            />
          ),
          pre: (props) => (
            <pre
              className="my-5 overflow-x-auto rounded-lg border border-line bg-ink p-4 font-mono text-sm text-slate-100"
              {...props}
            />
          ),
          a: (props) => <a className="text-blueprint underline underline-offset-2 hover:text-blueprint-dark" {...props} />,
          hr: (props) => <hr className="my-8 border-line" {...props} />,
          table: (props) => (
            <div className="my-5 overflow-x-auto">
              <table className="w-full border-collapse text-sm" {...props} />
            </div>
          ),
          th: (props) => (
            <th className="border border-line bg-fog px-3 py-2 text-left font-semibold text-ink" {...props} />
          ),
          td: (props) => <td className="border border-line px-3 py-2 align-top" {...props} />
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}