// RUUZGYM PRODUCT CATALOG
// Update product names, descriptions, features, WhatsApp text, and image URLs here.
// The on-page Admin Panel can also update image URLs and saves them to this browser.


// ═══════════════════════════════════════════════════
// RUUZGYM PRODUCT DATA — EDIT HERE OR VIA ADMIN PANEL
// ═══════════════════════════════════════════════════
const DEFAULT_PRODUCTS = [
  {
    id: 1, num:"01", cat:"benches", audience:["commercial"], space:"large", usage:"heavy", subcat:"benches", featured:true, badge:"Best Seller",
    tag:"Commercial Bench Press",
    name:"Iron Throne",
    desc:"800 lb rated. 11-gauge steel. Lifetime frame warranty. The centrepiece of every serious gym in Ghana.",
    features:["800 lb / 363 kg load capacity","11-gauge commercial steel frame","10 integrated plate storage posts","6 adjustable bar catch positions","Lifetime structural warranty"],
    image:"https://res.cloudinary.com/ddgs5x2qd/image/upload/v1774021567/commercial_flat_bench_4_i196vg.png",
    wa:"Iron%20Throne%20Bench%20Press"
  },
  {
    id:2, num:"02", cat:"benches", audience:["commercial"], space:"medium", usage:"heavy", subcat:"racks",
    tag:"Benches & Racks", name:"Power Rack / Power Cage",
    desc:"Full safety cage for heavy squats, bench and deadlifts. Built for maximum load, maximum safety.",
    features:["Heavy-gauge steel cage","Adjustable safety spotter arms","Pull-up bar included","Commercial & home builds"],
    image:"https://res.cloudinary.com/ddgs5x2qd/image/upload/v1774021568/power_cage_nmgum7.png", wa:"Power%20Rack"
  },
  {
    id:3, num:"03", cat:"benches", audience:["commercial"], space:"medium", usage:"heavy", subcat:"racks",
    tag:"Benches & Racks", name:"Squat Rack / Half Rack",
    desc:"Compact open-front rack. Squats, overhead press, bench — no cage needed. Space-efficient for any gym.",
    features:["Adjustable bar catches","Spotter arms on both sides","Plate storage pegs","Commercial & personal builds"],
    image:"https://i.pinimg.com/736x/88/a2/6f/88a26fcc4d0557a2824872bf78034905.jpg", wa:"Squat%20Rack"
  },
  {
    id:4, num:"04", cat:"benches", audience:["both"], space:"small", usage:"moderate", subcat:"benches",
    tag:"Benches & Racks", name:"Weight Bench",
    desc:"Flat, incline and decline positions. Thick pad, solid base. For pressing, rowing, dumbbell work and more.",
    features:["Flat / incline / decline","Commercial-grade padding","Foldable options available"],
    image:"https://res.cloudinary.com/ddgs5x2qd/image/upload/v1774021568/saw_teeth_flat_adjustable_bench_i1bmxc.png",
    images:[
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1774021568/saw_teeth_flat_adjustable_bench_i1bmxc.png",
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789329672/WhatsApp_Image_2026-09-13_at_00.55.52_kaonxa.jpg",
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789329671/WhatsApp_Image_2026-09-13_at_00.55.52_1_ujznvm.jpg"
    ], wa:"Weight%20Bench"
  },
  {
    id:5, num:"05", cat:"machines", audience:["commercial"], space:"large", usage:"heavy",
    tag:"Machines", name:"Smith Machine",
    desc:"Squat. Bench. Row. Press. One rack, full body. Precision-guided rails for safe heavy training.",
    features:["Commercial & personal builds","Precision-guided rails","Full-body training coverage"],
    image:"https://i.pinimg.com/1200x/e3/c8/e0/e3c8e04d41e118c7b8af68d553157b78.jpg", wa:"Smith%20Machine"
  },
  {
    id:6, num:"06", cat:"machines", audience:["commercial"], space:"large", usage:"heavy",
    tag:"Machines", name:"Cable Crossover Machine",
    desc:"Dual cable columns, full range of motion. Chest flyes, cable rows, tricep pushdowns — one machine, endless exercises.",
    features:["Dual adjustable cable columns","Multiple attachment points","Commercial grade pulleys","Full upper-body coverage"],
    image:"https://i.pinimg.com/1200x/ca/01/15/ca0115570baa93aaac6e16acfa8527c6.jpg", wa:"Cable%20Crossover%20Machine"
  },
  {
    id:7, num:"07", cat:"machines", audience:["commercial"], space:"large", usage:"heavy",
    tag:"Machines", name:"Leg Press Machine",
    desc:"Heavy-duty plate-loaded leg press. Build serious leg strength without spinal compression. A gym floor essential.",
    features:["Plate-loaded, commercial build","Adjustable backrest & footplate","Safety lock system"],
    image:"https://i.pinimg.com/1200x/a4/df/e7/a4dfe7930a4a9a90de814f63ccbb5d20.jpg", wa:"Leg%20Press%20Machine"
  },
  {
    id:8, num:"08", cat:"machines", audience:["home"], space:"small", usage:"moderate",
    tag:"Machines", name:"Single Station Home Indoor Machine",
    desc:"Build wide, strong lats. Smooth pulleys, multiple grip options. One of the most-used machines in every gym.",
    features:["Adjustable seat & knee pad","Multiple bar attachments","Low row cable included"],
    image:"https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789764060/WhatsApp_Image_2026-09-13_at_00.55.52_4_dlq41w.jpg",
    images:[
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789764060/WhatsApp_Image_2026-09-13_at_00.55.52_4_dlq41w.jpg",
      "https://new.ksd-images.lt/display?path=aikido%2Fstore%2F2170e04f511a6c1799cd6c93a40b54f1.jpeg&op=resize&w=768&q=69"
    ], wa:"Single%20Station%20Home%20Indoor%20Machine"
  },
  {
    id:9, num:"09", cat:"weights", audience:["both"], space:"medium", usage:"heavy",
    tag:"Free Weights", name:"Rubber Hex Dumbbells",
    desc:"Every weight. Rubber-coated hex heads. Commercial grip. Built to survive daily drops and hard use.",
    features:["Full weight range available","Rubber-coated hex design","Individual or full sets","Dumbbell rack available"],
    image:"https://i.pinimg.com/736x/12/22/32/122232529689c76392dfa610ab894130.jpg", wa:"Rubber%20Hex%20Dumbbells"
  },
  {
    id:10, num:"10", cat:"weights", audience:["both"], space:"small", usage:"moderate",
    tag:"Free Weights", name:"Yoga / Studio Dumbbells",
    desc:"Neoprene-coated light dumbbells for yoga, aerobics, pilates and studio classes. Colour-coded by weight.",
    features:["Neoprene coated","Light weight range","Colour-coded by weight"],
    image:"https://i.pinimg.com/736x/81/19/fd/8119fd88f13dda7ee6a21cd468db3192.jpg", wa:"Yoga%20Studio%20Dumbbells"
  },
  {
    id:11, num:"11", cat:"weights", audience:["both"], space:"medium", usage:"heavy",
    tag:"Free Weights", name:"Olympic Weight Plates",
    desc:"Rubber-coated or cast iron. Standard 2-inch Olympic hole. Available in all sizes — pairs or full sets.",
    features:["Rubber coated & cast iron options","Standard Olympic 2\" hole","All sizes available","Pairs or full sets"],
    image:"https://i.pinimg.com/1200x/e6/bc/d6/e6bcd6ce92f656446684188d6c8491f4.jpg", wa:"Olympic%20Weight%20Plates"
  },
  {
    id:12, num:"12", cat:"weights", audience:["both"], space:"medium", usage:"heavy",
    tag:"Free Weights", name:"Olympic Barbells",
    desc:"7ft Olympic bar and EZ Curl Bar. Knurled grip, rotating sleeves. The backbone of any free weight setup.",
    features:["7ft standard Olympic bar","EZ Curl Bar available","Knurled grip, rotating sleeves","High load rating"],
    image:"https://i.pinimg.com/736x/5a/84/78/5a84787d075519be6f0887df4dba4d1c.jpg", wa:"Olympic%20Barbells"
  },
  {
    id:13, num:"13", cat:"cardio", audience:["both"], space:"medium", usage:"moderate",
    tag:"Cardio · Treadmills", subcat:"treadmills", name:"Treadmill",
    desc:"Heavy-duty commercial motors or compact home units. Variable speed, multiple programmes. Built to last.",
    features:["Commercial & personal builds","Variable speed & programmes","Heavy-duty motor","Foldable options available"],
    image:"https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789250796/WhatsApp_Image_2026-09-13_at_00.55.51_yn4tf6.jpg",
    images:[
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789250796/WhatsApp_Image_2026-09-13_at_00.55.51_yn4tf6.jpg",
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789250795/WhatsApp_Image_2026-09-13_at_00.55.51_1_djqnl5.jpg",
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789250492/treadmill._xx_s8iowz.png",
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789250531/treadxx_qgmp4w.png",
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789328424/treadmill_xsx_lmzwkw.png",
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789328424/treadmill_xx_uswqgt.png",
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789328424/treadmill_ere_mwlqum.png",
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789328424/treadmill_cxxd_pnsacx.png"
    ], wa:"Treadmill"
  },
  {
    id:14, num:"14", cat:"accessories", audience:["commercial"], space:"large", usage:"heavy",
    tag:"Gym Setup", name:"Gym Rubber Flooring",
    desc:"Interlocking rubber tiles and roll-out matting. Protects your floor, reduces noise, prevents equipment damage.",
    features:["Interlocking rubber tiles","Roll-out mat options","High density, heavy-duty","Custom sizes available"],
    image:"https://i.pinimg.com/736x/49/28/df/4928dfb4460428cbfd64662b07744134.jpg", wa:"Gym%20Rubber%20Flooring"
  },
  {
    id:15, num:"15", cat:"accessories", audience:["both"], space:"small", usage:"moderate",
    tag:"Accessories", name:"Resistance Bands",
    desc:"Full set, every resistance level. Warm-ups, workouts, rehab, mobility. Light to carry, serious results.",
    features:["All resistance levels","Durable latex material","Home & gym compatible"],
    image:"https://i.pinimg.com/1200x/5d/6b/63/5d6b63b6966eb93158d954d67d86028f.jpg", wa:"Resistance%20Bands"
  },
  {
    id:16, num:"16", cat:"accessories", audience:["both"], space:"small", usage:"moderate",
    tag:"Accessories", name:"ladies gym fit",
    desc:"Full set, every resistance level. Warm-ups, workouts, rehab, mobility.  serious results.",
    features:["Moisture-Wicking: Fabric that pulls sweat away to keep you dry.","Durable material","Four-Way Stretch: High elastane content for full range of motion."],
    image:"https://i.pinimg.com/1200x/22/a4/71/22a471e5e44e3d6015964cc3e3108eb3.jpg", wa:"Ladies%20gym%20fit"
  },
  {
    id:17, num:"17", cat:"accessories", audience:["both"], space:"small", usage:"light",
    tag:"Accessories", name:"Yoga Mat & Exercise Ball",
    desc:"Premium non-slip mat and anti-burst exercise ball. Stretching, core work, stability and recovery.",
    features:["Premium non-slip mat","Anti-burst exercise ball","Core, stretch & recovery"],
    image:"https://i.pinimg.com/1200x/93/3f/74/933f7498b0b66f21bdc3a50491b55aa2.jpg", wa:"Yoga%20Mat%20and%20Exercise%20Ball"
  },
 {
    id:18, num:"18", cat:"services", audience:["commercial"], space:"large", usage:"heavy",
    tag:"Other Services", name:"Repairs & Assembly",
    desc:"We fix, service and assemble all types of gym equipment. From treadmill motors to cable systems — we keep your gym running.",
    features:["Treadmill repairs & servicing","Cable system & pulley repairs","Full equipment assembly","All brands & machine types"],
    image:"https://i.pinimg.com/1200x/40/7a/6c/407a6c47abc25c375d15bf6864417fd8.jpg", wa:"Equipment%20Repairs%20and%20Assembly"
  },
  {
    id:21, num:"21", cat:"machines", audience:["commercial"], space:"large", usage:"heavy",
    tag:"Strength Equipment · Commercial", name:"Multifunctional Smith Machine Power Rack",
    desc:"All-in-one strength station featuring a Smith machine, power rack, cable pulley system, adjustable bench, pull-up bar and weight-plate storage. Designed for comprehensive full-body strength training.",
    features:["Integrated Smith machine guided bar system","Heavy-duty power rack / squat rack","Adjustable safety hooks and bar catches","Dual cable / pulley system with multiple attachment points","Olympic barbell support and integrated plate storage","Adjustable workout bench","Pull-up / chin-up bar","Multi-position squat and bench press stations","Heavy-duty steel construction","Black finish with contrasting yellow safety catches"],
    bestFor:"Commercial gyms, hotels, fitness centres and serious home gyms",
    build:"Heavy-duty steel construction for demanding strength training",
    specifications:["Squats, bench press and deadlifts","Smith machine and shoulder press exercises","Pull-ups, chin-ups and cable rows","Lat, biceps, triceps and functional cable training","Full-body workouts with free-weight and cable stations"],
    image:"https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789762368/WhatsApp_Image_2026-09-13_at_00.55.52_2_armfz3.jpg",
    images:[
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789762368/WhatsApp_Image_2026-09-13_at_00.55.52_2_armfz3.jpg",
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789763314/WhatsApp_Image_2026-09-13_at_00.55.52_3_cs5ine.jpg"
    ],
    wa:"Multifunctional%20Smith%20Machine%20Power%20Rack"
  },
  {
    id:22, num:"22", cat:"machines", audience:["home"], space:"small", usage:"moderate",
    tag:"Home Gym · Multi-station", name:"Multifunctional Home Gym / All-in-One Gym Station",
    desc:"An all-in-one strength-training machine designed to provide multiple resistance-training exercises in a single unit. It combines chest, shoulder, back, leg and cable exercises with a weight-stack system for full-body home workouts.",
    features:["Multi-station strength-training system","Integrated weight-stack resistance system","Chest press and pec-deck / fly stations","Lat pulldown and low-row cable training","Leg extension / curl station","Adjustable workout seat and back support","Cable handles and pulley system","Multiple exercise positions","Heavy steel frame construction","Padded seat and back support"],
    bestFor:"Home gyms and compact indoor training spaces",
    build:"Heavy steel frame with padded seat and back support",
    specifications:["Chest press and chest fly / pec-deck exercises","Lat pulldowns and seated rows","Shoulder, biceps and triceps exercises","Leg extensions and leg curls","General full-body strength training"],
    image:"https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789764915/WhatsApp_Image_2026-09-18_at_23.52.32_cpqko2.jpg",
    images:[
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789764915/WhatsApp_Image_2026-09-18_at_23.52.32_cpqko2.jpg",
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789764914/WhatsApp_Image_2026-09-18_at_23.53.24_lfjbfd.jpg"
    ],
    wa:"Multifunctional%20Home%20Gym%20All-in-One%20Gym%20Station"
  },
  {
    id:19, num:"19", cat:"all", audience:["both"], space:"large", usage:"heavy",
    tag:"Commercial & Personal", name:"Full Gym Packages",
    desc:"Setting up from scratch? We supply, deliver and install everything. Hotels, schools, corporates, home gyms.",
    features:["Complete setup — one supplier","Commercial & home builds","Delivery & installation","Hotels, schools & corporates"],
    image:"https://i.pinimg.com/1200x/b5/ee/56/b5ee56a486455cf6c26cc2a9a8db7fc8.jpg", wa:"Full%20Gym%20Package",
    special:"green"
  },
  {
    id:23, num:"23", cat:"machines", audience:["both"], space:"large", usage:"heavy",
    tag:"Multi-Station Strength Equipment", name:"Commercial Multifunctional Smith Machine & Functional Trainer",
    desc:"Heavy-duty, all-in-one strength-training system combining dual Smith machines, power racks, functional cable trainers, adjustable benches and weight storage. Designed for comprehensive strength and functional training with multiple exercise stations.",
    features:["Dual Smith machine / guided bar stations","Multiple power-rack positions","Dual adjustable cable pulley systems","Functional trainer / crossover capability","Adjustable safety catches and bar supports","Adjustable incline / flat workout bench","Pull-up / chin-up bars","Multiple cable attachments","Integrated weight-plate storage","Weight-stack / cable resistance system","Plate-loaded training capability","Heavy-duty steel frame","Multiple users can potentially train at the same time"],
    bestFor:"Commercial gyms, hotels, fitness centres, sports facilities and high-end home gyms",
    build:"Heavy-duty steel frame with guided bars, cable stations and integrated storage",
    specifications:["Smith machine squats, bench press and incline / flat pressing","Deadlifts and shoulder press","Pull-ups, chin-ups and cable crossover","Cable fly, lat pulldown variations and seated rows","Triceps, biceps, functional training and full-body strength work"],
    image:"https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789819148/WhatsApp_Image_2026-09-19_at_00.26.06_e4k4o8.jpg",
    images:[
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789819148/WhatsApp_Image_2026-09-19_at_00.26.06_e4k4o8.jpg",
      "https://res.cloudinary.com/ddgs5x2qd/image/upload/v1789820887/WhatsApp_Image_2026-09-19_at_00.26.05_xbrbte.jpg"
    ],
    wa:"Commercial%20Multifunctional%20Smith%20Machine%20and%20Functional%20Trainer"
  },
  {
    id:20, num:"20", cat:"all", audience:["both"], space:"small", usage:"light",
    tag:"Can't Find It?", name:"We'll Source It For You",
    desc:"See a piece of equipment you want but can't find it here? Send us a photo on WhatsApp and we'll source it for you.",
    features:["Send us any equipment photo","We'll find & price it for you","All brands & types welcome","Fast response guaranteed"],
    image:"https://res.cloudinary.com/ddgs5x2qd/image/upload/v1774207843/zzzaa_anuwdx.png", wa:"I%20have%20a%20equipment%20photo%20I%20need%20you%20to%20source%20for%20me%20-%20let%20me%20send%20you%20the%20image",
    special:"green"

}
];

const ADMIN_PASSWORD = "$$Mrzaidruuzgym1999$$";
const STORAGE_KEY     = "ruuzgym_products";
const VERSION_KEY     = "ruuzgym_version";
const CURRENT_VERSION = "v6";

function loadProducts(){
  try {
    const savedVersion = localStorage.getItem(VERSION_KEY);
    if(savedVersion !== CURRENT_VERSION){
  localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
  // Don't wipe — just fall through and merge below
}
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved){
      const parsed = JSON.parse(saved);
      // Merge: keep defaults for any new products, update saved fields
      return DEFAULT_PRODUCTS.map(def => {
        const s = parsed.find(p => p.id === def.id);
        return s ? {...def, ...s} : def;
      });
    }
  } catch(e){}
  return DEFAULT_PRODUCTS;
}

function saveProducts(products){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
}

let PRODUCTS = loadProducts();
