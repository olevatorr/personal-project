const productList = [{
    itemNum: 1,
    pet: 'dog',
    type: 'feed',
    itemName: 'Brood 健康吃狗糧',
    tag: '#成幼犬 #1.5KG #多口味',
    img: 'img/item_img.png',
    price: 1399,
    desc: `<h2>Brood健康吃狗糧</h2><p>Brood健康吃狗糧是您可信賴的寵物營養夥伴，為您的毛孩提供全面均衡的營養支持。這款狗糧不僅專為狗狗的健康而設計，更融合了科學營養和天然成分，打造出一種讓您安心的選擇。</p><p>產品賣點：</p><p>全面均衡的營養：Brood狗糧經過專業營養師的設計，確保每一口都充滿著狗狗所需的營養，包括蛋白質、脂肪、纖維、維生素和礦物質，助您的狗狗維持良好的健康狀態。</p><p>天然成分：我們堅信天然成分是狗狗健康的關鍵。因此，Brood狗糧採用高品質的天然成分，不含人工添加物、填充劑或防腐劑，給您的狗狗提供最純淨、最健康的飲食選擇。</p><p>易於消化：我們特別設計的配方有助於促進狗狗的消化系統健康，減少消化問題的發生，讓您的毛孩可以更好地吸收營養，保持活力和健康。</p><p>美味可口：Brood狗糧不僅營養豐富，而且味道美味，深受狗狗的喜愛。每一口都讓您的狗狗享受到美味的同時，也獲得了全面的營養支持。</p><p>無論是您的狗狗處於成長階段、活躍的生活方式還是需要特殊照顧，Brood健康吃狗糧都是您最佳的選擇。給您的毛孩一個健康、美味的生活開始，選擇Brood，選擇關愛！</p>`,
    richContent: `<p>品名：Brood健康吃狗糧</p><p>重量：1.5kg</p><p>敘述：這款Brood健康吃狗糧是您毛孩的理想食品選擇。精心挑選的成分組合，包括高品質的蛋白質、天然的蔬果和維生素礦物質，確保您的狗狗獲得全面均衡的營養支持。經過專業配方，每一粒狗糧都注入了愛與關懷，以確保您的寵物健康活力。無添加人工色素、防腐劑或填充劑，給予您的毛孩健康又美味的飲食體驗。</p><p>成分表：- 高品質蛋白質源（例如雞肉、羊肉、牛肉等）- 天然蔬果（例如紅蘿蔔、菠菜、番茄等）- 維生素礦物質混合物- 穀類（例如糙米、燕麥等）- 水（請注意：此成分表僅為示範，實際成分可能會有所不同，請參考包裝上的標籤獲取正確的信息。）</p>`,
},
{
    itemNum: 2,
    pet: 'cat',
    type: 'feed',
    itemName: '營養貓咪飼料',
    tag: '#營養 #貓咪 #飼料',
    img: 'img/item_img.png',
    price: 799,
    special: true,
    desc: `<h2>營養貓咪飼料</h2><p>這款營養貓咪飼料是您貓咪健康飲食的最佳選擇。精選高品質的成分，包括優質蛋白質、維生素和礦物質，確保您的貓咪獲得全面均衡的營養支持。這種飼料不僅美味，而且容易消化，適合所有年齡段的貓咪。</p>`,
    richContent: `<p>品名：營養貓咪飼料</p><p>類型：飼料</p><p>適用寵物：貓</p><p>標籤：#營養 #貓咪 #飼料</p><p>價格：NT$799</p><p>敘述：這款營養貓咪飼料是您貓咪健康飲食的最佳選擇。精選高品質的成分，包括優質蛋白質、維生素和礦物質，確保您的貓咪獲得全面均衡的營養支持。這種飼料不僅美味，而且容易消化，適合所有年齡段的貓咪。</p>`,
},
{
    itemNum: 3,
    pet: 'cat',
    type: 'snackCan',
    itemName: '美味雞肉罐頭點心',
    tag: '#多口味 #罐頭 #點心',
    img: 'img/item_img.png',
    price: 299,
    special: false,
    desc: `<h2>美味雞肉罐頭點心</h2><p>這款美味雞肉罐頭點心是您貓咪的最愛。採用新鮮雞肉製成，口感嫩滑，味道美味。每一 口都充滿著雞肉的鮮香，絕對能滿足您的貓咪的味蕾。</p>`,
    richContent: `<p>品名：美味雞肉罐頭點心</p><p>類型：罐頭點心</p><p>適用寵物：貓</p><p>標籤：#多口味 #罐頭 #點心</p><p>價格：NT$299</p><p>敘述：這款美味雞肉罐頭點心是您貓咪的最愛。採用新鮮雞肉製成，口感嫩滑，味道美味。每一口都充滿著雞肉的鮮香，絕對能滿足您的貓咪的味蕾。</p>`,
},
{
    itemNum: 4,
    pet: 'cat',
    type: 'health',
    itemName: '貓咪關節保健食品',
    tag: '#保健 #關節 #貓咪',
    img: 'img/item_img.png',
    price: 599,
    special: false,
    desc: `<h2>貓咪關節保健食品</h2><p>這款貓咪關節保健食品專為您的貓咪的健康而設計。含有豐富的關節保健成分，如葡萄糖胺和軟骨素，有助於維持貓咪的關節靈活性和健康。每天一次，讓您的貓咪保持活力和快樂！</p>`,
    richContent: `<p>品名：貓咪關節保健食品</p><p>類型：保健食品</p><p>適用寵物：貓</p><p>標籤：#保健 #關節 #貓咪</p><p>價格：NT$599</p><p>敘述：這款貓咪關節保健食品專為您的貓咪的健康而設計。含有豐富的關節保健成分，如葡萄糖胺和軟骨素，有助於維持貓咪的關節靈活性和健康。每天一次，讓您的貓咪保持活力和快樂！</p>`,
},
{
    itemNum: 5,
    pet: 'cat',
    type: 'mealCan',
    itemName: '美味雞肉主食罐頭',
    tag: '#主食罐頭 #雞肉 #美味',
    img: 'img/item_img.png',
    price: 349,
    special: true,
    desc: `<h2>美味雞肉主食罐頭</h2><p>這款美味雞肉主食罐頭是您貓咪的最愛。以新鮮雞肉為主要成分，口感嫩滑，味道美味。營養豐富，適合作為您貓咪的日常主食。</p>`,
    richContent: `<p>品名：美味雞肉主食罐頭</p><p>類型：主食罐頭</p><p>適用寵物：貓</p><p>標籤：#主食罐頭 #雞肉 #美味</p><p>價格：NT$349</p><p>敘述：這款美味雞肉主食罐頭是您貓咪的最愛。以新鮮雞肉為主要成分，口感嫩滑，味道美味。營養豐富，適合作為您貓咪的日常主食。</p>`,
},
{
    itemNum: 6,
    pet: 'cat',
    type: 'snacks',
    itemName: '美味貓咪點心凍乾',
    tag: '#點心 #凍乾 #美味',
    img: 'img/item_img.png',
    price: 199,
    special: false,
    desc: `<h2>美味貓咪點心凍乾</h2><p>這款美味貓咪點心凍乾是您貓咪的最愛。使用新鮮食材，保留了原始的營養和風味。不含人工添加劑，絕對健康可口。</p>`,
    richContent: `<p>品名：美味貓咪點心凍乾</p><p>類型：點心凍乾</p><p>適用寵物：貓</p><p>標籤：#點心 #凍乾 #美味</p><p>價格：NT$199</p><p>敘述：這款美味貓咪點心凍乾是您貓咪的最愛。使用新鮮食材，保留了原始的營養和風味。不含人工添加劑，絕對健康可口。</p>`,
},
{
    itemNum: 7,
    pet: 'cat',
    type: 'others',
    itemName: '貓咪尿布',
    tag: '#貓咪 #尿布 #其他用品',
    img: 'img/item_img.png',
    price: 99,
    special: false,
    desc: `<h2>貓咪尿布</h2><p>這款貓咪尿布是為了方便您的日常清潔工作而設計的。高吸水性材料，防漏防滲，保持家居清潔衛生。</p>`,
    richContent: `<p>品名：貓咪尿布</p><p>類型：其他用品</p><p>適用寵物：貓</p><p>標籤：#貓咪 #尿布 #其他用品</p><p>價格：NT$99</p><p>敘述：這款貓咪尿布是為了方便您的日常清潔工作而設計的。高吸水性材料，防漏防滲，保持家居清潔衛生。</p>`,
},
{
    itemNum: 8,
    pet: 'cat',
    type: 'toy',
    itemName: '貓咪玩具球',
    tag: '#玩具 #貓咪 #球',
    img: 'img/item_img.png',
    price: 79,
    special: false,
    desc: `<h2>貓咪玩具球</h2><p>這款貓咪玩具球是您貓咪的最愛。彈性設計，富有彈性，貓咪可以輕鬆捕捉和追逐。讓您的貓咪保持活潑和快樂！</p>`,
    richContent: `<p>品名：貓咪玩具球</p><p>類型：玩具</p><p>適用寵物：貓</p><p>標籤：#玩具 #貓咪 #球</p><p>價格：NT$79</p><p>敘述：這款貓咪玩具球是您貓咪的最愛。彈性設計，富有彈性，貓咪可以輕鬆捕捉和追逐。讓您的貓咪保持活潑和快樂！</p>`,
},
{
    itemNum: 9,
    pet: 'cat',
    type: 'rawMeat',
    itemName: '新鮮雞肉生食',
    tag: '#生食 #新鮮 #雞肉',
    img: 'img/item_img.png',
    price: 199,
    special: false,
    desc: `<h2>新鮮雞肉生食</h2><p>這款新鮮雞肉生食是您貓咪的最佳食材。高品質的雞肉，新鮮、天然、無添加，保留了原始的營養和風味。提供最健康的飲食選擇，讓您的貓咪保持健康和活力。</p>`,
    richContent: `<p>品名：新鮮雞肉生食</p><p>類型：生食</p><p>適用寵物：貓</p><p>標籤：#生食 #新鮮 #雞肉</p><p>價格：NT$199</p><p>敘述：這款新鮮雞肉生食是您貓咪的最佳食材。高品質的雞肉，新鮮、天然、無添加，保留了原始的營養和風味。提供最健康的飲食選擇，讓您的貓咪保持健康和活力。</p>`,
},
{
    itemNum: 10,
    pet: 'dog',
    type: 'feed',
    itemName: '營養狗狗飼料',
    tag: '#營養 #狗狗 #飼料',
    img: 'img/item_img.png',
    price: 899,
    special: false,
    desc: `<h2>營養狗狗飼料</h2><p>這款營養狗狗飼料是您狗狗健康飲食的最佳選擇。精選高品質的成分，包括優質蛋白質、維生素和礦物質，確保您的狗狗獲得全面均衡的營養支持。這種飼料不僅美味，而且容易消化，適合所有年齡段的狗狗。</p>`,
    richContent: `<p>品名：營養狗狗飼料</p><p>類型：飼料</p><p>適用寵物：狗狗</p><p>標籤：#營養 #狗狗 #飼料</p><p>價格：NT$899</p><p>敘述：這款營養狗狗飼料是您狗狗健康飲食的最佳選擇。精選高品質的成分，包括優質蛋白質、維生素和礦物質，確保您的狗狗獲得全面均衡的營養支持。這種飼料不僅美味，而且容易消化，適合所有年齡段的狗狗。</p>`,
},
{
    itemNum: 11,
    pet: 'dog',
    type: 'snackCan',
    itemName: '美味牛肉罐頭點心',
    tag: '#多口味 #罐頭 #點心',
    img: 'img/item_img.png',
    price: 349,
    special: true,
    desc: `<h2>美味牛肉罐頭點心</h2><p>這款美味牛肉罐頭點心是您狗狗的最愛。採用新鮮牛肉製成，口感嫩滑，味道美味。每一口都充滿著牛肉的鮮香，絕對能滿足您的狗狗的味蕾。</p>`,
    richContent: `<p>品名：美味牛肉罐頭點心</p><p>類型：罐頭點心</p><p>適用寵物：狗狗</p><p>標籤：#多口味 #罐頭 #點心</p><p>價格：NT$349</p><p>敘述：這款美味牛肉罐頭點心是您狗狗的最愛。採用新鮮牛肉製成，口感嫩滑，味道美味。每一口都充滿著牛肉的鮮香，絕對能滿足您的狗狗的味蕾。</p>`,
},
{
    itemNum: 12,
    pet: 'dog',
    type: 'health',
    itemName: '狗狗關節保健食品',
    tag: '#保健 #關節 #狗狗',
    img: 'img/item_img.png',
    price: 599,
    special: false,
    desc: `<h2>狗狗關節保健食品</h2><p>這款狗狗關節保健食品專為您的狗狗的健康而設計。含有豐富的關節保健成分，如葡萄糖胺和軟骨素，有助於維持狗狗的關節靈活性和健康。每天一次，讓您的狗狗保持活力和快樂！</p>`,
    richContent: `<p>品名：狗狗關節保健食品</p><p>類型：保健食品</p><p>適用寵物：狗狗</p><p>標籤：#保健 #關節 #狗狗</p><p>價格：NT$599</p><p>敘述：這款狗狗關節保健食品專為您的狗狗的健康而設計。含有豐富的關節保健成分，如葡萄糖胺和軟骨素，有助於維持狗狗的關節靈活性和健康。每天一次，讓您的狗狗保持活力和快樂！</p>`,
},
{
    itemNum: 13,
    pet: 'dog',
    type: 'mealCan',
    itemName: '美味羊肉主食罐頭',
    tag: '#主食罐頭 #羊肉 #美味',
    img: 'img/item_img.png',
    price: 399,
    special: true,
    desc: `<h2>美味羊肉主食罐頭</h2><p>這款美味羊肉主食罐頭是您狗狗的最愛。以新鮮羊肉為主要成分，口感嫩滑，味道美味。營養豐富，適合作為您狗狗的日常主食。</p>`,
    richContent: `<p>品名：美味羊肉主食罐頭</p><p>類型：主食罐頭</p><p>適用寵物：狗狗</p><p>標籤：#主食罐頭 #羊肉 #美味</p><p>價格：NT$399</p><p>敘述：這款美味羊肉主食罐頭是您狗狗的最愛。以新鮮羊肉為主要成分，口感嫩滑，味道美味。營養豐富，適合作為您狗狗的日常主食。</p>`,
},
{
    itemNum: 14,
    pet: 'dog',
    type: 'snacks',
    itemName: '美味狗狗點心凍乾',
    tag: '#點心 #凍乾 #美味',
    img: 'img/item_img.png',
    price: 249,
    special: false,
    desc: `<h2>美味狗狗點心凍乾</h2><p>這款美味狗狗點心凍乾是您狗狗的最愛。使用新鮮食材，保留了原始的營養和風味。不含人工添加劑，絕對健康可口。</p>`,
    richContent: `<p>品名：美味狗狗點心凍乾</p><p>類型：點心凍乾</p><p>適用寵物：狗狗</p><p>標籤：#點心 #凍乾 #美味</p><p>價格：NT$249</p><p>敘述：這款美味狗狗點心凍乾是您狗狗的最愛。使用新鮮食材，保留了原始的營養和風味。不含人工添加劑，絕對健康可口。</p>`,
},
{
    itemNum: 15,
    pet: 'dog',
    type: 'others',
    itemName: '狗狗尿布',
    tag: '#狗狗 #尿布 #其他用品',
    img: 'img/item_img.png',
    price: 79,
    special: false,
    desc: `<h2>狗狗尿布</h2><p>這款狗狗尿布是為了方便您的日常清潔工作而設計的。高吸水性材料，防漏防滲，保持家居清潔衛生。</p>`,
    richContent: `<p>品名：狗狗尿布</p><p>類型：其他用品</p><p>適用寵物：狗狗</p><p>標籤：#狗狗 #尿布 #其他用品</p><p>價格：NT$79</p><p>敘述：這款狗狗尿布是為了方便您的日常清潔工作而設計的。高吸水性材料，防漏防滲，保持家居清潔衛生。</p>`,
},
{
    itemNum: 16,
    pet: 'dog',
    type: 'toy',
    itemName: '狗狗咬咬玩具',
    tag: '#玩具 #狗狗 #咬咬',
    img: 'img/item_img.png',
    price: 69,
    special: false,
    desc: `<h2>狗狗咬咬玩具</h2><p>這款狗狗咬咬玩具是您狗狗的最愛。堅固耐咬，適合各種大小的狗狗。讓您的狗狗盡情咬咬，消耗多餘的能量，保持健康和快樂。</p>`,
    richContent: `<p>品名：狗狗咬咬玩具</p><p>類型：玩具</p><p>適用寵物：狗狗</p><p>標籤：#玩具 #狗狗 #咬咬</p><p>價格：NT$69</p><p>敘述：這款狗狗咬咬玩具是您狗狗的最愛。堅固耐咬，適合各種大小的狗狗。讓您的狗狗盡情咬咬，消耗多餘的能量，保持健康和快樂。</p>`,
},
{
    itemNum: 17,
    pet: 'dog',
    type: 'rawMeat',
    itemName: '新鮮牛肉生食',
    tag: '#生食 #新鮮 #牛肉',
    img: 'img/item_img.png',
    price: 219,
    special: false,
    desc: `<h2>新鮮牛肉生食</h2><p>這款新鮮牛肉生食是您狗狗的最佳食材。高品質的牛肉，新鮮、天然、無添加，保留了原始的營養和風味。提供最健康的飲食選擇，讓您的狗狗保持健康和活力。</p>`,
    richContent: `<p>品名：新鮮牛肉生食</p><p>類型：生食</p><p>適用寵物：狗狗</p><p>標籤：#生食 #新鮮 #牛肉</p><p>價格：NT$219</p><p>敘述：這款新鮮牛肉生食是您狗狗的最佳食材。高品質的牛肉，新鮮、天然、無添加，保留了原始的營養和風味。提供最健康的飲食選擇，讓您的狗狗保持健康和活力。</p>`,
},
{
    itemNum: 18,
    pet: "dog",
    type: "feed",
    itemName: "優質狗飼料",
    tag: "#飼料 #營養均衡 #口味豐富",
    img: "img/item_img.png",
    price: 599,
    special: false,
    desc: "<h2>優質狗飼料</h2><p>這款優質狗飼料採用高品質的原料，提供狗狗均衡的營養。多種口味選擇，滿足狗狗的口味偏好。讓您的愛犬健康成長，活力十足。</p>",
    richContent: "<p>品名：優質狗飼料</p><p>類型：飼料</p><p>適用寵物：狗狗</p><p>標籤：#飼料 #營養均衡 #口味豐富</p><p>價格：NT$599</p><p>敘述：這款優質狗飼料採用高品質的原料，提供狗狗均衡的營養。多種口味選擇，滿足狗狗的口味偏好。讓您的愛犬健康成長，活力十足。</p>"
},
{
    itemNum: 19,
    pet: "dog",
    type: "feed",
    itemName: "高齡犬專用飼料",
    tag: "#高齡犬 #飼料 #健康維持",
    img: "img/item_img.png",
    price: 799,
    special: false,
    desc: "<h2>高齡犬專用飼料</h2><p>專為高齡犬設計的飼料，提供適合老年狗狗的營養。配方有助於維持關節健康、促進消化、提供能量，讓您的高齡愛犬健康長壽。</p>",
    richContent: "<p>品名：高齡犬專用飼料</p><p>類型：飼料</p><p>適用寵物：狗狗</p><p>標籤：#高齡犬 #飼料 #健康維持</p><p>價格：NT$799</p><p>敘述：專為高齡犬設計的飼料，提供適合老年狗狗的營養。配方有助於維持關節健康、促進消化、提供能量，讓您的高齡愛犬健康長壽。</p>"
},
{
    itemNum: 20,
    pet: "dog",
    type: "feed",
    itemName: "幼犬成長配方",
    tag: "#幼犬 #飼料 #促進發育",
    img: "img/item_img.png",
    price: 699,
    special: false,
    desc: "<h2>幼犬成長配方</h2><p>專為幼犬設計的飼料，提供幼犬成長所需的營養。富含高品質蛋白質，促進肌肉發育；添加鈣質，強化骨骼健康。讓您的幼犬茁壯成長。</p>",
    richContent: "<p>品名：幼犬成長配方</p><p>類型：飼料</p><p>適用寵物：狗狗</p><p>標籤：#幼犬 #飼料 #促進發育</p><p>價格：NT$699</p><p>敘述：專為幼犬設計的飼料，提供幼犬成長所需的營養。富含高品質蛋白質，促進肌肉發育；添加鈣質，強化骨骼健康。讓您的幼犬茁壯成長。</p>"
},
{
    itemNum: 21,
    pet: "dog",
    type: "snackCan",
    itemName: "高級狗罐頭",
    tag: "#狗罐頭 #美味 #營養",
    img: "img/item_img.png",
    price: 129,
    special: false,
    desc: "<h2>高級狗罐頭</h2><p>選用優質肉類和蔬菜製成，口感細緻，味道誘人。提供狗狗豐富的營養，是完美的餐間補充。多種口味可選，讓您的愛犬享受美味。</p>",
    richContent: "<p>品名：高級狗罐頭</p><p>類型：罐頭</p><p>適用寵物：狗狗</p><p>標籤：#狗罐頭 #美味 #營養</p><p>價格：NT$129</p><p>敘述：選用優質肉類和蔬菜製成，口感細緻，味道誘人。提供狗狗豐富的營養，是完美的餐間補充。多種口味可選，讓您的愛犬享受美味。</p>"
},
{
    itemNum: 22,
    pet: "dog",
    type: "snackCan",
    itemName: "無穀主食罐",
    tag: "#主食罐 #無穀 #天然",
    img: "img/item_img.png",
    price: 149,
    special: false,
    desc: "<h2>無穀主食罐</h2><p>不含穀物的主食罐，以高品質的肉類和蔬菜製成。無添加防腐劑和人工色素，天然健康。適合對穀物敏感的狗狗，提供均衡的營養。</p>",
    richContent: "<p>品名：無穀主食罐</p><p>類型：罐頭</p><p>適用寵物：狗狗</p><p>標籤：#主食罐 #無穀 #天然</p><p>價格：NT$149</p><p>敘述：不含穀物的主食罐，以高品質的肉類和蔬菜製成。無添加防腐劑和人工色素，天然健康。適合對穀物敏感的狗狗，提供均衡的營養。</p>"
},
{
    itemNum: 23,
    pet: "dog",
    type: "snackCan",
    itemName: "高齡犬專用罐頭",
    tag: "#高齡犬 #罐頭 #健康",
    img: "img/item_img.png",
    price: 159,
    special: false,
    desc: "<h2>高齡犬專用罐頭</h2><p>專為高齡犬設計的罐頭，口感柔軟，易於咀嚼和消化。添加glucosamine和chondroitin，有助於維持關節健康。提供高齡犬所需的營養，延緩老化。</p>",
    richContent: "<p>品名：高齡犬專用罐頭</p><p>類型：罐頭</p><p>適用寵物：狗狗</p><p>標籤：#高齡犬 #罐頭 #健康</p><p>價格：NT$159</p><p>敘述：專為高齡犬設計的罐頭，口感柔軟，易於咀嚼和消化。添加glucosamine和chondroitin，有助於維持關節健康。提供高齡犬所需的營養，延緩老化。</p>"
},
{
    itemNum: 24,
    pet: "dog",
    type: "health",
    itemName: "關節保健粉",
    tag: "#關節保健 #骨骼健康 #行動靈活",
    img: "img/item_img.png",
    price: 499,
    special: false,
    desc: "<h2>關節保健粉</h2><p>專為狗狗設計的關節保健粉，添加glucosamine、chondroitin和MSM，有助於維持關節健康，減緩關節老化。促進軟骨修復，提高行動靈活性。</p>",
    richContent: "<p>品名：關節保健粉</p><p>類型：保健食品</p><p>適用寵物：狗狗</p><p>標籤：#關節保健 #骨骼健康 #行動靈活</p><p>價格：NT$499</p><p>敘述：專為狗狗設計的關節保健粉，添加glucosamine、chondroitin和MSM，有助於維持關節健康，減緩關節老化。促進軟骨修復，提高行動靈活性。</p>"
},
{
    itemNum: 25,
    pet: "dog",
    type: "health",
    itemName: "腸胃保健粉",
    tag: "#腸胃保健 #消化健康 #益生菌",
    img: "img/item_img.png",
    price: 399,
    special: false,
    desc: "<h2>腸胃保健粉</h2><p>專為狗狗設計的腸胃保健粉，添加益生菌和膳食纖維，有助於維持腸道健康，改善消化問題。促進營養吸收，提高免疫力。</p>",
    richContent: "<p>品名：腸胃保健粉</p><p>類型：保健食品</p><p>適用寵物：狗狗</p><p>標籤：#腸胃保健 #消化健康 #益生菌</p><p>價格：NT$399</p><p>敘：專為狗狗設計的腸胃保粉，添加益生菌和膳食纖維，有助於維持腸道健康，改善消化問題。促進營養吸收，提高免疫力。</p>"
},
{
    itemNum: 26,
    pet: "dog",
    type: "health",
    itemName: "皮膚毛髮保健粉",
    tag: "#皮膚保健 #毛髮亮麗 #omega3",
    img: "img/item_img.png",
    price: 449,
    special: false,
    desc: "<h2>皮膚毛髮保健粉</h2><p>專為狗狗設計的皮膚毛髮保健粉，添加omega3和生物素，有助於維持皮膚健康，減少脫毛和皮膚問題。促進毛髮生長，讓毛髮亮麗柔順。</p>",
    richContent: "<p>品名：皮膚毛髮保健粉</p><p>類型：保健食品</p><p>適用寵物：狗狗</p><p>標籤：#皮膚保健 #毛髮亮麗 #omega3</p><p>價格：NT$449</p><p>敘述：專為狗狗設計的皮膚毛髮保健粉，添加omega3和生物素，有助於維持皮膚健康，減少脫毛和皮膚問題。促進毛髮生長，讓毛髮亮麗柔順。</p>"
},
{
    itemNum: 27,
    pet: "dog",
    type: "mealCan",
    itemName: "鮮食主食罐",
    tag: "#主食罐 #鮮食 #真肉塊",
    img: "img/item_img.png",
    price: 99,
    special: false,
    desc: "<h2>鮮食主食罐</h2><p>以新鮮肉類和蔬果製成的主食罐，真肉塊含量高，口感豐富。無穀配方，不含人工添加物，天然健康。提供狗狗完整均衡的營養。</p>",
    richContent: "<p>品名：鮮食主食罐</p><p>類型：主食罐頭</p><p>適用寵物：狗狗</p><p>標籤：#主食罐 #鮮食 #真肉塊</p><p>價格：NT$99</p><p>敘述：以新肉類和蔬果製成的主食罐真肉塊含量高，口感豐富。無穀配方，不含人工添加物，天然健康。提供狗狗完整均衡的營養。</p>"
},
{
    itemNum: 28,
    pet: "dog",
    type: "mealCan",
    itemName: "野味主食罐",
    tag: "#主食罐 #野味 #低敏",
    img: "img/item_img.png",
    price: 119,
    special: false,
    desc: "<h2>野味主食罐</h2><p>選用野味肉類如鹿肉、野豬肉等製成的主食罐，蛋白質含量高，易消化吸收。不含常見致敏原，適合敏感體質的狗狗。提供豐富的營養和口感體驗。</p>",
    richContent: "<p>品名：野味主食罐</p><p>類型：主食罐頭</p><p>適用寵物：狗狗</p><p>標籤：#主食罐 #野味 #低敏</p><p>價格：NT$119</p><p>敘述：選用野味肉類如鹿肉、野豬肉等製成的主食罐，蛋白質含量高，易消化吸收。不含常見致敏原，適合敏感體質的狗狗。提供豐富的營養和口感體驗。</p>"
},
{
    itemNum: 29,
    pet: "dog",
    type: "mealCan",
    itemName: "幼犬專用主食罐",
    tag: "#幼犬 #主食罐 #成長配方",
    img: "img/item_img.png",
    price: 109,
    special: false,
    desc: "<h2>幼犬專用主食罐</h2><p>專為幼犬設計的主食罐,提供幼犬成長所需的高品質蛋白質和鈣質。口感柔軟,易於咀嚼和消化。促進幼犬健康發育,強化免疫力。</p>",
    richContent: "<p>品名：幼犬專用主食罐</p><p>類型：主食罐頭</p><p>適用寵物：狗狗</p><p>標籤：#幼犬 #主食罐 #成長配方</p><p>價格：NT$109</p><p>敘述：專為幼犬設計的主食罐,提供幼犬成長所需的高品質蛋白質和鈣質。口感柔軟,易於咀嚼和消化。促進幼犬健康發育,強化免疫力。</p>"
},
{
    itemNum: 30,
    pet: "dog",
    type: "snacks",
    itemName: "雞肉零食",
    tag: "#零食 #雞肉 #訓練獎勵",
    img: "img/item_img.png",
    price: 199,
    special: false,
    desc: "<h2>雞肉零食</h2><p>100%純雞肉製成,低脂高蛋白,口感鮮美。適合作為訓練獎勵或間點休閒。小巧好入口,方便攜帶。讓您的愛犬隨時都能享受美味。</p>",
    richContent: "<p>品名：雞肉零食</p><p>類型：點心凍乾</p><p>適用寵物：狗狗</p><p>標籤：#零食 #雞肉 #訓練獎勵</p><p>價格：NT$199</p><p>敘述：100%純雞肉製成,低脂高蛋白,口感鮮美。適合作為訓練獎勵或間點休閒。小巧好入口,方便攜帶。讓您的愛犬隨時都能享受美味。</p>"
},
{
    itemNum: 31,
    pet: "dog",
    type: "snacks",
    itemName: "潔牙骨",
    tag: "#潔牙 #磨牙 #口腔健康",
    img: "img/item_img.png",
    price: 149,
    special: false,
    desc: "<h2>潔牙骨</h2><p>特殊螺旋設計,能夠深入牙縫,清除牙垢和牙菌斑。啃咬有助於磨牙,促進口腔健康。添加薄荷成分,清新口氣。規律使用,保持牙齒潔白健康。</p>",
    richContent: "<p>品名：潔牙骨</p><p>類型：點心凍乾</p><p>適用寵物：狗狗</p><p>標籤：#潔牙 #磨牙 #口腔健康</p><p>價格：NT$149</p><p>敘述：特殊螺旋設計,能夠深入牙縫,清除牙垢和牙菌斑。啃咬有助於磨牙,促進口腔健康。添加薄荷成分,清新口氣。規律使用,保持牙齒潔白健康。</p>"
},
{
    itemNum: 32,
    pet: "dog",
    type: "snacks",
    itemName: "牛肉條",
    tag: "#牛肉 #零食 #柔軟",
    img: "img/item_img.png",
    price: 129,
    special: false,
    desc: "<h2>牛肉條</h2><p>柔軟的牛肉條,富含蛋白質,適口性佳。小巧細長,方便掰開餵食。適合各個年齡段的狗狗食用。讓您的愛犬盡情享受美味。</p>",
    richContent: "<p>品名：牛肉條</p><p>類型：點心凍乾</p><p>適用寵物：狗狗</p><p>標籤：#牛肉 #零食 #柔軟</p><p>價格：NT$129</p><p>敘述：柔軟的牛肉條,富含蛋白質,適口性佳。小巧細長,方便掰開餵食。適合各個年齡段的狗狗食用。讓您的愛犬盡情享受美味。</p>"
},
{
    itemNum: 33,
    pet: "dog",
    type: "others",
    itemName: "外出攜帶水瓶",
    tag: "#外出 #飲水 #便攜",
    img: "img/item_img.png",
    price: 299,
    special: false,
    desc: "<h2>外出攜帶水瓶</h2><p>專為狗狗設計的外出攜帶水瓶,容量充足,可裝450ml。瓶嘴設計,方便狗狗直接飲用。瓶身與瓶蓋分離,易於清洗。附掛繩,外出攜帶方便。</p>",
    richContent: "<p>品名：外出攜帶水瓶</p><p>類型：其他用品</p><p>適用寵物：狗狗</p><p>標籤：#外出 #飲水 #便攜</p><p>價格：NT$299</p><p>敘述：專為狗狗設計的外出攜帶水瓶,容量充足,可裝450ml。瓶嘴設計,方便狗狗直接飲用。瓶身與瓶蓋分離,易於清洗。附掛繩,外出攜帶方便。</p>"
},
{
    itemNum: 34,
    pet: "dog",
    type: "others",
    itemName: "寵物背包",
    tag: "#外出 #攜帶 #透氣",
    img: "img/item_img.png",
    price: 1299,
    special: false,
    desc: "<h2>寵物背包</h2><p>舒適透氣的寵物背包,適合攜帶小型犬外出。大開口設計,寵物易於進出。雙肩背帶,減輕背負壓力。內襯柔軟,寵物乘坐舒適。側面網布,通風透氣。</p>",
    richContent: "<p>品名：寵物背包</p><p>類型：其他用品</p><p>適用寵物：狗狗</p><p>標籤：#外出 #攜帶 #透氣</p><p>價格：NT$1299</p><p>敘述：舒適透氣的寵物背包,適合攜帶小型犬外出。大開口設計,寵物易於進出。雙肩背帶,減輕背負壓力。內襯柔軟,寵物乘坐舒適。側面網布,通風透氣。</p>"
},
{
    itemNum: 35,
    pet: "dog",
    type: "others",
    itemName: "寵物洗毛精",
    tag: "#洗毛 #護毛 #天然",
    img: "img/item_img.png",
    price: 399,
    special: false,
    desc: "<h2>寵物洗毛精</h2><p>溫和不刺激的寵物洗毛精,添加天然植物萃取,深層清潔毛髮。去除異味,毛髮柔順亮麗。PH值平衡,呵護寵物肌膚。無硫酸鹽,安全無負擔。</p>",
    richContent: "<p>品名：寵物洗毛精</p><p>類型：其他用品</p><p>適用寵物：狗狗</p><p>標籤：#洗毛 #護毛 #天然</p><p>價格：NT$399</p><p>敘述：溫和不刺激的寵物洗毛精,添加天然植物萃取,深層清潔毛髮。去除異味,毛髮柔順亮麗。PH值平衡,呵護寵物肌膚。無硫酸鹽,安全無負擔。</p>"
},
{
    itemNum: 36,
    pet: "dog",
    type: "toy",
    itemName: "發聲玩具球",
    tag: "#玩具 #互動 #發聲",
    img: "img/item_img.png",
    price: 199,
    special: false,
    desc: "<h2>發聲玩具球</h2><p>內置發聲器的玩具球,咬合會發出聲音,激發狗狗的遊戲興趣。橡膠材質,柔軟耐咬。表面凸點設計,可清潔牙齒。增進互動,釋放狗狗精力。</p>",
    richContent: "<p>品名：發聲玩具球</p><p>類型：玩具</p><p>適用寵物：狗狗</p><p>標籤：#玩具 #互動 #發聲</p><p>價格：NT$199</p><p>敘述：內置發聲器的玩具球,咬合會發出聲音,激發狗狗的遊戲興趣。橡膠材質,柔軟耐咬。表面凸點設計,可清潔牙齒。增進互動,釋放狗狗精力。</p>"
},
{
    itemNum: 37,
    pet: "dog",
    type: "toy",
    itemName: "益智玩具漏食球",
    tag: "#益智 #玩具 #漏食",
    img: "img/item_img.png",
    price: 249,
    special: false,
    desc: "<h2>益智玩具漏食球</h2><p>將食物放入球內,翻滾玩耍可漏出食物,鼓勵狗狗運動。多孔設計,難度適中。刺激狗狗智力,緩解焦慮。PP材質,安全無毒。提供身心愉悅的進食體驗。</p>",
    richContent: "<p>品名：益智玩具漏食球</p><p>類型：玩具</p><p>適用寵物：狗狗</p><p>標籤：#益智 #玩具 #漏食</p><p>價格：NT$249</p><p>敘述：將食物放入球內,翻滾玩耍可漏出食物,鼓勵狗狗運動。多孔設計,難度適中。刺激狗狗智力,緩解焦慮。PP材質,安全無毒。提供身心愉悅的進食體驗。</p>"
},
{
    itemNum: 38,
    pet: "dog",
    type: "toy",
    itemName: "耐咬玩具繩結",
    tag: "#耐咬 #玩具 #潔牙",
    img: "img/item_img.png",
    price: 149,
    special: false,
    desc: "<h2>耐咬玩具繩結</h2><p>耐咬的棉繩玩具,編織成繩結造型,方便狗狗啃咬。磨牙潔齒,減緩牙齦不適。符合狗狗啃咬天性,滿足啃咬需求。cotton材質,柔韌耐用。</p>",
    richContent: "<p>品名：耐咬玩具繩結</p><p>類型：玩具</p><p>適用寵物：狗狗</p><p>標籤：#耐咬 #玩具 #潔牙</p><p>價格：NT$149</p><p>敘述：耐咬的棉繩玩具,編織成繩結造型,方便狗狗啃咬。磨牙潔齒,減緩牙齦不適。符合狗狗啃咬天性,滿足啃咬需求。cotton材質,柔韌耐用。</p>"
},
{
    itemNum: 39,
    pet: "dog",
    type: "rawMeat",
    itemName: "新鮮雞肉生食",
    tag: "#生食 #新鮮 #雞肉",
    img: "img/item_img.png",
    price: 169,
    special: false,
    desc: "<h2>新鮮雞肉生食</h2><p>這款新鮮雞肉生食是您狗狗的優質食材。選用高品質雞肉,新鮮、天然、無添加,保留了原始的營養和風味。提供最健康的飲食選擇,讓您的狗狗保持健康和活力。</p>",
    richContent: "<p>品名：新鮮雞肉生食</p><p>類型：生食</p><p>適用寵物：狗狗</p><p>標籤：#生食 #新鮮 #雞肉</p><p>價格：NT$169</p><p>敘述：這款新鮮雞肉生食是您狗狗的優質食材。選用高品質雞肉,新鮮、天然、無添加,保留了原始的營養和風味。提供最健康的飲食選擇,讓您的狗狗保持健康和活力。</p>"
},
{
    itemNum: 40,
    pet: "dog",
    type: "rawMeat",
    itemName: "新鮮鴨肉生食",
    tag: "#生食 #新鮮 #鴨肉",
    img: "img/item_img.png",
    price: 209,
    special: false,
    desc: "<h2>新鮮鴨肉生食</h2><p>這款新鮮鴨肉生食是您狗狗的營養美食。精選優質鴨肉,新鮮、天然、無添加,保留了肉類的原始風味和營養。富含蛋白質和礦物質,促進狗狗健康成長。</p>",
    richContent: "<p>品名：新鮮鴨肉生食</p><p>類型：生食</p><p>適用寵物：狗狗</p><p>標籤：#生食 #新鮮 #鴨肉</p><p>價格：NT$209</p><p>敘述：這款新鮮鴨肉生食是您狗狗的營養美食。精選優質鴨肉,新鮮、天然、無添加,保留了肉類的原始風味和營養。富含蛋白質和礦物質,促進狗狗健康成長。</p>"
}
]
