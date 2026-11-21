/* PUFF POINT shared cart logic and catalog. Edit MARKUP or CATALOG to change prices and products. */
var MARKUP = 0.30; /* selling price = cost per unit + 30%, rounded to a .49 / .99 ending */
var BRAND = 'Geek Bar Pulse X2';
var FLAVORS = ['Pink Berry Lemonade','Watermelon Crush','Punch','Lemon Heads','Blueberry Watermelon','Dualicious','Raspberry Jam','Blue Rancher','Peach Slush','Orange Fcuking Fab','Strawberry Watermelon','Grape Slush','Stone Freeze','Strawberry B-Burst','Blackberry Blueberry','Pink & Blue','Wild Cherry Slush','Miami Mint','Sour Straws','Banana Taffy Freeze','Blue Razz Ice','Watermelon Ice','White Peach Raspberry','Blueberry Jam','Sour Fcuking Fab','Peach Bull','Strawberry Bull','Coco Berry Bull','Blue Razz Bull','Watermelon Bull'];
/* [brand, model, flavor, wholesale price, units in that price, image number] */
var CATALOG = [
  ['Foger','Switch Pro 30K','Raspberry Watermelon',43.50,5,1],
  ['Foger','Switch Pro 30K','Dragon Fruit Lemonade',43.50,5,2],
  ['Foger','Switch Pro 30K','Mexico Mango',43.50,5,3],
  ['Foger','Switch Pro 5%','Strawberry B-Pop',57.50,5,4],
  ['Foger','Switch Pro 30K','Blue Rancher B-Pop',43.50,5,5],
  ['Foger','Switch Pro 30K','Sour Fcuking Fab',43.50,5,6],
  ['Foger','Switch Pro 5%','Sour Apple Ice',60.00,5,7],
  ['Foger','Switch Pro 30K','Cool Mint',43.50,5,8],
  ['Foger','Switch Pro 30K','Watermelon Bubble Gum',43.50,5,9],
  ['Foger','BIT 35K 5%','Fcuking Fab',52.50,5,10],
  ['Fifty Bar','Fruitia 20K','Bonker Berries',45.00,5,11],
  ['Fifty Bar','Fruitia 20K','Blueberry Pound Cake',45.00,5,12],
  ['Fifty Bar','Hidden Hills 20K','Apple Melonade',45.00,5,13],
  ['Fifty Bar','Fruitia 20K','Strawberry Shortcake',45.00,5,14],
  ['Fifty Bar','Fruitia 20K','Blue Razz Bubblegum',45.00,5,15],
  ['Fifty Bar','Fruitia 20K','Sweet Mint',45.00,5,16],
  ['Fifty Bar','Hidden Hills 20K','Pina Lush',45.00,5,17],
  ['Fifty Bar','Fruitia 20K','Swedish Fish',45.00,5,18],
  ['Fifty Bar','Fruitia 20K','Orange Mango Sherbet',45.00,5,19],
  ['Fifty Bar','Hidden Hills 20K','Honeyberry Cream',45.00,5,20],
  ['RAZ','DC25000','Blue Raz Ice',54.00,5,21],
  ['RAZ','VUE 50K Full Kit','Watermelon Ice',60.00,5,22],
  ['RAZ','DC25000','Blueberry Punch',54.00,5,23],
  ['RAZ','VUE 50K Pods','Blueberry Yummy',40.00,5,24],
  ['RAZ','DC25000','Black & Blue Lime',54.00,5,25],
  ['RAZ','VUE 50K Full Kit','Hawaiian Punch',60.00,5,26],
  ['RAZ','VUE 50K Pods','Dragon Straw Nana',40.00,5,27],
  ['RAZ','DC25000','Orange Pineapple Punch',54.00,5,28],
  ['RAZ','RYL VUE Pod 70K','Pretty in Pink',40.00,5,29],
  ['RAZ','VUE 50K Full Kit','Blue Raz Ice',60.00,5,30],
  ['North','Vape 5K 5%','Peach Berry',75.00,5,31],
  ['North','Vape 5K 5%','Lemon Cola',75.00,5,32],
  ['North','Vape 5K 5%','Raspberry Mint',75.00,5,33],
  ['North','Stellar 40K','Meta Moon',50.00,5,34],
  ['North','Vape 5K 5%','Watermelon Passion Fruit',75.00,5,35],
  ['North','Vison 15K','Peachy Pineapple Refresher',45.00,5,36],
  ['North','Vape 5K 5%','Peach Apple',75.00,5,37],
  ['North','Vison 15K','Cherry Cola',45.00,5,38],
  ['North','Vape 5K 5%','Polar Mint',75.00,5,39],
  ['North','Vape 5K 5%','Spearmint',75.00,5,40],
  ['Lost Mary','MT35000 Turbo','Scary Berry',52.50,5,41],
  ['Lost Mary','Vape 55K VIZ','Miami Mint',60.00,5,42],
  ['Lost Mary','MT35000 Turbo','Strawberry Kiwi',52.50,5,43],
  ['Lost Mary','MT35000 Turbo','Polar Mint',52.50,5,44],
  ['Lost Mary','MT35000 Turbo','Rocket Freeze',52.50,5,45],
  ['Lost Mary','MT35000 Turbo','Orange Passion Mango',52.50,5,46],
  ['Lost Mary','MT35000 Turbo','Berry Burst',52.50,5,47],
  ['Lost Mary','Nera Fullview 70K Pods','Blue Carnaval',47.50,5,48],
  ['Lost Mary','MT35000 Turbo','Blue Razz Lemonade',52.50,5,49],
  ['Lost Mary','MT35000 Turbo','Black Mint',52.50,5,50],
  ['Mr Vapor','Snap Pro Kit 50K','Grape Slush',62.50,5,51],
  ['Mr Vapor','Snap Pod 50K','Black & Blue',40.00,5,52],
  ['Mr Vapor','Snap Pod 50K','Hawaii Punch',40.00,5,53],
  ['Mr Vapor','Arctic 5%','Tigers Blood',57.50,5,54],
  ['Mr Vapor','Arctic 5%','Sour Apple B-Pop',57.50,5,55],
  ['Mr Vapor','Snap Pod 50K','Blueberry Punch',40.00,5,56],
  ['Mr Vapor','Snap Pod 50K','Dragon Melon',40.00,5,57],
  ['Mr Vapor','Arctic 5%','Berry Burst Gummy',57.50,5,58],
  ['Mr Vapor','Snap Pro Kit 50K','Bombsicle',62.50,5,59],
  ['Mr Vapor','Arctic 5%','Sour Watermelon Drop',57.50,5,60],
  ['Geek Bar','Pulse2 25K','Raspberry Watermelon',47.50,5,61],
  ['Geek Bar','Pulse2 25K Indonesian','Fcuking Fab',47.50,5,62],
  ['Geek Bar','Mate Kit','Amazon Lemonade',51.25,5,63],
  ['Geek Bar','Mate Kit','Triple Berry',51.25,5,65],
  ['Geek Bar','Pulse 15000','Sour Blue Dust',47.50,5,66],
  ['Geek Bar','Pulse2 25K','Peach Lemonade',47.50,5,67],
  ['Geek Bar','Pulse X 25K','Sour Straws',57.50,5,68],
  ['Geek Bar','Pulse 15000','Blueberry Watermelon',47.50,5,69],
  ['Geek Bar','Mate Kit','Strawberry Banana',51.25,5,70],
  ['Dkhaan','Vega DTL 25K Pod','OMW',37.50,5,71],
  ['Dkhaan','Vega DTL 25K Pod','Strawberry Ice',37.50,5,72],
  ['Dkhaan','Big Cloud 15000','Cola Ice',50.00,10,73],
  ['Dkhaan','Infinity Edition 25K','Strawberry Bubblegum',45.00,5,74],
  ['Dkhaan','Shisha 60K 3D Screen','Gum Mint',50.00,5,75],
  ['Dkhaan','Infinity Edition 25K','Strawberry Watermelon',45.00,5,76],
  ['Dkhaan','Vega MTL 50K Pod','Blueberry Watermelon',37.50,5,77],
  ['Dkhaan','Big Cloud 15000','Tangerine Blu Haze',50.00,10,78],
  ['Dkhaan','Vega MTL 50K Pod','Strawberry B-Pop',37.50,5,79],
  ['Dkhaan','Vega DTL 25K Pod','Blue Moon',37.50,5,80],
  ['Mazaya','Cloud Aura 50K','Lady Killer',45.00,5,81],
  ['Mazaya','Cloud Aura 50K','Peach Ice',45.00,5,82],
  ['Mazaya','Cloud Aura 50K','Mango Ice',45.00,5,83],
  ['Mazaya','Cloud Aura 50K','Mixed Berry',45.00,5,84],
  ['Mazaya','Cloud Aura 50K','Mint',45.00,5,85],
  ['Mazaya','Cloud Aura 50K','Cherry Ice',45.00,5,86],
  ['Mazaya','Cloud Aura 50K','Pink Berry',45.00,5,87],
  ['Mazaya','Cloud Aura 50K','Strawberry',45.00,5,88],
  ['Mazaya','Cloud Aura 50K','Two Apple Max',45.00,5,89],
  ['Mazaya','Cloud Aura 50K','Love',45.00,5,90],
  ['Fresa','Pro 40K','Super Mint',40.00,5,91],
  ['Fresa','Pro 40K','Georgia Peach',40.00,5,92],
  ['Fresa','Pro 40K','Pineapple Citrus',40.00,5,93],
  ['Fresa','Pro 40K','Cool Mint',40.00,5,94],
  ['Fresa','Pro 40K','Blue Rancher',40.00,5,95],
  ['Fresa','Pro 40K','Berries Paradise',40.00,5,96],
  ['Fresa','Pro 40K','Sour Tropic Blast',40.00,5,97],
  ['Fresa','Pro 40K','Fcuking Fab',40.00,5,98],
  ['Fresa','Pro 40K','Sunkiss Lemonade',40.00,5,99],
  ['Fresa','Pro 40K','Strawberry Puff Cake',40.00,5,100],
  ['OLIT','Hooka Lit Mega 200K','Gum Mint',19.00,1,101],
  ['OLIT','Pro Hookah Lit 60K','Two Apple',55.00,1,102],
  ['OLIT','Classic Hooka Lit 40K','Watermelon Strawberry Melon',45.00,1,103],
  ['OLIT','Hookalit Pro 60K','Two Apple',55.00,1,102],
  ['OLIT','Pro Hookah Lit 60K','Berry Ice',55.00,1,104],
  ['OLIT','Hooka Lit Mega 200K','Love 66',19.00,1,105],
  ['OLIT','Classic Hooka Lit 40K','Lady Killer',45.00,1,106],
  ['OLIT','Classic Hooka Lit 40K','Mango Freeze',45.00,1,107],
  ['OLIT','Hookalit Pro 60K','Blackcurrant Ice',55.00,1,104],
  ['OLIT','Hooka Lit Mega 200K','Lemon Mint',19.00,1,108],
  ['Horizon Tech','100K 40ML','White Gummi',57.50,5,109],
  ['Horizon Tech','100K 40ML','Sour Gush',57.50,5,110],
  ['Horizon Tech','100K 40ML','Orange Slush',57.50,5,111],
  ['Horizon Tech','100K 40ML','Blue Razz Slush',57.50,5,112],
  ['Horizon Tech','100K 40ML','Banana Slush',57.50,5,113],
  ['Horizon Tech','100K 40ML','Pink Lemonade',57.50,5,114],
  ['Horizon Tech','100K 40ML','Miami Mint',57.50,5,115],
  ['Horizon Tech','100K 40ML','Starlight Mint',57.50,5,116],
  ['Horizon Tech','100K 40ML','Sour Mango Pineapple',57.50,5,117],
  ['Horizon Tech','100K 40ML','Pink & Blue',57.50,5,118],
  ['Breeze','Pro 2000','Blue Raspberry',95.00,10,119],
  ['Breeze','Pro 2000','Banana Mint',95.00,10,120],
  ['Breeze','Pro 2000','Blueberry Watermelon',95.00,10,121],
  ['Breeze','Pro 2000','Citrus',95.00,10,122],
  ['Breeze','Pro 2000','Mint',95.00,10,123],
  ['Breeze','Prime 6000','Strawberry Apple',65.00,5,124],
  ['Breeze','Pro 2000','Menthol',95.00,10,125],
  ['Breeze','Pro 2000','Grape',95.00,10,126],
  ['Breeze','Pro 2000','Blueberry Banana',95.00,10,127],
  ['Breeze','Pro 2000','Tobacco',95.00,10,128],
  ['Off Stamp','SW16000 Smart Kit','Pink & Juicy Peach',35.00,5,129],
  ['Off Stamp','SW16000 Smart Kit','Pink & Sour Lush Gummy',35.00,5,130],
  ['Off Stamp','SW16000 Pod','Sour Wildberry Gummy',25.00,5,131],
  ['Off Stamp','X-Cube 35000 Crystal Kit','Sour Apple Ice',48.75,5,132],
  ['Off Stamp','25K Cube Pod','Double Mint',32.50,5,133],
  ['Off Stamp','SW16000 Smart Kit','Blue & Dragon Strawnana',35.00,5,134],
  ['Off Stamp','SW25000 Pod','Grape Pomegrante',32.50,5,135],
  ['Off Stamp','SW25000 Pod','Pineapple Passion Orange',32.50,5,136],
  ['Off Stamp','25K Cube Pod','Peach Medley',32.50,5,137],
  ['Off Stamp','X-Cube 35000 Crystal Kit','Peach Berry',48.75,5,138],
  ['BlurrBar','18K Puffs','Banana Ice',32.50,5,139],
  ['BlurrBar','Galaxy Edition 40K','Cool Mint',47.50,5,140],
  ['BlurrBar','18K Puffs','Watermelon Drip',32.50,5,141],
  ['BlurrBar','Galaxy Edition 40K','Watermelon Drip',47.50,5,142],
  ['BlurrBar','18K Puffs','Blue Raspberry',32.50,5,143],
  ['BlurrBar','Galaxy Edition 40K','Astro Blue Razz',47.50,5,144],
  ['BlurrBar','18K Puffs','Tropical Storm',32.50,5,145],
  ['BlurrBar','18K Puffs','Cherry Lemon',32.50,5,146],
  ['BlurrBar','Galaxy Edition 40K','Banana Taffy Splash',47.50,5,147],
  ['BlurrBar','18K Puffs','Gum Mint',32.50,5,148],
  ['Viho','TRX 50K 5%','Tobacco',55.00,5,149],
  ['Viho','TRX 50K 5%','Cola Slurpee',55.00,5,150],
  ['Viho','TRX 50K 5%','Pina Coco',55.00,5,151],
  ['Viho','TRX 50K 5%','Banana Taffy Ice',55.00,5,152],
  ['Viho','TRX 50K 5%','Mango Tango',55.00,5,153],
  ['Viho','TRX 50K 5%','Sour Apple Ice',55.00,5,154],
  ['Viho','TRX 50K 5%','Icy Mint',55.00,5,155],
  ['Viho','TRX 50K 5%','Blackberry Blizzard',55.00,5,156],
  ['Viho','TRX 50K 5%','Lemon Refresher',55.00,5,157],
  ['Viho','TRX 50K 5%','Strawmelon Ice',55.00,5,158],
  ['Yovo','JB 50000 Kit 5%','Sour Strawberry',50.00,5,159],
  ['Yovo','JB 50000 Pod 5%','Orange Ice',42.50,5,160],
  ['Yovo','JB 50000 Kit 5%','Miami Mint',50.00,5,161],
  ['Yovo','JB 50000 Kit 5%','Infinite Swirl',50.00,5,162],
  ['Yovo','JB 50000 Kit 5%','Blue Razz Ice',50.00,5,163],
  ['Yovo','JB 50000 Kit 5%','Watermelon Ice',50.00,5,164],
  ['Yovo','JB 50000 Kit 5%','Peach Raspberry',50.00,5,165],
  ['Yovo','JB 50000 Kit 5%','Triple Berry',50.00,5,166],
  ['Yovo','JB 50000 Kit 5%','Orange Ice',50.00,5,167],
  ['Yovo','JB 50000 Kit 5%','Sour Apple',50.00,5,168],
  ['Adjust','Myrusher 40K','Strawberry Banana',45.00,5,169],
  ['Adjust','Flum UT Bar 50K','Naked Spring Water',60.00,5,170],
  ['Adjust','Myrusher 40K','Winter Mint',45.00,5,171],
  ['Adjust','Flum UT Bar 50K','Passion Fruit Mango',60.00,5,172],
  ['Adjust','Myrusher 40K','Mountain Berry',45.00,5,173],
  ['Adjust','Myrusher 40K','Sour Fcuking Fab',45.00,5,174],
  ['Adjust','Flum UT Bar 50K','Mango Strawberry',60.00,5,175],
  ['Adjust','Myrusher 40K','Sour Strawberry Dragon',45.00,5,176],
  ['Adjust','Myrusher 40K','Pineapple Paradise',45.00,5,177],
  ['Adjust','Myrusher 40K','Georgia Peach',45.00,5,178]
];
function unitPrice(cost, pack) { return Math.round(cost / pack * (1 + MARKUP) * 2) / 2 - 0.01; }
var PRODUCTS = {};
FLAVORS.forEach(function (f, i) {
  PRODUCTS['gb' + (i + 1)] = { name: BRAND + ' - ' + f, brand: 'Geek Bar', model: 'Pulse X2', flavor: f, price: unitPrice(57.5, 5), img: 'images/gb' + (i < 9 ? '0' : '') + (i + 1) + '.jpg' };
});
CATALOG.forEach(function (r, i) {
  PRODUCTS['h' + (i + 1)] = { name: r[0] + ' ' + r[1] + ' - ' + r[2], brand: r[0], model: r[1], flavor: r[2], price: unitPrice(r[3], r[4]), img: 'images/h' + ('00' + r[5]).slice(-3) + '.jpg' };
});
var SHIPPING_FLAT = 7.99, FREE_SHIPPING_OVER = 100, MIN_AGE = 21;

