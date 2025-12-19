import bugTrackerImg from "../assets/Bugtrackerimage.jpg";
import shopmateImg from "../assets/shopmate.jfif";
import quizAppImg from "../assets/QuizApplication.png";

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  repo?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "BugTracker System",
    summary:
      "Full-stack bug tracking system with JWT authentication and role-based access (Admin, PM, Dev, QA, Reporter). It manages project and issue lifecycles with assignment, status updates, filtered dashboards, comments, attachments, audit logs, and email notifications (SMTP), built with Spring Boot + JPA and a responsive React frontend.",
    tags: ["Spring Boot", "RestAPI", "JPA", "SMTP", "React"],
    repo: "https://github.com/GayathriSubramani07/BugTracker_System",
    image: bugTrackerImg,
  },
  {
    title: "Shopmate",
    summary:
      "Developed Shopmate, an e-commerce platform enabling users to browse products, add items to the cart, place orders, view order history, and cancel orders. The site features seamless navigation and a user-friendly interface for an enhanced shopping experience.",
    tags: ["Java", "JDBC", "JSP", "MySQL", "Tomcat"],
    repo: "https://github.com/GayathriSubramani07/Shopmate",
    image: shopmateImg,
  },
  {
    title: "Quiz Application",
    summary:
      "Developed a Quiz Application using Java. The application includes features such as displaying rules, presenting questions, providing lifelines, and displaying results. Users enter and read the instructions and start the quiz; a lifeline can be used only once, and each question has a 15-second timer. Finally, the app displays the score and allows users to retake the quiz.",
    tags: ["Java"],
    repo: "https://github.com/GayathriSubramani07/QuizApplication",
    image: quizAppImg,
  },
];
