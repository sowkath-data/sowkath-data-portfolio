import { ResumeData } from '../types';

export const RESUME_DATA: ResumeData = {
  name: "A. SOWKATH",
  title: "DATA ANALYST",
  phone: "8838623534",
  email: "sowkath.data@gmail.com",
  githubUrl: "https://github.com/sowkath-data",
  summary:
    "Information Technology graduate with hands-on experience in data analysis, business reporting, data validation, reconciliation, and MIS reporting using Microsoft Excel. Skilled in Python, SQL/MySQL, Excel, Power BI, Tableau, Pandas, NumPy, and basic Machine Learning and Data Science concepts. Experienced in data cleaning, preprocessing, exploratory data analysis, data visualization, and developing basic machine learning models. Strong interest in using data-driven insights to support business decisions and seeking an entry-level Data Analyst role.",
  
  experience: [
    {
      id: "exp-supreme-mobiles",
      role: "Junior Executive",
      company: "Supreme Mobiles",
      period: "Jul 2025 – Sep 2025",
      duration: "3 Months",
      responsibilities: [
        "Prepared and maintained daily and weekly business reports using Microsoft Excel.",
        "Used VLOOKUP, XLOOKUP, Pivot Tables, and Excel formulas for data analysis and reporting.",
        "Managed and updated data in company software systems.",
        "Performed data validation, reconciliation, and MIS reporting.",
        "Generated accurate reports and supported business decision-making through data analysis."
      ]
    }
  ],

  projects: [
    {
      id: "proj-employee-attrition",
      title: "Employee Attrition Prediction",
      badge: "Personal Project",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Power BI",
        "MySQL"
      ],
      techString: "Python | Pandas | NumPy | Scikit-learn | Power BI | MySQL",
      description:
        "Built a machine learning pipeline to predict employee attrition using the IBM HR Analytics dataset. Performed data cleaning, preprocessing, exploratory analysis, classification model comparison, employee risk-level classification, and MySQL data management.",
      highlights: [
        "Built a machine learning pipeline to predict employee attrition using the IBM HR Analytics dataset.",
        "Performed data cleaning, preprocessing, and exploratory analysis using Pandas and NumPy.",
        "Compared classification algorithms and selected the best model based on F1-score.",
        "Created employee risk-level classification and exported results for Power BI analysis.",
        "Stored project data using MySQL and published the project on GitHub."
      ],
      githubUrl: "https://github.com/sowkath-data/Employee-Attrition-Prediction"
    },
    {
      id: "proj-cloudera",
      title: "Cloud-Based Multimedia Content Protection System (CLOUDERA)",
      badge: "Academic Project",
      technologies: [
        "PHP",
        "MySQL",
        "Cloud Computing",
        "Web Application"
      ],
      techString: "PHP | MySQL | Cloud Computing | Web Application",
      description:
        "Developed a web-based system for secure storage and management of multimedia content using cloud-based technologies. Implemented user registration, authentication, file upload, and content management functionalities using PHP and MySQL. Designed the application to support secure and controlled access to uploaded multimedia content.",
      highlights: [
        "Developed a web-based system for secure storage and management of multimedia content using cloud-based technologies.",
        "Implemented user registration, authentication, file upload, and content management functionalities using PHP and MySQL.",
        "Designed the application to support secure and controlled access to uploaded multimedia content."
      ],
      githubUrl: "https://github.com/sowkath-data/CLOUDERA"
    }
  ],

  skillCategories: [
    {
      id: "python",
      category: "Python",
      iconName: "Code2",
      rawText: "Python Fundamentals, Conditional Statements (if/else), Loops, Functions, File Handling, Exception Handling, Object-Oriented Programming (OOP)",
      skills: [
        "Python Fundamentals",
        "Conditional Statements (if/else)",
        "Loops",
        "Functions",
        "File Handling",
        "Exception Handling",
        "Object-Oriented Programming (OOP)"
      ]
    },
    {
      id: "python-libraries",
      category: "Python Libraries",
      iconName: "Boxes",
      rawText: "Pandas, NumPy, Matplotlib, Scikit-learn",
      skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"]
    },
    {
      id: "data-analysis",
      category: "Data Analysis",
      iconName: "BarChart3",
      rawText: "Data Cleaning, Data Validation, Data Preprocessing, Exploratory Data Analysis (EDA), Data Visualization",
      skills: [
        "Data Cleaning",
        "Data Validation",
        "Data Preprocessing",
        "Exploratory Data Analysis (EDA)",
        "Data Visualization"
      ]
    },
    {
      id: "machine-learning",
      category: "Machine Learning",
      iconName: "Cpu",
      rawText: "Basic Machine Learning, Train-Test Split, Classification, Logistic Regression, Decision Tree, Random Forest, Model Evaluation, F1-Score",
      skills: [
        "Basic Machine Learning",
        "Train-Test Split",
        "Classification",
        "Logistic Regression",
        "Decision Tree",
        "Random Forest",
        "Model Evaluation",
        "F1-Score"
      ]
    },
    {
      id: "data-science",
      category: "Data Science",
      iconName: "Layers",
      rawText: "Basic Data Science Concepts, Data Preprocessing, Exploratory Data Analysis, Data Visualization, Basic Machine Learning",
      skills: [
        "Basic Data Science Concepts",
        "Data Preprocessing",
        "Exploratory Data Analysis",
        "Data Visualization",
        "Basic Machine Learning"
      ]
    },
    {
      id: "sql-database",
      category: "SQL & Database",
      iconName: "Database",
      rawText: "Basic SQL, MySQL, SELECT, WHERE, GROUP BY, ORDER BY, Aggregate Functions, Joins",
      skills: [
        "Basic SQL",
        "MySQL",
        "SELECT",
        "WHERE",
        "GROUP BY",
        "ORDER BY",
        "Aggregate Functions",
        "Joins"
      ]
    },
    {
      id: "excel",
      category: "Excel",
      iconName: "FileSpreadsheet",
      rawText: "Excel Formulas, IF, SUM, SUMIF, COUNT, COUNTIF, VLOOKUP, XLOOKUP, Pivot Tables, Sorting, Filtering, Conditional Formatting, Data Validation, Charts, Basic Data Cleaning",
      skills: [
        "Excel Formulas",
        "IF",
        "SUM",
        "SUMIF",
        "COUNT",
        "COUNTIF",
        "VLOOKUP",
        "XLOOKUP",
        "Pivot Tables",
        "Sorting",
        "Filtering",
        "Conditional Formatting",
        "Data Validation",
        "Charts",
        "Basic Data Cleaning"
      ]
    },
    {
      id: "business-intelligence",
      category: "Business Intelligence",
      iconName: "PieChart",
      rawText: "Basic Power BI, Basic Tableau, Power Query",
      skills: ["Basic Power BI", "Basic Tableau", "Power Query"]
    },
    {
      id: "tools",
      category: "Tools",
      iconName: "Terminal",
      rawText: "Jupyter Notebook, PyCharm, Git, GitHub",
      skills: ["Jupyter Notebook", "PyCharm", "Git", "GitHub"]
    }
  ],

  education: [
    {
      id: "edu-bsc",
      degree: "B.Sc. Information Technology",
      year: "2025",
      institution: "Nyruthi College of Arts and Science, Coimbatore"
    },
    {
      id: "edu-hsc",
      degree: "HSC",
      year: "2022",
      institution: "Bishop Ubagarasamy Higher Secondary School, Tirupur"
    },
    {
      id: "edu-sslc",
      degree: "SSLC",
      year: "2020",
      institution: "Bishop Ubagarasamy Higher Secondary School, Tirupur"
    }
  ],

  languages: ["Tamil", "English", "Urdu"]
};
