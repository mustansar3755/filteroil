export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Oil Filtration', href: '#oil' },
  { label: 'Diesel Fuel Filtration', href: '#diesel' },
  { label: 'Oil & Fuel Analysis', href: '#analysis' },
  { label: 'Process Filtration', href: '#process' },
  { label: 'About Filtroil', href: '#why' },
  { label: 'FAQs', href: '#faq' },
]

export const stats = [
  { value: 40, suffix: '+', label: 'Years engineering filtration' },
  { value: 20, suffix: '+', label: 'Industries served worldwide' },
  { value: 50, suffix: '+', label: 'Countries with systems deployed' },
  { value: 70, suffix: '%+', label: 'Reduction in maintenance costs related to contamination' },
  { value: 90, suffix: '%+', label: 'Particulate contamination reduction' },
]

export const lines = [
  {
    id: 'oil', type: 'oil', icon: 'Droplets', title: 'Oil Filtration',
    text: 'Oil filtration removes particulate and moisture contamination from hydraulic and lubrication oil while equipment stays in service. Filtroil builds high-efficiency oil filtration and kidney loop filtration systems that hold a target cleanliness level continuously, extending oil life and protecting bearings, pumps, and valves from premature wear.',
    points: ['Kidney loop filtration runs offline - no machine downtime to filter', 'Removes particulate and free/emulsified water in one pass loop', 'Extends oil drain intervals and cuts lubricant purchase volume'],
  },
  {
    id: 'diesel', type: 'diesel', icon: 'Fuel', title: 'Diesel Fuel Filtration',
    text: 'Diesel fuel filtration removes water, particulate, and microbial contamination from stored and in-use fuel. Filtroil fuel polishing systems recirculate tank contents through staged filtration and water separation, protecting injectors and engines and reducing fuel-related downtime for backup generators and marine equipment.',
    points: ['Fuel water separation stops microbial growth at its source', 'Injector protection for high-pressure common-rail engines', 'Keeps backup generator fuel start-ready between load tests'],
  },
  {
    id: 'analysis', type: 'analysis', icon: 'Gauge', title: 'Oil Analysis, Diesel Fuel Analysis, and Diagnostic Tools',
    text: 'Oil and fuel diagnostic tools measure fluid condition on site instead of waiting on a lab. Filtroil’s portable particle counters and fuel testing equipment give maintenance teams real-time visibility into contamination and moisture, so you act on the data before a problem turns into unplanned downtime.',
    points: ['ISO cleanliness codes read in minutes, at the machine', 'Trend contamination across assets to prioritize service', 'Prove filtration ROI with before/after oil analysis data'],
  },
  {
    id: 'process', type: 'process', icon: 'Filter', title: 'Process Filtration',
    text: 'Process filtration cleans the fluid streams that a plant’s product depends on. Filtroil engineers liquid process filtration systems and filtration housings for demanding duty - supporting product quality, downstream equipment protection, and regulatory compliance across manufacturing and processing environments.',
    points: ['Housings and media matched to fluid, flow, and micron target', 'Protects pumps, nozzles, and heat exchangers downstream', 'Documented filtration steps for compliance and audit'],
  },
  {
    id: 'gas', type: 'gas', icon: 'Wind', title: 'Gas Filtration',
    text: 'Gas filtration protects tanks and reservoirs from the air they breathe. Filtroil air breathers and desiccant breathers filter airborne particulate and block moisture ingress at the tank vent - a critical, often-overlooked layer of equipment protection that keeps clean oil from being re-contaminated between services.',
    points: ['Desiccant breathers strip water vapor before it condenses', 'Tank vent filtration for dusty plants and coastal humidity', 'Lowest-cost protection layer per gallon of oil defended'],
  },
]

export const why = [
  { title: 'Lower maintenance costs', text: 'Fewer component failures and longer service intervals mean less labor, fewer parts, less emergency spend.' },
  { title: 'Extend oil & component life', text: 'Contamination-driven wear is the wear you can remove. Clean fluid stays in spec for longer.' },
  { title: 'Improve asset reliability', text: 'Fewer surprise breakdowns and more predictable service intervals across every asset you run.' },
  { title: 'Maximize uptime', text: 'Keep critical equipment running, and move the repairs you do need into planned outages.' },
]

export const industries = [
  'Injection & Blow Molding and Extrusion', 'Marine', 'Power Plants', 'Power Generators',
  'Paper Mills', 'Steel Mills', 'Metal Stamping', 'Cement Plants',
  'Machine Shops', 'Wastewater Treatment', 'Off-Shore Drilling', 'Air Compressors',
  'Off-Highway', 'OEM’s', 'Food Processing', 'Agriculture',
  'Wind Farms', 'Truck Fleets', 'Automotive', 'Mining',
]

export const faqs = [
  { q: 'What is kidney loop filtration and when is it needed?', a: 'Kidney loop filtration is an offline filtration circuit that continuously draws oil from a reservoir, filters it, and returns it clean - independent of the machine’s own pressure line. It is needed when built-in filters can’t reach the required cleanliness level, or when a system runs intermittently and contamination settles in the reservoir.' },
  { q: 'How often should industrial oil be tested or filtered?', a: 'Test critical reservoirs quarterly at minimum, and monthly on high-duty or high-value assets. Filtration should be continuous rather than periodic: an offline kidney loop running whenever the machine runs holds a stable cleanliness code instead of letting contamination spike between services.' },
  { q: 'How does oil filtration extend equipment life?', a: 'Most hydraulic and lubrication wear is caused by hard particles and water. Removing them keeps clearances intact and oil additives working, so pumps, valves, and bearings last longer and need fewer repairs.' },
  { q: 'What is an air breather and why does my tank need one?', a: 'An air breather filters the air that enters a tank as the fluid level changes. Without one, dust and moisture are pulled straight into your oil. Desiccant breathers also remove water vapor.' },
  { q: 'What’s the difference between oil filtration and fuel filtration?', a: 'Oil filtration targets particulate and water in lubricants and hydraulic fluid. Fuel filtration adds water separation and microbial control, because diesel stored in tanks grows bacteria and fungi at the fuel-water interface.' },
  { q: 'Can Filtroil filtration systems reduce unplanned downtime?', a: 'Yes. Contamination is a leading cause of component failure. Holding fluid at target cleanliness reduces failures and lets you plan repairs around scheduled outages.' },
]
