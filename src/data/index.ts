import {
  AboutPagesDataType,
  BlogPageDataType,
  CapabilitiesPagesDataType,
  CaseStudiesDataType,
  IndustriesPagesDataType,
  LifeProcedureDataType,
} from "./types";

export const capabilitiesPagesData: {
  [key: string]: CapabilitiesPagesDataType;
} = {
  "digital-ventures": {
    heroSection: {
      heading: "Digital Ventures",
      description:
        "Our complete suite of technology services to deliver better products, create stronger brands, new markets, and greater profitability through digital capabilities.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/digital-ventures.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-digital-venture.jpg",
      },
      color: "dot-brown",
    },
    pointers: [
      {
        heading: "Future-driven Digital Strategy",
        description:
          "Our Technology Consulting and Advisory Services are pioneers of the Path to Success in the Digital Age, helping digital ventures identify the most relevant and feasible technology solutions that can aid their business objectives.",
        color: "dot-iceblue",
      },
      {
        heading: "Cutting-edge Software Solutions",
        description:
          "Software Development Services that empower Digital Ventures with next-gen Technology. Our custom application development caters to a digital venture’s unique requirements while maximizing efficiency and future growth.",
        color: "dot-ochre",
      },
      {
        heading: "Revolutionize with Cloud Power",
        description:
          "Amplifying Digital Ventures with Cloud Innovations, Cloud Migration and Management to transform their infrastructure, applications, and data to cloud platforms such as AWS, Microsoft Azure, and Google Cloud.",
        color: "dot-wine",
      },
      {
        heading: "Accelerate with Automation",
        description:
          "Our DevOps and Automation Services streamline end-to-end software delivery processes with solutions integrating development, testing, and deployment, ensuring faster product releases and better team collaboration.",
        color: "dot-blue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-wine",
        subHeadingColor: "dot-ochre",
        backgroundColor: "#B93939",
      },
    },
  },
  innovation: {
    heroSection: {
      heading: "Innovation",
      description:
        "Procedure is your trusted ally on the path to groundbreaking solutions. Let’s defy the status quo together and create a future that’s nothing short of extraordinary.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/innovation.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-innovation.jpg",
      },
      color: "dot-blue",
    },
    pointers: [
      {
        heading: "Innovation Catalyst",
        description:
          "We kick-start the innovation process by conducting interactive ideation workshops to help uncover new digital solutions to your business challenges. Together, we foster a culture of creativity and discovery.",
        color: "dot-brown",
      },
      {
        heading: "Cutting-Edge Technologies",
        description:
          "We use emerging technologies to push the boundaries of what’s possible. From AI-powered systems that think ahead, to blockchain solutions that revolutionize trust—we harness the power of technology so our clients can unlock limitless possibilities for their own businesses.",
        color: "dot-wine",
      },
      {
        heading: "Design Thinking",
        description:
          "Amplifying Digital Ventures with Cloud Innovations, Cloud Migration and Management to transform their infrastructure, applications, and data to cloud platforms such as AWS, Microsoft Azure, and Google Cloud.",
        color: "dot-iceblue",
      },
      {
        heading: "Collaborative Partnerships",
        description:
          "Our DevOps and Automation Services streamline end-to-end software delivery processes with solutions integrating development, testing, and deployment, ensuring faster product releases and better team collaboration.",
        color: "dot-green",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-wine",
        subHeadingColor: "dot-iceblue",
        backgroundColor: "#B93939",
      },
    },
  },
  "ux-ui": {
    heroSection: {
      heading: "UX & UI",
      description:
        "Our UX experts are passionate about transforming products into meaningful experiences, simplifying complex systems and building digital services with seamless experiences.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/ui-and-ux.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-ui-ux.jpg",
      },
      color: "dot-green",
    },
    pointers: [
      {
        heading: "User Research and Testing",
        description:
          "We dive deep into understanding the target audience, conducting comprehensive user research to uncover insights that inform the design process. Through thorough testing, we ensure your application meets user expectations and delights in terms of usability.",
        color: "dot-iceblue",
      },
      {
        heading: "IA and Wireframes",
        description:
          "We architect intuitive navigation flow and information hierarchy to enhance user journey and streamline interaction patterns. Our goal is to create a wireframe that can be tested and simulates the user engagement.",
        color: "dot-ochre",
      },
      {
        heading: "High Fidelity Prototyping",
        description:
          "We work collaboratively with our clients and teams to create a user-first design that aligns with business objectives. Interactive prototypes and high-fidelity mockups enable us to collaborate efficiently across teams.",
        color: "dot-wine",
      },
      {
        heading: "Visual Design and Branding",
        description:
          "Our talented designers create effective interfaces that reflect the spirit of your brand identity. We bridge the gap between designers and developers to create a seamless user experience across all digital touchpoints.",
        color: "dot-blue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-iceblue",
        subHeadingColor: "dot-ochre",
        backgroundColor: "#B93939",
      },
    },
  },
  "dx-modernization": {
    heroSection: {
      heading: "DX & Modernization",
      description:
        "We help clients implement their DX strategy by connecting the dots between technology and business goals, identifying relevant solutions and partners.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/dx-and-modernization.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-dx-modernization.jpg",
      },
      color: "dot-brown",
    },
    pointers: [
      {
        heading: "Strategy Development",
        description:
          "Our experts conduct a thorough analysis of the current systems, processes and technology landscape to identify areas of improvement, prioritize goals and define a roadmap for digital transformation.",
        color: "dot-iceblue",
      },
      {
        heading: "User-Centric Design & Experience",
        description:
          "We emphasize user-centric design principles to enhance the overall digital experience for clients and their customers. Our UX/UI experts conduct in-depth research, implement intuitive navigation, and UI design.",
        color: "dot-wine",
      },
      {
        heading: "Legacy System Modernization",
        description:
          "By leveraging the latest technologies and best practices we ensure a smooth transition from outdated systems to modern, scalable, and efficient solutions to improve operational efficiency and reduce maintenance costs.",
        color: "dot-iceblue",
      },
      {
        heading: "Cloud Migration and Integration",
        description:
          "We help businesses tap into the benefits of cloud computing, By seamlessly integrating your systems and applications, we enable you to achieve a unified and interconnected ecosystem that drives productivity and collaboration.",
        color: "dot-green",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-wine",
        subHeadingColor: "dot-iceblue",
        backgroundColor: "#B93939",
      },
    },
  },
  "process-consulting": {
    heroSection: {
      heading: "Process Consulting",
      description:
        "At Procedure, we’re not just consultants, we’re partners in your success. Trust us to optimize your business processes, design innovative solutions, and establish a culture of continuous improvement.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/process-consulting.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-process-consulting.jpg",
      },
      color: "dot-blue",
    },
    pointers: [
      {
        heading: "Process Mapping & Optimization",
        description:
          "Our experts meticulously visualize and analyze your current processes, identify inefficiencies, and propose innovative solutions that will transform the way you work. Prepare for warp-speed efficiency and watch your business thrive.",
        color: "dot-iceblue",
      },
      {
        heading: "Continuous Improvement",
        description:
          "We don’t just stop at optimizing your current processes. We help you establish a culture of continuous improvement, where your team is empowered to identify areas for improvement and propose new solutions.",
        color: "dot-ochre",
      },
      {
        heading: "Innovation Accelerators",
        description:
          "Our experts incorporate metrics and KPIs (Key Performance Indicators) into the process design, providing tangible data that measures progress and results. Use our performance metrics to guide decision-making and produce results.",
        color: "dot-wine",
      },
      {
        heading: "Future-Proofing Strategies",
        description:
          "We’ve got our eyes firmly fixed on the horizon. Our process consulting services incorporate forward-thinking strategies that anticipate future challenges and equip your business for success in the ever-evolving technological landscape.",
        color: "dot-blue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-iceblue",
        subHeadingColor: "dot-ochre",
        backgroundColor: "#B93939",
      },
    },
  },
  agile: {
    heroSection: {
      heading: "Agile",
      description:
        "Procedure puts Agile tools to work in order to drive collaboration, prioritize user experience and optimize results through iterative development.",
      images: {
        desktop: "https://procedure.tech/wp-content/uploads/2023/08/agile.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-agile.jpg",
      },
      color: "dot-green",
    },
    pointers: [
      {
        heading: "Embrace Collaboration",
        description:
          "Procedure actively collaborates with clients to incorporate their feedback throughout the development process. We use Agile tools like Trello, Asana and Jira to facilitate communication, track progress, and ensure alignment between us and client teams.",
        color: "dot-brown",
      },
      {
        heading: "User-centric approach",
        description:
          "We’re committed to delivering solutions that exceed user expectations, resulting in superior user experiences. We put the user at the center of the development process, collect user feedback, and incorporate it into our development process to ensure client solutions meet customer needs.",
        color: "dot-wine",
      },
      {
        heading: "Prioritize Flexibility",
        description:
          "We adapt to changing client requirements and ensure that project deliverables remain relevant and responsive to evolving needs. Agile tools allows us to pivot when priorities change and ensure that client solutions are built in a flexible and sustainable manner.",
        color: "dot-iceblue",
      },
      {
        heading: "Continuous Improvement",
        description:
          "With Agile tools as allies, we regularly reflect on processes and products to identify areas for improvements. Using continuous improvement practices, we gather feedback from clients and analyze data on application usage to optimize processes and deliver better solutions.",
        color: "dot-green",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-wine",
        subHeadingColor: "dot-iceblue",
        backgroundColor: "#B93939",
      },
    },
  },
  "app-development": {
    heroSection: {
      heading: "App Development",
      description:
        "Procedure is driven by a passion for innovation and a focus on our clients’ success. We help companies translate their vision into reality by creating applications that transcend boundaries.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/app-development.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-app-development.jpg",
      },
      color: "dot-brown",
    },
    pointers: [
      {
        heading: "Accelerated Innovation",
        description:
          "Our Technology Consulting and Advisory Services are pioneers of the Path to Success in the Digital Age, helping digital ventures identify the most relevant and feasible technology solutions that can aid their business objectives.",
        color: "dot-brown",
      },
      {
        heading: "Strategic Problem Solving",
        description:
          "Software Development Services that empower Digital Ventures with next-gen Technology. Our custom application development caters to a digital venture’s unique requirements while maximizing efficiency and future growth.",
        color: "dot-wine",
      },
      {
        heading: "Immersive User Experiences",
        description:
          "Amplifying Digital Ventures with Cloud Innovations, Cloud Migration and Management to transform their infrastructure, applications, and data to cloud platforms such as AWS, Microsoft Azure, and Google Cloud.",
        color: "dot-iceblue",
      },
      {
        heading: "Future-Proof Architecture",
        description:
          "Our DevOps and Automation Services streamline end-to-end software delivery processes with solutions integrating development, testing, and deployment, ensuring faster product releases and better team collaboration.",
        color: "dot-green",
      },
      {
        heading: "Continuous Evolution",
        description:
          "We’re committed to building long-term relationships with our clients. Our team continually identifies and troubleshoots issues, makes enhancements, and performs updates—all while keeping your applications secure and stable.",
        color: "dot-ochre",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-wine",
        subHeadingColor: "dot-iceblue",
        backgroundColor: "#B93939",
      },
    },
  },
  cloud: {
    heroSection: {
      heading: "Cloud",
      description:
        "Our cloud services propel our clients to new heights and revolutionizes their products and offerings. Procedure will take your business to cloud nine, leaving your competition trailing behind.",
      images: {
        desktop: "https://procedure.tech/wp-content/uploads/2023/08/cloud.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-cloud.jpg",
      },
      color: "dot-brown",
    },
    pointers: [
      {
        heading: "Cloud Migration",
        description:
          "Say goodbye to outdated infrastructure and hello to the cloud! Let our experts seamlessly migrate your systems and applications, ensuring a smooth transition. Embrace enhanced scalability, flexibility—and savings.",
        color: "dot-iceblue",
      },
      {
        heading: "Cloud Infrastructure Management",
        description:
          "Trust us to manage your cloud infrastructure with utmost care. We handle everything from provisioning and monitoring to security and optimization. Focus on your core business while we handle the complexities of cloud management.",
        color: "dot-ochre",
      },
      {
        heading: "Cloud Application Development",
        description:
          "Leverage the power of cloud-based applications to unlock your business’s full potential. Our talented developers will create highly scalable and performant cloud applications tailor-made for your unique requirements. Watch your productivity skyrocket",
        color: "dot-wine",
      },
      {
        heading: "Cloud Security and Compliance",
        description:
          "Leverage the power of cloud-based applications to unlock your business’s full potential. Our talented developers will create highly scalable and performant cloud applications tailor-made for your unique requirements.",
        color: "dot-blue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-iceblue",
        subHeadingColor: "dot-ochre",
        backgroundColor: "#B93939",
      },
    },
  },
  devops: {
    heroSection: {
      heading: "DevOps",
      description:
        "Transcend the limits of traditional software development and embrace a future where agility, scalability, and automation reign supreme. Prepare to boldly go where no business has gone before.",
      images: {
        desktop: "https://procedure.tech/wp-content/uploads/2023/08/devops.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-devops.jpg",
      },
      color: "dot-blue",
    },
    pointers: [
      {
        heading: "Automated CI/CD Pipelines",
        description:
          "Accelerate your time-to-market in warp speed with our cutting-edge DevOps solutions that automate the entire process, from continuous integration (CI) to continuous delivery (CD) and deployment.",
        color: "dot-iceblue",
      },
      {
        heading: "Infrastructure as Code",
        description:
          "We create immutable infrastructure using code, allowing you to effortlessly provision and manage resources with the precision of a quantum algorithm. Say farewell to traditional infrastructure woes and usher in a new era of agility.",
        color: "dot-ochre",
      },
      {
        heading: "Microservices Architecture",
        description:
          "We help you break down monolithic applications into modular components, enabling seamless scalability and optimal resource utilization. Experience unprecedented elasticity as your application adapts and thrives in the cloud.",
        color: "dot-wine",
      },
      {
        heading: "Continuous Monitoring",
        description:
          "You can rest easy knowing that our innovative monitoring systems are keeping an eye on every aspect of your infrastructure, identifying and eliminating bottlenecks before they disrupt any mission-critical systems.",
        color: "dot-blue",
      },
      {
        heading: "Cloud-native DevOps",
        description:
          "We help you harness the full power of cloud computing, leveraging its elasticity and scalability to create and deploy applications that reach for the stars. Embrace a future where innovation knows no bounds.",
        color: "dot-green",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-iceblue",
        subHeadingColor: "dot-ochre",
        backgroundColor: "#B93939",
      },
    },
  },
  "product-engineering": {
    heroSection: {
      heading: "Product Engineering",
      description:
        "At Procedure, we live and breathe innovation. We are the partner you need to create products that are pushing boundaries. Let’s build something great together!",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/product-engineering.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-product-engineering.jpg",
      },
      color: "dot-blue",
    },
    pointers: [
      {
        heading: "Cutting-Edge Design",
        description:
          "We at Procedure believe that we are not just creating products, but shaping the future. We use human-centered design to connect with your audience on a deeper level and make designs that will challenge status quo.",
        color: "dot-brown",
      },
      {
        heading: "Agile Development",
        description:
          "We integrate agile development methodologies, enabling us to deliver products at warp speed. Our teams work in close collaboration with our clients, embracing a culture of iteration and feedback to achieve optimal results.",
        color: "dot-wine",
      },
      {
        heading: "Next-Gen Technologies",
        description:
          "We’re not just keeping up with the latest tech trends, we’re setting new ones. We integrate advanced technologies such as AI, IoT, and blockchain to create products that are ahead of the curve and also stand the test of time.",
        color: "dot-iceblue",
      },
      {
        heading: "Quality Assurance",
        description:
          "Our QA teams deploy advanced testing methodologies—including automated testing and DevOps testing, to ensure your product is of the highest quality. Enjoy a peace of mind knowing your product is ready for takeoff.",
        color: "dot-green",
      },
      {
        heading: "End-to-End Support",
        description:
          "Our product engineering services don’t end with product delivery. We provide maintenance and support services that keep your products running at optimal levels. From takeoff to orbit, you’ll have everything you need to succeed.",
        color: "dot-ochre",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-wine",
        subHeadingColor: "dot-iceblue",
        backgroundColor: "#B93939",
      },
    },
  },
  "managed-services": {
    heroSection: {
      heading: "Managed Services",
      description:
        "We are the maestros conducting the symphony of your technology ecosystem. We bring intelligence, proactive support and future-proof expertise to help you thrive in an ever changing world.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/managed-services.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-managed-services.jpg",
      },
      color: "dot-green",
    },
    pointers: [
      {
        heading: "Proactive Optimization",
        description:
          "At Procedure, we don’t just manage your services, we optimize them for a future of peak performance. Our team anticipates potential issues and takes proactive measures to ensure that your systems run smoothly and effortlessly.",
        color: "dot-brown",
      },
      {
        heading: "Seamless Integration",
        description:
          "We integrate our managed services into your existing infrastructure, creating a harmonious blend of innovation and functionality. We work with your team, ensuring a smooth transition and minimizing disruption to your operations.",
        color: "dot-wine",
      },
      {
        heading: "Intelligent Automation",
        description:
          "We harness the power of artificial intelligence and machine learning to automate repetitive tasks, freeing up valuable time and resources for your team. Embrace a future where machines collaborate with humans to achieve productivity.",
        color: "dot-iceblue",
      },
      {
        heading: "Future-Proof Expertise",
        description:
          "We are always on the lookout for new technologies, trends, and best practices. Our team of experts blends their wealth of knowledge with creative thinking to provide your business with future-proof success.",
        color: "dot-green",
      },
      {
        heading: "Cost Optimization",
        description:
          "We proactively identify and resolve potential issues before they become costly problems and offer customized managed services tailored to meet your specific requirements, ensuring maximum ROI.",
        color: "dot-ochre",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-wine",
        subHeadingColor: "dot-iceblue",
        backgroundColor: "#B93939",
      },
    },
  },
  "mobile-solutions": {
    heroSection: {
      heading: "Mobile Solutions",
      description:
        "Experience the future of mobile technology with us, where cutting-edge design collides with seamless functionality. Let us embark on a journey of innovation to take your brand to new heights.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/mobile-solutions.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-mobile-solutions.jpg",
      },
      color: "dot-green",
    },
    pointers: [
      {
        heading: "Futuristic Innovation",
        description:
          "We build mobile services by crafting experiences that will transport your customers to a future of endless possibilities. With the latest technologies like augmented reality and machine learning, we push the boundaries of what’s possible.",
        color: "dot-iceblue",
      },
      {
        heading: "Seamless User Experience",
        description:
          "We design mobile services and interfaces with the user in mind to ensure a seamless and immersive experience for your customers. From navigation to interactions, embrace a future where user experience reigns supreme.",
        color: "dot-ochre",
      },
      {
        heading: "Agile Development",
        description:
          "We’re fast and agile. Expect not only prompt delivery but also the flexibility to adapt and evolve your mobile services as your business grows. Stay ahead of the mobile revolution with Procedure’s agile approach.",
        color: "dot-wine",
      },
      {
        heading: "Collaborative Partnership",
        description:
          "We put our clients first, paying close attention to detail and ensuring efficient mobile service development. By collaborating with you, we help ensure that your business stays ahead of the mobile revolution.",
        color: "dot-blue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-wine",
        subHeadingColor: "dot-iceblue",
        backgroundColor: "#B93939",
      },
    },
  },
  "swat-interventions": {
    heroSection: {
      heading: "SWAT Interventions",
      description:
        "With our SWAT interventions, challenges are met head-on and swiftly conquered. Our forward-thinking approach powers rapid resolution, enhanced efficiency and future-proof preparedness.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/swat-interventions.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-swat-interventions.jpg",
      },
      color: "dot-brown",
    },
    pointers: [
      {
        heading: "Rapid Resolution",
        description:
          "With Procedure’s SWAT team of experts, you can expect a future where every problem is tackled with lightning speed. Say goodbye to long hours of downtime as we assess and resolve issues with swift efficiency before they escalate.",
        color: "dot-iceblue",
      },
      {
        heading: "Enhanced Efficiency",
        description:
          "Our SWAT interventions are designed to optimize your operations and maximize efficiency. We analyze your processes, identify bottlenecks, and implement strategic solutions that streamline workflows.",
        color: "dot-ochre",
      },
      {
        heading: "Future-Proof Preparedness",
        description:
          "Amplifying Digital Ventures with Cloud Innovations, Cloud Migration and Management to transform their infrastructure, applications, and data to cloud platforms such as AWS, Microsoft Azure, and Google Cloud.",
        color: "dot-wine",
      },
      {
        heading: "Unmatched Expertise",
        description:
          "Armed with deep technical knowledge and a knack for creative problem-solving, our experts bring unmatched expertise to the table. With our SWAT interventions, you gain access to an elite team who are always one step ahead.",
        color: "dot-blue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-wine",
        subHeadingColor: "dot-iceblue",
        backgroundColor: "#B93939",
      },
    },
  },
  security: {
    heroSection: {
      heading: "Security",
      description:
        "At Procedure, we’re not just offering security services - we’re unlocking a secure future for your business. Let’s create a future where security is not a concern but an asset.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/security.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-security.jpg",
      },
      color: "dot-blue",
    },
    pointers: [
      {
        heading: "Future-Proof Defense",
        description:
          "At Procedure, we’re preparing your business for the challenges of tomorrow. Our security services utilize cutting-edge technologies, like AI and blockchain, to create a defense that stays one step ahead of cyber threats.",
        color: "dot-brown",
      },
      {
        heading: "Expert Support & Monitoring",
        description:
          "We experts monitor your systems 24/7, identifying and responding to potential security breaches before they happen. We provide real-time alerts and swift response, ensuring that your business remains protected at all times.",
        color: "dot-wine",
      },
      {
        heading: "Customizable Solutions",
        description:
          "We craft customized security solutions to fit your specific needs. We conduct an in-depth analysis of your current security landscape and design a robust defense plan that’s perfectly tailored to thwart potential attacks.",
        color: "dot-iceblue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-wine",
        subHeadingColor: "dot-iceblue",
        backgroundColor: "#B93939",
      },
    },
  },
  "performance-governance": {
    heroSection: {
      heading: "Performance Governance",
      description:
        "Procedure’s performance governance services empower you to achieve peak performance, future-proof your systems, and make data-driven optimizations to unlock new possibilities.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/performance-governance.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-performance-governance.jpg",
      },
      color: "dot-brown",
    },
    pointers: [
      {
        heading: "Optimal Performance",
        description:
          "Our innovative approach and forward-thinking strategies allow for greater efficiency, productivity, and scalability and ensure your systems operate seamlessly in an ever-evolving digital landscape.",
        color: "dot-iceblue",
      },
      {
        heading: "Data-driven Optimization",
        description:
          "Our approach to performance governance is grounded in the power of data. We analyze and leverage comprehensive insights to optimize your systems, identifying bottlenecks and fine-tuning performance for maximum efficiency.",
        color: "dot-ochre",
      },
      {
        heading: "Proactive Monitoring",
        description:
          "We keep your systems running smoothly by identifying potential problems and taking immediate action to minimize disruptions. Our advanced monitoring tools ensure that your systems are running at their peak performance levels.",
        color: "dot-wine",
      },
      {
        heading: "Expert Guidance",
        description:
          "Our experts bring a unique skill set to every project, and with their in-depth knowledge of the intricacies involved in performance optimization, they guide you through making informed decisions for your business.",
        color: "dot-green",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-wine",
        subHeadingColor: "dot-iceblue",
        backgroundColor: "#B93939",
      },
    },
  },
  "quality-testing": {
    heroSection: {
      heading: "Quality & Testing",
      description:
        "At Procedure, quality control is not an afterthought - it’s an active pursuit. Liberate your business from the confines of mediocre software to create a future of excellence and customer satisfaction.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/quality-and-testing.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-quality-testing.jpg",
      },
      color: "dot-brown",
    },
    pointers: [
      {
        heading: "Intelligent Testing",
        description:
          "We harness the power of advanced algorithms and data analysis techniques to detect even the most subtle defects. Our tools ensure comprehensive software testing to deliver future-proof software.",
        color: "dot-iceblue",
      },
      {
        heading: "Agile Testing",
        description:
          "Our continuous integration (CI) and continuous deployment (CD) capabilities allow us to accelerate the testing process without sacrificing quality—eliminating risk from both technical debt as well as business debt.",
        color: "dot-ochre",
      },
      {
        heading: "Proactive Quality Control",
        description:
          "We conduct meticulous assessments and implement robust quality control measures to ensure that your software adheres to the highest standards. Our approach helps us achieve maximum functionality, performance and usability.",
        color: "dot-wine",
      },
      {
        heading: "User-centric Software",
        description:
          "Procedure’s quality and testing capabilities are all about delivering exceptional user experiences. Our team focuses on usability, performance, and functionality, ensuring that your software delights users with its flawless operation.",
        color: "dot-blue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-wine",
        subHeadingColor: "dot-iceblue",
        backgroundColor: "#B93939",
      },
    },
  },
};

