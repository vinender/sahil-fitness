export function Discipline() {
  return (
    <section
      id="discipline"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <video
        src="/backpose.mp4"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 text-center text-white">
        <h2 className="text-4xl font-bold uppercase tracking-widest md:text-6xl">
          Discipline in Motion
        </h2>
        <p className="mt-4 text-lg text-white/80">
          The result of dedication and relentless effort.
        </p>
      </div>
    </section>
  );
}
