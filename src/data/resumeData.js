export const resumeData = {
    name: "Nandini Patel",
    title: "Software Engineer      & Data Scientist",
    shortBio: "Software engineer working at the intersection of data, systems and scale.",
    longBio: "I care about clarity, performance, and systems that hold up in production.",
    contact: {
        email: "[nandinipatel0204@gmail.com]",
        phone: "(870) 923-2213",
        linkedin: "https://www.linkedin.com/in/nandinipatel0204",
        github: "https://github.com/nandiniii2",
        resume: "/Nandini_Patel_Resume.pdf",
        website: "https://nandinipatel.vercel.app"
    },
    metrics: [
        { label: "Data Records Processed", value: "5.5M+" },
        { label: "Years Experience", value: "1+" },
        { label: "Production Apps", value: "4" }
    ],
    skills: {
        languages: ["Python", "C#", "Java", "SQL", "C++", "C", "JavaScript", "TypeScript", "R", "HTML", "CSS"],
        frameworks: ["React", "Angular", "Node.js", "ASP.NET", ".NET Core", "TensorFlow", "Keras"],
        databases: ["MySQL", "PostgreSQL", "MSSQL", "MongoDB", "Cassandra", "Neo4j"],
        tools: ["AWS (EC2, S3, QuickSight)", "Docker", "Git/GitHub", "PySpark", "Hadoop", "Snowflake", "Tableau", "CI/CD", "Pandas", "NumPy", "Seaborn", "pgAdmin"],
        core: ["Data Structures", "Algorithms", "System Design", "Machine Learning", "Database Management", "Data Analysis", "ETL", "Agile", "Forecasting"]
    },
    experience: [
        {
            role: "Independent Study",
            company: "Indiana University (Project 990)",
            location: "Bloomington, IN",
            date: "Jan 2026 - Present",
            bullets: [
                "Designed LLM-based feature engineering pipelines to extract structured information from 5K+ long-form documents utilized in grantmaking analysis.",
                "Developed and evaluated transformer-based NLP features using BERT, RoBERTa and LLMs to support organizational classification and comparison.",
                "Evaluated trade-offs between transformer-based architectures to balance accuracy, latency and computational cost.",
                "Applied LLM-assisted code generation and review generated outputs to identify logic gaps, edge cases and prompt-related issues."
            ]
        },
        {
            role: "Software Developer Intern",
            company: "MyEdMaster LLC",
            location: "Bloomington, IN",
            date: "Jun 2025 - Aug 2025",
            bullets: [
                "Engineered dashboard navigation for the 5 core modules using React.js, resulting in reduced user navigation from 5 clicks to 2 clicks per module switch.",
                "Implemented secure authentication and session management using JWT, enforcing role-based access control and secure credential handling across React.js, Python and MySQL.",
                "Refactored legacy modules into reusable modular components, improving maintainability and reducing development effort by 25% when adding new features.",
                "Built real-time search and chat functionality supporting 100+ daily user interactions, with focused optimizations to improve query and response performance."
            ]
        },
        {
            role: "Web Developer",
            company: "MobMaxime",
            location: "Gujarat, India",
            date: "Dec 2023 - Jul 2024",
            bullets: [
                "Led the development of 4 production web applications using ASP.NET and C#, emphasizing performance, reliability and maintainable backend design.",
                "Designed and deployed modular backend components, working closely with frontend and QA teams to achieve smoother releases and faster feature delivery.",
                "Participated in peer code reviews and used debugging tools and logs to systematically resolve integration issues and runtime defects, reducing last-minute delays by 30%.",
                "Promoted to a full-time Web Developer role within 6 months based on consistent performance and delivery during earlier internship responsibilities."
            ]
        },
        {
            role: "Web Developer Intern",
            company: "MobMaxime",
            location: "Gujarat, India",
            date: "Feb 2023 - May 2023",
            bullets: [
                "Designed adaptive web interfaces using ASP.NET and Angular, with emphasis on responsive design and smoother client-side interactions.",
                "Integrated SQL services with RESTful APIs to enable efficient data retrieval and application workflows.",
                "Used Entity Framework for database interactions and queries, increasing the overall efficiency of the database."
            ]
        },
        {
            role: "Data Analyst Intern",
            company: "IBM SkillsBuild",
            location: "Remote",
            date: "Feb 2023 - May 2023",
            bullets: [
                "Processed and analyzed 500K+ records with SQL and Python to support accurate and consistent reporting.",
                "Applied statistical analysis and regression techniques to identify key user behavior patterns, contributing to insights utilized in 3 business decisions scenarios.",
                "Streamlined data cleaning and preparation workflows, significantly reducing the time required to prepare datasets for analysis through automated Python validation scripts and standardized SQL query templates."
            ]
        },
        {
            role: "Frontend Developer Intern",
            company: "MobMaxime",
            location: "Gujarat, India",
            date: "Apr 2022 - Jun 2022",
            bullets: [
                "Implemented responsive user interfaces using Angular, with a focus on mobile-first design and cross-browser compatibility.",
                "Constructed reusable Angular components and contributed to a shared component library to maintain consistent design patterns across 5 internal projects.",
                "Optimized JavaScript and CSS performance by applying techniques such as lazy loading and code splitting."
            ]
        }
    ],
    education: [
        {
            degree: "MS in Computer Science",
            school: "Indiana University - Bloomington",
            date: "Aug 2024 - May 2026",
            gpa: "3.86/4.00"
        },
        {
            degree: "BE in Computer Engineering",
            school: "Gujarat Technological University",
            date: "Aug 2019 - Jun 2023",
            gpa: "9.37/10.00"
        }
    ],
    projects: [
        {
            title: "F1 Finish Tier Predictor",
            category: "Data Science",
            description: "Machine learning app predicting Formula 1 finish tiers using Random Forest and XGBoost with an interactive Streamlit UI.",
            tech: ["Python", "XGBoost", "Streamlit"],
            bullets: [
                "Conducted exploratory analysis on Formula 1 race, lap-time, and pit-stop data to identify performance patterns.",
                "Engineered race features (lap-time stats, pit-stop durations, grid position, circuits) and trained predictive models (Random Forest, XGBoost) to forecast finishing positions, evaluated with Mean Absolute Error.",
                "Designed an interactive Streamlit app where users can input race parameters that maps predictions into finish tiers (Top 3, 4–10, 11+) and visualizes class probabilities for interpretability."
            ]
        },
        {
            title: "COVID-19 Healthcare Analytics",
            category: "Data Engineering",
            description: "Distributed big data pipeline analyzing 5M+ COVID-19 patient records with real-time AWS QuickSight dashboards.",
            tech: ["PySpark", "AWS S3", "Hadoop"],
            bullets: [
                "Designed distributed data processing pipeline handling 5M+ records using PySpark and AWS, applying partitioning and compression strategies to reduce query response time under high-load scenarios.",
                "Integrated real-time telemetry dashboards using AWS QuickSight to monitor ICU occupancy, infection trends and system-level resource utilization.",
                "Architected predictive models and a scalable cloud architecture to support healthcare planning and forecasting use cases."
            ]
        },
        {
            title: "Readers Nest Library system",
            category: "Software Engineering",
            description: "Full-stack library management application with JWT auth and role-based access control.",
            tech: ["Angular", "ASP.NET Core", "SQL Server"],
            bullets: [
                "Built a full-stack library management application with Angular 15, ASP.NET Core and SQL Server, handling 1K+ records across books, users and categories.",
                "Applied JWT authentication and role-based access control for 2 user types, ensuring secure logins and compliance with data access policies.",
                "Optimized search and filtering logic using efficient data structures to improve query performance as dataset size increased.",
                "Optimized client-side rendering and routing to minimize unnecessary page reloads, improving page load responsiveness by 30% during normal user navigation."
            ]
        }
    ]
};