export const industriesData = [
  {
    title: "Banking",
    description:
      "We can help your bank take its services—and brand experience—to the next level. We deliver products that address cybersecurity concerns and increase efficiency.",
    href: "/industries/banking/",
    color: "dot-green",
  },
  {
    title: "FoodTech",
    description:
      "With a comprehensive array of services, we support your teachers and empower students with tools that will engage and challenge them and transform learning experiences.",
    href: "/industries/foodtech/",
    color: "dot-ochre",
  },
  {
    title: "EdTech",
    description:
      "With a comprehensive array of services, we support your teachers and empower students with tools that will engage and challenge them and transform learning experiences.",
    href: "/industries/edtech/",
    color: "dot-iceblue",
  },
  {
    title: "InsurTech",
    description:
      "We offer InsurTech companies solutions that automate claims processing, provide advanced analytics and AI tools, improve the customer experience, and enhance security.",
    href: "/industries/insurtech/",
    color: "dot-red",
  },
  {
    title: "FinTech",
    description:
      "With our expertise and forward-thinking approach, your business can leverage technology and embrace innovation to reshape the future of finance and gain a competitive edge.",
    href: "/industries/fintech/",
    color: "dot-wine",
  },
];

export const industriesPagesData: { [key: string]: IndustriesPagesDataType } = {
  banking: {
    heroSection: {
      heading: "Banking",
      description:
        "We can help your bank take its services—and brand experience—to the next level. We deliver products that address cybersecurity concerns and increase efficiency.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/banking.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-banking.jpg",
      },
      color: "dot-green",
    },
    pointers: [
      {
        heading: "Enhanced Efficiency",
        description:
          "Experience an advanced level of operational efficiency and productivity with our solutions and tools that streamline banking operations, so you can focus on growing your business in a faster and smarter way.",
        color: "dot-red",
      },
      {
        heading: "Robust Cybersecurity",
        description:
          "Bank with the confidence that our multi-layered cybersecurity measures provide, protecting you against potential threats and ensuring the safety of your customers’ valuable data.",
        color: "dot-wine",
      },
      {
        heading: "Seamless Customer Experience",
        description:
          "Delight your customers with a seamless and personalized banking experience, through our solutions that make it easier for your customers to interact with your brand, resulting in customer loyalty.",
        color: "dot-ochre",
      },
      {
        heading: "Digital Transformation",
        description:
          "We enable you to modernize your business and stay ahead of the competition. By leveraging emerging technologies like AI, ML, and blockchain, you can take advantage of new opportunities and unlock new revenue streams.",
        color: "dot-iceblue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-wine",
        subHeadingColor: "dot-iceblue",
        backgroundColor: "#B93939",
      },
    },
  },
  edtech: {
    heroSection: {
      heading: "EdTech",
      description:
        "With a comprehensive array of services, we support your teachers and empower students with tools that will engage and challenge them.",
      images: {
        desktop: "https://procedure.tech/wp-content/uploads/2023/08/edtech.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-edtech.jpg",
      },
      color: "dot-red",
    },
    pointers: [
      {
        heading: "Future-Ready Applications",
        description:
          "Our technology and protocols ensure that data stays encrypted, authentication is rigorous, cyber threats are addressed—and you can build trust with customers while complying with industry regulations.",
        color: "dot-red",
      },
      {
        heading: "Learner-Centric Design",
        description:
          "Our software, services, and consulting solutions enable you to achieve significant time and cost savings while improving productivity and delivering seamless user experiences to your customers.",
        color: "dot-wine",
      },
      {
        heading: "Gamified Learning Experiences",
        description:
          "We provide scalable solutions that can easily adapt to changing business needs. Our flexible architecture allows you to grow your business without compromising performance or security.",
        color: "dot-ochre",
      },
      {
        heading: "Ongoing Support & Maintenance",
        description:
          "We Our analytics capabilities enable you to gain valuable insights from vast amounts of data. Our advanced tools can pinpoint trends, detect anomalies, and predict customer behavior—allowing you to make informed decisions that drive growth.",
        color: "dot-iceblue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-iceblue",
        subHeadingColor: "dot-chore",
        backgroundColor: "#B93939",
      },
    },
  },
  fintech: {
    heroSection: {
      heading: "FinTech",
      description:
        "With our expertise and forward-thinking approach, your business can leverage technology and embrace innovation to reshape the future of finance.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/fintech.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-fintech.jpg",
      },
      color: "dot-red",
    },
    pointers: [
      {
        heading: "Enhanced Security",
        description:
          "Our technology and protocols ensure that data stays encrypted, authentication is rigorous, cyber threats are addressed—and you can build trust with customers while complying with industry regulations.",
        color: "dot-red",
      },
      {
        heading: "Streamlined Processes",
        description:
          "Our UX/UI team creates design that make learning delightful and engaging. By considering students’ needs and preferences, we ensure that our clients’ applications are easy to navigate and visually stimulating.",
        color: "dot-wine",
      },
      {
        heading: "Scalable Infrastructure",
        description:
          "Our software, services, and consulting solutions enable you to achieve significant time and cost savings while improving productivity and delivering seamless user experiences to your customers.",
        color: "dot-ochre",
      },
      {
        heading: "Data Analytics and Insights",
        description:
          "We establish long-term relationships with our clients to ensure that the applications perform optimally and meet evolving user needs. Our dedicated team provides long-term support with troubleshooting, updates, and enhancements.",
        color: "dot-green",
      },
      {
        heading: "Regulatory Compliance",
        description:
          "We understand that regulations are necessary and have the expertise to help you with compliance. We keep you compliant so that you have the freedom to pursue new opportunities and innovation.",
        color: "dot-iceblue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-iceblue",
        subHeadingColor: "dot-chore",
        backgroundColor: "#B93939",
      },
    },
  },
  foodtech: {
    heroSection: {
      heading: "FoodTech",
      description:
        "With our forward-thinking approach, you can savor the benefits of improved processes, enhanced customization and seamless customer experiences and leave your competitors hungry for more.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/foodtech.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-foodtech.jpg",
      },
      color: "dot-green",
    },
    pointers: [
      {
        heading: "Food Delivery Solutions",
        description:
          "Our food delivery solutions and route optimization algorithms optimize the entire process to ensure fast and efficient delivery and provide your customers with a seamless delivery experience.",
        color: "dot-red",
      },
      {
        heading: "Smart Menu Management",
        description:
          "Our user-friendly and intuitive tools empower businesses to manage offerings, track inventory, and make real-time updates. By employing our solutions, you can cater to changing consumer preferences and trends.",
        color: "dot-wine",
      },
      {
        heading: "Integrated Ordering & Payment",
        description:
          "We help you streamline the ordering process and increase order volumes so that you can enhance customer satisfaction and improve overall operational efficiency.",
        color: "dot-ochre",
      },
      {
        heading: "Data-Driven Insights",
        description:
          "We use advanced analytics tools to uncover hidden patterns in customer preferences, ordering patterns, and market trends. Our expertise in data analysis provides valuable insights that can help you grow your business.",
        color: "dot-iceblue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-iceblue",
        subHeadingColor: "dot-chore",
        backgroundColor: "#B93939",
      },
    },
  },
  insurtech: {
    heroSection: {
      heading: "InsurTech",
      description:
        "By automating processes, utilizing advanced analytics and AI tools, we enhance customer experience and security. Let’s create and innovate for insurance, from sunsets to moonshots!",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/foodtech.jpg",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/08/mob-foodtech.jpg",
      },
      color: "dot-green",
    },
    pointers: [
      {
        heading: "Automated Claims Processing",
        description:
          "Our solutions can automate the claims processing lifecycle, reducing human error and increasing efficiency to improve customer experience, reduce costs, and speed up the claims process.",
        color: "dot-red",
      },
      {
        heading: "Advanced Analytics and AI",
        description:
          "Gain competitive advantage with our advanced data analytics and AI solutions that can detect fraudulent claims, track losses and identify trends, improving underwriting accuracy and cost control.",
        color: "dot-wine",
      },
      {
        heading: "Seamless Customer Experience",
        description:
          "We help improve the entire customer journey, from quoting to claims management. Our solutions facilitate exceptional customer delight, leading to increased customer retention and loyalty.",
        color: "dot-ochre",
      },
      {
        heading: "Enhanced Security",
        description:
          "We help our clients build robust security measures that protect against fraud, identity theft, and data breaches. By partnering with us, your company can protect customer trust by staying compliant with industry regulations.",
        color: "dot-iceblue",
      },
    ],
    consultSection: {
      heading: "Let’s create",
      subHeading: "With conviction",
      styles: {
        headingColor: "dot-iceblue",
        subHeadingColor: "dot-chore",
        backgroundColor: "#B93939",
      },
    },
  },
};

