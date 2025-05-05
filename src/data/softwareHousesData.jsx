const softwareHousesData = [
    {
      id: 1,
      name: 'Cyber Sync Technologies',
      description: 'Our goal is to help organizations unlock their full digital potential through the use of advanced software engineering principles, proprietary platforms, extensive industry knowledge, and strategic partnerships.',
      services: ['3D modeling','AR/VR applications','mobile app developmen','web development','IT consulting'],
      location: 'Khyber Pakhtunkhwa IT Board 134, Industrial Estate, Hayatabad, Peshawar',
      website: 'https://cybersynctech.com/',
      imageUrl: 'https://cybersynctech.com/wp-content/uploads/2021/09/CyberSync-Logo.png'
    },
    {
      id: 2,
      name: 'Women Digital Space',
      description: 'Women digital space is the first female software house in PESHAWAR that is dedicated to inspiring girls and young women to consider a future in technology, as inventors, designers, programmers, thinker girls who want to change the way the world works and lives for the better.',
      services: ['Digital Marketing', 'Web Designing', 'Graphic Designing'],
      location: 'IT Park PTCL Training Center , Peshawar, Pakistan',
      website: 'https://www.linkedin.com/company/women-digital-space-pvt-ltd/?originalSubdomain=pk',
      imageUrl: 'src/assets/Software-house logos/women-digital-space.jpeg'
    },
    {
      id: 3,
      name: 'Soft Breeze',
      description: 'Soft Breeze specializes in providing web & design solutions and is dedicated to providing quality digital marketing services. We have a team of certified and experienced professionals.',
      services: ['Web Design and Development', 'Mobile App Development', 'Software Development','Digital Marketing','Print Media Design','Video Production','IT Trainings'],
      location: 'Office 43 KP IT Park Near NIC Board Bazar Peshawar, Peshawar',
      website: 'https://softbreeze.org/',
      imageUrl: 'src/assets/Software-house logos/soft_breeze_logo.jpeg'
    },
    {
      id: 4,
      name: 'G4 Technologies',
      description: 'G4 technologies is unique IT Company specialized in business process automation. Their HMIS and CMS solution is one of the best solutions deployed in large and medium size institutes in Pakistan.',
      services: ['Content Management System', 'Health Management Information System'],
      location: 'KPIT Park, PTCL Training Center, Canal Town Peshawar, Khyber Pakhtunkhwa 25000',
      website: 'https://g4techno.com/',
      imageUrl: 'src/assets/Software-house logos/g4.png'
    }
    ,
    {
      id: 5,
      name: 'Tech Ease Solutions',
      description: 'Techease solutions is a software design and development company that has been providing world class quality services and products to businesses for the past 7 years.',
      services: ['PPC Services','SEO Services','SMM Services','Web Design', 'Web Development', 'Graphic Designing', 'Mobile App Development'],
      location: 'Office 409 , Arbab Road Stop, Peshawar, KP 25000, PK',
      website: 'http://techeasesol.com/',
      imageUrl: 'src/assets/Software-house logos/techease_solutions_inc_logo.jpeg'
    },
    {
      id: 6,
      name: 'A2Z Payments',
      description: 'Founded in 2006, A2Z Electronic-Payments private limited is a registered company with Security Exchange Commission of Pakistan (SECP).They are leading electronic payment processing service and solution house in Pakistan.',
      services: ['TTMS','Traffic Reports','KTP Public Ticket',' Driving License Fee Management System'],
      location: ' Head Office: Plot No. 193 Opposite Shomali Market Police Station Industrial Estate Hayatabad Peshawar',
      website: 'http://a2zepayments.com/',
      imageUrl: 'src/assets/Software-house logos/AZ_0.png'
    },
    {
      id: 7,
      name: 'Stepnex Services (pvt)',
      description: 'Stepnex Services is a leading ICT and software development company that designs, develops, and supports advanced applications, offering IT consulting with a focus on quality and innovation.',
      services: ['SOFTWARE DEVELOPMENT', 'MOBILE APP DEVELOPMENT', 'TECHNOLOGY CONSULTING SERVICES','CYBER SECURITY SERVICES'],
      location: 'Office #: 504-505, C-Block, 5th Floor, City Towers, Main University Road, Jahngir Abad, Peshawar',
      website: 'https://www.stepnexs.com/home',
      imageUrl: 'src/assets/Software-house logos/stepnexs_300.jpg'
    },
    {
      id: 8,
      name: 'K2X',
      description: 'Founded in 2021, K2X aims to become a software powerhouse in Peshawar, building a skilled team that delivers cutting-edge digital solutions.',
      services: ['AI/ML', 'Web Development', 'Mobile App Development','UX/UI','Data Engineering','Data Analytics'],
      location: 'Office 7B, 5th floor, Mall of KPK, University Road, Peshawar',
      website: 'https://k2x.tech/',
      imageUrl: 'src/assets/Software-house logos/K2X-logo.svg'
    },
    {
      id: 9,
      name: 'Impact Softwares',
      description: 'Impact Softwares is a top IT company in Pakistan, delivering high-quality services through skilled professionals with expertise in the latest technologies, backed by continuous employee training to meet evolving client needs.',
      services: ['Android app development', ' Web development', 'Wordpress Development','SEO','ERP Softwares',' Search Engine Marketing'],
      location: 'ptcl training center, University Road Board bazar, Peshawar',
      website: 'https://www.facebook.com/ImpactSoftwares/',
      imageUrl: 'src/assets/Software-house logos/Impact Softwares.png'
    },
    {
      id: 10,
      name: 'THE NERD CAMP',
      description: 'Founded in 2014, The Nerd Camp is a Software development &amp; Social Media Marketing Services Company that specializes in custom web based solutions, mobile applications, digital marketing, branding, UI/UX and graphics designing.',
      services: ['App and game development.', ' Web development', 'Web designing','Graphic designing and marketing'],
      location: 'PTCL Training Centre، 1st Floor, KP IT Park، University Rd, Canal Town, Peshawar',
      website: 'https://thenerdcamp.com/',
      imageUrl: 'src/assets/Software-house logos/THE NERD CAMP.png'
    },
    {
      id: 11,
      name: 'IT Artificer',
      description: 'The IT Artificer team, led by CEO Haider Ali, brings together talented designers and developers from diverse backgrounds. Specializing in Web and Desktop Applications, Content Writing, SEO, and Domain Hosting, the team leverages its skills and shared passion for technology to deliver exceptional results.',
      services: ["Domain Hosting", "Digital Marketing", "Web Development", "Mobile Application", "Graphic Designing", "Software Apps", "E-Commerce", "Content Writing", "FYP Ideas"],
      location: 'PTCL Training Center Peshawar Board, Pakistan',
      website: 'http://www.itartificer.com',
      imageUrl: 'src/assets/Software-house logos/itarticer.jpg'
    },
    {
      id: 12,
      name: 'Aptechmedia',
      description: 'Aptechmedia, based in IT Board Peshawar, is a leading IT firm specializing in cross-platform game, web, and software development. With a team of 9 young techies, it delivers top apps across Android, iOS, and Windows platforms, leading the gaming and app development scene in Peshawar.',
      services:["Game Development", "App Development", "Web Development", "Digital Marketing"],
      location: 'KPIT Park, PTCL Training Center, Canal Town Peshawar,',
      website: 'https://www.aptechmedia.com/',
      imageUrl: 'src/assets/Software-house logos/aptech.jpg'
    },
    {
      id: 13,
      name: 'RAR MultiBIz Services Pvt Ltd',
      description: 'RAR MultiBiz Services Pvt Ltd provides ICT and e-solutions to national and international clients. With a dedicated team, the company partners with clients to drive business growth and aims to become a trusted, well-known brand.',
      services:["Web Development", "Web Designing", "MIS Solutions", "SEO", "App Development", "E-Gov Solutions", "Civic Solutions", "Managed Services"],
      location: 'FF 244 Deans Trade Center, Saddar Bazar Peshawar',
      website: 'https://multibizservices.com/',
      imageUrl: 'src/assets/Software-house logos/Rar_0.png'
    },
    {
      id: 14,
      name: 'MindGigs',
      description: 'MindGigs is a top software house in Peshawar, offering tailored software solutions to simplify and grow your business. Their expert team includes developers, graphic designers, SEOs, and app architects. MindGigs embraces the latest technologies and also provides digital marketing services to support business growth.',
      services:["Scope Management", "Time Management", "Cost Management", "Specification Design", "Change Control", "Quality Management", "Resource Management", "Communications Management", "Risk Management", "Procurement Management", "Implementation Management"],
      location: 'MindGigs, PTCL Training center, KPIT Park, Board Bazar Canal Town, Peshawar.',
      website: 'https://mindgigspk.com/',
      imageUrl: 'src/assets/Software-house logos/Capture.png.bv_resized_desktop.png.bv.webp'
    },
    {
      id: 15,
      name: 'Pakistan Online Services',
      description: 'Pakistan Online Services (PKOLS) is a registered IT firm with the Pakistan Software Export Board, specializing in tailored IT solutions. Focused on understanding customer needs, PKOLS delivers high-quality solutions that accommodate both current and future requirements. Utilizing state-of-the-art technology and best industry practices, PKOLS stands out in both domestic and international markets, with a commitment to innovation through intelligence.',
      services:["24/7 Global Help Desk", "BPO Services", "Mobile App Development", "Web App Development", "Custom Software Development", "Product Development"],
      location: 'Office # 19, KPK IT Park, RTC PTCL, University Road Peshawar.',
      website: 'https://pkols.com/',
      imageUrl: 'src/assets/Software-house logos/pkols-logo.png'
    },
    {
      id: 16,
      name: 'Sapphire Global Tech.',
      description: 'Sapphire Global Tech is a leading web development company specializing in bespoke, intuitive websites. Their creative designers use modern technologies to enhance online business success, offering affordable IT solutions. With proven expertise in web design, SEO, and optimization strategies, they improve business visibility and achievement.',
      services:["Mobile App Development", "Web App Development"],
      location: 'PTCL TRAINING CENTER, Office # 3,4 KP IT PARK, University Rd',
      website: 'https://sapphireglobaltech.com/',
      imageUrl: 'src/assets/Software-house logos/Sapphire.png'
    },
    {
      id: 17,
      name: 'WQsoftwares',
      description: 'WQsoftwares (Pvt) Ltd is a Peshawar-based IT consulting company focused on unlocking new possibilities through technology. Specializing in MIS, ERP, mobile app development, web applications, and website development, they provide disruptive software and training solutions. With a dedicated team committed to helping businesses operate more efficiently, WQsoftwares has built a strong profile in the web application services sector.',
      services: ["Web Portals", "Real-Time Web Apps", "Social Apps", "Community Apps", "Analytical Apps", "Online Databases Websites", "Hybrid Apps", "Mobile Apps", "SEO"],
      location: 'C3 4th Floor New Diljan Arcade Near Hayatabad Ring Road Peshawar',
      website: 'https://wqsoftwares.com/',
      imageUrl: 'src/assets/Software-house logos/Wp.png'
    },
    {
      id: 18,
      name: 'iFaST Solutions (Pvt) Ltd.',
      description: 'iFaST Solutions (Pvt) Ltd is a leading IT services company providing cutting-edge solutions to both public and private sector organizations. With a highly skilled team of experts, including project managers, software developers, and network engineers, iFaST delivers quality solutions on time. Their experience spans developing and deploying sophisticated information systems for diverse organizations globally.',
      services: ["Software Development", "App Development", "Cloud Computing", "ERP", "Data Science", "Capacity Building", "Project Management", "Testing & Validation Services", "Digitization"],
      location: 'Plot No 2, Opposite Q Mall, Adjacent Street Tehkal Bala BRT Station, University Road, Peshawar',
      website: 'https://ifastsolutions.com/',
      imageUrl: 'src/assets/Software-house logos/iFast.png'
    },
    {
      id: 19,
      name: 'App Storm Studio',
      description: 'App Storm Studio specializes in designing and developing web, multimedia, and mobile applications. With a strong portfolio across various sectors, the studio has notable expertise in mobile apps and educational game development.',
      services: ["Web Development", "App Development","Designing"],
      location: 'Deans Trade Center, Kalibari Peshawar Cantonment, Peshawar',
      website: 'https://www.linkedin.com/company/app-storm-studio-1/',
      imageUrl: 'src/assets/Software-house logos/App-storm.jpeg'
    },
    {
      id: 20,
      name: 'Precise Tech Cons.',
      description: 'Precise Technology is an ICT-enabled services firm operating locally and internationally for over 8 years, with offices in Toronto, Canada, and Peshawar, Pakistan. Specializing in business software development using .NET, PHP, Java, and Oracle, the company delivers quality solutions backed by ISO 9001:2008 certification. Precise Technology supports startups and SMEs by enhancing productivity through skilled IT expertise and global standards.',
      services: ["Enterprise Fleet Management", "Enterprise Inventory Management", "Point of Sale (POS)", "Enterprise Manufacturing System", "Enterprise Project Management", "Web Applications Development"],
      location: 'Deans Trade Center Peshawar  ',
      website: 'https://precisetec.ca/',
      imageUrl: 'src/assets/Software-house logos/precise-logo-5.png'
    },
    {
      id: 21,
      name: 'NS Developers',
      description: 'NS Developers, based in Peshawar, is a software development firm providing IT products and services across enterprises and industries. Their offerings include Financial Systems, ERP, M&E Systems, Business Process Re-Engineering, mobile-based solutions, and e-Government automation.',
      services: ["Software Development Services", "Enterprise Resource Planning System (ERP)", "Web Application Development", "Mobile Application Development", "IT Consultancy"],
      location: 'Deans Trade Center Peshawar  ',
      website: 'https://www.nsdevelopers.com/',
      imageUrl: 'src/assets/Software-house logos/NSDev.png'
    },
    {
      id: 22,
      name: 'Veevo Tech',
      description: 'Veevo Tech is a leading Pakistani technology company specializing in business automation, IT, Telecom VAS, and AI-based IoT products. With years of experience, Veevo has launched innovative solutions including biometric systems, scalable software, SMS/Robo Call services, security solutions, mobile advertising, and smart gadgets—serving millions globally.',
      services: ["Veevo SMS API", "Veevo Voice API", "Veevo Whatsapp API", "Web Hosting", "Mobile Advertisement", "Web Application Development", "Mobile Application Development"],
      location: 'Veevo Tech, Office#4, 4th Floor, Block-A, Jawad Towers, University Road, Peshawar',
      website: 'https://veevotech.com/',
      imageUrl: 'src/assets/Software-house logos/VT-Logo1.png'
    },
    {
      id: 23,
      name: 'Tapsol',
      description: 'Established in 2017, Tapsol is a dynamic IT company. We provide cutting-edge solutions in Software Development, Website Development, Digital Marketing, and Graphics Design, empowering businesses to succeed in the digital era.',
      services: ["Software Development","Digital Marketing","Graphics Designing","Customer Support","Web Application Development", "Mobile Application Development"],
      location: 'FF 38 First Floor KPIT Park Board Bazar Peshawar',
      website: 'https://tapsol.com/',
      imageUrl: 'src/assets/Software-house logos/tapsol.png'
    },
    {
      id: 24,
      name: 'Strings Technologies',
      description: 'Since 2020, we have been on a mission to craft digital solutions that fuel business growth. With a team of creative minds, we deliver results-driven work. Even after 3 years, our commitment to unity, creativity, curiosity, and dedication is unwavering.',
      services: ["Digital Transformation", "Digital Marketing", "AI Consultancy", "Vocational and Technical Training", "End to End Business Consultancy", "Web Development", "Mobile Apps Development", "Content Writing and Creation", "UI/UX Designing", "User Acceptance Testing (UAT)", "System Integration", "Data Migration", "E-Book Translation", "E-Commerce"],
      location: 'Office: 5,6 KP- IT Park PTCL Training Center Peshawar Pakistan',
      website: 'https://strings.com.pk/',
      imageUrl: 'src/assets/Software-house logos/stringspk_logo.jpeg'
    },
    {
      id: 25,
      name: ' ERISP',
      description: 'ERISP (Engineering Research & IT Service Provider), established in 2015, is a research-driven company offering ERP, CRM, web and mobile app development, and digital marketing services. Affiliated with PSEB, FBR, and KPRA, ERISP serves over 100 clients across Pakistan, Afghanistan, the UK, US, Qatar, Dubai, and Saudi Arabia in both public and private sectors.',
      services: ["Odoo ERP", "Business4x ERP & CRM", "Cloud Computing", "Web Development", "Digital Marketing"],
      location: 'IT Park, Ptcl training center, Peshawar, Pakistan',
      website: 'https://erisp.net/',
      imageUrl: 'src/assets/Software-house logos/erisp-favicon.png'
    },
    {
      id: 26,
      name: 'Krafters',
      description: 'Krafters is a tech based social cum business enterprise that enables home based workers and MSMEs establish, develop and grow business through digital financial inclusion and linkage with institutions involved in product/service value chain.',
      services: ["Designing","Marketing","E-Commerce Services"],
      location: 'Office 30-31, I.T Park, PTCL Training Center, Board Bazaar, Peshawar',
      website: 'https://kraftersonline.com/',
      imageUrl: 'src/assets/Software-house logos/krafters-Logo-512x493-Black-BG-Full-riot.jpg'
    },
    {
      id: 27,
      name: 'Encoderbytes pvt ltd',
      description: 'EncoderBytes is one of the leading software development companies in PK, serving an impressive local and overseas clients. Our team works in an agile manner and engages well with our clients across different stages of their software app development projects.',
      services: ["AI","Web Development","Mobile App Development","UI/UX","Blockchain Development"],
      location: 'IT Park, PTCL Training Center, Peshawar, KP, Pakistan',
      website: 'https://www.encoderbytes.com/',
      imageUrl: 'src/assets/Software-house logos/EncoderBytes.png'
    },
    {
      id: 28,
      name: 'Softech Square S/W sol',
      description: 'Softech Square stands as a prominent player in the realm of Apps, Websites, Games, and Digital Marketing services and products. With an impressive track record of over 50 million downloads for our games and apps, we have successfully collaborated with a diverse array of 50+ clients worldwide.',
      services: ["Web Development","Mobile App Development","UI/UX","Google Ads Expert","SEO & Content Writing","Graphic Desiging"],
      location: 'Softech Square Software Solutions, Peshawar , Pvt Ltd FF 103 Deans Trade Center',
      website: 'https://www.softechsquare.com/',
      imageUrl: 'src/assets/Software-house logos/soft square.png'
    },
    {
      id: 29,
      name: 'Xtremes Software Services Private Ltd.',
      description: 'Xtreme Software Services Pvt Ltd, based in Peshawar with a branch in Abu Dhabi, offers top-tier business software solutions across Pakistan. Their services include ERP systems, CRM, web development, digital marketing, Android apps, and more.',
      services: ["Web Design & Development", "Software Development", "WordPress Development", "Graphics Designing", "Digital Marketing", "Mobile App Solutions"],
      location: 'Abdara Rd, Peshawar Pakistan.',
      website: 'https://xtremessoft.com/',
      imageUrl: 'src/assets/Software-house logos/xtremessoft.png'
    }
  ];
  
  export default softwareHousesData;
  