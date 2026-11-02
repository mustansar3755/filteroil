// Simple schematic illustrations. Solid strokes get class "draw" (GSAP draws them on scroll).
const S = { fill: 'none', strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
const t = { fontSize: 11, fill: '#5b6b84', fontFamily: 'IBM Plex Sans', letterSpacing: 1 }

function Oil() {
  return (
    <>
      <rect className="draw" x="40" y="150" width="140" height="80" stroke="#0a3d8f" {...S} />
      <rect className="draw" x="240" y="50" width="80" height="100" stroke="#0a3d8f" {...S} />
      <path className="draw" d="M180 190 H210 V100 H240" stroke="#0a3d8f" {...S} />
      <path className="flow" d="M320 100 H360 V190 H180" stroke="#3a9d34" {...S} />
      <path className="draw" d="M255 75 H305 M255 100 H305 M255 125 H305" stroke="#0a3d8f" {...S} />
      <text x="40" y="143" style={t}>RESERVOIR</text>
      <text x="262" y="40" style={t}>FILTER</text>
      <text x="260" y="215" style={t}>CLEAN RETURN</text>
    </>
  )
}
function Diesel() {
  return (
    <>
      <rect className="draw" x="40" y="60" width="90" height="150" stroke="#0a3d8f" {...S} />
      <rect className="draw" x="180" y="90" width="60" height="90" stroke="#0a3d8f" {...S} />
      <rect className="draw" x="290" y="90" width="60" height="90" stroke="#0a3d8f" {...S} />
      <path className="flow" d="M130 135 H180 M240 135 H290" stroke="#3a9d34" {...S} />
      <path className="draw" d="M320 180 V215 M320 215 c-8 -10 -8 -20 0 -28 c8 8 8 18 0 28" stroke="#3a9d34" {...S} />
      <text x="40" y="50" style={t}>FUEL TANK</text>
      <text x="182" y="80" style={t}>STAGE 1</text>
      <text x="292" y="80" style={t}>STAGE 2</text>
      <text x="262" y="240" style={t}>WATER OUT</text>
    </>
  )
}
function Analysis() {
  return (
    <>
      <path className="draw" d="M50 190 A65 65 0 0 1 180 190" stroke="#3a9d34" {...S} />
      <path className="draw" d="M215 190 A65 65 0 0 1 345 190" stroke="#0a3d8f" {...S} />
      <path className="draw" d="M115 190 L150 140" stroke="#0a3d8f" {...S} />
      <path className="draw" d="M280 190 L245 140" stroke="#3a9d34" {...S} />
      <text x="62" y="225" style={t}>PARTICLE COUNT</text>
      <text x="238" y="225" style={t}>WATER CONTENT</text>
    </>
  )
}
function Process() {
  return (
    <>
      <rect className="draw" x="150" y="50" width="100" height="150" stroke="#0a3d8f" {...S} />
      <path className="draw" d="M170 70 V180 M190 70 V180 M210 70 V180 M230 70 V180" stroke="#0a3d8f" {...S} />
      <path className="flow" d="M40 125 H150 M250 125 H360" stroke="#3a9d34" {...S} />
      <path className="draw" d="M80 108 L110 142 M80 142 L110 108" stroke="#0a3d8f" {...S} />
      <text x="40" y="160" style={t}>INLET</text>
      <text x="320" y="160" style={t}>OUTLET</text>
      <text x="152" y="40" style={t}>FILTER HOUSING</text>
    </>
  )
}
function Gas() {
  return (
    <>
      <rect className="draw" x="170" y="30" width="60" height="70" stroke="#0a3d8f" {...S} />
      <rect className="draw" x="70" y="140" width="260" height="80" stroke="#0a3d8f" {...S} />
      <path className="flow" d="M40 65 H170" stroke="#3a9d34" {...S} />
      <path className="draw" d="M200 100 V140" stroke="#0a3d8f" {...S} />
      <text x="40" y="55" style={t}>DUST + MOISTURE</text>
      <text x="72" y="210" style={t}>RESERVOIR</text>
    </>
  )
}

const map = { oil: Oil, diesel: Diesel, analysis: Analysis, process: Process, gas: Gas }

export default function LineArt({ type }) {
  const Art = map[type]
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" role="img" aria-label={`${type} filtration schematic`}>
      <Art />
    </svg>
  )
}