export const lifeProcedureData: { [key: string]: LifeProcedureDataType } = {
  cultureprocedure: {
    heroSection: {
      heading: "Where Heart",
      subHeading: "Meets Hustle",
      style: {
        headingColor: "",
        subHeadingColor: "dot-red",
      },
    },
    profileOne: {
      name: "Pooja Dabade",
      description:
        "Procedure’s culture encourages everyone to contribute their unique insights and ideas. This leads us to learn from each other and continually improve—creating a dynamic workplace.",
      imageUrl:
        "https://procedure.tech/wp-content/uploads/2023/09/culture1-bw.jpg",
      color: "bg-green",
    },
    profileTwo: {
      name: "Mohit Kumar",
      description:
        "At Procedure, teamwork leads to trust. The challenge of work is part of every job—but the diverse team I worked with here made me think outside my box and find lifelong friends.",
      imageUrl:
        "https://procedure.tech/wp-content/uploads/2023/09/culture2-bw.jpg",
      color: "bg-brickred",
    },
    sectionImageOne: {
      desktop:
        "https://procedure.tech/wp-content/uploads/2023/09/culture-capsule2.jpg",
      mobile:
        "https://procedure.tech/wp-content/uploads/2023/10/mob-culture-capsule2.jpg",
    },
    sectionImageTwo: {
      desktop:
        "https://procedure.tech/wp-content/uploads/2023/09/culture-capsule3.jpg",
      mobile:
        "https://procedure.tech/wp-content/uploads/2023/10/mob-culture-capsule3.jpg",
    },
    pointersTitle: "Be a Part of Promising",
    pointers: [
      {
        heading: "Openness",
        description:
          "We believe in fostering a culture of openness because creativity flourishes when we’re not hemmed in by tradition and held back by the fear that our ideas may be ridiculed.",
        color: "dot-wine",
      },
      {
        heading: "Innovation",
        description:
          "Embracing the ever-evolving world of technology, we strive to be at the forefront of innovation, constantly pushing boundaries and redefining what’s possible.",
        color: "dot-ochre",
      },
      {
        heading: "Pragmatism",
        description:
          "We approach challenges with a practical mindset, finding smart and efficient solutions that deliver tangible results and focus on driving meaningful change.",
        color: "dot-brown",
      },
      {
        heading: "Agility",
        description:
          "In the fast-paced world of technology, we adapt and move swiftly to ensure that our strategies are flexible and our actions nimble.",
        color: "dot-green",
      },
      {
        heading: "Trust",
        description:
          "Trust is the cornerstone of our relationships, because we know that when we work together, we can achieve remarkable outcomes.",
        color: "dot-iceblue",
      },
    ],
    photoSliders: [
      "https://procedure.tech/wp-content/uploads/2023/10/culture1-v2.webp",
      "https://procedure.tech/wp-content/uploads/2023/10/culture2-v2.webp",
      "https://procedure.tech/wp-content/uploads/2023/10/culture3-v2.webp",
    ],
  },
  teamprocedure: {
    heroSection: {
      heading: "Upgrade to Pro",
      subHeading: "Join Us",
      style: {
        headingColor: "dot-blue",
        subHeadingColor: "dot-green",
      },
    },
    profileOne: {
      name: "Adarsh Udayan",
      description:
        "I enjoy working at Procedure because the team spirit and can-do energy are so infectious. Every project teaches me something new, and it’s amazing how much you can achieve when you’re all working together!",
      imageUrl:
        "https://procedure.tech/wp-content/uploads/2023/10/team-capsule1.jpg",
      color: "bg-brickred",
    },
    profileTwo: {
      name: "Rachel Salunke",
      description:
        "The best part about working at Procedure is the teamwork that leads to unique creativity. Solving design challenges with a diverse set of people leads to far better solutions and ideas.",
      imageUrl: "https://procedure.tech/wp-content/uploads/2023/09/team4.jpg",
      color: "bg-blue",
    },
    sectionImageOne: {
      desktop:
        "https://procedure.tech/wp-content/uploads/2023/09/team-capsule2.jpg",
      mobile:
        "https://procedure.tech/wp-content/uploads/2023/10/mob-team-capsule2.jpg",
    },
    sectionImageTwo: {
      desktop:
        "https://procedure.tech/wp-content/uploads/2023/09/team-capsule3.jpg",
      mobile:
        "https://procedure.tech/wp-content/uploads/2023/10/mob-team-capsule3.jpg",
    },
    pointersTitle: "Why work with Procedure?",
    pointers: [
      {
        heading: "Passion",
        description:
          "Working in our dynamic and forward-thinking environment needs people who enjoy thinking out of the box and relish the challenge of a fast moving world of tech innovation.",
        color: "dot-wine",
      },
      {
        heading: "Team Play",
        description:
          "Collaboration Power is at the heart of our culture, fostering an atmosphere where diverse ideas merge to pave the way for groundbreaking solutions, bringing out the best in everyone.",
        color: "dot-ochre",
      },
      {
        heading: "Curiosity",
        description:
          "Becoming a team of experts is about staying on the cutting-edge of the latest technological advancements and being intellectually curious and always eager to learn.",
        color: "dot-brown",
      },
      {
        heading: "Solution Focus",
        description:
          "Results-Oriented Mindset: We are problem solvers with an innate ability to devise ingenious solutions to overcome obstacles.",
        color: "dot-green",
      },
      {
        heading: "Fun",
        description:
          "When team members are having fun, they’re more motivated, creative, and productive, leading to exceptional work culture.",
        color: "dot-iceblue",
      },
    ],
    photoSliders: [
      "https://procedure.tech/wp-content/uploads/2023/10/work1-v2.webp",
      "https://procedure.tech/wp-content/uploads/2023/10/work2-v2-1.webp",
      "https://procedure.tech/wp-content/uploads/2023/10/work3-v2-1.webp",
    ],
  },
};

export const aboutPagePointerData = [
  {
    heading: "Inspired Engineering",
    description:
      "We encourage creativity and experimentation, and are excited about using technology to solve problems and devise new strategies.",
    color: "dot-ochre",
  },
  {
    heading: "Power Teamwork",
    description:
      "We believe in working together to achieve our goals, where every member plays a crucial role, fostering diverse ideas to converge into groundbreaking solutions and results.",
    color: "dot-wine",
  },
  {
    heading: "Produce Excellence",
    description:
      "We strive for excellence in everything we do, for the highest level of skill and performance. Our curiosity provides the eagerness to break boundaries.",
    color: "dot-iceblue",
  },
];

export const aboutPageMembersData = [
  {
    name: "Ulhas Mandrawadkar",
    position: "Co-Founder and CTO",
    image1: "https://procedure.tech/wp-content/uploads/2023/08/ulhas-bw.jpg",
    image2: "https://procedure.tech/wp-content/uploads/2023/08/ulhas-1.jpg",
    href: "/about/ulhas-mandrawadkar",
    color: "bg-blue",
  },
  {
    name: "Renuka Rode",
    position: "General Manager",
    image1: "https://procedure.tech/wp-content/uploads/2023/08/renuka-bw.jpg",
    image2: "https://procedure.tech/wp-content/uploads/2023/08/renuka-1.jpg",
    href: "/about/renuka-rode",
    color: "bg-brickred",
  },
  {
    name: "Braj Baheti",
    position: "Co-Founder and CEO",
    image1: "https://procedure.tech/wp-content/uploads/2023/08/braj-bw.jpg",
    image2: "https://procedure.tech/wp-content/uploads/2023/08/braj-1.jpg",
    href: "/about/braj-baheti",
    color: "bg-green",
  },
];

export const aboutPageData: { [key: string]: AboutPagesDataType } = {
  "ulhas-mandrawadkar": {
    heroSection: {
      name: "Ulhas Mandrawadkar",
      role: "Co-Founder and CTO",
      style: {
        nameColor: "dot-red",
      },
      linkedin: "https://www.linkedin.com/in/ulhasm/",
      twitter: "https://twitter.com/ulhas_sm/",
    },
    profileSection: {
      heading:
        "“Innovation happens when we dare to step outside our comfort zone and explore the unknown.”",
      hashTags: "#technogeek #podcaster #futurist #pro",
      imageUrl:
        "https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/ulhas-bw-2.jpg?fit=800%2C800&ssl=1",
      subHeading:
        "With Ulhas at the helm, innovation is propelled into uncharted territories, promising a future brimming with technological marvels that reshape the landscape of Procedure. His vision has been recognized by the international community, leading him to win multiple awards and accolades for his contributions in the field of innovation.",
      paragraphs: [
        "Ulhas began his journey as an iOS developer at Xoriant Solutions, where he honed his skills and creativity. Later, he worked at Chalo, a company acquired by OpenTable, where he architected the iPhone application for mobile payments and collaborated on implementing secret features alongside the Apple marketing team.",
        "As an early engineer at HyperTrack, he developed location tracking SDKs for iOS and Android, simplifying installation and providing tutorials for fellow engineers.",
        "A Bachelor of Engineering from Mumbai University, Ulhas is a strong advocate for clean coding practices, customer-centricity, and believes in the power of unit testing and behavior-driven development. He has contributed to open-source projects such as OpenLocate iOS and Android SDKs, Django Push Notifications, and Fastlane – an open-source build tool for iOS and Android.",
        "Ulhas’s revolutionary work on integrating OpenTable’s payment module with their booking system catalyzed a momentous milestone. His accomplishments graced the illustrious stage of the Apple Pay keynote, commandeered by the visionary duo, Tim Cook and Eddy Cue. Furthermore, his transformative ideas and technical prowess have earned him the esteemed recognition as a co-inventor on a patent detailing the seamless workflow of a payment system intertwined with OpenTable’s prodigious booking product.",
      ],
      backgroundColor: "bg-blue",
    },
    teamMembersData: [
      {
        name: "Braj Baheti",
        position: "Co-Founder and CEO",
        image1: "https://procedure.tech/wp-content/uploads/2023/08/braj-bw.jpg",
        image2: "https://procedure.tech/wp-content/uploads/2023/08/braj-1.jpg",
        href: "/about/braj-baheti",
        color: "bg-green",
      },
      {
        name: "Renuka Rode",
        position: "General Manager",
        image1:
          "https://procedure.tech/wp-content/uploads/2023/08/renuka-bw.jpg",
        image2:
          "https://procedure.tech/wp-content/uploads/2023/08/renuka-1.jpg",
        href: "/about/renuka-rode",
        color: "bg-brickred",
      },
    ],
  },
  "braj-baheti": {
    heroSection: {
      name: "Braj Baheti",
      role: "Co-Founder and CEO",
      style: {
        nameColor: "dot-blue",
      },
      linkedin: "https://www.linkedin.com/in/brajkishorb/",
      twitter: "https://twitter.com/BrajkishorB/",
    },
    profileSection: {
      heading:
        "“Blend the art of technology with science of product management to build a masterpiece.”",
      hashTags: "#innovisionary #alchemist #automationguru #pro",
      imageUrl:
        "https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/braj-bw-2.jpg?fit=800%2C800&ssl=1",
      subHeading:
        "Braj’s story of inception is nothing short of extraordinary. With an unwavering determination and a mind wired for forward thinking, his journey to co-founding Procedure is a testament to his ingenuity and passion for solving complex problems with technology.",
      paragraphs: [
        "While he qualified as a Chartered Accountant in November 2011, Braj had begun his professional journey at EY in the risk advisory function. Armed with an acute eye for detail and a thirst for innovative processes, he automated numerous standard audit checks and began to envision how technology could revolutionize the industry.",
        "Braj left EY to join a Quantitative Trading Desk in Singapore, where he continued to expand his experience in designing state-of-the-art systems for data warehousing and constructing intricate trading strategies. This inspired him to explore code-driven solutions—and the universe of possibilities they opened up.",
        "Eager to share his passion for automation and process optimization, Braj founded Let Us Excel, breathing life into his vision of automating manual data processing, eradicating the errors that hindered businesses, and empowering employees with Excel proficiency. This pursuit unveiled a profound truth—the need for elegant execution and the missing layer of consulting and product management in the tech industry.",
        "Determined to fill this void, he embarked on a quest to find a tech co-founder who shared his unwavering commitment to building remarkable, game-changing solutions. Destiny intervened, as Braj crossed paths with Ulhas, a fellow visionary on a parallel voyage. Finding an instant harmony in their shared vision, Procedure was brought to life. As a co-founder, Braj continues to drive Procedure’s audacious ambition to reshape the landscape of cutting-edge solutions and thirst for delivering digital engineering masterpieces.",
      ],
      backgroundColor: "bg-green",
    },
    teamMembersData: [
      {
        name: "Renuka Rode",
        position: "General Manager",
        image1:
          "https://procedure.tech/wp-content/uploads/2023/08/renuka-bw.jpg",
        image2:
          "https://procedure.tech/wp-content/uploads/2023/08/renuka-1.jpg",
        href: "/about/renuka-rode",
        color: "bg-brickred",
      },
      {
        name: "Ulhas Mandrawadkar",
        position: "Co-Founder and CTO",
        image1:
          "https://procedure.tech/wp-content/uploads/2023/08/ulhas-bw.jpg",
        image2: "https://procedure.tech/wp-content/uploads/2023/08/ulhas-1.jpg",
        href: "/about/ulhas-mandrawadkar",
        color: "bg-blue",
      },
    ],
  },
  "renuka-rode": {
    heroSection: {
      name: "Renuka Rode",
      role: "General Manager",
      style: {
        nameColor: "dot-green",
      },
      linkedin: "https://www.linkedin.com/in/renuka-rode-6516a8117/",
      twitter: "https://twitter.com/renukarode/",
    },
    profileSection: {
      heading:
        "“To produce excellence without boundaries, infuse talent with larger-picture thinking.”",
      hashTags: "#OPSmaestro #QApro #projectguru #efficiencyninja",
      imageUrl:
        "https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/renuka-bw-2.jpg?fit=800%2C800&ssl=1",
      subHeading:
        "Renuka’s true strength lies in her ability to infuse innovation into every facet of Procedure’s operations. She champions marketing initiatives as well as talent engagement projects, diving right in to take charge of them all—setting up new systems and managing from scratch anything that demands attention.",
      paragraphs: [
        "As an experienced Scrum Master, Renuka also manages crucial projects and works closely with the team to align them on deliverables and expectations and ensures smooth delivery.",
        "In her prior role as a consultant at Capgemini, she provided valuable insights and recommendations to esteemed clients, contributing to their digital transformation journeys. Her ability to meticulously navigate complex projects and deliver pragmatic solutions earned her recognition for her exceptional management skills.",
        "As a Bachelor of Engineering from Mumbai University, she is guided by her visionary mindset for a harmonious blend of cross-functional collaboration to achieve precision. By embracing cutting-edge technologies and cultivating a culture of continuous improvement, Renuka aims to position Procedure as a pioneer in the industry, inspiring others to reimagine what is achievable.",
      ],
      backgroundColor: "bg-brickred",
    },
    teamMembersData: [
      {
        name: "Braj Baheti",
        position: "Co-Founder and CEO",
        image1: "https://procedure.tech/wp-content/uploads/2023/08/braj-bw.jpg",
        image2: "https://procedure.tech/wp-content/uploads/2023/08/braj-1.jpg",
        href: "/about/braj-baheti",
        color: "bg-green",
      },
      {
        name: "Ulhas Mandrawadkar",
        position: "Co-Founder and CTO",
        image1:
          "https://procedure.tech/wp-content/uploads/2023/08/ulhas-bw.jpg",
        image2: "https://procedure.tech/wp-content/uploads/2023/08/ulhas-1.jpg",
        href: "/about/ulhas-mandrawadkar",
        color: "bg-blue",
      },
    ],
  },
};

