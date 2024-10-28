import { Store } from './types'

const MOCK = [
  {
    id: 'restaurant-1',
    title: 'Restaurant',
    description: 'A nice restaurant somewhere in ',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res4.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'CMA, Rivadavia 2371',
      lat: -38.001392,
      lng: -57.5473714,
    },
    longDescription:
      "Restaurant-1 is a modern yet cozy dining spot known for its innovative takes on classic dishes. Located in the heart of the city, it attracts a diverse crowd, from locals seeking a familiar yet exciting meal to tourists looking to experience the flavors of the region in a fresh way. The restaurant’s interior is elegantly designed, featuring warm lighting, minimalist decor, and a welcoming ambiance that makes it perfect for both intimate dinners and lively gatherings.\n\nThe menu at Restaurant-1 changes seasonally, highlighting the best of local ingredients and allowing the chefs to bring out unique, seasonal flavors in every dish. Signature dishes include a twist on the classic grilled steak, served with house-made sauces and fresh vegetables that bring a burst of flavor with every bite. The seafood selection is equally impressive, with options like pan-seared scallops and citrus-marinated ceviche that keep patrons coming back for more.\n\nA standout feature of Restaurant-1 is its open kitchen, where diners can watch the chefs at work, adding an element of excitement and transparency to the dining experience. The culinary team is passionate about their craft and takes pride in every plate they serve, ensuring that each meal is as visually appealing as it is delicious. For those who enjoy wine, Restaurant-1 offers an extensive list curated to pair perfectly with the food, including both regional selections and international labels.\n\nRestaurant-1 is also popular for its weekend brunch, which features an array of breakfast favorites reimagined with a creative twist. Guests can enjoy dishes like avocado toast with poached eggs and artisanal pastries baked fresh each morning. The coffee is another highlight, made from beans sourced from a local roastery and brewed to perfection. Friendly and knowledgeable staff make sure that each guest feels welcome and valued, creating an atmosphere that is relaxed yet attentive.\n\nBeyond the food, Restaurant-1 is committed to sustainability, using eco-friendly materials and locally sourced produce whenever possible. The restaurant's management believes that great food should also support the community and the environment, making dining here a feel-good experience in more ways than one. With a mix of timeless favorites and new creations, Restaurant-1 is an ideal spot to enjoy a memorable meal that captures the essence of modern dining.",
  },
  {
    id: 'restaurant-2',
    title: 'Very nice pleace  to eat a crab',
    description: 'Go on taste futti dimare and eat it',
    image:
      'https://restaurants-images-test.s3.amazonaws.com/shard_restaurant.webp',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
    longDescription:
      'Very Nice Place to Eat a Crab is a delightful seafood destination that has quickly become a go-to spot for crab and seafood lovers. Known for its relaxed atmosphere and emphasis on fresh, high-quality ingredients, this restaurant takes the seafood dining experience to a new level. Located with a view of the waterfront, the ambiance is as refreshing as the dishes they serve, with a cozy and nautical-inspired interior that transports guests straight to the coast.\n\nThe menu is filled with seafood delights, with crab dishes as the star attraction. From classic crab boils with corn and potatoes to their renowned crab cakes, each dish is crafted with care and an eye for detail. The Futti di Mare is another must-try, featuring a mix of shellfish and pasta in a rich, flavorful sauce that seafood enthusiasts can’t get enough of. For those who want to sample a bit of everything, the seafood platter is perfect, showcasing the finest crab, lobster, and shrimp in one generous spread.\n\nApart from crabs, Very Nice Place to Eat a Crab also offers a variety of other options, like grilled fish, calamari, and freshly shucked oysters that pair perfectly with a glass of crisp white wine. The restaurant’s selection of wines and cocktails is thoughtfully curated to complement the seafood menu, with refreshing, citrusy cocktails like the lemon basil spritzer being a particular favorite among patrons.\n\nWhat makes the experience here so special is the commitment to freshness and sustainability. The chefs work closely with local fishers to source the freshest seafood, ensuring that every bite is full of flavor and quality. The restaurant also takes pride in its eco-friendly practices, using biodegradable packaging and locally sourced ingredients whenever possible.\n\nFamilies, couples, and friends all find something to love at Very Nice Place to Eat a Crab, where the warm, friendly staff make every guest feel at home. Whether you’re celebrating a special occasion or just want to enjoy a laid-back meal with loved ones, this is the place to be. Make sure to save room for dessert, as their lemon tart is the perfect sweet ending to a savory, seafood-filled meal.',
  },
  {
    id: 'restaurant-3',
    title: 'Dog food here',
    description: 'Go on taste futti dimare and eat it',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res7.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
    longDescription:
      "This is not so long description however it's a tagged string to be able to find it in the RSC payload. Star Wars is a great movie!",
  },
  {
    id: 'restaurant-4',
    title: 'Very nice pleace  to eat a crab',
    description: 'Go on taste futti dimare and eat it',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-5',
    title: 'some restaurant',
    description: 'Go on taste futti dimare and eat it',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-6',
    title: 'Eat it',
    description: 'Go on taste futti dimare and eat it',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-7',
    title: 'Cat food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-8',
    title: 'Pet food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-9',
    title: 'Mouse food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-10',
    title: 'Mouse food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-11',
    title: 'Mouse food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-12',
    title: 'Mouse food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-13',
    title: 'Mouse food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'restaurant-14',
    title: 'Mouse food',
    description: 'Lods of local cats go here to eat the best fish',
    image: 'https://restaurants-images-test.s3.amazonaws.com/res8.jpeg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Av. Patricio Peralta Ramos 4900',
      lat: -38.0127326,
      lng: -57.5596429,
    },
  },
  {
    id: 'manolo-alem',
    title: 'Manolo Alem',
    description: 'Los churros más icónicos de Mar del Plata',
    image: 'https://restaurants-images-test.s3.amazonaws.com/restaurant-1.jpg',
    link: 'http://churrosmanolo.com/es/',
    location: {
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25147.79033508727!2d-57.5473714!3d-38.001392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc4acea437cf%3A0x3d0b14007abe7d25!2sManolo!5e0!3m2!1ses!2sar!4v1640036194553!5m2!1ses!2sar',
      address: 'Leandro N. Alem 3980',
      lat: -38.0297605,
      lng: -57.5549408,
    },
    longDescription:
      'Manolo Alem is not just a restaurant; it’s a cultural icon of Mar del Plata, famed for its delectable churros that have become synonymous with the city. Established decades ago, Manolo Alem has been a gathering place for locals and tourists alike, offering a unique blend of tradition and innovation in every bite. The churros, which are hand-made daily using a secret family recipe, are crispy on the outside and delightfully soft on the inside. These golden treats are filled with dulce de leche, chocolate, or cream, making each churro a bite-sized piece of heaven that can be enjoyed any time of day. But Manolo Alem isn’t limited to churros; the menu boasts a wide range of dishes, from savory sandwiches and burgers to hearty breakfast plates. Visitors love the variety of breakfast items that range from traditional Argentine medialunas (croissants) to egg dishes that are perfect for starting the day. \n\nOne of the unique aspects of Manolo Alem is the ambiance. The restaurant is spacious yet cozy, with decor that pays homage to both the heritage of Mar del Plata and modern trends. Large windows provide natural lighting during the day, creating a warm and inviting atmosphere, while evenings are transformed by soft lighting, giving it a casual but refined feel. Families, friends, and couples alike frequent Manolo Alem, where the sound of laughter and the aroma of freshly brewed coffee mingle with the enticing scent of churros. The staff is exceptionally welcoming, often going the extra mile to ensure each guest has an enjoyable experience. Regular patrons will often notice the familiar faces of long-time staff members who bring a personal touch to the service, remembering orders and preferences as though each guest were a part of the Manolo family.\n\nFor those with a sweet tooth, the dessert menu is a must-try. Apart from the famous churros, Manolo Alem offers a variety of sweets that cater to diverse tastes. The house-made cakes, pastries, and gelato are crafted with the same attention to detail as the churros, using high-quality ingredients that result in rich, flavorful desserts. One favorite is the chocolate lava cake, served warm with a scoop of vanilla ice cream, melting into a perfect harmony of flavors. Patrons also rave about the fresh fruit tarts, which are made with seasonal fruits and a light, buttery crust that crumbles with each bite. No matter your dessert choice, you’re bound to experience a taste sensation that lingers long after the last bite.\n\nManolo Alem is also known for its commitment to quality, using locally sourced ingredients whenever possible. The team believes in supporting nearby farmers and producers, which is evident in the freshness and taste of each dish. This dedication to quality extends beyond food, as Manolo Alem strives to maintain sustainable practices, reducing waste and incorporating eco-friendly materials throughout the establishment. In recent years, Manolo Alem has expanded its operations to accommodate the growing demand for its unique offerings, adding more seating and creating a dedicated space for private events. These private dining areas are perfect for birthdays, anniversaries, and corporate gatherings, allowing guests to enjoy the full Manolo experience in a more intimate setting.\n\nAnother significant aspect of Manolo Alem’s appeal is its family-friendly atmosphere. Children are always welcome and even have their own menu, which includes smaller portions of the restaurant’s best-loved dishes, ensuring that younger guests are just as satisfied as their parents. Coloring books and small toys are often provided to keep kids entertained, making it a hassle-free dining experience for families. Parents appreciate the effort Manolo Alem puts into creating a space where everyone feels at home, regardless of age.\n\nThe restaurant’s location on Leandro N. Alem street offers a scenic view of Mar del Plata’s bustling cityscape, and on weekends, the street is alive with activity. Outdoor seating is available, allowing diners to enjoy their meals while taking in the vibrant surroundings. The al fresco dining area is particularly popular during the warmer months, where guests can soak up the sun and watch the world go by. It’s not uncommon to see street performers entertaining patrons or local artists showcasing their work nearby, adding an extra layer of charm to the dining experience.\n\nThroughout the years, Manolo Alem has garnered a loyal following, and its reputation has spread far beyond Mar del Plata. It has become a must-visit destination for anyone visiting the city, not just for the food but for the experience as a whole. The restaurant’s iconic status is a testament to its quality and dedication to preserving the flavors and hospitality that make it unique. Many customers make a point to visit each time they’re in town, bringing friends and family to share in the experience. It’s this sense of community and tradition that makes Manolo Alem more than just a restaurant; it’s a beloved landmark that captures the heart and soul of Mar del Plata. \n\nManolo Alem also prides itself on adapting to changing times without losing sight of its roots. In response to the growing demand for convenience, the restaurant has implemented an efficient online ordering system, making it easier for customers to enjoy their favorite treats from home. The delivery service is fast and reliable, ensuring that the churros and other items arrive fresh and ready to enjoy. There’s also an option for curbside pickup, providing a quick and easy way for busy patrons to get their fix without stepping out of their car. Whether you’re dining in or taking away, Manolo Alem remains dedicated to delivering excellence in every aspect of its service.\n\nIf you’re planning to visit Mar del Plata, Manolo Alem is an experience not to be missed. With its rich history, outstanding food, and warm, inviting atmosphere, it’s no wonder that Manolo Alem holds a special place in the hearts of locals and tourists alike. The restaurant embodies the spirit of the city and offers a dining experience that is as memorable as it is delicious.',
  },
]

const api = {
  list: async (): Promise<Store[]> => {
    // simulate a slow response
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return MOCK
  },
  fetch: async (id: string): Promise<Store> => {
    const store = MOCK.find((store) => store.id === id)

    // simulate a slow response
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (!store) {
      throw new Error('Store not found')
    }

    return store
  },
  hot: async (): Promise<Store> => {
    const index = Math.floor(Math.random() * MOCK.length)

    // simulate a slow response
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return MOCK[index]
  },
}

export default api
