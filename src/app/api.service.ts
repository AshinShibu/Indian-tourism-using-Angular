import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  states = [
    {
        "id": 1,
        "name": "Kerala",
        "cn1": "Varkala",
        "cn2": "Alappuzha",
        "cn3": "Illikkal Kallu",
        "image": "https://plus.unsplash.com/premium_photo-1697729600773-5b039ef17f3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2VyYWxhfGVufDB8fDB8fHww",
        "ca1": "https://www.holidify.com/images/bgImages/VARKALA.jpg",
        "ca2": "https://images.unsplash.com/photo-1731436137302-664775406641?q=80&w=2040&auto=format&fit=crop",
        "ca3": "https://images.unsplash.com/photo-1697739577207-cedebc84f9d4?q=80&w=1932&auto=format&fit=crop",
        "description": "Kerala, located in the southwestern part of India, is a tropical paradise known for its unique culture and natural beauty. Often referred to as 'God's Own Country,' Kerala is famous for its pristine backwaters, tranquil beaches, lush green tea plantations, and wildlife sanctuaries. Places like Varkala offer breathtaking cliffside beaches, while Alappuzha, the 'Venice of the East,' is renowned for houseboat cruises through serene backwaters. Illikkal Kallu is a must-visit for adventurers seeking panoramic views of misty mountains."
    },
    {
        "id": 2,
        "name": "Andhra Pradesh",
        "cn1": "Tirupati",
        "cn2": "Rishikonda Beach",
        "cn3": "Lepakshi",
        "image": "https://plus.unsplash.com/premium_photo-1694475124739-52a401a12ab2?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "ca1": "https://images.unsplash.com/photo-1707291769824-6110e392cafc?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "ca2": "https://famousplacesinindia.in/wp-content/uploads/2024/04/images-7-28.jpeg",
        "ca3": "https://plus.unsplash.com/premium_photo-1678693018853-c9da295a6f6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Andhra Pradesh, a state in southeastern India, is celebrated for its rich heritage and vibrant culture. The iconic Tirupati temple attracts millions of pilgrims each year, making it one of the most-visited religious sites in the world. Rishikonda Beach near Visakhapatnam is a serene getaway with golden sands and azure waters, perfect for water sports and relaxation. Lepakshi, a historical town, is famous for its Vijayanagara-style temples and stunning architecture, including the iconic hanging pillar."
    },
    {
        "id": 3,
        "name": "Arunachal Pradesh",
        "cn1": "Tawang Monastery",
        "cn2": "Ziro Valley",
        "cn3": "Sela Pass",
        "image": "https://images.unsplash.com/photo-1648963798318-d6b299ce0ab5?q=80&w=2070&auto=format&fit=crop",
        "ca1": "https://images.unsplash.com/photo-1551461955-89b43c8f4b2f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "ca2": "https://images.unsplash.com/photo-1506106487742-2baf007edcfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WmlybyUyMFZhbGxleXxlbnwwfHwwfHx8MA%3D%3D",
        "ca3": "https://upload.wikimedia.org/wikipedia/commons/a/a1/Tawang_Gate.jpg",
        "description": "Arunachal Pradesh, nestled in the northeastern Himalayas, is a haven for nature lovers and spiritual seekers. The Tawang Monastery, the largest in India, offers a serene retreat amidst snow-capped peaks. Ziro Valley is known for its lush paddy fields and vibrant Apatani tribal culture. Sela Pass, located at an altitude of over 13,000 feet, is a breathtaking mountain pass adorned with frozen lakes and panoramic views, making it a must-visit for adventurers."
    },
    {
        "id": 4,
        "name": "Assam",
        "cn1": "Kaziranga National Park",
        "cn2": "Majuli",
        "cn3": "Guwahati",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwUFF7_sbMWHxitMbWBflcPLaSoOe0Jhbv9Q&s",
        "ca1": "https://plus.unsplash.com/premium_photo-1664302740919-e6645ba8c053?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S2F6aXJhbmdhJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww",
        "ca2": "https://www.kaziranganationalpark-india.com/images/majuli-island.jpg",
        "ca3": "https://www.intermiles.com/iwov-resources/images/blog/May2022/10-best-places-to-visit-in-guwahati/Cover580x580.jpg",
        "description": "Assam, a northeastern state of India, is renowned for its sprawling tea gardens, biodiversity, and vibrant culture. Kaziranga National Park, a UNESCO World Heritage Site, is home to the endangered one-horned rhinoceros. Majuli, the world's largest river island, is a cultural hotspot with its unique Assamese traditions and monasteries. Guwahati, the gateway to the northeast, blends modern urban life with spiritual landmarks like the Kamakhya Temple."
    },
    {
        "id": 5,
        "name": "Bihar",
        "cn1": "Bodh Gaya",
        "cn2": "Nalanda",
        "cn3": "Rajgir",
        "image": "https://cdn.britannica.com/12/94612-050-B4EEB84A/temple-Buddhist-Mahabodhi-Bihar-India-Bodh-Gaya.jpg",
        "ca1": "https://images.unsplash.com/photo-1724303740927-bbb568013fd1?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "ca2": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg/1200px-Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg",
        "ca3": "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/06/fa593bed65a8a0ad5dd1805f4cb4760b_1000x1000.jpg",
        "description": "Bihar is a state steeped in history and spirituality, playing a crucial role in the development of Indian civilization. Bodh Gaya, where Lord Buddha attained enlightenment, is a sacred site for Buddhists worldwide. Nalanda, one of the ancient world's greatest centers of learning, is now an archaeological site that showcases India's rich academic heritage. Rajgir, surrounded by scenic hills, holds significant historical and religious importance for Buddhists, Jains, and Hindus."
    },
    {
        "id": 6,
        "name": "Chhattisgarh",
        "cn1": "Chitrakote Waterfalls",
        "cn2": "Tirathgarh Falls",
        "cn3": "Barnawapara Sanctuary",
        "image": "https://s7ap1.scene7.com/is/image/incredibleindia/2-chitrakote-jagdalpur-city-hero?qlt=82&ts=1726738436494",
        "ca1": "https://plus.unsplash.com/premium_photo-1667401373119-f9af8c7ccf8e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "ca2": "https://plus.unsplash.com/premium_photo-1732030992689-b215161ede41?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "ca3": "https://tourism.cgstate.gov.in/img1/wildlife/004.jpg",
        "description": "Chhattisgarh, located in central India, is known for its lush forests, magnificent waterfalls, and rich tribal culture. Chitrakote Waterfalls, often called the 'Niagara Falls of India,' is a breathtaking sight during the monsoon season. Tirathgarh Falls, a cascading beauty surrounded by dense forests, is another natural wonder. Barnawapara Sanctuary offers a tranquil retreat with wildlife and scenic landscapes for nature lovers."
    },
    {
        "id": 7,
        "name": "Goa",
        "cn1": "Baga Beach",
        "cn2": "Dona Paula",
        "cn3": "Anjuna Beach",
        "image": "https://plus.unsplash.com/premium_photo-1664304458186-9a67c1330d02?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "ca1": "https://images.unsplash.com/photo-1593620529462-619501b0f7f1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "ca2": "https://images.unsplash.com/photo-1641874308359-4fd2482395d9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "ca3": "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Goa, known for its stunning beaches and vibrant nightlife, is a popular tourist destination. Baga Beach is famous for its water sports and vibrant beach parties. Dona Paula is a peaceful destination with a panoramic view of the Arabian Sea, ideal for romantic getaways. Anjuna Beach, once a hippie hotspot, is now known for its laid-back atmosphere, flea markets, and beautiful sunsets."
    }
]



  constructor() { }

  getstates()
  {
    
    return this.states;
    

  }
  getstatesbyid(id:any)
  {
    return this.states.find(states => states.id == id);
  }
}