export const blogsData = [
  {
    date: "November 30, 2022",
    name: "Rizwan Memon",
    imgSrc:
      "https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/plum-case-study.webp?fit=700%2C700&ssl=1",
    title: "Frontend Performance Testing: Best Practices",
    description:
      "You have been working hard to deliver all the features on the project, and suddenly…",
    link: "/frontend-performance-testing-best-practices/",
  },
  {
    date: "May 26, 2022",
    name: "Rucheta Gogte",
    imgSrc:
      "https://i0.wp.com/procedure.tech/wp-content/uploads/2022/05/resources-blog3.webp?fit=800%2C800&ssl=1",
    title: "Why Robot Framework",
    description:
      "If you are trying to identify what are the best automation frameworks out there, we…",
    link: "/why-robot-framework/",
    imgClassName: "rounded-r-none rounded-bl-full rounded-br-full",
  },
  {
    date: "January 3, 2022",
    name: "Sreeraj Rajan",
    imgSrc:
      "https://i0.wp.com/procedure.tech/wp-content/uploads/2022/01/resources-blog4.webp?fit=800%2C800&ssl=1",
    title: "Reducing our Deployment times by 87%",
    description:
      "You can streamline your deployment process, decreasing deploy times significantly and enabling faster rollbacks with…",
    link: "/reducing-our-deployment-times-by-87/",
    imgClassName: "rounded-r-none rounded-tr-full rounded-tl-full",
  },
  {
    date: "June 10, 2021",
    name: "Sreeraj Rajan",
    imgSrc:
      "https://i0.wp.com/procedure.tech/wp-content/uploads/2021/06/resources-blog2.webp?fit=800%2C800&ssl=1",
    title: "Connecting Django to RDS via pgbouncer using IAM auth",
    description:
      "To connect Django to RDS via using IAM, you'll need an OIDC provider and a…",
    link: "/connecting-django-to-rds-via-pgbouncer-using-iam-auth/",
    imgClassName: "rounded-r-none rounded-bl-full rounded-tl-full",
  },
];

