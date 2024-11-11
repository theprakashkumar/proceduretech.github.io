import PageNavbar from "@/components/PageNavbar";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const dynamicParams = false;
type pagesDataType = {
  heroSection: {
    heading: string;
    description: string;
    images: {
      desktop: string;
      mobile: string;
    };
    color: string;
  };
  pointers: {
    heading: string;
    description: string;
    color: string;
  }[];
  consultSection: {
    heading: string;
    subHeading: string;
    styles: {
      headingColor: string;
      subHeadingColor: string;
      backgroundColor: string;
    };
  };
};

const pagesData: { [key: string]: pagesDataType } = {
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
  'innovation': {
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
  'ux-ui': {
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
  'dx-modernization': {
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
  'process-consulting': {
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
  'agile': {
    heroSection: {
      heading: "Agile",
      description:
        "Procedure puts Agile tools to work in order to drive collaboration, prioritize user experience and optimize results through iterative development.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/agile.jpg",
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
  'app-development': {
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
  'cloud': {
    heroSection: {
      heading: "Cloud",
      description:
        "Our cloud services propel our clients to new heights and revolutionizes their products and offerings. Procedure will take your business to cloud nine, leaving your competition trailing behind.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/cloud.jpg",
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
  'devops': {
    heroSection: {
      heading: "DevOps",
      description:
        "Transcend the limits of traditional software development and embrace a future where agility, scalability, and automation reign supreme. Prepare to boldly go where no business has gone before.",
      images: {
        desktop:
          "https://procedure.tech/wp-content/uploads/2023/08/devops.jpg",
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
  'product-engineering': {
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
  'managed-services': {
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
  'mobile-solutions': {
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
      }
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
  'swat-interventions': {
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
      }
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
  'security': {
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
  'performance-governance': {
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
  'quality-testing': {
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

export async function generateStaticParams() {
  return Object.keys(pagesData).map((pageName) => ({
    slug: pageName,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const pageData = pagesData[slug];

  return (
    <>
      <section className="relative pb-12 mb-28">
        <div className="pro-container">
          <div className="relative">
            <PageNavbar className="static mt-14 lg:w-full">
              <h1 className={twMerge("text-5xl lg:text-6xl xl:text-7xl pt-4 dot dot-brown mb-1.5 tracking-tighter",pageData.heroSection.color)}>
                {pageData.heroSection.heading}
              </h1>
              <h4 className="max-w-[50rem] pt-5 text-xl leading-7 font-light lg:font-normal mb-1.5">
                {pageData.heroSection.description}
              </h4>
            </PageNavbar>
          </div>
        </div>
        <div className="mt-10 mb-12 lg:mt-12 pl-[7vw]">
          <Image
            className="hidden max-w-full rounded-l-full lg:block"
            width={1920}
            height={599}
            src={pageData.heroSection.images.desktop}
            alt="Digital ventures image"
          />
          <Image
            className="block max-w-full rounded-l-full lg:hidden"
            width={800}
            height={517}
            src={pageData.heroSection.images.mobile}
            alt="Digital ventures image"
          />
        </div>
        <h4 className="block max-w-[50rem] -mb-16 font-light text-xl pro-container lg:hidden">
          {pageData.heroSection.description}
        </h4>
      </section>
      <section className="mb-28">
        <div className="pro-container">
          <div className="flex flex-wrap -mb-[5%]">
            {pageData.pointers.map((data, index) => (
              <div key={data.heading} className="w-[42%] mr-[8%] mb-[5%]">
                <h3
                  className={twMerge(
                    "text-gray-400 dot  text-7xl font-bold mb-2.5",
                    data.color
                  )}
                >
                  {index + 1}
                </h3>
                <h4 className="text-3xl mb-2.5 text-gray-600 font-bold">
                  {data.heading}
                </h4>
                <p className="text-[#212529]">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <div className="pro-container mb-7">
          <h3 className={twMerge("dot",pageData.consultSection.styles.headingColor)}>{pageData.consultSection.heading}</h3>
          <h3 className={twMerge("dot",pageData.consultSection.styles.subHeadingColor)}>{pageData.consultSection.subHeading}</h3>
        </div>
        <div className="mb-28 pr-[7vw] lg:pr-[calc(7vw*_3)]">
          <div 
            className="rounded-r-full py-[7vw] text-white"
            style={{
              backgroundColor: pageData.consultSection.styles.backgroundColor
            }}
          >
            <div className="pro-container">
              <h3 className="mt-5">Get a Free Consultation</h3>
              <div>
                <form className="max-w-xl pt-7 lg:pt-12">
                  <div className="flex flex-wrap pr-12">
                    <div className="w-full lg:w-6/12 mb-5 pr-5">
                      <span data-name="email" className="relative block">
                        <input
                          size={40}
                          maxLength={400}
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Email"
                          type="email"
                          name="email"
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#dee2e6] placeholder:text-gray-800/75"
                        />
                      </span>
                    </div>
                    <div className="w-full lg:w-6/12 mb-5 pr-5">
                      <span data-name="Phone" className="relative block">
                        <input
                          size={40}
                          maxLength={400}
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Phone"
                          type="tel"
                          name="Phone"
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#dee2e6] placeholder:text-gray-800/75"
                        />
                      </span>
                    </div>
                    <div className="w-full lg:w-6/12 mb-5 pr-5">
                      <span data-name="Name" className="relative block">
                        <input
                          size={40}
                          maxLength={400}
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Name"
                          type="text"
                          name="Name"
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#dee2e6] placeholder:text-gray-800/75"
                        />
                      </span>
                    </div>
                    <div className="w-full lg:w-6/12 mb-5 pr-5">
                      <span data-name="CompanyName" className="relative block">
                        <input
                          size={40}
                          maxLength={400}
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Company Name"
                          type="text"
                          name="CompanyName"
                          className="bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#dee2e6] placeholder:text-gray-800/75"
                        />
                      </span>
                    </div>
                    <br />
                    <div className="w-6/12 mb-5 pr-5">
                      <button className="text-sm bg-white text-black rounded-full shadow-[0.1rem_0.2rem_0.5rem_rgba(0,0,0,0.15)] px-6 py-2.5 border-none custom-animation shift-to-right mt-5">
                        Go
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