function getCart() {
  try { return JSON.parse(localStorage.getItem('pp_cart')) || {}; } catch (e) { return {}; }
}
function saveCart(c) {
  try { localStorage.setItem('pp_cart', JSON.stringify(c)); } catch (e) {}
  updateBadge();
}
function addToCart(id) {
  var c = getCart(); c[id] = (c[id] || 0) + 1; saveCart(c);
  var b = document.getElementById('cartBadge');
  if (b) { b.classList.add('pop'); setTimeout(function () { b.classList.remove('pop'); }, 300); }
}
function setQty(id, q) {
  var c = getCart();
  if (q <= 0) delete c[id]; else c[id] = Math.min(q, 20);
  saveCart(c);
}
function cartCount() {
  var c = getCart(), n = 0;
  for (var k in c) n += c[k];
  return n;
}
function cartLines() {
  var c = getCart(), out = [];
  for (var k in c) if (PRODUCTS[k]) out.push({ id: k, name: PRODUCTS[k].name, price: PRODUCTS[k].price, qty: c[k] });
  return out;
}
function subtotal() {
  return cartLines().reduce(function (s, l) { return s + l.price * l.qty; }, 0);
}
function shippingCost(sub) {
  return sub === 0 ? 0 : (sub >= FREE_SHIPPING_OVER ? 0 : SHIPPING_FLAT);
}
function money(n) { return '$' + n.toFixed(2); }
function shipBarHTML() {
  var sub = subtotal(), left = FREE_SHIPPING_OVER - sub, pct = Math.min(100, Math.round(sub / FREE_SHIPPING_OVER * 100)), msg;
  if (sub <= 0) msg = 'Free shipping on orders over <b>' + money(FREE_SHIPPING_OVER) + '</b>';
  else if (left <= 0) msg = '<b>You unlocked FREE shipping!</b>';
  else msg = 'Add <b>' + money(left) + '</b> more to get <b>FREE shipping</b>';
  return '<div class="shipbar-t"><span>' + msg + '</span><span>' + money(Math.min(sub, FREE_SHIPPING_OVER)) + ' / ' + money(FREE_SHIPPING_OVER) + '</span></div><div class="shipbar-track"><i style="width:' + pct + '%"></i></div>';
}
function updateBadge() {
  var bs = document.querySelectorAll('#cartBadge, .cartbadge');
  for (var k = 0; k < bs.length; k++) bs[k].textContent = cartCount();
  var s = document.querySelectorAll('.shipbar');
  for (var i = 0; i < s.length; i++) { s[i].innerHTML = shipBarHTML(); s[i].classList.toggle('ok', subtotal() >= FREE_SHIPPING_OVER); }
}document.addEventListener('DOMContentLoaded', updateBadge);






