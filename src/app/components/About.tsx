import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <div className="inline-block w-12 h-1 bg-amber-600 mb-4"></div>
              <h2 className="text-3xl md:text-4xl text-amber-900 mb-6">
                Tradice thajského wellness
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                V našem salonu věříme, že dotek je nejpřirozenější způsob, jak zklidnit tělo i mysl. Nabízíme tradiční thajské a relaxační masáže, které pomáhají uvolnit napětí, zlepšit spánek a vrátit tělu lehkost.
              </p>
              
              <p className="text-lg leading-relaxed">
                Každá masáž probíhá v klidné a příjemné atmosféře, s opravdovou péčí a respektem k vašemu tělu i pohodě. Masérky z Thajska pracují s citem, zkušeností a v rytmu dechu, aby se vaše tělo mohlo znovu uvolnit.
              </p>
              
              <p className="text-lg leading-relaxed">
                Ať už potřebujete regeneraci po náročném dni, úlevu od bolesti nebo jen chvíli pro sebe, u nás se vždy postarají o to, abyste odcházeli s pocitem lehkosti a klidu.
              </p>
              
              <div className="mt-8 p-6 bg-white rounded-lg border border-amber-200">
                <h3 className="text-xl text-amber-900 mb-3">Naše filozofie</h3>
                <p className="text-gray-700 leading-relaxed">
                  Věříme, že péče o tělo je zároveň péčí o duši. Každá masáž je jiná, protože každý člověk je jiný. Neřídíme se rutinou, ale vašimi potřebami v daném okamžiku.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-amber-50">
                <svg 
                  width="403" 
                  height="436" 
                  viewBox="0 0 403 436" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3/4 h-3/4 text-amber-900"
                >
                  <path d="M149 88L153 92L165 108L179 126L189 139L202 156L213 170L241 206L251 221L257 231L262 244L264 255V263L261 275L255 287L244 299L234 306L221 311L216 312H197L183 308L173 302L163 293L156 283L151 272L150 269L117 264L108 260L101 254L97 246L96 239L102 241H121L130 239L138 238H147L149 239V237L154 234L159 230L169 224L171 222L175 221L179 217L187 210L190 204H192L196 213V226L192 235L183 246L173 257L168 266L169 273L172 279L180 288L194 295L198 296H216L228 291L236 285L242 277L246 266V254L242 240L233 225L222 210L211 196L197 178L185 163L167 139L165 138V205L161 211L156 215L149 216V88Z" fill="currentColor"/>
                  <path d="M198 0H215L227 3L240 10L250 19L257 29L262 41L264 50V59L260 56V64L258 73L254 81L252 82L249 73L245 67L238 63L229 61H221L209 64L199 70L194 76L191 85L188 84L186 80V73L190 65L195 58L193 57L189 65L186 64V57L195 42L207 30L219 22L223 18L214 16H199L189 19L179 25L171 34L167 45V60L171 72L179 86L189 100L201 115L221 141H223L235 125L251 104L263 88H264V223L259 218L252 208L248 198L247 193V138H245L243 143L229 161L223 170L218 165L205 149L195 136L181 118L171 105L161 90L153 74L149 58V48L153 34L159 24L168 14L178 7L189 2L198 0Z" fill="currentColor"/>
                  <path d="M0 356L9 357L18 361L27 367L37 377L39 378V356L48 357L60 363L71 372L80 383L88 397L94 413L97 430V436H77L75 420L71 406L63 390L58 386V435L57 436H39L36 417L32 404L25 391L20 385L19 436H0V356Z" fill="currentColor"/>
                  <path d="M175 356H187L196 358L209 371L216 382L217 357L222 356H233L234 357V436H214L212 418L207 403L200 392L193 384L192 436H174V357L175 356Z" fill="currentColor"/>
                  <path d="M298 356H303V436H285L284 432V424L261 423L260 436H241L243 418L248 403L255 389L264 377L273 368L284 361L293 357L298 356Z" fill="currentColor"/>
                  <path d="M156 356H162V436H144V423H120L119 436H100L101 423L106 405L116 386L125 375L132 368L143 361L152 357L156 356Z" fill="currentColor"/>
                  <path d="M397 356H403V436H385V423H361L360 436H342V424L346 408L354 391L364 377L372 369L382 362L394 357L397 356Z" fill="currentColor"/>
                  <path d="M315 356H333L334 357V435L333 436H315V356Z" fill="currentColor"/>
                  <path d="M283 383H285V410H265L268 402L275 391L281 384L283 383Z" fill="white"/>
                  <path d="M142 383H144V410H124L127 403L132 394L139 385L142 383Z" fill="white"/>
                  <path d="M383 383H385V410H366L367 405L373 394L382 384L383 383Z" fill="white"/>
                </svg>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-100 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}