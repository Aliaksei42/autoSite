// Посты боковой панели

const sidebarPosts = [
  {
    id: 10000,
    title: 'Dear Brigitte',
    text: "Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.Maintenance should be carried out in accordance with the manufacturer's recommendations. For petrol and hybrid cars, this may be every 15,000-20,000 km or once a year. Diesel vehicles may require more frequent visits, around every 10,000 km.",
    img: 'https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10001,
    title: 'Alexander and the Terrible, Horrible',
    text: "The alignmalignment is done after the lengths and auto margins are applied, meaning that, if in a Flexbox layout there is at least one flexible element, with flex-grow different from 0, it will have no effect as there won't be any available sent is done after the lengths and auto margins are applied, meaning that, if in a Flexbox layout there is at least one flexible element, with flex-grow different from 0, it will have no effect as there won't be any available space. Comedy",
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10002,
    title: 'Bombay Talkie',
    text: "The alignment is done after the lengths and auto margins are applied, meaning that, if in a Flexbox layout there is at least one flexible element, with flex-grow different from 0, it will alignment is done after the lengths and auto margins are applied, meaning that, if in a Flexbox layout there is at least one flexible element, with flex-grow different from 0, it will have no effect as there won't be any available shave no effect as there won't be any available space. Drama|Musical|Romance",
    img: 'https://images.unsplash.com/photo-1628261536713-76846c247a37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10003,
    title: 'The Adventures of Hercules',
    text: "The alignment is done after the lengths and auto margins are applied, meaning that, if in a Flexbox layout there is at least one flexible element, with flex-grow different from 0, it will have no effect as there won't be any available space. Comedy|Fantasy",
    img: 'https://plus.unsplash.com/premium_photo-1697809260133-d7eb38d3cc78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10004,
    title: 'My Little Pony: Equestria Girls',
    text: "The alignment is done after the lengths and auto margins are applied, meaning that, if in a Flexbox layout there is at least one flexible element, with flex-grow different from 0, it will have no effect as there won't be any available space. Animation|Children|Fantasy",
    img: 'https://plus.unsplash.com/premium_photo-1674375348380-c9bffa8c2ce8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10005,
    title: "Logan's Run",
    text: "The alignment is done after the lengths and auto margins are applied, meaning that, if in a Flexbox layout there is at least one flexible element, with flex-grow different from 0, it will have no effect as there won't be any available space. Action|Adventure|Sci-Fi",
    img: 'https://images.unsplash.com/photo-1464851707681-f9d5fdaccea8?q=80&w=2133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10006,
    title: 'Power',
    text: "The alignment is done after the lengths and auto margins are applied, meaning that, if in a Flexbox layout there is at least one flexible element, with flex-grow different from 0, it will have no effect as there won't be any available space. Drama",
    img: 'https://images.unsplash.com/photo-1576289681078-d32a1bdcf9b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10007,
    title: 'Turbo',
    text: "The alignment is done after the lengths and auto margins are applied, meaning that, if in a Flexbox layout there is at least one flexible element, with flex-grow different from 0, it will have no effect as there won't be any available space. Adventure|Animation|Children|Comedy|Fantasy",
    img: 'https://images.unsplash.com/photo-1506719040632-7d586470c936?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10008,
    title: 'American Samurai (Ninja: American Samurai)',
    text: "The alignment is done after the lengths and auto margins are applied, meaning that, if in a Flexbox layout there is at least one flexible element, with flex-grow different from 0, it will have no effect as there won't be any available space. Action",
    img: 'https://images.unsplash.com/photo-1535535112387-56ffe8db21ff?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10009,
    title: 'Eva (a.k.a. Eve)',
    text: "The alignment is done after the lengths and auto margins are applied, meaning that, if in a Flexbox layout there is at least one flexible element, with flex-grow different from 0, it will have no effect as there won't be any available space. Drama",
    img: 'http://dummyimage.com/300x150.png/5fa2dd/ffffff',
  },
]

export default sidebarPosts
