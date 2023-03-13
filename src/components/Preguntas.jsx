function Preguntas() {
  return (
    <center>
      <div className="bg-slate-800 text-white p-10 m-10">
        <h1 className="text-3xl text-cyan-400">INSTRUCCIONES:</h1>
        <p className="text-2xl">
          El siguiente botón te llevará a un chat con inteligencia artificial
          (IA) dónde podrás sacar tus dudas en base a tus necesidades
          y requerimientos nutricionales. <br />
          <br />
          <b>EJEMPLO:</b>
          <br />
          <br />
          <ul>
            <li>"¿Que beneficios tiene la creatina?"</li>
            <br />
            <li>"¿Combinar creatina con cafeína?"</li>
            <br />
            <li>"¿Qué es y para qué sirven los anabólicos?"</li>
            <br />
            <li className="text-sky-400">Nota: Recuerda que siempre es importante consultar a un profesional de la salud o un nutricionista antes de cambiar cualquier plan alimenticio.</li>
          </ul>
          <br />
        </p>
        
        

        <a
          href="https://chat.openai.com/chat?__cf_chl_rt_tk=6xJ32.jDgWRcAuLusy7wBUpImp8ZU5Qs9PY0D4lSKC8-1678335307-0-gaNycGzNFpA"
          className="border rounded text-2xl p-3 bg-sky-400 text-slate-800 hover:bg-white"
        >
          <button className="btn p-2 ">Ir al chat</button>
        </a>
      </div>
    </center>
  );
}

export default Preguntas;