export const blogsPageData: { [key: string]: BlogPageDataType } = {
  "frontend-performance-testing-best-practices": {
    heroSection: {
      heading: "Frontend Performance Testing: Best Practices",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2022/11/blog1-banner.webp",
        mobile:
          "https://procedure.tech/wp-content/uploads/2022/11/mob-blog1-banner.webp",
      },
      date: "November 30, 2022",
      name: "Rizwan Memon",
    },
    subHeadings: [
      "You have been working hard to deliver all the features on the project, and suddenly one fine day the company’s Slack goes off with messages like “Our bundle is around 17MB”or “Our website is lacking speed”. You are scratching your head as to why you even got here in the first place. What did you miss?",
      "This blog will walk you through some best practices for Frontend Performance and Testing. It will walk you through metrics you can calculate on your CI/CD pipelines to avoid those surprise attacks related to performance issues and React best practices for an optimized bundle.",
    ],
    latestPosts: [
      {
        date: "May 26, 2022",
        name: "Rucheta Gogte",
        imgSrc:
          "https://i0.wp.com/procedure.tech/wp-content/uploads/2022/05/resources-blog3.webp?fit=800%2C800&ssl=1",
        title: "Why Robot Framework",
        description:
          "If you are trying to identify what are the best automation frameworks out there, we…",
        link: "/why-robot-framework/",
        imgClassName: "rounded-r-none rounded-bl-full rounded-br-full",
      },
      {
        date: "January 3, 2022",
        name: "Sreeraj Rajan",
        imgSrc:
          "https://i0.wp.com/procedure.tech/wp-content/uploads/2022/01/resources-blog4.webp?fit=800%2C800&ssl=1",
        title: "Reducing our Deployment times by 87%",
        description:
          "You can streamline your deployment process, decreasing deploy times significantly and enabling faster rollbacks with…",
        link: "/reducing-our-deployment-times-by-87/",
        imgClassName: "rounded-r-none rounded-tr-full rounded-tl-full",
      },
      {
        date: "June 10, 2021",
        name: "Sreeraj Rajan",
        imgSrc:
          "https://i0.wp.com/procedure.tech/wp-content/uploads/2021/06/resources-blog2.webp?fit=800%2C800&ssl=1",
        title: "Connecting Django to RDS via pgbouncer using IAM auth",
        description:
          "To connect Django to RDS via using IAM, you'll need an OIDC provider and a…",
        link: "/connecting-django-to-rds-via-pgbouncer-using-iam-auth/",
        imgClassName: "rounded-r-none rounded-bl-full rounded-tl-full",
      },
    ],
    tags: [
      {
        name: "Pipelines",
        link: "/tag/pipelines/",
        id: "pipelines",
      },
      {
        name: "react",
        link: "/tag/react/",
        id: "react",
      },
      {
        name: "Slack",
        link: "/tag/slack/",
        id: "slack",
      },
      {
        name: "Frontend",
        link: "/tag/frontend/",
        id: "frontend",
      },
      {
        name: "CI/CD",
        link: "/tag/ci-cd/",
        id: "ci-cd",
      },
    ],
    author: {
      imgSrc: "https://procedure.tech/wp-content/uploads/2022/11/rizwan.jpg",
      name: "Rizwan Memon",
      teamName: "Tech@Procedure",
    },
    content: `
      <h3>Performance Testing and Metrics</h3>
      <p>
        Let’s start with performance testing, figuring out where your webpage’s
        performance stands and how we can improve it. For this, we will look into some
        metrics and some common ways to improve them, later we will look into how we
        can track those using Lighthouse with a hands on demo.
      </p>
      <h4>Time To Interactive (TTI)</h4>
      <p>
        The point at which the user is ready to interact with the UI. This metric
        helps with how much time the user will have to wait before experiencing the UI
        without a lag.
      </p>
      <p class="no-bottom-margin">
        Developers often optimize for fast render times, sometimes at the expense of
        TTI. This might lead to one of two following things –
      </p>
      <ul class="no-bottom-margin">
        <li>user will be annoyed that the page is slow to respond</li>
        <li>the user assumes the page is broken and will likely leave</li>
      </ul>
      <p>
        To provide a good user experience, sites should strive to have a Time to
        Interactive of less than 5 seconds when tested on
        <strong>average mobile hardware</strong>.
      </p>
      <h5>How to improve TTI?</h5>
      <ul>
        <li>Remove unused scripts</li>
        <li>Clean and compress the Javascript and CSS Files</li>
        <li>Implement the Code Splitting for Javascript Assets</li>
      </ul>
      <h4>Total Blocking Time (TBT)</h4>
      <p>
        Measures the time for which the website is non-interactive, which is the time
        between the First Contentful Paint (FCP) and the Time To Interactive (TTI).
      </p>
      <p>
        To provide a good user experience, sites should strive to have a Total
        Blocking Time of less than <strong>200-300 milliseconds</strong> when tested
        on <strong>average mobile hardware</strong>.
      </p>
      <p>
        Total Blocking Time (TBT) is also related to the Time to Interactive (TTI). If
        the main thread of the browser doesn’t encounter a long task for 5 seconds,
        Time to Interactive happens. Time to Interactive is a necessary metric for
        understanding when the web page is “fully” and “continuously” interactive.
      </p>
      <p>Let’s examine the example below, to understand this situation, better.</p>
      <p class="code">
        If there are only five long tasks that take 51 MS for the browser’s main
        thread that spread out to 12 seconds during the loading of the web page, it
        means that our TTI will happen in the 17th second of the loading. Without the
        Total Blocking Time, we couldn’t understand when and in which proportion the
        browser lets the user interact with the web page. In this example, the Total
        Blocking Time is only 3 MS. It means that most of the time, users can interact
        with the web page without notice of a significant delay. To understand and
        measure the User Experience (UX) and Load Responsiveness, Total Blocking Time
        and Time to Interactive should be used together.
      </p>
      <h5>How to improve TBT?</h5>
      <ul>
        <li>Reduce the Request Count of the Third-Party Scripts</li>
        <li>Reduce the Size of the Third-Party Scripts</li>
        <li>Minimize the Browser’s Main Thread Work</li>
        <li>Clean the Unused Javascript and CSS Codes</li>
        <li>Compress the Javascript and CSS Files</li>
        <li>Implement the Code Splitting for Javascript Assets</li>
      </ul>
      <h4>Largest Contentful Paint (LCP)</h4>
      <p>
        Measures the time to render the most significant element visible on the
        viewport.
      </p>
      <p>
        To provide a good user experience, sites should strive to have the Largest
        Contentful Paint of&nbsp;<strong>2.5 seconds</strong> or less. To ensure
        you’re hitting this target for most of your users, a good threshold to measure
        is the&nbsp;<strong>75th percentile</strong> of page loads, segmented across
        mobile and desktop devices.
      </p>
      <h5>What elements are considered in LCP?</h5>
      <ul class="no-bottom-margin">
        <li><code>'&lt;img&gt;'</code> elements</li>
        <li>
          <code>'&lt;image&gt;'</code>&nbsp;elements inside
          an&nbsp;<code>'&lt;svg&gt;'</code>&nbsp;element
        </li>
        <li><code>'&lt;video&gt;'</code>&nbsp;elements (the poster image is used)</li>
        <li>
          An element with a background image loaded via
          the&nbsp;<code>'[url()](https://developer.mozilla.org/docs/Web/CSS/url())'</code>&nbsp;function
          (as opposed to a&nbsp;<a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients"
            target="_blank"
            rel="noopener"
            >CSS gradient</a
          >)
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/Block-level_content"
            target="_blank"
            rel="noopener"
            >Block-level</a
          >&nbsp;elements containing text nodes or other inline-level text elements
          children.
        </li>
        <li>
          Important:- Images that occupy the entire viewport are not considered LCP
          candidates.
        </li>
      </ul>
      <p>
        Additional elements like <code>‘&lt;video&gt;’</code> may be added in the
        future as more research is conducted.
      </p>
      <h5>How is an element’s size determined?</h5>
      <ul>
        <li>
          The size of the element reported is usually the size that is visible to the
          user within the viewport
        </li>
        <li>
          If the element extends outside of the viewport, or if any of the element is
          clipped or has non-visible
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/overflow"
            target="_blank"
            rel="noopener"
            >Overflow</a
          >, those portions do not count toward the element’s size.
        </li>
        <li>
          For image elements that have been resized, the size is either the visible
          size or the intrinsic size, whichever is smaller. For example, images that
          are shrunk down will only report the size they’re displayed at, whereas
          images that are stretched or expanded to a larger size will only report
          their intrinsic sizes.
        </li>
        <li>
          For text elements, only the size of their text nodes is considered (the
          smallest rectangle that encompasses all text nodes).
        </li>
        <li>
          For all elements, any margin, padding, or border applied via CSS is not
          considered.
        </li>
      </ul>
      <h5>How to improve LCP?</h5>
      <p class="no-bottom-margin">
        To start looking for opportunities to optimise LCP, you should look at these
        two places
      </p>
      <ul class="no-bottom-margin">
        <li>The initial HTML document</li>
        <li>The LCP resource (if applicable)</li>
      </ul>
      <p>
        While other requests on the page can affect LCP, these two requests —
        specifically the times when the LCP resource begins and ends—reveal whether or
        not your page is optimized for LCP.
      </p>
      <p>
        To identify the LCP resource, you can use developer tools (such as
        <a
          href="https://developer.chrome.com/docs/devtools/"
          target="_blank"
          rel="noopener"
          >Chrome DevTools </a
        >or WebPageTest) to determine the
        <a
          href="https://web.dev/lcp/#what-elements-are-considered"
          target="_blank"
          rel="noopener"
          >LCP Element</a
        >, and from there you can match the URL (again, if applicable) loaded by the
        element on a
        <a
          href="https://developer.chrome.com/docs/devtools/network/reference/"
          target="_blank"
          rel="noopener"
          >Network Waterfall</a
        >
        of all resources loaded by the page.
      </p>
      <p>
        For a well-optimized page, you want your LCP resource request to start loading
        as early as it can. A good rule of thumb is that your LCP resource should
        start loading at the same time as the first resource loaded by that page.
      </p>
      <p>
        <img
          data-recalc-dims="1"
          decoding="async"
          class=""
          src="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/09/lcp-1.png?w=750&amp;ssl=1"
          alt=""
        />
      </p>
      <p>Some of the examples to improve LCP can be –</p>
      <ul>
        <li>
          If the most significant element is an image, it should ideally be present on
          the initial HTML.
        </li>
        <li>
          If it has a background image, you can prefetch the CSS.
          <pre><code class="language-css" style="font-size: var(--global--font-size-base);">&lt;link **rel="preload" fetchpriority="high"** href="link_to_bg_image"&gt;</code></pre>
        </li>
      </ul>
      <h4>Cumulative Layout Shift (CLS)</h4>
      <p>
        This metric highlights the unexpected layout shifts when using the website.
      </p>
      <p>
        Ever been to a website where you are about to do something suddenly now you
        are lost because the website auto scrolled to a different point on the page?
        Checkout the
        <a
          href="https://storage.googleapis.com/web-dev-assets/layout-instability-api/layout-instability2.webm"
          target="_blank"
          rel="noopener"
          >Cumulative Layout Shift Example Video Here.</a
        >
      </p>
      <p>
        Such unexpected movements of page content are measured with help of Cumulative
        Layout Shift (CLS). But also not all layout shifts are bad, they are bad only
        if the user isn’t expecting it. On the other hand, layout shifts that occur in
        response to user interactions (clicking a link, pressing a button, typing in a
        search box and similar) are generally fine.
      </p>
      <p class="code">
        For example, if a user interaction triggers a network request that may take a
        while to complete, it’s best to create some space right away and show a
        loading indicator to avoid an unpleasant layout shift when the request
        completes. If the user doesn’t realize something is loading, or doesn’t have a
        sense of when the resource will be ready, they may try to click something else
        while waiting—something that could move out from under them.
      </p>
      <p>
        To provide a good user experience, sites should strive to have a CLS score of
        0.1 or less. To ensure you’re hitting this target for most of your users, a
        good threshold to measure is the 75th percentile of page loads, segmented
        across mobile and desktop devices.
      </p>
      <h5>What are the most common causes of poor CLS?</h5>
      <ul>
        <li>Images without dimensions</li>
        <li>Ads, embeds, and iframes without dimensions</li>
        <li>Dynamically injected content</li>
        <li>Web Fonts causing FOIT/FOUT</li>
        <li>Actions waiting for a network response before updating DOM</li>
      </ul>
      <h5>How to improve CLS?</h5>
      <ul>
        <li>
          Always add size attributes to your images and video elements so the browser
          will reserve the place for them before they load.
          <pre class="code">
      &lt;link **rel=“preload” fetchpriority=“high”** href=“link_to_bg_image”&gt;</pre
          >
        </li>
        <li>
          Always add minimum heights to the section that might expand on loading the
          data asynchronously.
        </li>
        <li>Reverse space for the ads, embeds, and iframes.</li>
        <li>Avoid inserting new content above existing content.</li>
        <li>
          Preload fonts for more details read Preload Optional Fonts.
          <pre><code class="language-html">&lt;link **rel="preload"** href="link_to_font"&gt;</code></pre>
        </li>
      </ul>
      <h4>Speed Index</h4>
      <p>
        Speed Index measures how quickly content is visually displayed during page
        load. Lighthouse first captures a video of the page loading in the browser and
        computes the visual progression between frames. Lighthouse then uses the
        <a
          href="https://github.com/paulirish/speedline"
          target="_blank"
          rel="noopener"
          >Speedline Node.js Module</a
        >
        to generate the Speed Index score.
      </p>
      <p>
        Your Speed Index score is a comparison of your page’s speed index and the
        speed indices of real websites, based on
        <a
          href="https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/#metric-scores"
          target="_blank"
          rel="noopener"
          >Data From The HTTP Archive</a
        >.
      </p>
      <h5>How to improve your Speed Index score?</h5>
      <p class="no-bottom-margin">
        While anything you do to improve page load speed will improve your Speed Index
        score, addressing any issues discovered by these Diagnostic audits should have
        a particularly big impact:
      </p>
      <ul>
        <li>
          <a
            href="https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/"
            target="_blank"
            rel="noopener"
            >Minimize Main Thread Work</a
          >
        </li>
        <li>
          <a
            href="https://developer.chrome.com/docs/lighthouse/performance/bootup-time/"
            target="_blank"
            rel="noopener"
            >Reduce JavaScript Execution Time</a
          >
        </li>
        <li>
          <a
            href="https://developer.chrome.com/docs/lighthouse/performance/font-display/"
            target="_blank"
            rel="noopener"
            >Ensure Text Remains Visible During Webfont Load</a
          >
        </li>
      </ul>
      <h4>First Input Delay</h4>
      <p>
        FID measures the time from when a user first interacts with a page to the time
        when the browser is actually able to respond to that interaction.
      </p>
      <p>
        To provide a good user experience, sites should strive to have a First Input
        Delay of 100 milliseconds or less. To ensure you’re hitting this target for
        most of your users, a good threshold to measure is the 75th percentile of page
        loads, segmented across mobile and desktop devices.
      </p>
      <h5>How to measure FID?</h5>
      <p class="no-bottom-margin">
        FID is a metric that requires a real user to interact with your page. You can
        measure FID with the following tools.
      </p>
      <ul>
        <li>Chrome User Experience Report</li>
        <li>PageSpeed Insights</li>
        <li>Search Console (Core Web Vitals Report)</li>
        <li>
          ‘[web-vitals’ JavaScript library](<a
            href="https://github.com/GoogleChrome/web-vitals"
            rel="nofollow"
            >https://github.com/GoogleChrome/web-vitals</a
          >)
        </li>
        <li>
          You can measure FID in javascript by using the snippet below
          <p class="code">
            new PerformanceObserver((entryList) =&gt; {<br />
            for (const entry of entryList.getEntries()) {<br />
            const delay = entry.processingStart – entry.startTime;<br />
            console.log(‘FID candidate:’, delay, entry);<br />
            } }).observe({type: ‘first-input’, buffered: true});
          </p>
        </li>
      </ul>
      <h5>How to improve FID?</h5>
      <ul class="no-bottom-margin">
        <li>Keep requests and transfer sizes minimal</li>
        <li>Reduce third-party code, and JavaScript execution time</li>
      </ul>
      <p>
        The guidance for improving FID is almost the same as that for improving Total
        Blocking Time (TBT).
      </p>
      <h4>First Contentful Paint</h4>
      <p>
        The First Contentful Paint (FCP) metric measures the time from when the page
        starts loading to when any part of the page’s content is rendered on the
        screen. For this metric, “content” refers to text, images (including
        background images), <code>‘&lt;svg&gt;’</code> elements, or non-white
        <code>‘&lt;canvas&gt;’</code> elements.
      </p>
      <p>
        To provide a good user experience, sites should strive to have a First
        Contentful Paint of <strong>1.8 seconds</strong> or less. To ensure you’re
        hitting this target for most of your users, a good threshold to measure is the
        <strong>75th percentile</strong> of page loads, segmented across mobile and
        desktop devices.
      </p>
      <h5>How to improve FCP?</h5>
      <ul>
        <li>Minify CSS</li>
        <li>Remove unused CSS</li>
        <li>Reduce server response times</li>
        <li>Serve static assets with CDNs</li>
      </ul>
      <h3>How to measure these metrics?</h3>
      <p>
        We will be using Lighthouse to measure these metrics. Lighthouse is an
        open-source, automated tool for improving the quality of your web apps
        developed by Google.
      </p>
      <p class="no-bottom-margin">You can use lighthouse in the following ways:</p>
      <ol>
        <li>
          You can calculate most of these metrics easily with the Lighthouse
          extension.
        </li>
        <li>Or you can set up a CI process on Github</li>
      </ol>
      <p class="no-bottom-margin">Lighthouse Extension</p>
      <ol>
        <li>
          Go and download
          <a
            href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en"
            target="_blank"
            rel="noopener"
            >Lighthouse Extension</a
          >
        </li>
        <li>Open Lighthouse and click on generate a report</li>
      </ol>
      <p>
        <img
          data-recalc-dims="1"
          decoding="async"
          class=""
          src="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/09/lighthouse.png?w=750&amp;ssl=1"
          alt=""
        />
      </p>
      <ol start="3">
        <li>A report will be generated with most of the metrics mentioned above</li>
      </ol>
      <p>
        <img
          data-recalc-dims="1"
          decoding="async"
          class=""
          src="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/09/report.png?w=750&amp;ssl=1"
          alt=""
        />
      </p>
      <p class="no-bottom-margin">Lighthouse CI process on Github</p>
      <ol>
        <li>
          In the root of your repository, create a directory named
          <code>‘.github/workflows’</code>
        </li>
        <li>
          In <code>‘.github/workflows’</code> create a file named
          <code>‘lighthouse-ci.yaml’</code>. This file will hold the configuration for
          a new workflow.
        </li>
        <li>
          Add the following text to <code>‘lighthouse-ci.yaml</code>’
          <p class="code">
            <code class="language-yaml"
              >name: Build project and run Lighthouse CI<br />
              on: [push]<br />
              jobs:<br />
              lhci:<br />
              name: Lighthouse CI<br />
              runs-on: ubuntu-latest<br />
              steps:<br />
              - uses: actions/checkout@v1<br />
              - name: Use Node.js 10.x<br />
              uses: actions/setup-node@v1<br />
              with:<br />
              node-version: 10.x<br />
              - name: npm install<br />
              run: |<br />
              npm install<br />
              - name: run Lighthouse CI<br />
              run: |<br />
              npm install -g @lhci/cli@0.3.x<br />
              lhci autorun --upload.target=temporary-public-storage || echo "LHCI
              failed!"<br />
            </code>
          </p>
          <p class="no-bottom-margin">
            This configuration sets up a workflow consisting of a single job that will
            run whenever new code is pushed to the repository. This job has four
            steps:
          </p>
          <ul>
            <li>Check out the repository that Lighthouse CI will be run against</li>
            <li>Install and configure Node</li>
            <li>Install required npm packages</li>
            <li>
              Run Lighthouse CI and upload the results to temporary public storage.
            </li>
            <li style="list-style-type: none"></li>
          </ul>
        </li>
        <li>
          Commit these changes and push them to GitHub. If you’ve correctly followed
          the steps above, pushing code to GitHub will trigger running the workflow
          you just added.
        </li>
        <li>
          To confirm that Lighthouse CI has triggered and to view the report it
          generated, go to the&nbsp; <strong>Actions</strong>&nbsp;tab of your
          project. You should see the&nbsp;<strong
            >Build project and Run Lighthouse CI</strong
          >&nbsp;workflow listed under your most recent commit
        </li>
      </ol>
      <p>
        <img
          data-recalc-dims="1"
          decoding="async"
          class=""
          src="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/09/workflow.png?w=750&amp;ssl=1"
          alt=""
        />
      </p>
      <h3>Throttling Performance</h3>
      <p>
        Not everyone in the world might have shiny M1 MacBooks like you. They do not
        represent average user performance for your app. Make sure you test your
        application across the most common devices.
      </p>
      <p>
        Gather data about the most used devices for your application, and test your
        application on them using something like
        <a href="https://www.browserstack.com/" target="_blank" rel="noopener"
          >Browserstack</a
        >. Or at the very least, do a set of performance tests while throttling CPU
        and network performance from dev-tools.
      </p>
      <h3>Optimizing Performance</h3>
      <p>
        Let’s talk about actually optimising performance, principles you can keep in
        your mind for performance issues, and building lightning-fast applications.
      </p>
      <h4>Optimizing assets</h4>
      <ul>
        <li>
          Trying to use responsive images, I see many people forget to optimize images
          for mobile. You do not need that crispy 8K on a mobile device. Always swap
          to a lower resolution for mobile. Want to learn more read
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"
            target="_blank"
            rel="noopener"
            >responsive images</a
          >&nbsp;on MDN web docs.
        </li>
        <li>
          Use WebP / AVIF formats for your assets. Webp format helps reduce payloads,
          and AVIF outperforms JPEG in a very significant way. One of the best guides
          for optimizing images on the internet might be&nbsp;<!-- --><a
            href="https://www.industrialempathy.com/posts/image-optimizations/"
            target="_blank"
            rel="noopener"
            >Maximally optimizing image loading for the web</a
          >
        </li>
        <li>
          Optimize your JPEG/PNG/SVGs. Use
          <a href="https://tinypng.com/" target="_blank" rel="noopener">tinypng</a
          >&nbsp;for WebP, JPEG, or PNGs and
          <a
            href="https://jakearchibald.github.io/svgomg/"
            target="_blank"
            rel="noopener"
            >SVGOMG</a
          >&nbsp;for SVGs.
        </li>
        <li>
          Replace Gifs with looping HTML video or WebP. Gifs can sometimes impact your
          performance, if you can use them as fallbacks only
          <pre><code class="language-jsx">&lt;!-- By Houssein Djirdeh. https://web.dev/replace-gifs-with-videos/ --&gt;
      &lt;!-- A common scenartio: MP4 with a WEBM fallback. --&gt;
      &lt;video autoplay loop muted playsinline&gt;
      &lt;source src="my-animation.webm" type="video/webm"&gt;
      &lt;source src="my-animation.mp4" type="video/mp4"&gt;
      &lt;/video&gt;
      </code></pre>
        </li>
      </ul>
      <h3>Code Splitting</h3>
      <ul>
        <li>
          <h4>Using Dynamic Imports</h4>
          <p>
            Code Splitting is perhaps one of the important optimization parts. The
            best way to introduce code-splitting into your app is through the
            dynamic&nbsp;<code>'import()'</code>&nbsp;syntax.
          </p>
          <p class="no-bottom-margin">Before</p>
          <pre><code class="language-jsx">import { add } from './math';

      console.log(add(16, 26));
      </code></pre>
          <p class="no-bottom-margin">After</p>
          <pre><code class="language-jsx">import("./math").then(math =&gt; {
      console.log(math.add(16, 26));
      });
      </code></pre>
          <p>
            When Webpack comes across this syntax, it automatically starts
            code-splitting your app. If you’re using Create React App/Next App.
          </p>
        </li>
        <li>
          <h4>Using <code>'React.lazy'</code></h4>
          <p>
            The&nbsp;<code>'React.lazy'</code> function will help you lazy load
            components using a dynamic import
          </p>
          <pre><code class="language-jsx">import OtherComponent from './OtherComponent';
      </code></pre>
          <p class="no-bottom-margin">After</p>
          <pre><code class="language-jsx">const OtherComponent = React.lazy(() =&gt; import('./OtherComponent'));
      </code></pre>
          <p>
            The lazy component should then be rendered inside
            a&nbsp;<code>'Suspense'</code>&nbsp;component, which allows us to show
            some fallback content (such as a loading indicator) while we’re waiting
            for the lazy component to load.
          </p>
          <pre><code class="language-jsx">import React, { Suspense } from 'react';

      const OtherComponent = React.lazy(() =&gt; import('./OtherComponent'));

      const Component = () =&gt; {
      return (
      &lt;div&gt;
      &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;OtherComponent /&gt;
      &lt;/Suspense&gt;
      &lt;/div&gt;
      );
      }
      </code></pre>
          <p>
            The&nbsp;<code>'fallback'</code>&nbsp;prop accepts any React elements that
            you want to render while waiting for the component to load. You can place
            the&nbsp;<code>'Suspense'</code>&nbsp;component anywhere above the lazy
            component. You can even wrap multiple lazy components with a
            single&nbsp;<code>'Suspense'</code>&nbsp;component.
          </p>
        </li>
        <li>
          <h4>Loading separate CSS, and JS files in bundles</h4>
          <p>
            How you choose to bundle your applications also plays an important role in
            the performance and bundle size. I always suggest keeping JS and CSS as
            different files in your build.
          </p>
        </li>
        <li>
          <h4>Purging CSS</h4>
          <p>
            Remove all unused CSS. There are tools out there for doing so
            <a href="https://purgecss.com/" target="_blank" rel="noopener"
              >PurgeCSS</a
            >
            and if you are using PostCSS already
            <a href="https://cssnano.co/" target="_blank" rel="noopener">CSSNano</a>
          </p>
        </li>
      </ul>
      <h3>Memorization</h3>
      <ul>
        <li>
          <p class="no-bottom-margin">
            React.Memo <code>'React.memo'</code>&nbsp;is a&nbsp;<a
              href="https://reactjs.org/docs/higher-order-components.html"
              target="_blank"
              rel="noopener"
              >Higher Order Component</a
            >.<br />
            If your component renders the same result given the same props, you can
            wrap it in a call to&nbsp;<code>'React.memo'</code>&nbsp;for a performance
            boost in some cases by memoizing the result. This means that React will
            skip rendering the component, and reuse the last rendered result.
          </p>
          <pre><code class="language-jsx">const MyComponent = React.memo(function MyComponent(props) {
      /* render using props */
      });
      </code></pre>
          <p class="no-bottom-margin">
            <code>'React.memo'</code>&nbsp;only checks for prop changes. If your
            function component wrapped in&nbsp;<code>'React.memo'</code>&nbsp;has
            a&nbsp;<code>'[useState](https://reactjs.org/docs/hooks-state.html)'</code>,&nbsp;<code>'[useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)'</code>&nbsp;or&nbsp;<code>'[useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)'</code>&nbsp;Hook
            in its implementation, it will still rerender when state or context
            change.
          </p>
        </li>
        <li>
          <p class="no-bottom-margin">
            useMemo hook.<br />
            The&nbsp;<code>'[useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)'</code>&nbsp;Hook
            lets you cache calculations between multiple renders by “remembering” the
            previous computation. This helps you avoid re-calculating expensive
            computations.
          </p>
          <pre><code class="language-jsx">const memoizedValue = useMemo(() =&gt; computeExpensiveValue(a, b), [a, b]);
      </code></pre>
        </li>
      </ul>
      <h3>Pagination</h3>
      <p>
        Make sure to implement pagination on the Backend when returning a list of
        data. Sending loads of data in the response might cause performance issues.
      </p>
      <h3>Debounce</h3>
      <p>
        Debouncing is a strategy that lets us improve performance by waiting until a
        certain amount of time has passed before triggering an event. When the
        user&nbsp;stops&nbsp;triggering the event, our code will run.
      </p>
      <p>
        In some cases, this isn’t necessary. But, if any network requests are
        involved, or if the DOM changes (eg. re-rendering a component), this technique
        can drastically improve the smoothness and performance.
      </p>
      <p>
        I usually prefer to use debounce provided by
        <!-- --><a href="https://lodash.com/" target="_blank" rel="noopener"
          >loadash</a
        >
        but if you want to implement your own debounce function here is a snippet.
      </p>
      <pre><code class="language-jsx">const debounce = (callback, wait) =&gt; {
      let timeoutId = null;
      return (...args) =&gt; {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() =&gt; {
      callback.apply(null, args);
      }, wait);
      };
      }
      </code></pre>
      <p>&nbsp;</p>
      <h3>Conclusion</h3>
      <p>
        That covers most things you could start monitoring to never lead to
        performance issues. I hope you learned a thing or two reading this. Thank you
        for making it this far. If you have any questions or want to connect with us,
        head over to our
        <a
          href="https://in.linkedin.com/company/procedurehq/"
          target="_blank"
          rel="noopener"
          >LinkedIn</a
        >.
      </p>
      <h6>Share</h6>
      <ul class="case--socials">
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://procedure.tech/frontend-performance-testing-best-practices/&amp;title=Frontend Performance Testing: Best Practices"
            ><img
              src="https://procedure.tech/wp-content/themes/proceduretech/img/icons/linkedin.svg"
              alt="linkedin"
          /></a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://twitter.com/intent/tweet?text=Frontend Performance Testing: Best Practices&amp;url=https://procedure.tech/frontend-performance-testing-best-practices/&amp;via=wpvkp"
            ><img
              src="https://procedure.tech/wp-content/themes/proceduretech/img/icons/twitter.svg"
              alt="twitter"
          /></a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https://procedure.tech/frontend-performance-testing-best-practices/"
            ><img
              src="https://procedure.tech/wp-content/themes/proceduretech/img/icons/fb.svg"
              alt="facebook"
          /></a>
        </li>
      </ul>
    `,
  },
  "why-robot-framework": {
    heroSection: {
      heading: "Why Robot Framework",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2022/05/blog3-banner.webp",
        mobile:
          "https://procedure.tech/wp-content/uploads/2022/05/mob-blog3-banner.webp",
      },
      date: "May 26, 2022",
      name: "Rucheta Gogte",
    },
    subHeadings: [
      "If you are trying to identify what are the best automation frameworks out there, we recommend you get to know the Robot framework once.",
      "This blog will cover the features of the Robot framework, its features, and how it can be useful for your project.",
    ],
    latestPosts: [
      {
        date: "November 30, 2022",
        name: "Rizwan Memon",
        imgSrc:
          "https://i0.wp.com/procedure.tech/wp-content/uploads/2022/05/resources-blog3.webp?fit=800%2C800&ssl=1",
        title: "Frontend Performance Testing: Best Practices",
        description:
          "You have been working hard to deliver all the features on the project, and suddenly…",
        link: "/frontend-performance-testing-best-practices/",
        imgClassName: "rounded-r-none rounded-bl-full rounded-br-full",
      },
      {
        date: "January 3, 2022",
        name: "Sreeraj Rajan",
        imgSrc:
          "https://i0.wp.com/procedure.tech/wp-content/uploads/2022/01/resources-blog4.webp?fit=800%2C800&ssl=1",
        title: "Reducing our Deployment times by 87%",
        description:
          "You can streamline your deployment process, decreasing deploy times significantly and enabling faster rollbacks with…",
        link: "/reducing-our-deployment-times-by-87/",
        imgClassName: "rounded-r-none rounded-tr-full rounded-tl-full",
      },
      {
        date: "June 10, 2021",
        name: "Sreeraj Rajan",
        imgSrc:
          "https://i0.wp.com/procedure.tech/wp-content/uploads/2021/06/resources-blog2.webp?fit=800%2C800&ssl=1",
        title: "Connecting Django to RDS via pgbouncer using IAM auth",
        description:
          "To connect Django to RDS via using IAM, you'll need an OIDC provider and a…",
        link: "/connecting-django-to-rds-via-pgbouncer-using-iam-auth/",
        imgClassName: "rounded-r-none rounded-bl-full rounded-tl-full",
      },
    ],
    tags: [
      {
        name: "Tech",
        link: "/tag/tech/",
        id: "tech",
      },
      {
        name: "Developer",
        link: "/tag/developer/",
        id: "developer",
      },
      {
        name: "IT",
        link: "/tag/it/",
        id: "it",
      },
      {
        name: "Robot",
        link: "/tag/robot/",
        id: "robot",
      },
      {
        name: "Framework",
        link: "/tag/framework/",
        id: "framework",
      },
      {
        name: "Automation",
        link: "/tag/automation/",
        id: "automation",
      },
    ],
    author: {
      imgSrc: "https://procedure.tech/wp-content/uploads/2022/05/rucheta.jpg",
      name: "Rucheta Gogte",
      teamName: "Tech@Procedure",
    },
    content: `
      <h3>Introduction</h3>
      <p>
        Before getting into what the Robot framework can offer you, let us understand
        what is Robot Framework and how it is structured.
      </p>
      <p>
        Robot Framework is a generic test automation framework for acceptance testing
        and acceptance test-driven development (ATDD). Test libraries implemented
        either with Python or Java can extend their testing capabilities. Robot
        Framework is a generic, application, and technology-independent framework. It
        has a highly modular architecture illustrated in the diagram below:
      </p>
      <p>
        <img
          data-recalc-dims="1"
          height="472"
          width="750"
          decoding="async"
          src="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/09/Image-40.jpg?resize=750%2C472&amp;ssl=1"
          alt=""
          class=""
        />
      </p>
      <p>
        The test data is in a simple, easy-to-edit tabular format. When Robot
        Framework is started, it processes the data, executes test cases, and
        generates logs and reports. The core framework does not know anything about
        the target under test, and libraries handle the interaction with it. Libraries
        can use application interfaces directly or lower-level test tools as drivers.
      </p>
      <h3>What Robot Framework can offer you</h3>
      <p>
        Robot Framework provides a simple library API for creating customized test
        libraries that can be implemented natively with either Python or Java. It is
        platform and application-independent.
      </p>
      <p>
        Each framework has the core features that make it stand apart from other
        frameworks. In this section, we will cover the features of the Robot
        Framework. Reading through this, you will be halfway done in the journey of
        deciding if the Robot framework can be the best suitable framework for your
        project.
      </p>
      <p>
        You can write your test cases in the Given-When-Then style. Isn’t it awesome!
        When we use given when then, it ignores these words and considers the rest of
        the string as a keyword.
      </p>
      <p>
        For example, the Given login page is open in the below example can be
        implemented as a user keyword either with or without the word Given. Ignoring
        prefixes also allows using the same keyword with different prefixes. For
        example, ”Welcome page should be open” could also be used as ”And the welcome
        page should be open”
      </p>
      <p>
        <img
          data-recalc-dims="1"
          decoding="async"
          src="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/09/Image-41.jpg?w=750&amp;ssl=1"
          alt=""
          class=""
        />
      </p>
      <p>
        It provides tagging to categorize and select test cases to be executed. Also,
        it provides test-case and test-suite-level setup and teardown.
      </p>
      <p>
        Robot Framework utilizes the keyword-driven testing approach. The
        keyword-driven testing (KDT) approach uses keywords (action words) to
        determine the functionality under test. These action words simulate real user
        actions on the tested application. It enables easy-to-use tabular syntax for
        uniformly creating test cases. This approach is often referred to as
        table-driven testing or action word-based testing.
      </p>
      <p>
        <img
          data-recalc-dims="1"
          decoding="async"
          src="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/09/Image-42.jpg?w=750&amp;ssl=1"
          alt=""
          class=""
        />
      </p>
      <p>
        Robot Framework has a standard library that provides a set of generic keywords
        that are often needed. This library is called BuiltIn. It is imported
        automatically and thus always available. It becomes easy for a non-technical
        person to start using these keywords without writing any code. Users can
        define their keywords and write specific code for them. Users can create new
        higher-level keywords(user-defined) from existing ones(built-in) using the
        same syntax that is used for creating test cases.
      </p>
      <p>
        <img
          data-recalc-dims="1"
          decoding="async"
          src="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/09/Image-43.jpg?w=750&amp;ssl=1"
          alt=""
          class=""
        />
      </p>
      <p>
        Robot gives you separately developed external libraries that can be installed
        based on your needs. It has libraries for Web, Windows, and Mobile (iOS and
        android) based applications. Some of the most popular libraries are
        SeleniumLibrary, HTTP RequestsLibrary (Python), and AppiumLibrary. Apart from
        existing libraries, you can also create and import your own libraries.
      </p>
      <p>
        <img
          data-recalc-dims="1"
          decoding="async"
          src="https://i0.wp.com/procedure.tech/wp-content/uploads/2023/09/Image-44.jpg?w=750&amp;ssl=1"
          alt=""
          class=""
        />
      </p>
      <p>
        It is easy to execute test cases in parallel. Robot supports a variety of
        tools. One of them being Pabot. Pabot is a parallel executor for Robot
        Framework tests and tasks. Pabot helps you to split one execution into
        multiple and save the execution time. It provides easy-to-read result reports
        and logs in HTML format.
      </p>
      <h3>Comparing Robot Framework</h3>
      <p>
        Now you will say, “Okay, I understood how the Robot framework works, but how
        is it different compared to some common frameworks out there”. I can not cover
        each framework though I have comparisons with a few of them.
      </p>
      <p>
        <strong>Selenium vs Robot framework –</strong> I would say these are two
        different things. The Robot framework is a test framework that makes use of
        test libraries (standard &amp; external) to execute tests, whereas Selenium is
        only a WebDriver/library that requires the support of test automation runners
        to perform test execution.
      </p>
      <p>
        <strong> Cucumber vs BDD vs Robot framework –</strong> The cucumber is a tool
        that supports Behavior-Driven Development (BDD). BDD is a software development
        process that aims to enhance software quality and reduce maintenance costs. On
        the other hand, Robot Framework is detailed as “A test automation framework
        for acceptance testing and ATDD”.
      </p>
      <h3>Summary</h3>
      <p>
        With just the Robot framework, you can test the application of any platform by
        using libraries that the Robot framework supports, or you can create your own.
        From beginner to expert, anyone can use the Robot framework easily.
      </p>
      <p>Thank you for reading!</p>
      <h6>Share</h6>
      <ul class="case--socials">
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://procedure.tech/why-robot-framework/&amp;title=Why Robot Framework"
            ><img
              src="https://procedure.tech/wp-content/themes/proceduretech/img/icons/linkedin.svg"
              alt="linkedin"
          /></a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://twitter.com/intent/tweet?text=Why Robot Framework&amp;url=https://procedure.tech/why-robot-framework/&amp;via=wpvkp"
            ><img
              src="https://procedure.tech/wp-content/themes/proceduretech/img/icons/twitter.svg"
              alt="twitter"
          /></a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https://procedure.tech/why-robot-framework/"
            ><img
              src="https://procedure.tech/wp-content/themes/proceduretech/img/icons/fb.svg"
              alt="facebook"
          /></a>
        </li>
      </ul>
    `,
  },
  "reducing-our-deployment-times-by-87": {
    heroSection: {
      heading: "Reducing our Deployment times by 87%",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2022/01/blog4-banner.webp",
        mobile:
          "https://procedure.tech/wp-content/uploads/2022/01/mob-blog4-banner.webp",
      },
      date: "January 3, 2022",
      name: "Sreeraj Rajan",
    },
    subHeadings: [
      "You can streamline your deployment process, decreasing deploy times significantly and enabling faster rollbacks with confidence.",
      "In this blog you will learn how to optimize your coding process for EMR systems in the healthcare industry by using Kubernetes, cutting out time-consuming steps like building and uploading Docker images.",
    ],
    latestPosts: [
      {
        date: "November 30, 2022",
        name: "Rizwan Memon",
        imgSrc:
          "https://i0.wp.com/procedure.tech/wp-content/uploads/2022/05/resources-blog3.webp?fit=800%2C800&ssl=1",
        title: "Frontend Performance Testing: Best Practices",
        description:
          "You have been working hard to deliver all the features on the project, and suddenly…",
        link: "/frontend-performance-testing-best-practices/",
        imgClassName: "rounded-r-none rounded-bl-full rounded-br-full",
      },
      {
        date: "May 26, 2022",
        name: "Rucheta Gogte",
        imgSrc:
          "https://i0.wp.com/procedure.tech/wp-content/uploads/2022/05/resources-blog3.webp?fit=800%2C800&ssl=1",
        title: "Why Robot Framework",
        description:
          "If you are trying to identify what are the best automation frameworks out there, we…",
        link: "/why-robot-framework/",
        imgClassName: "rounded-r-none rounded-bl-full rounded-br-full",
      },
      {
        date: "June 10, 2021",
        name: "Sreeraj Rajan",
        imgSrc:
          "https://i0.wp.com/procedure.tech/wp-content/uploads/2021/06/resources-blog2.webp?fit=800%2C800&ssl=1",
        title: "Connecting Django to RDS via pgbouncer using IAM auth",
        description:
          "To connect Django to RDS via using IAM, you'll need an OIDC provider and a…",
        link: "/connecting-django-to-rds-via-pgbouncer-using-iam-auth/",
        imgClassName: "rounded-r-none rounded-bl-full rounded-tl-full",
      },
    ],
    tags: [
      {
        name: "Devops",
        link: "/tag/devops/",
        id: "devops",
      },
      {
        name: "Django",
        link: "/tag/django/",
        id: "django",
      },
      {
        name: "K8S",
        link: "/tag/k8s/",
        id: "k8s",
      },
      {
        name: "Kubernetes",
        link: "/tag/kubernetes/",
        id: "kubernetes",
      },
      {
        name: "AWS",
        link: "/tag/aws/",
        id: "aws",
      },
    ],
    author: {
      imgSrc: "https://procedure.tech/wp-content/uploads/2021/06/sreeraj.jpg",
      name: "Sreeraj Rajan",
      teamName: "Tech@Procedure",
    },
    content: `
      <p class="no-bottom-margin">
        We run a healthcare EMR application on k8s. We used to auto-deploy to prod/uat
        whenever a new commit was merged to the main/uat branch via Github Actions.
        Our deployment script had the following the set of actions:
      </p>
      <ol class="no-bottom-margin">
        <li>Build and tag the docker image.</li>
        <li>Upload the image to ECR.</li>
        <li>Update the k8s deployments with the new image.</li>
      </ol>
      <p>
        Of the above steps, 1 &amp; 2 took almost 6-7 minutes to finish. On every
        trigger, all requirements and dependencies were compiled/installed.
      </p>
      <pre><code>
      .... 
      RUN apt-get install -y pgbouncer \ 
      &amp;&amp; pip install awscli 
      ... 
      COPY ./requirements /requirements 
      ... 
      RUN pip install —no-cache-dir -r /requirements/uat.txt \
      &amp;&amp; rm -rf /requirements 
      ...
      </code></pre>
      <p>
        &nbsp;<br />
        <img
          data-recalc-dims="1"
          decoding="async"
          src="https://i0.wp.com/procedure.tech/wp-content/uploads/2022/01/uat-deployment-image-1.png?w=750&amp;ssl=1"
          alt=""
          class=""
        />
      </p>
      <p>
        We decided to add a base dockerfile that’d be built only when the requirements
        changed/modified. The actual docker image that’d be used to deploy would refer
        to the base dockerfile and only contains steps to copy application code and
        other time-irrelevant steps.
      </p>
      <p>
        We needed to figure out a way to detect if the requirements/dependencies
        changed, which would trigger the base image build.
      </p>
      <p>
        We added
        <a
          href="https://github.com/marketplace/actions/stateful-action"
          target="_blank"
          rel="noopener"
          >jorgebg/stateful-action@v0.1</a
        >
        to our deploy script. This allows us to set state between github actions. Any
        state modification is written to the state branch by default.
      </p>
      <pre>    <code>
      name: UAT deployment 

      on: 
      push: 
      branches: 
      - uat 

      jobs: 
      deploy: 
      runs-on: ubuntu-latest 
      steps: 
      - uses: actions/checkout@v2 
      - uses: jorgebg/stateful-action@v0.1 
      - name: Check and build base docker image 
      run: |
      echo “get existing hash”
      FILE=.state/requirements-hash.txt

      if [ -f “$FILE” ]; then 
      echo “$FILE exists.”; 
      read -r existing_hash&lt;$FILE;
      echo “Existing hash $existing_hash”;
      new_base_hash=($(md5sum requirements/base.txt))
      new_production_hash=($(md5sum requirements/production.txt))
      echo “$new_base_hash$new_production_hash” &gt; “$FILE”
      read -r new_hash&lt;$FILE;

      echo “Current hash $new_hash”;

      if [ “$new_hash” != “$existing_hash” ]; then
        echo “Hash does not match, rebuilding docker image”
        bash ./deploy_scripts/base.sh -I …
      else 
        echo “Hash matches no rebuilding required”
      fi 
      else 
      echo “File does not exist in state”
      new_base_hash=($(md5sum requirements/base.txt))
      new_production_hash=($(md5sum requirements/production.txt))
      echo “$new_base_hash$new_production_hash” &gt; “$FILE”
      bash ./deploy_scripts/base.sh -I …
      fi
      </code>
      </pre>
      <p>
        On every trigger, we compared the hash of the requirements file with the hash
        stored in the state, and triggered a build of the base docker image if there
        was a mismatch. The new hash value is written to the state once the build
        finishes.
      </p>
      <p>
        We reduced our deploy times from 6-7 minutes to less than a minute. This
        allows us to be more confident while pushing to production since we know
        rolling back/releasing a hotfix would take less than a minute.
      </p>
      <p>
        <img
          data-recalc-dims="1"
          decoding="async"
          src="https://i0.wp.com/procedure.tech/wp-content/uploads/2022/01/uat-deployment-image-2.png?w=750&amp;ssl=1"
          alt=""
          class=""
        />
      </p>
      <p>
        Since, we do not add/modify dependencies to our django application frequently,
        it made sense to have a base docker image with all the dependencies already
        installed and use it as a base to the actual application docker image.
      </p>
      <p>
        We reduced our deploy times from 6-7 minutes to less than a minute. This
        allows us to be more confident while pushing to production since we know
        rolling back/releasing a hotfix would take less than a minute.
      </p>
      <h6>Share</h6>
      <ul class="case--socials">
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://procedure.tech/reducing-our-deployment-times-by-87/&amp;title=Reducing our Deployment times by 87%"
            ><img
              src="https://procedure.tech/wp-content/themes/proceduretech/img/icons/linkedin.svg"
              alt="linkedin"
          /></a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://twitter.com/intent/tweet?text=Reducing our Deployment times by 87%&amp;url=https://procedure.tech/reducing-our-deployment-times-by-87/&amp;via=wpvkp"
            ><img
              src="https://procedure.tech/wp-content/themes/proceduretech/img/icons/twitter.svg"
              alt="twitter"
          /></a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https://procedure.tech/reducing-our-deployment-times-by-87/"
            ><img
              src="https://procedure.tech/wp-content/themes/proceduretech/img/icons/fb.svg"
              alt="facebook"
          /></a>
        </li>
      </ul>
    `,
  },
  "connecting-django-to-rds-via-pgbouncer-using-iam-auth": {
    heroSection: {
      heading: "Connecting Django to RDS via pgbouncer using IAM auth",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2021/06/blog2-banner.webp",
        mobile:
          "https://procedure.tech/wp-content/uploads/2021/06/mob-blog2-banner.webp",
      },
      date: "June 10, 2021",
      name: "Sreeraj Rajan",
    },
    subHeadings: [
      "To connect Django to RDS via using IAM, you’ll need an OIDC provider and a script that uses the provider to create an IAM role.",
      "In this blog post, we walk through how to use pgbouncer and Django’s connection pooling features with RDS.",
    ],
    latestPosts: [
      {
        date: "November 30, 2022",
        name: "Rizwan Memon",
        imgSrc:
          "https://i0.wp.com/procedure.tech/wp-content/uploads/2022/05/resources-blog3.webp?fit=800%2C800&ssl=1",
        title: "Frontend Performance Testing: Best Practices",
        description:
          "You have been working hard to deliver all the features on the project, and suddenly…",
        link: "/frontend-performance-testing-best-practices/",
        imgClassName: "rounded-r-none rounded-bl-full rounded-br-full",
      },
      {
        date: "May 26, 2022",
        name: "Rucheta Gogte",
        imgSrc:
          "https://i0.wp.com/procedure.tech/wp-content/uploads/2022/05/resources-blog3.webp?fit=800%2C800&ssl=1",
        title: "Why Robot Framework",
        description:
          "If you are trying to identify what are the best automation frameworks out there, we…",
        link: "/why-robot-framework/",
        imgClassName: "rounded-r-none rounded-bl-full rounded-br-full",
      },
      {
        date: "January 3, 2022",
        name: "Sreeraj Rajan",
        imgSrc:
          "https://i0.wp.com/procedure.tech/wp-content/uploads/2022/01/resources-blog4.webp?fit=800%2C800&ssl=1",
        title: "Reducing our Deployment times by 87%",
        description:
          "You can streamline your deployment process, decreasing deploy times significantly and enabling faster rollbacks with…",
        link: "/reducing-our-deployment-times-by-87/",
        imgClassName: "rounded-r-none rounded-tr-full rounded-tl-full",
      },
    ],
    tags: [
      {
        id: "tech",
        name: "Tech",
        link: "/tag/tech/",
      },
      {
        id: "devops",
        name: "Devops",
        link: "/tag/devops/",
      },
      {
        name: "Django",
        link: "/tag/django/",
        id: "django",
      },
      {
        name: "Kubernetes",
        link: "/tag/kubernetes/",
        id: "kubernetes",
      },
      {
        name: "AWS",
        link: "/tag/aws/",
        id: "aws",
      },
      {
        name: "Pgbouncer",
        link: "/tag/pgbouncer/",
        id: "pgbouncer",
      },
    ],
    author: {
      imgSrc: "https://procedure.tech/wp-content/uploads/2021/06/sreeraj.jpg",
      name: "Sreeraj Rajan",
      teamName: "Tech@Procedure",
    },
    content: `
      <h3>Setting up the Infra</h3>
      <p>
        We primarily use a django backend with RDS postgres in a kubernetes cluster
        for production environments. We were trying to setup an environment which
        would be HIPAA compliant and secure as well, as well as keep complexity to a
        minimum in the backend layer. We decided to go with IAM authentication to
        connect to RDS for the django application.
      </p>
      <p>
        The tricky part was to figure out how we would add
        <a
          href="https://github.com/pgbouncer/pgbouncer"
          target="_blank"
          rel="noopener"
          >pgbouncer</a
        >
        between RDS and django to manage connection pooling issues.
      </p>
      <p>
        We setup a kubernetes service account and associated an
        <a
          href="https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html"
          target="_blank"
          rel="noopener"
          >IAM role to it that’d help us generate RDS auth tokens</a
        >
        that will allow us to connect to the database.
      </p>
      <p>
        In short, you’d have to create an OIDC provider for your cluster,
        <a
          href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.IAMPolicy.html"
          target="_blank"
          rel="noopener"
          >create an IAM role and attach the relevant policies to that role</a
        >, and associate the role to that service account. If you use other AWS
        services in your backend, you could attach relevant policies for those
        services that’d allow you to access those without adding access keys. If you
        are provisioning infra resources via terraform, you will run into issues.
        <a
          href="https://stackoverflow.com/questions/58507993/eks-iam-roles-for-services-account-not-working"
          target="_blank"
          rel="noopener"
          >The OIDC provider configuration will be missing if you don’t explicitly
          assign it while provisioning through terraform.</a
        >
        It gets automatically generated/assigned if you do it via the AWS console.
      </p>
      <p>
        <a
          href="https://marcincuber.medium.com/amazon-eks-with-oidc-provider-iam-roles-for-kubernetes-services-accounts-59015d15cb0c%E2%80%8B%E2%80%8B"
          target="_blank"
          rel="noopener"
          >A whole guide to do the above is here.</a
        >
      </p>
      <h3>Application Configuration<br /></h3>
      <p>
        We bundle and run pgbouncer in the pod running the django service. You’d need
        a script that will call and generate IAM tokens that’ll connect pgbouncer to
        the RDS instance. &ZeroWidthSpace;Also pgbouncer has a max size of 160 bytes
        for passwords, but the passwords generated by RDS IAM are around 800-900
        bytes.
      </p>
      <p>
        <a
          href="https://github.com/proceduretech/pgbouncer"
          target="_blank"
          rel="noopener"
          >We forked the pgbouncer repo and updated the size of the passwords to 2048
          bytes</a
        >. The forked repo is compiled and installed while building the docker image.
      </p>
      <pre><code>[databases]
      {{PGBOUNCER_NAME}} = host={{POSTGRES_HOST}} port={{POSTGRES_PORT}}
      dbname={{POSTGRES_DB}}

      [pgbouncer]
      pool_mode = transaction
      listen_port = {{PGBOUNCER_PORT}}
      listen_addr = {{PGBOUNCER_HOST}}
      auth_type = trust
      auth_file = users.txt
      pidfile = /var/run/pgbouncer/pgbouncer.pid
      logfile = /var/run/pgbouncer/pgbouncer.log
      max_client_conn = 4000
      default_pool_size = 20
      reserve_pool_size = 5
      server_tls_sslmode = verify-full
      server_tls_ca_file = rds-ca-2019-root.pem
      syslog = 1</code></pre>
      <p class="text-center">pgbouncer.template.ini</p>
      <p>
        Copy <strong>pgbouncer.template.ini, pgbouncer.sh</strong> and
        <strong
          >pgbouncer-update.sh,
          <a
            href="https://s3.amazonaws.com/rds-downloads/rds-ca-2019-root.pem"
            target="_blank"
            rel="noopener"
            >rds-ca-2019-root.pem</a
          ></strong
        >
        to the filesystem of the container. We used two scripts
        <strong>pgbouncer.sh, pgbouncer-update.sh</strong> in the entrypoint, the
        former to set the database credentials when the container starts, while the
        latter is ran every 10 minutes as a cron to update the credentials.
      </p>
      <pre><code>..... 
      COPY ./pgbouncer.template.ini /pgbouncer.template.ini 
      COPY /pgbouncer.template.ini /pgbouncer.ini 
      COPY ./rds-ca-2019-root.pem /rds-ca-2019-root.pem
      COPY ./scripts/pgbouncer.sh /pgbouncer.sh 
      COPY ./scripts/pgbouncer-update.sh /pgbouncer-update.sh 

      RUN sed -I -e 's/\r//' /pgbouncer.sh 
      RUN sed -I -e 's/\r//' /pgbouncer-update.sh 

      RUN chown django /pgbouncer.template.ini 
      RUN chown django /pgbouncer.ini 
      RUN chmod +x /pgbouncer.sh 
      RUN chown django /pgbouncer.sh

      RUN chmod +x /pgbouncer-update.sh 
      .....</code></pre>
      <p class="text-center">Dockerfile</p>
      <pre><code>.... 
      echo “*/10 * * * * bash /pgbouncer-update.sh &gt;&gt; /app/cron.log 2&gt;&amp;1 
      # This extra line makes it a valid cron” &gt; scheduler.txt

      crontab scheduler.txt 
      nohup cron -f &amp; 
      sh /pgbouncer.sh 
      .....</code></pre>
      <p class="text-center">entrypoint</p>
      <pre><code>#!/bin/bash 
      PASSWORD="echo $(aws rds generate-db-auth-token \ 
      --hostname $POSTGRES_HOST \ 
      --port 5432 \ 
      --username $POSTGRES_USER \ 
      --region $DJANGO_AWS_REGION)"

      # pgbouncer.ini 
      sed -e "s/{{POSTGRES_DB}}/"$POSTGRES_DB"/" \ 
      -e "s/{{POSTGRES_USER}}/"$POSTGRES_USER"/" \ 
      -e "s/{{POSTGRES_HOST}}/"$POSTGRES_HOST"/" \ 
      -e "s/{{POSTGRES_PORT}}/"$POSTGRES_PORT"/" \ 
      -e "s/{{PGBOUNCER_NAME}}/"$PGBOUNCER_NAME"/" \ 
      -e "s/{{PGBOUNCER_PORT}}/"$PGBOUNCER_PORT"/" \ 
      -e "s/{{PGBOUNCER_HOST}}/"$PGBOUNCER_HOST"/" \ 
      pgbouncer.template.ini &gt; pgbouncer.ini

      # users.txt 
      sed -e "s|{{POSTGRES_PASSWORD}}|"$(echo $PASSWORD | sed -e 's/\\/\\\\/g; s/\//\\\//g; s/&amp;/\\\&amp;/g')"|" \ 
      -e "s/{{POSTGRES_USER}}/"$POSTGRES_USER"/" \ users.template.txt &gt; users.txt

      #\ run as daemon 
      pgbouncer -d -v pgbouncer.ini -u django</code></pre>
      <p class="text-center">pgbouncer.sh</p>
      <pre><code>#!/bin/bash 
      SHELL=/bin/bash
      PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin 
      PASSWORD="echo $(aws rds generate-db-auth-token —hostname $POSTGRES_HOST —
      port 5432 —username $POSTGRES_USER —region $DJANGO_AWS_REGION)"


      # users.txt 
      sed -e “s|{{POSTGRES_PASSWORD}}|”$(echo $PASSWORD | sed -e 's/\\/\\\\/g; s/
      \//\\\//g; s/&amp;/\\\&amp;/g')”|” \ 
      -e “s/{{POSTGRES_USER}}/“$POSTGRES_USER”/“ \ 
      /app/users.template.txt &gt; /app/users.txt</code></pre>
      <p class="text-center">pgbouncer-update.sh</p>
      <p>The users.template.txt referenced in the above scripts.</p>
      <pre><code>“{{POSTGRES_USER}}” “{{POSTGRES_PASSWORD}}”</code></pre>
      <p class="text-center">users.template.txt</p>
      <p>
        Hope this helps you out. We ran into some issues while trying to setup/run the
        cron job. You may have to grant access/permissions to the cron folders in the
        Dockerfile for the default user of your container.
      </p>
      <p>
        Credit to
        <a href="https://twitter.com/Makarand_Mac" target="_blank" rel="noopener"
          >Makarand</a
        >
        for figuring some of the stuff here.
      </p>
      <h6>Share</h6>
      <ul class="case--socials">
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://procedure.tech/connecting-django-to-rds-via-pgbouncer-using-iam-auth/&amp;title=Connecting Django to RDS via pgbouncer using IAM auth"
            ><img
              src="https://procedure.tech/wp-content/themes/proceduretech/img/icons/linkedin.svg"
              alt="linkedin"
          /></a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://twitter.com/intent/tweet?text=Connecting Django to RDS via pgbouncer using IAM auth&amp;url=https://procedure.tech/connecting-django-to-rds-via-pgbouncer-using-iam-auth/&amp;via=wpvkp"
            ><img
              src="https://procedure.tech/wp-content/themes/proceduretech/img/icons/twitter.svg"
              alt="twitter"
          /></a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.facebook.com/sharer/sharer.php?u=https://procedure.tech/connecting-django-to-rds-via-pgbouncer-using-iam-auth/"
            ><img
              src="https://procedure.tech/wp-content/themes/proceduretech/img/icons/fb.svg"
              alt="facebook"
          /></a>
        </li>
      </ul>
    `,
  },
};