/* ---------- Demo accounts and rewards (stored in this browser only) ---------- */
var REWARDS = { perDollar: 1, pointValue: 0.02, minRedeem: 100,
  tiers: [ { n: 'Bronze', at: 0, mult: 1 }, { n: 'Silver', at: 500, mult: 1.25 }, { n: 'Gold', at: 1500, mult: 1.5 } ] };
function lsGet(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v === null ? d : v; } catch (e) { return d; } }
function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
function allUsers() { return lsGet('pp_users', {}); }
function currentUser() { var e = lsGet('pp_session', null); if (!e) return null; return allUsers()[e] || null; }
function signIn(name, email) {
  email = String(email).trim().toLowerCase(); var u = allUsers(), x = u[email];
  if (!x) { x = { name: String(name).trim() || email.split('@')[0], email: email, points: 0, lifetime: 0, joined: new Date().toISOString() }; u[email] = x; lsSet('pp_users', u); }
  lsSet('pp_session', email); return x;
}
function signOut() { try { localStorage.removeItem('pp_session'); } catch (e) {} }
function tierOf(u) { var t = REWARDS.tiers[0]; REWARDS.tiers.forEach(function (x) { if (u && u.lifetime >= x.at) t = x; }); return t; }
function nextTier(u) { for (var i = 0; i < REWARDS.tiers.length; i++) if (!u || u.lifetime < REWARDS.tiers[i].at) return REWARDS.tiers[i]; return null; }
function pointsDiscount(u, sub, use) {
  if (!u || !use || u.points < REWARDS.minRedeem) return { pts: 0, amount: 0 };
  var maxPts = Math.min(u.points, Math.floor(sub / REWARDS.pointValue));
  return { pts: maxPts, amount: Math.round(maxPts * REWARDS.pointValue * 100) / 100 };
}
function settlePoints(email, used, paid) {
  var us = allUsers(), u = us[email]; if (!u) return 0;
  var earned = Math.floor(paid * REWARDS.perDollar * tierOf(u).mult);
  u.points = Math.max(0, u.points - used) + earned; u.lifetime += earned; lsSet('pp_users', us); return earned;
}
