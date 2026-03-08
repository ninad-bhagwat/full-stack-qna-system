export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_20%_10%,rgba(56,189,248,0.20),transparent_60%),radial-gradient(900px_circle_at_80%_20%,rgba(167,139,250,0.18),transparent_55%),radial-gradient(900px_circle_at_50%_90%,rgba(34,197,94,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black to-black" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-40 pb-20">
        <section className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Ask better questions.
            <span className="block bg-gradient-to-r from-sky-300 via-violet-300 to-emerald-200 bg-clip-text text-transparent">
              Get better answers.
            </span>
          </h1>

          <p className="mt-6 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            A lightweight StackOverflow-style app where you can ask, answer, vote, and build a
            knowledge base with tags and rich text.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/questions/ask"
              className="inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              Ask a question
            </a>
            <a
              href="/questions"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 font-medium text-white/90 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
            >
              Browse questions
            </a>
          </div>

          <div className="mt-8 text-xs text-white/50">
            New here?{" "}
            <a className="text-white/80 underline underline-offset-4 hover:text-white" href="/register">
              Create an account
            </a>{" "}
            or{" "}
            <a className="text-white/80 underline underline-offset-4 hover:text-white" href="/login">
              login
            </a>
            .
          </div>
        </section>

        <section className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-medium">Write with rich text</div>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Format questions clearly using the editor, code blocks, and structure.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-medium">Tag + search faster</div>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Organize knowledge with tags so answers stay discoverable.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-medium">Vote on what helps</div>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Upvote great answers and let the best solutions rise to the top.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="text-lg font-semibold">Ready to publish your first question?</div>
              <p className="mt-2 text-sm text-white/65">
                Add a clear title, details, tags, and an image to help others help you.
              </p>
            </div>
            <a
              href="/questions/ask"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 font-medium text-black transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-black"
            >
              Start asking
            </a>
          </div>
        </section>

        <footer className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Q&A • Built with Next.js + Appwrite
        </footer>
      </div>
    </main>
  );
}