export const caseStudiesData: { [key: string]: CaseStudiesDataType } = {
  "streamlining-crisis-communication-for-enhanced-coordination-effective-response":
    {
      id: "streamlining-crisis-communication-for-enhanced-coordination-effective-response",
      date: "August 24, 2023",
      name: "Critical Communication",
      description:
        "Streamlining Crisis Communication for Enhanced Coordination & Effective Response",
      href: "/case_study/streamlining-crisis-communication-for-enhanced-coordination-effective-response/",
      bgImage:
        "https://procedure.tech/wp-content/uploads/2023/10/home-snooker-plum.webp",
      imgSrc:
        "https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/plum-case-study.webp?fit=700%2C700&ssl=1",
      services: [
        { id: "ux-ui", name: "UI & UX", link: "/tag/ux-ui/" },
        {
          id: "process-consulting",
          name: "Process Consulting",
          link: "/tag/process-consulting/",
        },
        { id: "innovation", name: "Innovation", link: "/tag/innovation/" },
      ],
      heroSection: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/plum-case-study-banner.webp",
        mobile:
          "https://procedure.tech/wp-content/uploads/2023/10/mob-plum-casestudy-detail-banner.webp",
      },
      content: {
        overview: [
          'Need help with complex vendor payments, high transaction volumes, and the limitations of credit card use? Discover how we transformed the FinTech landscape with a groundbreaking platform tailor-made for a prominent FinTech client.',
          'Delve into our innovative use of technology for streamlining bulk payments, swift and reliable delivery, and developing two distinct application versions tailored to unique user requirements.'
        ],
        challenge: [
          'In this dynamic and varied business world, many companies face the intricate task of managing regular vendor payments. Maintaining accurate records, handling numerous transactions, and remembering vendor account details is a considerable challenge.',
          'Additionally, dealing with multiple vendors, necessitates different payment modes, typically recorded in databases or CSV/Excel formats, making the manual management process strenuous and prone to errors.',
          'An innovative and comprehensive solution was needed to address these challenges effectively.'
        ],
        approach: [
          'We embarked on a collaborative journey with our FinTech Client, informed by thorough market research. In-depth discussions helped us understand the broad plan, including envisioned features for future iterations and the characteristics of the typical user persona.',
          'Integrating all these insights into our planning, we came up with the MVP. Our development approach focused on user-centric design, agility, security, and scalability, ensuring a reliable and adaptable FinTech solution.'
        ],
        solution: [
          {
            heading: 'Efficient Batch Payments',
            description: 'Users can initiate multiple transactions simultaneously, saving time and effort.',
            color: 'dot-wine'
          },
          {
            heading: 'Convenient Batch Creation',
            description: 'Catering to businesses of all sizes with manual input or CSV file uploads.',
            color: 'dot-ochre'
          },
          {
            heading: 'Accurate Pre-Payment Review',
            description: 'A dedicated step checks payment details thoroughly before authorization.',
            color: 'dot-iceblue'
          },
          {
            heading: 'Comprehensive Batch Information',
            description: 'Detailed batch insights enhance user awareness.',
            color: 'dot-red'
          },
          {
            heading: 'Simplifying the Payment Process',
            description: 'Users can make a single payment for the entire batch, streamlining operations.',
            color: 'dot-green'
          },
          {
            heading: 'Flexible Beneficiary Code Integration',
            description: 'Payment details can be added using unique beneficiary codes, offering flexibility.',
            color: 'dot-blue'
          },
          {
            heading: 'Dual Entry Modes Providing',
            description: 'user the choice & flexibility to create manual entries or CSV uploads',
            color: 'dot-iceblue'
          },
          {
            heading: 'Credit Card to Bank Payments',
            description: 'Facilitating credit card payments, even for vendors without the required infrastructure, expanding the payment options and optimizing working capital.',
            color: 'dot-red'
          }
        ],
        impactAndResult: [
          'Our solution profoundly impacted the business landscape, reshaping how companies manage vendor payments. By addressing the intricate challenges of bulk payments, we’ve significantly reduced the burden of high transaction volumes, manual errors, and the limitations of credit card usage.',
          'This transformative solution has empowered businesses to streamline operations, enhance financial flexibility, and expand payment options. The platform has set new industry standards, revolutionizing vendor payment management.'
        ]
      },
      socialLinks: [
        {
          href: "https://www.linkedin.com/shareArticle?mini=true&url=https://procedure.tech/case_study/streamlining-crisis-communication-for-enhanced-coordination-effective-response/&title=Streamlining Crisis Communication for Enhanced Coordination & Effective Response",
          src: "https://procedure.tech/wp-content/themes/proceduretech/img/icons/linkedin.svg",
          alt: "LinkedIn",
        },
        {
          href: "https://twitter.com/intent/tweet?text=Streamlining Crisis Communication for Enhanced Coordination & Effective Response&url=https://procedure.tech/case_study/streamlining-crisis-communication-for-enhanced-coordination-effective-response/&via=wpvkp",
          src: "https://procedure.tech/wp-content/themes/proceduretech/img/icons/twitter.svg",
          alt: "Twitter",
        },
        {
          href: "https://www.facebook.com/sharer/sharer.php?u=https://procedure.tech/case_study/streamlining-crisis-communication-for-enhanced-coordination-effective-response/",
          src: "https://procedure.tech/wp-content/themes/proceduretech/img/icons/fb.svg",
          alt: "Facebook",
        },
      ]
    },
  "a-fintech-platform-for-simplifying-bulk-payments-and-reshaping-businesses": {
    id: "a-fintech-platform-for-simplifying-bulk-payments-and-reshaping-businesses",
    date: "August 24, 2023",
    name: "FinTech",
    description:
      "A FinTech Platform for Simplifying Bulk Payments and Reshaping Businesses",
    href: "/case_study/a-fintech-platform-for-simplifying-bulk-payments-and-reshaping-businesses/",
    bgImage:
      "https://procedure.tech/wp-content/uploads/2023/10/home-case-study-espn.webp",
    imgSrc:
      "https://i0.wp.com/procedure.tech/wp-content/uploads/2023/08/espn-case-study.webp?fit=700%2C700&ssl=1",
    services: [
      { id: "ux-ui", name: "UI & UX", link: "/tag/ux-ui/" },
      {
        id: "process-consulting",
        name: "Process Consulting",
        link: "/tag/process-consulting/",
      },
      { id: "innovation", name: "Innovation", link: "/tag/innovation/" },
      { id: "product-engineering", name: "Product Engineering", link: "/tag/product-engineering/" },
      { id: "quality-testing", name: "Quality Testing", link: "/tag/quality-testing/" },
      { id: "performance-governance", name: "Performance Governance", link: "/tag/performance-governance/" },
      { id: "agile", name: "Agile", link: "/tag/agile/" },
    ],
    heroSection: {
      desktop:
        "https://procedure.tech/wp-content/uploads/2023/08/espn-case-study-banner.webp",
      mobile:
        "https://procedure.tech/wp-content/uploads/2023/08/mob-espn-casestudy-detail-banner-1.webp",
    },
    content: {
      overview: ['During chaotic events like neighbourhood fires, efficient team coordination is essential. To address this, Procedure collaborated with a client to create tailored Communication Systems, ensuring a streamlined and impactful response to potential disasters.'],
      challenge: ['When disaster strikes, seconds count. A small outburst can become an inferno, consuming homes and entire towns. Ineffective communication is the catalyst for chaos, a precursor of delayed responses, and a multiplier of destruction. Our challenge was monumental: to simplify communication when every second matters.'],
      approach: [
        "Our client, a leader in mission-critical communication services, entrusted us with designing two essential platforms - a Control Room Web App and a Field Agent Mobile App. The web application's robust tools enable critical incident management—while the mobile app optimizes communication and collaboration for field agents.",
        "Throughout the design process, we fleshed out low-fidelity wireframes to deliver production-ready designs that met client requirements.",
        "We successfully created two software platforms that help control room operators and field agents perform their jobs more efficiently."
      ],
      solution: [
        {
          heading: 'Group and 1:1 Conversations',
          description: 'Facilitates rapid, coordinated responses by empowering users with various communication methods and high-priority SOS alerts',
          color: 'dot-blue'
        },
        {
          heading: 'Diverse Call Types',
          description: 'Optimises the resource allocation and response time by prioritising audio and video calls, thus ensuring prompt attention to the most urgent situations',
          color: 'dot-ochre'
        },
        {
          heading: 'Real-time Location Tracking',
          description: 'Offering real-time location tracking, precise resource allocation, situational awareness, location sharing and patrol path definition',
          color: 'dot-wine'
        },
        {
          heading: 'Ambient Viewing',
          description: 'Enhances decision making and response coordination in mission critical situations by providing real time video feeds from field agents',
          color: 'dot-blue'
        },
      ],
      impactAndResult: ['Through the solutions - the Control Room Web App and the Field Agent Mobile App - we ushered in a significant transformation in crisis management and emergency response. Imagine improved coordination, heightened situational awareness, quicker response times, and effortless information sharing. This isn’t merely a case study; it represents the commitment to resilience in the face of adversity. Delve further into this narrative and explore how we brought order to chaos in collaboration with our client.']
    },
    socialLinks: [
      {
        href: "https://www.linkedin.com/shareArticle?mini=true&url=https://procedure.tech/case_study/a-fintech-platform-for-simplifying-bulk-payments-and-reshaping-businesses/&title=A FinTech Platform for Simplifying Bulk Payments and Reshaping Businesses",
        src: "https://procedure.tech/wp-content/themes/proceduretech/img/icons/linkedin.svg",
        alt: "LinkedIn",
      },
      {
        href: "https://twitter.com/intent/tweet?text=A FinTech Platform for Simplifying Bulk Payments and Reshaping Businesses&url=https://procedure.tech/case_study/a-fintech-platform-for-simplifying-bulk-payments-and-reshaping-businesses/&via=wpvkp",
        src: "https://procedure.tech/wp-content/themes/proceduretech/img/icons/twitter.svg",
        alt: "Twitter",
      },
      {
        href: "https://www.facebook.com/sharer/sharer.php?u=https://procedure.tech/case_study/a-fintech-platform-for-simplifying-bulk-payments-and-reshaping-businesses/",
        src: "https://procedure.tech/wp-content/themes/proceduretech/img/icons/fb.svg",
        alt: "Facebook",
      },
    ]
  },
};
